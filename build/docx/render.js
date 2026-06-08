// Renders the Individual Niche Assessment .docx (EN or CN) from prepared JSON.
// Usage: node render.js <en|cn> <output_path>
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, BorderStyle, ShadingType, AlignmentType, HeadingLevel,
  PageBreak, Header, Footer, PageNumber, TableOfContents, LevelFormat,
  TabStopType, TabStopPosition, Footnote, FootnoteReferenceRun, VerticalAlign
} = require("docx");

const LANG = (process.argv[2] || "en").toLowerCase();
const OUT = process.argv[3];
const D = path.join(__dirname, "data");
const niches = JSON.parse(fs.readFileSync(path.join(D, "niches.json"), "utf8"));
const EN = JSON.parse(fs.readFileSync(path.join(D, "english.json"), "utf8"));
const S = JSON.parse(fs.readFileSync(path.join(D, "sections.json"), "utf8"));
const T = JSON.parse(fs.readFileSync(path.join(D, "tables.json"), "utf8"));

const NAVY = "2B3544", ZEBRA = "F2F4F7", BORDER = "CCCCCC", GREY = "888888";
const byId = {}; niches.forEach(r => byId[r.niche_id] = r);
const LAYERS = ["L1","L2","L3","L4","L5","L6"];
const MODE_ORDER = { solo:0, micro_startup:1, employee:2 };
const MODE_LABEL = { solo:"Solo operator", micro_startup:"Micro-startup", employee:"Employee" };
const FONT = LANG === "cn" ? { ascii:"Arial", eastAsia:"Microsoft YaHei", hAnsi:"Arial" } : "Arial";
const L = (k) => k; // passthrough for fixed english labels

// ---------- run / paragraph helpers ----------
function run(text, o = {}) {
  return new TextRun({ text: String(text), font: FONT, size: o.size || 22,
    bold: !!o.bold, italics: !!o.italics, color: o.color || "000000" });
}
function para(children, o = {}) {
  return new Paragraph({
    children: Array.isArray(children) ? children : [children],
    alignment: o.align, spacing: o.spacing, pageBreakBefore: o.pageBreakBefore,
    heading: o.heading, numbering: o.numbering, tabStops: o.tabStops, style: o.style });
}
function gbpNum(v){ if (v===null||v===undefined||v===""||Number.isNaN(v)) return "n/f"; return "£"+Number(Math.round(v)).toLocaleString("en-GB"); }

// ---------- table cell ----------
function cell(children, o = {}) {
  return new TableCell({
    width: { size: o.w, type: WidthType.DXA },
    shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill, color: "auto" } : undefined,
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    verticalAlign: VerticalAlign.CENTER,
    children: Array.isArray(children) ? children : [children],
  });
}
function headCell(text, w, align) {
  return cell(para(run(text, { bold: true, color: "FFFFFF", size: 20 }), { align: align || AlignmentType.LEFT }), { w, fill: NAVY });
}
function bodyCell(nodes, w, o = {}) {
  const fill = o.zebra ? ZEBRA : undefined;
  return cell(nodes, { w, fill });
}
const TBORDERS = {
  top:{style:BorderStyle.SINGLE,size:1,color:BORDER}, bottom:{style:BorderStyle.SINGLE,size:1,color:BORDER},
  left:{style:BorderStyle.SINGLE,size:1,color:BORDER}, right:{style:BorderStyle.SINGLE,size:1,color:BORDER},
  insideHorizontal:{style:BorderStyle.SINGLE,size:1,color:BORDER}, insideVertical:{style:BorderStyle.SINGLE,size:1,color:BORDER}
};
function table(columnWidths, rows){
  return new Table({ width:{size:9026,type:WidthType.DXA}, columnWidths, borders:TBORDERS, rows });
}

// ---------- comparison table (header dark, numeric cols right) ----------
// cols: [{head, w, align('L'|'R'), key}]  rows: array of objects (string values)
function comparisonTable(cols, dataRows){
  const widths = cols.map(c=>c.w);
  const header = new TableRow({ tableHeader:true, children: cols.map(c=>headCell(c.head, c.w, c.align==='R'?AlignmentType.RIGHT:AlignmentType.LEFT)) });
  const rows = [header];
  dataRows.forEach((d,i)=>{
    const zebra = (i%2)===1;
    const cells = cols.map(c=>{
      const align = c.align==='R'?AlignmentType.RIGHT:AlignmentType.LEFT;
      return bodyCell(para(run(d[c.key]===undefined||d[c.key]===null?"":String(d[c.key]),{size:20}),{align}), c.w, {zebra});
    });
    rows.push(new TableRow({children:cells}));
  });
  return table(widths, rows);
}

// ---------- profile card ----------
function nameWithFlags(r, base){
  let s = base;
  if (r.niche_id.endsWith("-CN")) s += LANG==="cn" ? "(中国)" : " (China)";
  else if (r.niche_id.endsWith("-WEST")) s += LANG==="cn" ? "(西方)" : " (West)";
  if (String(r.crypto_relevant).toLowerCase()==="true") s += " [crypto]";
  return s;
}
function splitZh(s){ return String(s||"").split(/[;；]/).map(x=>x.trim()).filter(Boolean); }
function skillRuns(r){
  const e = EN[r.niche_id];
  let must, nice;
  if (LANG==="en"){ must=e.skills_must_en; nice=e.skills_nice_en; }
  else { must=splitZh(r.skills_must_have); nice=splitZh(r.skills_nice_to_have); }
  const runs=[ run(must.join(", "), {bold:true, size:20}) ];
  if (nice && nice.length){
    runs.push(run(LANG==="cn"? "  ｜加分: " : "   Nice-to-have: ", {size:20, color:GREY}));
    runs.push(run(nice.join(", "), {size:20}));
  }
  return runs;
}
function entryCostText(r){
  const mn=gbpNum(r.entry_cost_money_min_gbp), cf=gbpNum(r.entry_cost_money_comfortable_gbp);
  const t = LANG==="en"? EN[r.niche_id].entry_time_en : r.entry_cost_time;
  const money = (mn===cf)? mn : (mn+" – "+cf);
  return money + "; " + t;
}
function revenueText(r){
  const src = LANG==="en"? EN[r.niche_id].revenue_src_en : r.revenue_source;
  const fl=gbpNum(r.revenue_floor_gbp), cl=gbpNum(r.revenue_ceiling_gbp);
  const per = LANG==="cn"? "/年" : " /yr";
  return src + "; " + fl + " – " + cl + per;
}
function profileCard(r){
  const e = EN[r.niche_id];
  const lab = S.labels;
  const w1=2200, w2=6826;
  const rowsDef = [
    [lab.niche, [run(nameWithFlags(r, LANG==="en"? e.name_en : r.niche_name), {bold:true, size:21})]],
    [lab.mode,  [run(MODE_LABEL[r.mode], {size:20})]],
    [lab.do,    [run(LANG==="en"? e.do_en : r.description, {size:20})]],
    [lab.anchors,[run(r.anchor_companies, {size:20})]],
    [lab.skills, skillRuns(r)],
    [lab.week,  [run(LANG==="en"? e.week_en : r.daily_work, {size:20})]],
    [lab.entry_cost,[run(entryCostText(r), {size:20})]],
    [lab.barrier,[run(LANG==="en"? e.barrier_en : r.entry_barrier, {size:20})]],
    [lab.revenue,[run(revenueText(r), {size:20})]],
    [lab.window,[run(r.time_window, {size:20})]],
    [lab.risk,  [run(LANG==="en"? e.risk_en : r.risk_factors, {size:20})]],
    [lab.next,  [run(LANG==="en"? e.next_en : r.upward_path, {size:20})]],
  ];
  const rows = rowsDef.map((rd,i)=>{
    const zebra=(i%2)===1;
    return new TableRow({children:[
      bodyCell(para(run(rd[0], {bold:true, size:20}), {align:AlignmentType.LEFT}), w1, {zebra:true}),
      bodyCell(para(rd[1], {align:AlignmentType.LEFT}), w2, {zebra}),
    ]});
  });
  return table([w1,w2], rows);
}

// ---------- build body content ----------
const body = [];

// Contents title + TOC
body.push(new Paragraph({ children:[run(S.section_titles.toc, {bold:true, size:28})], spacing:{after:160} }));
body.push(new TableOfContents("Table of Contents", { hyperlink:true, headingStyleRange:"1-2" }));
body.push(new Paragraph({ children:[new PageBreak()] }));

// Section 1 Key Findings
body.push(para(run(S.section_titles.s1), {heading:HeadingLevel.HEADING_1}));
const kf = S.key_findings[LANG];
kf.forEach((f,i)=>{
  const children=[run(f, {size:22})];
  if ((i+1)===S.footnote_on_finding){ children.push(new FootnoteReferenceRun(1)); }
  body.push(new Paragraph({ numbering:{reference:"bullets",level:0}, children }));
});

// Section 2 How to Read
body.push(para(run(S.section_titles.s2), {heading:HeadingLevel.HEADING_1, pageBreakBefore:true}));
body.push(para(run(S.how_to_read[LANG], {size:22}), {spacing:{after:120}}));
body.push(para(run(LANG==="cn"?"三种参与模式":"Participation modes", {bold:true, size:24}), {spacing:{before:80,after:60}}));
["solo","micro_startup","employee"].forEach(m=> body.push(para(run(S.modes[m][LANG], {size:22}), {spacing:{after:40}})));
body.push(para(run(LANG==="cn"?"六层":"The six layers", {bold:true, size:24}), {spacing:{before:120,after:60}}));
LAYERS.forEach(Lk=> body.push(para(run(S.layer_defs[Lk][LANG], {size:22}), {spacing:{after:40}})));
// distribution matrix 6x3
body.push(para(run(LANG==="cn"?"分布矩阵 (层 × 模式)":"Distribution matrix (layer × mode)", {bold:true, size:22}), {spacing:{before:140,after:60}}));
const mat={}; LAYERS.forEach(Lk=>mat[Lk]={solo:0,micro_startup:0,employee:0});
niches.forEach(r=>mat[r.layer][r.mode]++);
const mcols=[{head:"Layer",w:2426,align:'L',key:'layer'},{head:"Solo",w:1650,align:'R',key:'solo'},
 {head:"Micro-startup",w:1650,align:'R',key:'micro'},{head:"Employee",w:1650,align:'R',key:'emp'},{head:"Total",w:1650,align:'R',key:'tot'}];
const mrows=LAYERS.map(Lk=>({layer:Lk,solo:mat[Lk].solo,micro:mat[Lk].micro_startup,emp:mat[Lk].employee,tot:mat[Lk].solo+mat[Lk].micro_startup+mat[Lk].employee}));
mrows.push({layer:"Total",solo:23,micro:19,emp:22,tot:64});
body.push(comparisonTable(mcols,mrows));

// Section 3 Niche Catalogue
body.push(para(run(S.section_titles.s3), {heading:HeadingLevel.HEADING_1, pageBreakBefore:true}));
LAYERS.forEach((Lk,li)=>{
  body.push(para(run(S.subsection_titles[Lk]), {heading:HeadingLevel.HEADING_2, pageBreakBefore: li>0}));
  S.layer_intros[Lk][LANG].forEach(sent=> body.push(para(run(sent,{size:22}),{spacing:{after:40}})));
  body.push(para(run("",{size:8}),{spacing:{after:40}}));
  const sub = niches.filter(r=>r.layer===Lk).sort((a,b)=> (MODE_ORDER[a.mode]-MODE_ORDER[b.mode]) || a.niche_id.localeCompare(b.niche_id));
  sub.forEach(r=>{
    const title = r.niche_id + "  —  " + nameWithFlags(r, LANG==="en"? EN[r.niche_id].name_en : r.niche_name);
    body.push(para(run(title,{bold:true,size:22,color:NAVY}),{spacing:{before:160,after:60}}));
    body.push(profileCard(r));
  });
});

// Section 4 Comparison Tables
body.push(para(run(S.section_titles.s4), {heading:HeadingLevel.HEADING_1, pageBreakBefore:true}));
// 4.1 revenue ceiling
body.push(para(run(S.table_titles.t41), {heading:HeadingLevel.HEADING_2}));
{
  const cols=[{head:"Rank",w:760,align:'R',key:'rank'},{head:"Niche",w:3600,align:'L',key:'name'},
   {head:"Layer",w:900,align:'L',key:'layer'},{head:"Mode",w:1500,align:'L',key:'mode'},
   {head:"Ceiling (£/yr)",w:1466,align:'R',key:'ceiling'},{head:"Revenue source",w:800,align:'L',key:'src'}];
  const rows=T.rev_ceiling.map(d=>({rank:d.rank,name:LANG==="en"?d.name_en:d.name_zh,layer:d.layer,mode:d.mode,ceiling:d.ceiling,src:LANG==="en"?d.src_en:d.src_zh}));
  // widen source: rebalance -> name 3200, src 1200
  cols[1].w=3200; cols[5].w=1200;
  body.push(comparisonTable(cols,rows));
}
// 4.2 entry cost
body.push(para(run(S.table_titles.t42), {heading:HeadingLevel.HEADING_2, pageBreakBefore:true}));
{
  const cols=[{head:"Rank",w:760,align:'R',key:'rank'},{head:"Niche",w:3200,align:'L',key:'name'},
   {head:"Layer",w:900,align:'L',key:'layer'},{head:"Mode",w:1500,align:'L',key:'mode'},
   {head:"Min entry (£)",w:1300,align:'R',key:'min'},{head:"Time to first £",w:1366,align:'L',key:'time'}];
  const rows=T.entry_cost.map(d=>({rank:d.rank,name:LANG==="en"?d.name_en:d.name_zh,layer:d.layer,mode:d.mode,min:d.min,time:LANG==="en"?d.time_en:d.time_zh}));
  body.push(comparisonTable(cols,rows));
}
// 4.3 mode comparison
body.push(para(run(S.table_titles.t43), {heading:HeadingLevel.HEADING_2, pageBreakBefore:true}));
{
  const cols=[{head:"Mode",w:1826,align:'L',key:'mode'},{head:"Count",w:1100,align:'R',key:'count'},
   {head:"Median entry",w:1500,align:'R',key:'med_entry'},{head:"Median floor",w:1500,align:'R',key:'med_floor'},
   {head:"Median ceiling",w:1600,align:'R',key:'med_ceil'},{head:"Top layer",w:1500,align:'L',key:'top_layer'}];
  body.push(comparisonTable(cols,T.mode_cmp));
}
// 4.4 time window
body.push(para(run(S.table_titles.t44), {heading:HeadingLevel.HEADING_2, pageBreakBefore:true}));
{
  const cols=[{head:"Window",w:1500,align:'L',key:'win'},{head:"Layer",w:900,align:'L',key:'layer'},
   {head:"Niche",w:4626,align:'L',key:'name'},{head:"Mode",w:2000,align:'L',key:'mode'}];
  const rows=[];
  [["now","now"],["6-12mo","6-12mo"]].forEach(([w,label])=>{
    T.time_window[w].forEach((d,idx)=> rows.push({win: idx===0?label:"", layer:d.layer, name:LANG==="en"?d.name_en:d.name_zh, mode:d.mode}));
  });
  body.push(comparisonTable(cols,rows));
}

// Section 5 Risk Matrix
body.push(para(run(S.section_titles.s5), {heading:HeadingLevel.HEADING_1, pageBreakBefore:true}));
{
  const cols=[{head:"Layer",w:1100,align:'L',key:'layer'},{head:"Niches",w:900,align:'R',key:'count'},
   {head:"Primary risk",w:3513,align:'L',key:'risk'},{head:"Trigger",w:3513,align:'L',key:'trigger'}];
  const rows=LAYERS.map(Lk=>({layer:Lk, count:mat[Lk].solo+mat[Lk].micro_startup+mat[Lk].employee,
    risk:LANG==="en"?S.risk_matrix[Lk].risk_en:S.risk_matrix[Lk].risk_cn,
    trigger:LANG==="en"?S.risk_matrix[Lk].trigger_en:S.risk_matrix[Lk].trigger_cn}));
  body.push(comparisonTable(cols,rows));
}

// ---------- cover ----------
const cover = [
  new Paragraph({ alignment:AlignmentType.CENTER, spacing:{before:2600,after:200},
    children:[run(S.cover.title, {bold:true, size:40})] }),
  new Paragraph({ alignment:AlignmentType.CENTER, spacing:{after:120},
    children:[run(S.cover.subtitle, {size:26, color:"555555"})] }),
  new Paragraph({ alignment:AlignmentType.CENTER, spacing:{before:2400, after:80},
    children:[run(S.cover.date, {size:24})] }),
  new Paragraph({ alignment:AlignmentType.CENTER,
    children:[run(S.cover.tag, {bold:true, size:24, color:"B00020"})] }),
];

// ---------- header / footer ----------
const header = new Header({ children:[ new Paragraph({
  tabStops:[{type:TabStopType.RIGHT, position:9026}],
  children:[ run("CONFIDENTIAL",{size:16,color:GREY}), new TextRun({text:"\t",font:FONT}),
             run("AI × Robotics: Individual Niche Assessment",{size:16,color:GREY}) ] }) ] });
const footer = new Footer({ children:[ new Paragraph({ alignment:AlignmentType.CENTER,
  children:[ new TextRun({ children:[PageNumber.CURRENT], font:FONT, size:16, color:GREY }) ] }) ] });

const A4 = { width:11906, height:16838 };
const MARGIN = { top:1440, right:1440, bottom:1440, left:1440 };

const doc = new Document({
  features:{ updateFields:true },
  styles:{
    default:{ document:{ run:{ font:FONT, size:22, color:"000000" } } },
    paragraphStyles:[
      { id:"Heading1", name:"Heading 1", basedOn:"Normal", next:"Normal", quickFormat:true,
        run:{ font:FONT, size:28, bold:true, color:"1A2230" }, paragraph:{ spacing:{before:240,after:120} } },
      { id:"Heading2", name:"Heading 2", basedOn:"Normal", next:"Normal", quickFormat:true,
        run:{ font:FONT, size:24, bold:true, color:"1A2230" }, paragraph:{ spacing:{before:200,after:100} } },
      { id:"Heading3", name:"Heading 3", basedOn:"Normal", next:"Normal", quickFormat:true,
        run:{ font:FONT, size:22, bold:true, color:"1A2230" }, paragraph:{ spacing:{before:160,after:80} } },
    ],
  },
  numbering:{ config:[ { reference:"bullets", levels:[
    { level:0, format:LevelFormat.BULLET, text:"•", alignment:AlignmentType.LEFT,
      style:{ paragraphProperties:{ indent:{ left:360, hanging:260 } } } } ] } ] },
  footnotes:{ 1:{ children:[ new Paragraph({ children:[ run(S.gbp_footnote, {size:18}) ] }) ] } },
  sections:[
    { properties:{ page:{ size:A4, margin:MARGIN } }, children: cover },
    { properties:{ page:{ size:A4, margin:MARGIN } },
      headers:{ default:header }, footers:{ default:footer }, children: body },
  ],
});

Packer.toBuffer(doc).then(buf=>{
  fs.writeFileSync(OUT, buf);
  console.log("wrote", OUT, buf.length, "bytes; lang", LANG);
});
