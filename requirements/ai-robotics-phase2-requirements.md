# AI × Robotics Ecosystem — Phase 2 Requirements

## Objective

Enrich all 286 census entries with four new analytical fields, then produce a single readable report that Zian can scan in one sitting to understand every layer, every company, and every cross-layer dynamic.

---

## Step 1: Data Enrichment

### 1.1 New Fields

Add four columns to `ai_robotics_census_phase1.csv`, after `notes`:

| Column | Type | Description | Max length |
|---|---|---|---|
| business_model | string | How the company makes money. Be specific: "sells robot hardware to warehouses at $X per unit" not "B2B SaaS". If pre-revenue, state what the intended model is. | 2 sentences |
| customers | string | Who is paying or piloting. Named companies/orgs if findable. If no named customers public, write "undisclosed" not a guess. | 1-2 sentences |
| revenue_status | string | One of: `pre-revenue`, `early-revenue` (has some revenue but not scaled), `scaling` (growing revenue, repeat customers), `profitable`, `undisclosed`. If a specific revenue figure is publicly known, include it in parentheses. | 1 word + optional parenthetical |
| technical_differentiation | string | What makes this company different from others in the same layer. Compare to the closest 1-2 competitors by name if possible. If no clear differentiation, say "undifferentiated — competing on execution/capital". | 2 sentences |

### 1.2 Enrichment Rules

- Source priority: company website > recent press/news > Crunchbase/PitchBook > third-party estimates (getLatka etc, mark "unverified")
- If a field genuinely cannot be filled from public sources, write "not publicly disclosed" — do NOT invent
- For `entity_type: academic` or `open_source_project` entries, `business_model` = "N/A (research/open-source)", `revenue_status` = "N/A"
- For `entity_type: nonprofit` entries, `business_model` should describe how they're funded (grants, sponsorships, etc.)
- For `status: shut_down` or `acqui-hired`, fill fields based on what was true before shutdown/acquisition

### 1.3 Enrichment Execution

Process by layer, in this order: L1, L4, L3, L2, L5, L6. This order front-loads the layers with the most companies and the most analytical value.

⛔ **CHECKPOINT (after L1 + L4 enrichment complete):** Submit enriched CSV with L1 and L4 fields filled. Zian reviews field quality before QA continues to remaining layers. This is a quality gate, not a full review — expect turnaround within hours, not days.

### 1.4 Time Estimate

- 286 entries × ~8 min average per entry = ~38 hours
- L1 (~38 entries) + L4 (~90 entries): ~17 hours → checkpoint
- L3 (~51) + L2 (~28) + L5 (~27) + L6 (~52): ~21 hours → completion

---

## Step 2: Report Generation

After enrichment is complete and approved, produce a single Markdown report.

### 2.1 Report Structure

**Title:** AI × Robotics Ecosystem Map — June 2026

**Part 1: Ecosystem Overview** (~2 pages)

One section covering:
- Total companies by layer (bar or table)
- Total funding by layer
- Geographic distribution (US vs CN vs rest)
- Founded-year distribution (when did each layer start forming?)
- Capital velocity: quarterly funding trend from GATE 3 data
- Top 10 most-funded companies across all layers
- Key takeaway: 3-5 bullet points summarizing the state of the ecosystem

**Part 2: Layer-by-Layer Breakdown** (~3-5 pages per layer, 7 layers = 21-35 pages)

Each layer section contains:

**2a. Market Structure Analysis** (~0.5-1 page prose)
- How many companies, what's the concentration (top 3 share of funding vs rest)
- Entry barrier assessment: what does it take to start a company in this layer (capital, talent, IP)
- Is this layer expanding (new entrants accelerating) or consolidating (M&A, shutdowns)
- Where the money is coming from (VC vs strategic vs government)
- Bottleneck: what is the scarcest resource in this layer right now

**2b. Company Table** (all companies in this layer)

Rendered as a readable table, sorted by `total_funding_usd` descending. Columns:

| Company | HQ | Founded | Funding | Revenue Status | What they do (one-liner) | Business Model | Customers | Technical Differentiation |
|---|---|---|---|---|---|---|---|---|

For layers with >20 companies, split into two sub-tables: "Funded companies" (has disclosed funding) and "Early-stage / undisclosed funding" to keep the top of each table focused.

**2c. Layer Key Questions** (~0.5-1 page prose)
- 3-5 analytical questions specific to this layer, answered using the enriched data
- Examples for L1: "Is this winner-take-all or fragmented? Do the top 3 companies' models generalize better than the rest?"
- Examples for L3: "Is the bottleneck supply (not enough data collectors) or demand (not enough buyers)? Who has actual paying customers?"
- Examples for L4: "Is there a price floor for humanoid hardware? Are Chinese companies winning on cost?"
- Each question gets a 2-3 sentence answer grounded in the data

**Part 3: Cross-Layer Analysis** (~3-5 pages)

- **Value chain map:** Who supplies whom? (L3 feeds L1, L2 feeds L1, L1 feeds L4/L6, etc.)
- **Where value accrues:** Which layer captures the most margin? Use revenue_status distribution as a proxy
- **Investor convergence:** Which investors span multiple layers, and what does their portfolio reveal about their thesis?
- **Falsification tests:** For each layer, one sentence: "This layer collapses if ___"
- **The 5 biggest open questions** in AI × Robotics right now, derived from the data

**Appendix A: Full Census Table** (all 286 entries, all columns, for reference)

**Appendix B: Capital Map** (top 20 rounds, top 15 investors, quarterly totals — reformatted from GATE 3 CSVs into readable tables)

**Appendix C: Excluded Companies** (11 entries with reasons, for completeness)

### 2.2 Report Style Rules

- No fluff. Every sentence should contain information Zian doesn't already know
- Data-forward: lead with numbers, then interpret
- When stating an opinion or interpretation, flag it as such ("This suggests..." not "This is...")
- Chinese company names: include both English and Chinese (e.g., "Galbot (银河通用)")
- Funding figures: always USD, note where converted from RMB/EUR
- Do NOT pad sections to reach a page count. If a layer has 5 companies and a simple structure, the section can be half a page

### 2.3 Report Delivery

Output as a single `.md` file: `ai_robotics_ecosystem_report_june2026.md`

Also output the final enriched CSV as: `ai_robotics_census_enriched.csv`

---

## GATE Schedule

| Gate | Trigger | Deliverable |
|---|---|---|
| Checkpoint | L1 + L4 enrichment done | Updated CSV (L1+L4 fields filled) |
| Phase 2 Complete | All enrichment done + report written | `ai_robotics_ecosystem_report_june2026.md` + `ai_robotics_census_enriched.csv` |

---

## Termination Conditions

**Phase 2 complete if:**
- All 286 entries have all 4 new fields filled (or explicitly marked "not publicly disclosed")
- Report covers all 7 layers with the structure defined above
- Zian approves at final review

**Request rework if:**
- >15% of entries have "not publicly disclosed" across all 4 fields (suggests insufficient research effort)
- Report sections are padded with filler rather than analytical content
- Company tables are missing or unsorted
