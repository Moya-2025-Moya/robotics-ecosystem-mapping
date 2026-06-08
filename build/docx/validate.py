# -*- coding: utf-8 -*-
"""Validate the rendered .docx: parse, structure, style checks, page-1..3 description."""
import sys, re, zipfile
from docx import Document
from docx.shared import Twips

BANNED=["leverage","utilize","cutting-edge","cutting edge","state-of-the-art","state of the art",
"comprehensive","robust","holistic","paradigm","synergy","ecosystem play","unlock value","deep dive"]

def words(s): return re.findall(r"[A-Za-z][A-Za-z'\-]*", s)

def check(path):
    print("="*70); print("FILE:", path)
    # 1. opens / valid zip
    try:
        d=Document(path)
    except Exception as e:
        print("  PARSE ERROR:", e); return False
    # zip integrity
    bad=zipfile.ZipFile(path).testzip()
    print("  zip integrity:", "OK" if bad is None else ("BAD "+str(bad)))
    paras=d.paragraphs
    tables=d.tables
    print("  paragraphs:", len(paras), "| tables:", len(tables), "| sections:", len(d.sections))
    # sections page setup
    for i,sec in enumerate(d.sections):
        print(f"  section[{i}] size {int(sec.page_width.twips)}x{int(sec.page_height.twips)} "
              f"margins T{int(sec.top_margin.twips)} R{int(sec.right_margin.twips)} "
              f"B{int(sec.bottom_margin.twips)} L{int(sec.left_margin.twips)} | "
              f"header_linked={sec.header.is_linked_to_previous} footer_linked={sec.footer.is_linked_to_previous}")
    # headings present (Heading 1/2)
    h1=[p.text for p in paras if p.style and p.style.name=="Heading 1"]
    h2=[p.text for p in paras if p.style and p.style.name=="Heading 2"]
    print("  Heading1 ({}):".format(len(h1)), h1)
    print("  Heading2 ({}):".format(len(h2)))
    for t in h2: print("      -", t)
    # TOC field presence
    xml=d.element.body.xml
    print("  TOC field present:", "TOC" in xml and 'fldChar' in xml)
    print("  footnote ref present:", "footnoteReference" in xml)
    # whole-text style checks
    alltext="\n".join(p.text for p in paras)
    for t in tables:
        for row in t.rows:
            for c in row.cells:
                alltext+="\n"+c.text
    low=alltext.lower()
    hits=[b for b in BANNED if b in low]
    print("  banned-word hits:", hits if hits else "NONE")
    # sentence length >25 (latin only; skip CJK lines)
    longs=0; worst=None
    for line in alltext.split("\n"):
        if re.search(r"[一-鿿]", line): continue
        for s in re.split(r"(?<=[.!?;])\s+", line.strip()):
            wc=len(words(s))
            if wc>25:
                longs+=1
                if not worst or wc>worst[0]: worst=(wc,s)
    print("  latin sentences >25 words:", longs, ("| worst: %d => %s"%(worst[0],worst[1][:90]) if worst else ""))
    # table sanity: header fill + first profile card
    print("  total tables:", len(tables), "(expect 1 matrix + 64 cards + 5 comparison = 70)")
    # describe page 1..3 (approx: cover section + start of body)
    print("  --- COVER (section 0 content) ---")
    # cover paragraphs are first paragraphs before first Heading1
    cov=[]
    for p in paras:
        if p.style and p.style.name=="Heading 1": break
        if p.text.strip(): cov.append(p.text.strip())
    for c in cov[:8]: print("     |", c)
    print("  --- first Heading1 (Section 1) ---")
    print("     |", h1[0] if h1 else "MISSING")
    # first few key-finding bullets
    started=False; n=0
    for p in paras:
        if p.style and p.style.name=="Heading 1" and p.text.strip().startswith("1"):
            started=True; continue
        if started:
            if p.style and p.style.name=="Heading 1": break
            if p.text.strip():
                print("     • ", p.text.strip()[:110]); n+=1
            if n>=3: break
    return not hits

ok=True
for p in sys.argv[1:]:
    ok = check(p) and ok
print("="*70)
print("RESULT:", "PASS" if ok else "FAIL (banned words present)")
