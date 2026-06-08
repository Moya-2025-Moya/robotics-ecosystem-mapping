# AI × Robotics Ecosystem Census — Phase 1 Requirements

## 1. Objective

Map every company operating at the intersection of AI and robotics into a structured census. The output is a comprehensive list of companies across 7 layers of the value chain, each with basic identification data and a one-sentence description. This census serves as the foundation for deeper analysis in Phase 2 (full profile cards) and Phase 3 (cross-layer analysis and market validation).

**Scope definition:** A company qualifies for inclusion if it has at least one product, service, or active research effort that applies machine learning (broadly: imitation learning, reinforcement learning, foundation models, computer vision, LLM-based planning, etc.) to physical robots (manipulators, humanoids, mobile robots, drones operating in physical space, surgical robots, agricultural robots). Traditional industrial automation (pre-programmed trajectories, no learning) is excluded. Pure-software AI companies with no robotics application are excluded.

**Inclusion rule for large companies:** If a large company (NVIDIA, Google, Amazon, Apple, Tesla, etc.) has a dedicated robotics AI division, product line, or major research lab, include it as an entry but tag it as `core_or_division: division`. Pure-play AI robotics companies are tagged `core_or_division: core`.

---

## 2. Baseline & Judgment Criteria

**Completeness target:** The census should capture ≥80% of companies that have received ≥$1M in funding OR have published ≥2 peer-reviewed papers (ICRA, CoRL, RSS, NeurIPS, ICLR) in AI robotics in the past 3 years OR have a commercially available product. This is a soft target — QA should flag if they believe coverage is significantly incomplete for any layer.

**Minimum counts per layer (expected, not hard floor):**
- Layer 1 (Foundation Models): 10-20 companies/labs
- Layer 2 (Simulation & Sim-to-Real): 10-15
- Layer 3 (Data Infrastructure): 10-20
- Layer 4 (AI-Native Hardware): 20-35
- Layer 5 (Software Stack & Middleware): 10-20
- Layer 6 (Vertical Deployments): 30-50
- Layer 7 (Capital Map): this is an overlay, not a company list — see Section 3

If any layer comes in significantly below these ranges, QA should note what searches were attempted and why results were thin. This is a signal, not a failure.

**Quality threshold:** Every entry must have a verifiable source (URL) for at least: company name, founding year (±1 year acceptable), and what the company does. If any of these three cannot be sourced, the entry is tagged `verification: incomplete` and included anyway (do not discard — Phase 2 will handle verification).

---

## 3. Experiment Design

### 3.1 Layer Definitions

**Layer 1: Robot Foundation Models**
Companies/labs building general-purpose AI models that take sensory input (vision, proprioception, language) and output robot actions. Includes: VLA (vision-language-action) models, diffusion policy models, world models / video prediction for robotics, large-scale multi-task robot policies. Key technical keywords: imitation learning, behavior cloning, diffusion policy, VLA, RT-2, action chunking, world model, video prediction, robot foundation model.

**Layer 2: Simulation & Sim-to-Real**
Companies building simulation environments, physics engines, synthetic data generation, digital twin platforms, and sim-to-real transfer tools specifically for robot learning. Includes: robot-specific sim platforms, domain randomization tools, procedural scene generation, sim-to-real benchmarks. Key technical keywords: Isaac Sim, MuJoCo, Gazebo, sim-to-real, domain randomization, digital twin, physics simulation, synthetic data for robotics.

**Layer 3: Data Infrastructure**
Companies providing data collection systems, teleoperation platforms, data marketplaces, and robotics-specific annotation/labeling services. The core question this layer addresses: how does high-quality physical-world demonstration data get produced and distributed at scale? Key technical keywords: teleoperation, demonstration data, robot data marketplace, ALOHA, data collection platform, robot annotation, human-in-the-loop data, motion capture for robots.

**Layer 4: AI-Native Hardware**
Companies building physical robots (full systems or critical subsystems) designed to be controlled by learned AI policies rather than pre-programmed trajectories. Includes: humanoids, dexterous hands, low-cost research arms, AI-optimized sensor suites, novel actuators designed for compliant/safe AI control. Excludes: traditional industrial robots that are primarily pre-programmed (e.g., legacy FANUC, ABB product lines that predate AI integration). Key technical keywords: humanoid robot, dexterous manipulation, soft robotics, compliant actuator, tactile sensor, low-cost robot arm, research robot platform.

**Layer 5: Software Stack & Middleware**
Companies building the software layer between "trained policy" and "robot executing in the real world." Includes: robot learning frameworks, edge inference for robotics, fleet orchestration, ROS2 AI-native tooling, robot observability/monitoring, safety runtime layers. Key technical keywords: LeRobot, robosuite, robot deployment, edge inference, fleet management, ROS2, robot operating system, robot monitoring, safety layer.

**Layer 6: Vertical Deployments**
Companies deploying AI-powered robots to solve specific real-world problems in a defined vertical. Sub-categories:
- 6a: Warehouse & Logistics (picking, packing, sorting, AMR)
- 6b: Manufacturing (assembly, quality inspection, flexible manufacturing)
- 6c: Food Service (cooking, food prep, serving)
- 6d: Agriculture (harvesting, weeding, monitoring)
- 6e: Surgical & Healthcare (surgical robots with AI, rehab, elder care)
- 6f: Home & Consumer (home robots, personal robots)
- 6g: Construction (autonomous construction equipment, inspection drones)
- 6h: Other (any vertical not covered above — specify what it is)

**Layer 7: Capital Map (overlay, not a company list)**
This layer is structured differently. Instead of listing companies, QA produces:
- A list of the 20 largest funding rounds in AI × Robotics in the past 24 months (June 2024 – June 2026), with: company name, round size, lead investor(s), date, which layer the company belongs to.
- A list of the 15 most active investors in AI × Robotics (by deal count in past 24 months), with: investor name, number of AI robotics deals, notable portfolio companies, whether they are VC / CVC / sovereign / strategic.
- Total funding into AI × Robotics by quarter for Q1 2024 – Q1 2026 (or latest available), by layer if possible.

Source for Layer 7: Crunchbase, PitchBook (if QA has access), CB Insights, or recent industry reports (cite which report).

### 3.2 Search Strategy

QA should use the following sources, in this priority order, for each layer:

**Primary sources (must check all):**
1. Crunchbase — search by industry tags: "robotics", "artificial intelligence", "autonomous vehicles", "humanoid robot", "industrial automation" (filter by companies using AI)
2. YC company directory — filter by "Robotics", "AI", hardware-related tags, batches W2023 through S2026
3. Recent industry reports — search for "AI robotics market map 2025" or "AI robotics landscape 2026" from sources like: PitchBook, CB Insights, Stanford HAI AI Index, IFR (International Federation of Robotics), McKinsey
4. Conference proceedings — ICRA 2025/2026, CoRL 2025, RSS 2025 author affiliations (companies, not just universities)

**Secondary sources (check if primary yields thin results for a layer):**
5. Hiring platforms — search "robotics machine learning" on LinkedIn Jobs, identify companies with ≥3 open roles in this intersection
6. GitHub / HuggingFace — popular robotics AI repos, check the org behind them
7. Product Hunt / TechCrunch — recent launches tagged robotics + AI
8. 36Kr, 机器之心 (Jiqizhixin) — for China-based companies specifically
9. arXiv — search "robot learning" or "embodied AI" papers from past 12 months, extract company affiliations from author list

**Search queries to run (QA must run all, can add more):**
- "AI robotics startup funding 2025 2026"
- "robot foundation model company"
- "humanoid robot startup"
- "robot teleoperation data company"
- "sim to real robotics company"
- "AI robot manipulation startup"
- "embodied AI company"
- "robotics AI market map"
- "robot learning framework"
- "warehouse picking robot AI"
- "surgical robot AI startup"
- "agricultural robot AI"
- "humanoid robot China" / "人形机器人 公司"
- "robot data collection platform"
- "robot simulation platform"
- "AI robotics YC batch"

### 3.3 Deduplication Rules

- If a company appears in multiple layers, include it in the PRIMARY layer (where it generates or will generate most revenue) and list secondary layers in the `secondary_layers` field.
- Example: Physical Intelligence builds foundation models (Layer 1) but also does data collection (Layer 3). Primary = Layer 1, secondary = Layer 3.
- If genuinely ambiguous, list in both layers with a cross-reference note.

### 3.4 Geographic Tagging

For each company, tag `hq_country`. Do NOT separate the research by geography — all companies go into the same layer structure. Geography is a filterable attribute, not an organizing principle.

---

## 4. Output File Specification

### 4.1 Main Census File

**Filename:** `ai_robotics_census_phase1.csv`

**Columns (exact names, this order):**

| Column Name | Type | Description |
|---|---|---|
| company_name | string | Official company name |
| also_known_as | string | Alternative names, abbreviations (comma-separated). Leave blank if none. |
| hq_city | string | Headquarters city |
| hq_country | string | Headquarters country (2-letter ISO code: US, CN, GB, DE, JP, KR, etc.) |
| founded_year | integer | Year founded. "unknown" if not findable. |
| primary_layer | string | One of: L1_foundation_model, L2_simulation, L3_data_infra, L4_hardware, L5_middleware, L6_vertical |
| secondary_layers | string | Comma-separated list of other layers, or blank |
| vertical_subcategory | string | For L6 only: one of 6a_warehouse, 6b_manufacturing, 6c_food, 6d_agriculture, 6e_healthcare, 6f_home, 6g_construction, 6h_other. Blank for non-L6 companies. |
| core_or_division | string | "core" if AI robotics is the company's primary business. "division" if it is a division/product line within a larger company. |
| one_liner | string | One sentence: what problem they solve and how. Max 30 words. |
| total_funding_usd | string | Total funding in USD (e.g., "150M", "2.5B", "undisclosed", "bootstrapped", "public_company"). Use M for millions, B for billions. |
| last_round_size_usd | string | Most recent round size (same format). "undisclosed" if not public. |
| last_round_type | string | Seed, Series A, Series B, Series C, Series D+, Pre-seed, Grant, IPO, SPAC, undisclosed |
| last_round_date | string | YYYY-MM format. "unknown" if not findable. |
| last_round_lead | string | Lead investor name(s). "undisclosed" if not public. |
| team_size | string | Approximate headcount. "unknown" if not findable. Format: "50-100" or "~200" or "unknown". |
| source_url | string | Primary URL used to verify this entry (company website, Crunchbase page, news article, etc.) |
| verification | string | "verified" if company_name + founded_year + one_liner all have sources. "incomplete" if any of those three lack a source. |
| notes | string | Any additional context QA thinks is important. Free text. |

### 4.2 Capital Map File

**Filename:** `ai_robotics_capital_map.csv`

**Section A: Top 20 Funding Rounds (past 24 months)**

| Column Name | Type | Description |
|---|---|---|
| company_name | string | Company that raised |
| round_size_usd | string | Amount raised |
| round_type | string | Series A/B/C/D+ etc. |
| round_date | string | YYYY-MM |
| lead_investors | string | Comma-separated |
| primary_layer | string | Same codes as census file |
| source_url | string | Source |

**Section B: Top 15 Most Active Investors**

Separate CSV: `ai_robotics_active_investors.csv`

| Column Name | Type | Description |
|---|---|---|
| investor_name | string | |
| investor_type | string | VC, CVC, sovereign, strategic, PE, family_office |
| deal_count_24mo | integer | Number of AI robotics deals in past 24 months |
| notable_portfolio | string | Up to 5 company names, comma-separated |
| source_url | string | |

**Section C: Quarterly Funding Totals**

Separate CSV: `ai_robotics_quarterly_funding.csv`

| Column Name | Type | Description |
|---|---|---|
| quarter | string | Q1_2024, Q2_2024, ... Q1_2026 |
| total_funding_usd | string | Total across all AI robotics deals that quarter |
| deal_count | integer | Number of deals |
| largest_deal | string | Company name + amount |
| source | string | Which report or database this came from |

### 4.3 Search Log

**Filename:** `search_log.csv`

QA must log every search query run, what source was used, how many results were relevant, and any notes.

| Column Name | Type |
|---|---|
| search_query | string |
| source | string |
| date_searched | string (YYYY-MM-DD) |
| relevant_results_count | integer |
| notes | string |

---

## 5. GATE Review Points

⛔ **GATE 1 (after Layer 1 + Layer 2 census complete):** Submit `ai_robotics_census_phase1.csv` with only L1 and L2 entries filled. Purpose: verify data quality, column formatting, and one_liner quality before QA spends time on remaining layers. Zian reviews and provides feedback before QA continues.

⛔ **GATE 2 (after all 6 layers complete):** Submit complete `ai_robotics_census_phase1.csv` plus `search_log.csv`. Zian reviews completeness per layer and decides which companies proceed to Phase 2 deep cards.

⛔ **GATE 3 (after capital map complete):** Submit all three capital map CSVs. Zian reviews and decides whether to proceed to Phase 2 or request additional census work on under-covered layers.

---

## 6. Termination Conditions

**Advance to Phase 2 if:**
- Census has ≥100 total entries across L1-L6
- No layer is below 50% of the minimum count in Section 2
- ≤20% of entries are tagged `verification: incomplete`
- Capital map Section A has ≥15 of the target 20 rounds identified
- Zian approves at GATE 3

**Request additional work if:**
- Any layer is below 50% of the minimum count — QA must document what searches were tried and why coverage is thin
- >30% of entries are `verification: incomplete` — QA must attempt secondary sources before submitting

**Abandon this phase if:**
- Zian decides the scope needs fundamental restructuring (e.g., too broad, too narrow, wrong taxonomy)
- This is NOT expected — this termination condition exists as a safety valve

---

## 7. Common Error Warnings

- **Do not confuse "AI robotics" with "robotic process automation" (RPA).** RPA (UiPath, Automation Anywhere, etc.) is software that automates desktop workflows. It has nothing to do with physical robots. Exclude all RPA companies.
- **Do not include autonomous vehicle companies unless they are also doing manipulation/humanoid/general-purpose robotics.** Waymo, Cruise, etc. are out of scope unless they have a robotics division beyond self-driving cars. Aurora, Nuro (delivery robots) are borderline — include with a note.
- **China coverage will require Chinese-language sources.** English-language databases significantly undercount Chinese AI robotics companies. QA must search 36Kr, 机器之心, IT桔子 (ITJuzi) for Chinese companies specifically.
- **"Stealth mode" companies:** If a company is known to exist (e.g., referenced in news, team members visible on LinkedIn) but has no public product or website, include it with `notes: "stealth"` and whatever information is available.
- **Funding data can be stale.** A company may have raised a round recently that hasn't been indexed by Crunchbase yet. If QA finds a news article about a round not yet in Crunchbase, use the news article as source.

---

## 8. Time/Cost Estimates

- **Estimated QA time:** 15-25 hours total across all three GATE checkpoints
  - GATE 1 (L1 + L2): 3-5 hours
  - GATE 2 (remaining layers): 8-12 hours
  - GATE 3 (capital map): 4-6 hours
- **Tools required:** Web browser, access to Crunchbase (free tier sufficient for basic data), Google Scholar or Semantic Scholar for paper searches, ability to read Chinese-language websites (or use translation tools)
- **No API costs.** All research is manual web search.
