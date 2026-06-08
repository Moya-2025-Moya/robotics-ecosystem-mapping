# AI × Robotics Ecosystem Census — GATE 2 Requirements Addendum

**Context:** GATE 1 (L1 + L2) delivered 101 entries. This addendum covers: (A) corrections to L1/L2, (B) two new schema fields, (C) a scope filter rule, (D) a layer reassignment rule, and (E) L3–L6 census work. QA should execute A–D first, then E.

---

## A. Schema Updates

Add two new columns to `ai_robotics_census_phase1.csv`, immediately after the `verification` column (before `notes`):

| Column Name | Type | Description |
|---|---|---|
| entity_type | string | One of: `company`, `academic`, `nonprofit`, `open_source_project` |
| status | string | One of: `active`, `acqui-hired`, `shut_down`, `stealth`, `ipo` |

**Backfill rules for existing 101 entries:**

- Default: `entity_type: company`, `status: active`
- Stanford OpenVLA → `entity_type: academic`
- RoboTwin (ScaleLab / MMLab@HKU) → `entity_type: academic`
- Maitrix.org → `entity_type: academic`
- PyBullet / Bullet Physics → `entity_type: open_source_project`
- Open Source Robotics Foundation → `entity_type: nonprofit`
- BAAI / Zhiyuan Research Institute → `entity_type: nonprofit`
- Allen Institute for AI (Ai2) → `entity_type: nonprofit`
- Shanghai AI Laboratory → `entity_type: nonprofit`
- Cartwheel Robotics → `status: shut_down`
- Covariant → `status: acqui-hired` (Amazon, Aug 2024)
- Manycore Tech → `status: ipo`
- UBTECH Robotics → `status: ipo`
- Beijing Humanoid Robot Innovation Center → `entity_type: nonprofit`

All new L3–L6 entries must also fill these two fields.

---

## B. Scope Filter (Apply to ALL entries, existing and new)

**Rule: "Does this product category exist without AI? If yes, exclude."**

If the company's product is an existing product category (cars, traditional industrial arms, surgical robots, delivery vans, etc.) with AI added as an enhancement layer, it is OUT OF SCOPE. If the product category itself is AI-enabled and would not exist without AI (humanoid general-purpose robots, robot foundation models, sim-to-real platforms, teleoperation data services, robot learning frameworks), it is IN SCOPE.

**Exclude the following existing entries from the census (move to a separate `excluded_entries.csv` with reason):**

| Company | Reason |
|---|---|
| Wayve | AV company; product category is "car + driving AI", not a new AI-native robot category |
| Cognata | AV-only simulation; product category is autonomous vehicle testing |
| Inverted AI | AV behavior simulation only |
| Niantic Spatial | AR/geospatial localization; robot/drone is a claimed use case but core is AR positioning |

**Flag but keep (add note in `notes` column):**

| Company | Note to add |
|---|---|
| Boston Dynamics | "Transitioning from traditional control to AI-learned policies (LBM with TRI). Historical product predates AI; keeping because LBM represents a genuine new capability category, not just enhancement." |
| Applied Intuition | "Originally AV simulation but now has explicit robotics product lines (warehouse, construction, agriculture autonomy). Selling simulation tools, not vehicles. Keeping." |
| Field AI | "Foundation model is cross-embodiment (humanoid, legged, wheeled, flying). Product is the robot brain, not the vehicle. Keeping." |

**Apply this same filter to all new L3–L6 entries.** When in doubt, include with a flag in notes rather than exclude. Zian will make final calls at GATE 2 review.

---

## C. Layer Reassignment Rule (L1 → L4)

**Rule:** If a company's primary business is building and selling/deploying robot hardware, and its foundation model is an internal capability (not separately sold or licensed to third parties), move `primary_layer` from `L1_foundation_model` to `L4_hardware`, and add `L1_foundation_model` to `secondary_layers`.

**"Foundation model is the product" = stays L1.** These companies sell or license models to run on OTHER companies' robots, or their model IS the product regardless of hardware:
- Physical Intelligence, Skild AI, Generalist AI, Covariant, Google DeepMind, NVIDIA (GR00T), Hugging Face (LeRobot), Runway (GWM), Dexterity, Sereact, Scout AI, Rhoda AI, Field AI, etc.

**"Hardware is the product, model is internal" = move to L4.** These companies build and sell/deploy their own robots; the model powers their robot but is not separately available:
- Figure AI, 1X Technologies, Apptronik, Unitree Robotics, UBTECH Robotics, Sanctuary AI, AgiBot, Galbot, RobotEra, Fourier Intelligence, LimX Dynamics, Booster Robotics, Astribot, X Square Robot, ZhiPingFang/AI² Robotics, Spirit AI, TARS, PaXini Technology, DAIMON Robotics, Sunday Robotics, Cartwheel Robotics (shut_down), Azalea Robotics, Ultra, Yondu, Ant Lingbo/Robbyant, Lingchu Intelligence/PsiBot

**"Big tech division with both" = keep current assignment but verify in notes:**
- Tesla (L1 → L4; Optimus is hardware-primary, FSD-derived model is internal)
- Amazon Robotics AI (keep L1; DeepFleet model coordinates 1M+ existing robots, the model IS the novel contribution)
- ByteDance Seed Robotics (keep L1; GR-3 is a research model, ByteMini is research hardware)
- Tencent Robotics X (keep L1 for now; Tairos platform provides model to external robot makers)
- Baidu (keep L1; ERNIE stack is licensed/partnered to external robot companies like AgiBot)
- Huawei CloudRobo (keep L1; explicitly provides cloud model to partner robots, not own hardware)
- Meta FAIR (keep L1; research models, open-source, external hardware like Digit)
- Microsoft Research Robotics (keep L1; research division)
- Alibaba Tongyi robotics (keep L1; provides model to external platforms)

**Do NOT execute these reassignments yet.** List them in a `reassignment_candidates.csv` (columns: company_name, current_primary_layer, proposed_primary_layer, rationale). Execute the moves only after GATE 2 review when all L3–L6 entries are in and Zian can see the full picture.

---

## D. Layer Corrections (Execute immediately on existing entries)

Move these entries' `primary_layer` values now (these are clearly miscategorized regardless of L4 reassignment):

| Company | Current Layer | Correct Layer | Reason |
|---|---|---|---|
| Encord | L2_simulation | L3_data_infra | Data labeling/annotation platform, not simulation |
| Shotwell | L2_simulation | L3_data_infra | Automated video annotation for robotics data, not simulation. QA's own notes flagged this. |
| SBX Robotics | L2_simulation | L3_data_infra | Synthetic image generation for training data = data infrastructure |
| Sensei | L2_simulation | L3_data_infra | Teleoperation hardware + data collection service = data infrastructure |

After these moves, update the secondary_layers fields if needed (remove L3 from secondary if it's now primary).

---

## E. L3–L6 Census Work

### Layer Definitions (repeat from Phase 1 doc for QA reference)

**Layer 3: Data Infrastructure**
Companies providing data collection systems, teleoperation platforms, data marketplaces, and robotics-specific annotation/labeling services for robot AI training. NOT general-purpose data labeling (Scale AI is borderline — include only if they have a specific robotics data product line). NOT synthetic data for AV-only (those were filtered in Section B).

**Layer 4: AI-Native Hardware**
Companies building physical robots or critical subsystems designed to be controlled by learned AI policies. Includes: humanoids, dexterous hands, low-cost research arms, AI-optimized sensor suites, novel actuators. Note: many L4 entries will come from the L1→L4 reassignment in Section C. QA should discover ADDITIONAL companies not already in the census (e.g., companies that build robot hardware but DON'T build their own foundation model — they buy/use someone else's). Also include companies building critical components (hands, actuators, sensors) sold to robot integrators.

**Layer 5: Software Stack & Middleware**
Software between "trained policy" and "robot executing in the real world." Robot learning frameworks, edge inference for robotics, fleet orchestration, robot observability/monitoring, safety runtime layers, ROS2 AI-native tooling.

**Layer 6: Vertical Deployments**
Companies deploying AI-powered robots to solve specific real-world problems. Apply the scope filter from Section B: the product category itself must be AI-native. A traditional warehouse conveyor with a vision system bolted on = exclude. An AI-trained robot arm that picks variable items = include.

Sub-categories:
- 6a: Warehouse & Logistics
- 6b: Manufacturing
- 6c: Food Service
- 6d: Agriculture
- 6e: Surgical & Healthcare
- 6f: Home & Consumer
- 6g: Construction
- 6h: Other (specify)

### Search Strategy for L3–L6

Use all primary and secondary sources from the Phase 1 requirements doc. Additional queries specific to these layers:

**L3 Data Infrastructure:**
- "robot teleoperation data company"
- "robotics data collection platform"
- "robot demonstration data marketplace"
- "robotics annotation labeling"
- "teleoperation hardware exoskeleton robot"
- "robot motion capture data"
- "机器人 数据采集 公司" (Chinese)

**L4 AI-Native Hardware:**
- "humanoid robot company 2025 2026"
- "dexterous robot hand company"
- "low cost research robot arm"
- "robot gripper AI company"
- "tactile sensor robot company"
- "legged robot company"
- "人形机器人 公司 2025 2026" (Chinese)
- "robot actuator startup"

**L5 Software Stack & Middleware:**
- "robot learning framework"
- "robot deployment edge inference"
- "robot fleet management AI"
- "robot monitoring observability"
- "ROS2 AI tools company"
- "robot safety runtime"
- "robot cloud platform"

**L6 Vertical Deployments:**
- "AI robot warehouse picking company"
- "AI robot food service cooking"
- "AI agricultural robot harvesting"
- "robot manufacturing assembly AI"
- "home robot AI startup"
- "construction robot AI"
- "surgical robot AI startup 2025 2026"
- "AI机器人 仓储 公司" / "AI机器人 制造 公司" / "AI机器人 农业" (Chinese)

### Output Files

Continue appending to `ai_robotics_census_phase1.csv` (same schema + 2 new columns from Section A).

Also produce:
- `reassignment_candidates.csv` (from Section C)
- `excluded_entries.csv` (from Section B, columns: company_name, original_layer, exclusion_reason)

Continue logging in `search_log.csv`.

### Minimum Counts (expected, same caveat as Phase 1)

| Layer | Expected Count (new entries, excluding reassignments from L1) |
|---|---|
| L3 Data Infrastructure | 10-20 |
| L4 AI-Native Hardware | 15-25 (additional to the ~25-30 coming from L1 reassignment) |
| L5 Software Stack & Middleware | 10-20 |
| L6 Vertical Deployments | 30-50 |

### L6 AI Intensity Threshold

For Layer 6 specifically, apply this minimum AI bar: **the company's robot must use a learned policy (RL, IL, diffusion policy, VLA, or equivalent) for at least one core task capability (perception, manipulation, navigation, or planning).** Classical computer vision (template matching, rule-based segmentation) or classical motion planning (RRT, A*) alone does NOT qualify. If QA is unsure, include the entry with a note "AI_intensity: unclear — uses [describe what they use]" and Zian will decide at review.

---

## F. GATE 2 Submission Checklist

At GATE 2, QA submits:

1. Updated `ai_robotics_census_phase1.csv` with:
   - All existing 101 entries with new `entity_type` and `status` columns backfilled
   - Section D layer corrections applied
   - Section B exclusions removed (moved to excluded_entries.csv)
   - All new L3–L6 entries appended
2. `reassignment_candidates.csv` (Section C — proposed, not executed)
3. `excluded_entries.csv` (Section B)
4. Updated `search_log.csv`

⛔ **GATE 2 REVIEW:** Zian reviews full census completeness, approves or modifies reassignment candidates, and makes final scope decisions on flagged entries before proceeding to GATE 3 (capital map).

---

## G. Termination Conditions (same as Phase 1, updated)

**Advance to GATE 3 if:**
- Total census (after reassignments and exclusions) has ≥150 entries across L1–L6
- No layer is below 50% of the minimum count
- ≤20% of entries are `verification: incomplete`
- Zian approves at GATE 2

**Request additional work if:**
- Any layer is below 50% of minimum count
- >30% of entries are `verification: incomplete`
