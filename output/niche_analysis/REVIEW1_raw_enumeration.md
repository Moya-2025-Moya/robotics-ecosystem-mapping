# REVIEW 1 — Raw Niche Enumeration (un-merged)

**Status:** GATE checkpoint after Research Design §3.1 Step A (careers-page scan) + Step B (platform/community scan). This list is **un-merged** — Step C clustering and Profile Cards happen only after this review is approved.

**Method:** Six parallel research passes, one per layer, anchored on the 286-company census. Each pass ran Step A (company careers pages, LinkedIn, Wellfound) and Step B (Hugging Face LeRobot, Upwork/Fiverr/Toptal, YC, OSS contributor ecosystems, crypto-data protocols). Every entry carries ≥1 real source URL; many carry a salary/rate datapoint already.

## Completeness check vs spec (§2)

| Requirement | Threshold | Found (raw) | Pass? |
|---|---|---|---|
| Niches per layer | ≥3 each | L1:16 L2:14 L3:19 L4:14 L5:14 L6:15 | ✅ |
| solo niches | ≥10 | 29 | ✅ |
| micro_startup niches | ≥10 | 21 | ✅ |
| employee niches | ≥10 | 42 | ✅ |
| Total independent niches | ≥30 | 92 raw (expect ~35–50 after merge) | ✅ |
| Layer with no individual entry | flag if any | none — all 6 layers have entries in all 3 modes | ✅ |

Entry format: `mode | proposed_niche_name | anchor company/platform | core skills | source_url(s) | [crypto?] | [revenue datapoint + source]`

---

## L1 — Robot Foundation Models (16 raw)

**employee (8)**
- employee | Robotics DevRel / Community Engineer (LeRobot) | Hugging Face | OSS community mgmt, robot learning (VLA/policies), Python, Hub workflows | https://apply.workable.com/huggingface/ , https://huggingface.co/lerobot | rev: HF eng comp ~$150k–$250k (Glassdoor proxy)
- employee | Robotics Hardware / Data-Stack Engineer (LeRobot full-stack) | Hugging Face | low-cost actuated HW, data-capture pipelines, embedded+ML | https://builtin.com/job/robotics-hardware-engineer/3591526 , https://apply.workable.com/huggingface/
- employee | Forward Deployed Robotics Engineer | Physical Intelligence (pi0) | real-env deployment/debug, Python, policy rollout + data-ops | https://jobs.ashbyhq.com/physicalintelligence , https://www.pi.website/join-us
- employee | Deployment / Solutions Robotics Engineer (non-PhD path: "relevant technical experience") | Covariant | on-site install/config, customer feature coding, debugging | https://app.welcometothejungle.com/jobs/eYXKV57n , https://startup.jobs/deployment-robotics-engineer-covariant-2472935
- employee | Forward Deployed Engineer | Field AI | field-robotics integration, SW eng, on-site deploy (MS *or equivalent practical experience*) | https://jobs.lever.co/field-ai/dfa08958-6fc7-43f3-ac1f-b4c5767b0d12
- employee | Technical Marketing Engineer / DevRel (Isaac / GR00T) | NVIDIA | Isaac Sim/Lab demos, technical content, dev enablement | https://developer.nvidia.com/isaac/gr00t , https://jobs.nvidia.com/careers/job/893393720842
- employee | Robot Teleoperation Operator / Data-Collection Specialist | L1 data programs (Weave/PI-style) | VR/exo teleop, demonstration capture, annotation | https://www.ziprecruiter.com/Jobs/Robot-Teleoperation , https://www.indeed.com/q-teleoperation-jobs.html | rev: $25–$75/hr listings; avg robot-operator $18.69/hr (ZipRecruiter)
- employee | Data Quality / Annotation QA Lead (robot demo data) | Objectways / Scale AI / Shaip / micro1 | multi-stage QA, sensor-calibration retake QA, multimodal labeling ops | https://www.micro1.ai/data-engine/robotics , https://objectways.com/blog/teleoperated-robots-in-2026-latest-developments/

**micro_startup (4)**
- micro_startup | One-click VLA fine-tuning / teleop-to-policy platform | phospho (on LeRobot + GR00T N1.5) | phosphobot middleware, VR teleop, VLA training UX, HW shop | https://github.com/phospho-app/phosphobot , https://robots.phospho.ai/starter-pack
- micro_startup | VLA fine-tuning-as-a-service / teleop data house | SVRC Robotics Center (OpenVLA/pi0/SmolVLA) | teleop infra @50Hz RLDS/LeRobot, budget VLA training, eval | https://www.roboticscenter.ai/blog/scaling-vla-training-on-a-budget
- micro_startup | Training-Docker / pipeline tooling vendor for pi0/pi0.5 | EmbodiFlow (IO-AI) on OpenPI/LeRobot | OpenPI runtime packaging, weight/normalization automation, data adapters | https://io-ai.tech/platform/en/guides/Pipeline/LeRobot/Pi0/
- micro_startup | YC robot-training-data startup (small team) | Sensei (YC) | demonstration data at scale, collection ops, pipeline tooling | https://www.ycombinator.com/companies/sensei

**solo (4)**
- solo | Fine-tune-open-VLA-as-a-service consultant | Upwork/Toptal/Fiverr (OpenVLA + LeRobot) | PEFT/LoRA fine-tune, LeRobot dataset formatting, single-GPU training, eval | https://www.upwork.com/freelance-jobs/model-tuning/ , https://github.com/openvla/openvla | rev: model-tuning category 305 open jobs; AI freelance demand +109% YoY (Upwork Feb 2026)
- solo | LeRobot dataset/model contributor + indie VLA researcher | Hugging Face Hub (LeRobot/RLDS) | LeRobotDataset/RLDS conversion, SO-100/Koch teleop capture, model-card publishing | https://huggingface.co/blog/lerobot-datasets , https://huggingface.co/lerobot
- solo | VLA/LeRobot content creator & educator | LeRobot / phospho / learnopencv | VLA explainers, hands-on tutorials, dataset-conversion how-tos, audience | https://learnopencv.com/vision-language-action-models-lerobot-policy/ , https://www.youtube.com/watch?v=ejk6-ffDXFw
- solo | Embodied red-team / VLA eval-harness builder | OpenVLA / GR00T / pi0 | embodied red-teaming, adversarial instruction generation, robustness benchmarking | https://arxiv.org/abs/2411.18676

---

## L2 — Simulation & Sim-to-Real (14 raw)

**employee (8)**
- employee | Synthetic Data & Annotations SW Engineer | Applied Intuition | computational geometry, sensor sim, ground-truth label pipelines, ML | https://boards.greenhouse.io/appliedintuition/jobs/4220708005 | $125k–$222k (Greenhouse)
- employee | Simulation Orchestration Engineer (core sim platform) | Applied Intuition | sim infra, C++/Python, rendering/sensor modeling | https://www.appliedintuition.com/careers
- employee | Senior Simulation Engineer (game-engine programming) | Parallel Domain | expert C++/Python, game-engine sim programming | https://paralleldomain.com/jobs/13418400-1d5d-5066-8ff0-1d61099a581e/
- employee | Field Engineer (synthetic-data customer integration) | Parallel Domain | Python, data ingest/export, customer-facing integration, CV datasets | https://www.linkedin.com/jobs/view/field-engineer-at-parallel-domain-2846451658
- employee | Apprentice/Junior Solutions Architect (digital twins) | Duality AI (Falcon/UE5) | Unreal or Blender, Python, 3D env crafting, robotics-algo integration | https://job-boards.greenhouse.io/dualityroboticsinc/jobs/4494526005
- employee | Junior Python Engineer (scene creation / synthetic data) | SKY ENGINE AI | Python, CG asset org, domain-randomization, annotation prep | https://www.skyengine.ai/careers/junior-python-engineer
- employee | Solutions Architect, Physical AI & Omniverse | NVIDIA Isaac Sim/Omniverse | Isaac Sim/Lab, OpenUSD, ROS2, Python+C++ | https://nvidia.wd5.myworkdayjobs.com/...JR1974757 | $152k–$241.5k (NVIDIA Workday)
- employee | Senior Robotics SW Engineer (sim-to-real, ML-Agents) | Unity Technologies | Unity internals, cloud-scale sim, RL/domain randomization, sim-to-real | https://careers.unity.com/position/senior-robotics-software-engineer/3144217

**micro_startup (2)**
- micro_startup | World-model simulation environment builder (policy eval) | One Robot (YC) | world-model sim, manipulation tasks, training/eval infra | https://techcrunch.com/2025/03/13/10-startups-to-watch-from-y-combinators-w25-demo-day/
- micro_startup | Synthetic-data + sim CV product for manufacturing | Bucket Robotics (YC S24) | synthetic data gen, simulation, edge CV deployment | https://www.workatastartup.com/companies/bucket-robotics

**solo (4)**
- solo | Freelance ROS2/Isaac Sim/Gazebo simulation engineer | Upwork | ROS2, Isaac Sim, Gazebo, URDF/Xacro, Nav2 | https://www.upwork.com/services/product/...gazebo-or-coppelliasim-simulator-1594617482903941120
- solo | Contract synthetic-data-pipeline builder (domain randomization) | Upwork / Rendered.ai-style | synthetic data pipelines, domain randomization, annotation, CV dataset QA | https://rendered.ai/ai-job-of-the-future-synthetic-data-engineer/
- solo | SimReady / USD 3D asset creator + seller | NVIDIA Omniverse SimReady + Fab/Unreal marketplace | OpenUSD authoring, USDPhysics, semantic labeling, modular env modeling | https://developer.nvidia.com/omniverse/simready-assets , https://www.cgchannel.com/2025/08/get-165-modular-3d-assets-for-creating-a-warehouse-in-unreal-engine/
- solo | MuJoCo / Isaac Lab plugin & RL sim-to-real plugin developer | GitHub (MuJoCo-Warp / Isaac Lab) | MuJoCo C API, MJCF, GPU physics (Warp), RL, sim-to-real | https://github.com/mujocolab/mjlab

---

## L3 — Data Infrastructure (19 raw) — richest layer; crypto flagged

**solo (9)**
- solo | At-home VR/SO-ARM teleoperation operator | SVRC Robotics Center / Claru | VR/teleop rig op, pick-and-place dexterity, demo throughput | https://www.roboticscenter.ai/research/robot-data-collection-cost-breakdown , https://claru.ai/solutions/teleoperation-data | crypto:no | $20–$30/hr; +$0.10–$0.25 bonus/accepted demo
- solo | LeRobot dataset recorder & seller (own SO-ARM100/101) | Hugging Face Hub / LeRobot | SO-ARM assembly, lerobot-record, episode QA, packaging | https://huggingface.co/blog/lerobot-datasets , https://www.waveshare.com/wiki/SO-ARM100/101_Record_Dataset | crypto:no | community datasets free→bountied; ~¥4/episode floor via Robotics Center
- solo | Robot-demonstration dataset seller on marketplace | Robotics Center / DeepAware AI | teleop recording, license selection, quality scoring | https://www.roboticscenter.ai/marketplace , https://www.deepawareai.com/ | crypto:no | per-episode from ¥4/ep, seller-set
- solo | Egocentric video capture gig worker (head-mounted phone) | Awign / Mecka AI / DoorDash Tasks | wearable-cam capture, task performance, scene framing | https://www.awign.com/business/data-annotation/robotech-egocentric , https://www.technologyreview.com/2026/04/01/1134863/ | crypto:no | ₹250–₹400/hr (~$2.63–$4.20) India
- solo | CRYPTO — Token-incentivized teleop operator | PrismaX ($PIX) | standardized teleop, staking, speed+accuracy (QRB) | https://www.therobotreport.com/prismax-launches-with-11m-... , https://blog.prismax.ai/prismax-raises-11m-ai-robotics-teleoperation | crypto:YES | per-session + efficiency bonuses; AI buyers burn tokens for data
- solo | CRYPTO — Drive-to-Earn sidewalk-robot teleoperator | FrodoBots Lab / BitRobot (Solana) | remote rover nav, outdoor GPS driving, mission completion | https://www.frodobots.ai/earth-rovers | crypto:YES | FrodoBot Points scale w/ distance+terrain; 1 TC = $1
- solo | CRYPTO — Blockchain data annotator (royalty model) | Codatta ($XNY / Metis) | address/metadata labeling, crypto-domain knowledge, consensus validation | https://www.codatta.io/ , https://docs.codatta.io/ | crypto:YES | ~200–3000 pts/reward + ongoing royalties
- solo | Fiverr/Upwork mocap-capture freelancer | Fiverr / Rokoko, Xsens | suit calibration, full-body+finger capture, FBX export/cleanup | https://www.fiverr.com/gigs/mocap | crypto:no | $75–$200/gig
- solo | Upwork remote data annotation / labeling contractor | Upwork / micro1, Scale AI | image/video labeling, annotation QA, tooling | https://www.upwork.com/freelance-jobs/data-annotation/ | crypto:no | US entry $15–$20/hr; data-analyst median $30/hr

**micro_startup (5)**
- micro_startup | Micro teleop-data studio (few SO-ARM rigs, contract batches) | sells to SVRC / Cortex AI / labs | multi-rig ops, throughput scheduling, gold-standard demo design | https://www.roboticscenter.ai/blog/scaling-robot-data-collection-teams | crypto:no | sell per-episode; labor $22–$45/hr tiers
- micro_startup | Mocap-as-a-service boutique (own Rokoko/Xsens studio) | Fiverr/Toptal / Rokoko, Xsens | studio capture, cleanup pipeline, retarget, delivery | https://mocaponline.com/blogs/mocap-news/motion-capture-cost-guide | crypto:no | session $2,000–$4,000; capex suit ~$2,999 + gloves ~$999
- micro_startup | Local egocentric-capture crew / field supervisor team | Awign / Mecka / Human Archive | crew recruiting, field logistics, capture QA, head-mount rigging | https://techcrunch.com/2026/05/26/human-archive-taps-into-indias-services-startups-... | crypto:no | worker pay ₹250–₹400/hr; Awign 1.5M gig network
- micro_startup | CRYPTO — Teleop guild operator (form/stake a guild) | PrismaX ($PIX) | guild formation, staking mgmt, operator coordination | https://www.panewslab.com/en/articles/oan41zwd | crypto:YES | guild+staking shares session pay+bonuses
- micro_startup | Annotation/QA micro-vendor (small labeling shop subcontract) | Scale AI / Encord / Objectways | annotation pipeline mgmt, QA lead, client delivery, annotator training | https://builtin.com/company/encord/jobs | crypto:no | QA-lead labor ~$45/hr benchmark

**employee (5)**
- employee | Remote teleoperation operator (W2/contractor) | Adamo / Claru / Sensei / Extend Robotics | VR/XR teleop, haptic hand-tracking, troubleshooting, dexterity | https://claru.ai/solutions/teleoperation-data , https://www.extendrobotics.com/teleoperation | $25–$75/hr; WFH median ~$17.63/hr
- employee | Human Data Operations Strategist / Data-Ops PM | Encord | annotation project mgmt, data-quality optimization, client engagement | https://simplify.jobs/c/Encord
- employee | Data Annotator / Video Reviewer (teleop trajectories) | micro1 Data Engine | video review, teleop-trajectory annotation, multi-view labeling | https://www.micro1.ai/data-engine/robotics
- employee | Recruiter / talent-sourcer for data contributors | micro1 / Scale AI / DoorDash Tasks | sourcing, vetting, onboarding/training, network scaling | https://humandata.micro1.ai/human-data/talent/sourcing-annotators
- employee | Applied ML / data-platform engineer (multimodal tooling) | Foxglove | multimodal data infra, ML pipelines, viz tooling | https://foxglove.dev/careers

*China-vs-West note:* West skews high-hourly remote VR teleop ($20–$75/hr) + crypto Drive/teleop-to-Earn; China/India skews dense low-cost in-person capture (¥4/ep marketplaces, ₹250–400/hr egocentric gig armies). Flagged for `-CN`/`-WEST` splits at Profile-Card stage.

---

## L4 — AI-Native Hardware (14 raw)

**employee (7)**
- employee | Humanoid Robot Operator / Teleoperator (data collection) | Figure AI | wear teleop suit, guide robot, upload training data, lift 50 lbs, 8-hr shifts | https://job-boards.greenhouse.io/figureai/jobs/4406268006 | $25–$35/hr US base
- employee | Data Creator / Humanoid Pilot (1-mo contract → Operator) | Figure AI | mocap sensors, motion-data collection, SOPs, failure tickets | https://www.figure.ai/careers
- employee | Operator, Data Collection (VR teleop, lab+home) | 1X Technologies | VR-headset teleop, SOPs, session annotation, HS diploma min | https://1x.recruitee.com/o/operator-data-collection-day-shift | Robot Pilot $25–$81/hr (ZipRecruiter aggregate)
- employee | Robotic Assembly Technician | Apptronik | procedural assembly, oscilloscope/voltmeter test, HW QA | https://apptronik.com/careers | Apptronik avg ~$70,742/yr (Salary.com)
- employee | Robotics Test Engineer (non-PhD test/QA path) | Apptronik | bring-up/test of assemblies, instrumentation, defect logging | https://job-boards.greenhouse.io/apptronik/jobs/5988482004
- employee | Field Service Engineer (Spot/Stretch deploy & repair) | Boston Dynamics | on-site install, calibration, diagnostics, travel | https://www.salary.com/research/company/boston-dynamics-inc/field-service-engineer-salary | ~$108,160/yr avg
- employee | Applications Support / Integration Engineer (dexterous hand) | PSYONIC | integrate Ability Hand, applications support, GitHub portfolio in lieu of PhD | https://www.psyonic.io/careers

**micro_startup (4)**
- micro_startup | Reseller of assembled SO-ARM100/SO-101 kits | WowRobo / Seeed / PartaBot / Hiwonder | source servos/boards, 3D-print frames, assemble/QA, fulfill, support | https://shop.wowrobo.com/products/so-arm100-diy-kit-assembled-version , https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html | Seeed kit ~$220; assembled premium
- micro_startup | 3D-printed SO-ARM/LeRobot frame & parts seller | The Robot Studio open-source (Etsy/Tindie/MakerWorld) | FDM/resin printing, post-processing, STL fulfillment | https://github.com/TheRobotStudio/SO-ARM100 , https://www.waveshare.com/so-arm100-3dp-parts-kit.htm
- micro_startup | "Assemble-your-LeRobot" turnkey kit microbusiness | AIFITLAB / ThinkRobotics | bundle servos+frame+controller, pre-calibrate, quickstart, HF integration | https://aifitlab.com/products/lerobot-so-arm100
- micro_startup | Unitree Go2/G1 accessory & mounting-kit maker | Unitree Go2 | Fusion 360, Picatinny rails, payload mounts, print & ship | https://robostore.com/collections/unitree-go2-accessories

**solo (3)**
- solo | Freelance robotics CAD / 3D-printing designer | Upwork / Cad Crowd | SolidWorks/Fusion 360, reverse-engineering, rendering, DFM | https://www.upwork.com/hire/robotics-engineer/ | 73 open robotics + 4,114 CAD jobs live on Upwork
- solo | YouTube/course creator teaching SO-ARM/LeRobot build | YouTube / Class Central / HF docs | assembly, calibration, teleop, dataset collection walkthroughs | https://www.classcentral.com/course/youtube-assemble-and-calibrate-so-100-lerobot-tutorial-7-by-jess-moss-361046
- solo | DevRel / community-builder for open-hardware kits | Hugging Face LeRobot / Seeed | Discord mgmt, docs/integration guides, event demos | https://huggingface.co/docs/lerobot/integrate_hardware

*Note:* a standalone solo "robot repair/calibration service" appears feasible but no third-party shop with a published rate was found — held back pending a hard datapoint.

---

## L5 — Software Stack & Middleware (14 raw)

**employee (7)**
- employee | Senior Forward Deployed Engineer | Viam | Python/C++, ROS familiarity, customer implementation, HW prototyping | https://job-boards.greenhouse.io/viamrobotics | $165K–$235K/yr (Viam listing via levels.fyi)
- employee | Forward Deployed Engineer, Customer-Facing | Formant | Python/TS, LLM/AI-ML workflow exposure, deployment, fleet ops, 25–35% travel | https://formant.io/careers/
- employee | Solutions / Data-Infra Engineer, Robotics | Foxglove | data pipelines, MCAP/ROS-bag, customer integration, viz | https://jobs.ashbyhq.com/foxglove/eb4f866e-4c0c-4291-89ae-6e8027b30476
- employee | Robotics Software Engineer (ROS2) — self-taught/bootcamp path | InOrbit / Rapyuta / Open Robotics ecosystem | ROS2, Python/C++, Nav2, SW fundamentals | https://www.glassdoor.com/Job/robotics-software-engineer-ros-jobs | avg $153K/yr ($122K–$194K IQR), Glassdoor 2026; Open Robotics $146K–$205K levels.fyi
- employee | Application / Technical Support Engineer for AMR fleets | Rapyuta Robotics | ROS2, CI/CD deploy, troubleshooting, client support | https://apply.workable.com/rapyuta-robotics/
- employee | SRE / DevOps Engineer for safety-critical stack | 3Laws Robotics | SRE/DevOps, Linux, ROS2 Nav2 integration, V&V | https://3laws.io/careers/senior-systems-engineer-software-certification-robotics-aerospace/
- employee | Safety / Certification Systems Engineer | FORT Robotics / 3Laws / Saphira AI | embedded C++, safety certification, V&V | https://www.fortrobotics.com/careers

**solo (5)**
- solo | Freelance ROS/ROS2 software developer | Upwork / Arc.dev | ROS2, LiDAR SLAM, PX4, Python/C++ | https://www.upwork.com/freelance-jobs/robot-operating-system/ | Upwork from ~$10/hr low end; Arc.dev specialist $60–100+/hr
- solo | Build & sell Viam modules in the registry (paid distribution) | Viam Registry | Go/Python/C++/Rust, Viam APIs, GH Actions CI | https://www.viam.com/product/registry , https://docs.viam.com/registry/modular-resources/
- solo | Build & publish Foxglove extensions / panels (.foxe) | Foxglove | TypeScript/React, @foxglove/extension SDK, ROS schemas | https://docs.foxglove.dev/docs/extensions
- solo | OSS middleware maintainer w/ GitHub Sponsors | dora-rs | Rust, dataflow architecture, ROS interop, OSS maintenance | https://github.com/dora-rs/dora
- solo | Teach ROS2 courses (paid online / instructor) | Udemy / The Construct | ROS2 Jazzy, curriculum design, Python/C++, video production | https://www.theconstruct.ai/...ros2-basics-course/ | Udemy 37% non-coupon rev share; instructor lifetime $1K–$3M

**micro_startup (2)**
- micro_startup | Freelance robot-fleet integration consultant (1-5 person) | Formant / InOrbit | fleet mgmt, teleop setup, cloud robotics integration, Python/TS | https://formant.io/ , https://wellfound.com/company/formantinc
- micro_startup | Vertical SaaS micro-app on Viam/Formant | Viam / Formant | platform SDK/APIs, web app dev, domain verticalization | https://www.viam.com/product/registry

*Note:* micro_startup is L5's thinnest mode; hard revenue datapoints for the two micro entries still need sourcing at Profile-Card stage.

---

## L6 — Vertical Deployments (15 raw)

**employee (7)**
- employee | Remote Robot Operator / Crew Chief (warehouse remote pick) | Plus One Robotics (Yonder/CrewChief) | reaction time, exception-handling, teleop dashboards | https://www.plusonerobotics.com/careers , https://www.portsanantonio.us/plus-one-robotics-crewchief | one Crew Chief supervises dozens of robots
- employee | Remote Sidewalk-Delivery Pilot / Robot Operator | Coco Robotics / Serve Robotics | virtual-cockpit teleop, nav judgment, customer handoff; 30 hrs paid training | https://startup.jobs/robot-pilot-coco-2745936 | $13.46–$91.59/hr, avg ~$46/hr (ZipRecruiter)
- employee | Robotics Field Service / Deployment Technician | Mujin / OSARO / Pickle / Ambi | on-site install/commission, electromechanical troubleshoot, controls/safety | https://www.glassdoor.com/Salaries/robotics-field-service-technician-salary-SRCH_KO0,33.htm | avg $72,364/yr (~$35/hr), top ~$106k
- employee | Ag-Robot Field Service Technician (laser weeder) | Carbon Robotics / FarmWise | controls/safety testing, data labeling assist, in-field demos, training | https://carbonrobotics.com/job-openings | comparable ~$30–35/hr
- employee | Food-Robotics Applications / Systems Support Engineer | Miso Robotics / Chef Robotics | on-site deploy oversight, troubleshooting, field repair, customer success | https://www.misorobotics.com/careers , https://jobs.lever.co/ChefRobotics | comparable deployment-eng avg ~$123k (Glassdoor)
- employee | Customer Success / Deployment Manager (RaaS account) | Chef Robotics / Brain Corp / Diligent | CRM, deployment data analysis, expansion/upsell, coordination | https://www.diligentrobots.com/join-our-team-1
- employee | Part 107 Construction Drone Operator / Site-Capture Pilot | Skydio deployments | FAA Part 107, site mapping (DroneDeploy), data capture, autonomous flight | https://www.skydio.com/blog/skydio-accelerates-part-107-drone-businesses | $40–$106/hr; metro $109k–$169k

**solo (4)**
- solo | Drone Inspection Service Operator (construction/infra) | Skydio/DJI + DroneDeploy | Part 107, photogrammetry/thermal, flight planning, deliverables | https://uavcoach.com/drone-services-pricing/ | $150–$400/hr; $1,000–$3,000/day; infra $500–$2,000+/day
- solo | Freelance Agriculture Drone Pilot (NDVI / scouting) | DJI/Skydio ag drones via Upwork/DroneBase | Part 107, NDVI/multispectral, scouting flights, ag-data interpretation | https://www.upwork.com/hire/drones-freelancers/us/ | scouting $25–40/hr; ag-data $50–150/hr; per-farm subs $1,000–3,000/mo
- solo | Agriculture Robotic-Weeding Contractor (weeding-as-a-service) | FarmWise / Carbon LaserWeeder | in-field machine op, per-acre service, crop-vs-weed calibration | https://smallgrains.wsu.edu/weeders-of-the-west/2024/10/31/farmdroid/ | vs $30–80/acre mechanical; organic premium $500–2,000/acre
- solo | Robotic Floor-Scrubber Owner-Operator | Tennant/Nilfisk/Kärcher KIRA or Gausium | autonomous-scrubber op/charging, route setup, contract sales, maintenance | https://www.tennantco.com/en_us/1/machines/scrubbers/robotic-scrubbers.html | machine $15k–50k; offsets recurring janitorial labor

**micro_startup (4)**
- micro_startup | Cleaning-Robot Micro-Integrator / Regional RaaS Partner | Avidbots / Gausium / SoftBank (RobotLAB model) | on-site deploy & training, account mgmt, preventive maintenance | https://www.robotlab.com/cleaning-robots | robots $15k–$50k; RaaS leasing from ~$2,013/mo
- micro_startup | RaaS Reseller / Regional Deployment Partner (security/service) | SMP Robotics distributor / Formic / Locus | channel sales, financing setup, local service/uptime SLAs | https://smprobotics.com/security_robot/distributor-security-robot/ | RaaS mkt $2.40B(2025)→$14.82B(2036), 18% CAGR
- micro_startup | Vertical Robot-Adoption Consultant for SMBs | platform-agnostic (Chef/Miso/Avidbots/Locus) | needs assessment & ROI modeling, vendor selection, deployment PM, change mgmt | https://blog.hardfin.com/what-is-robots-as-a-service-raas | 500-acre ag op saves $150k+/yr, ~2.5-yr payback
- micro_startup | Construction/Infra Drone Service Firm (1-5 person, retainer) | Skydio + DroneDeploy / DSLRPros | Part 107 team ops, recurring mapping cadence, data processing/reporting | https://uavcoach.com/drones-in-construction/ | day rates $1,000–3,000; recurring retainers

---

## Open questions for REVIEW 1 (please confirm before I proceed to Step C + Profile Cards)

1. **Scope sufficient?** 92 raw entries → after 70%-overlap merge I expect ~35–50 final niches. Good, or do you want me to push deeper on any specific layer/mode (e.g. L2 micro_startup and L5 micro_startup are the two thinnest cells)?
2. **CN/WEST splits:** clearest in L3 (teleop/data). Do you want CN/WEST split cards anywhere else, or keep splits limited to L3 where the gap is large?
3. **Crypto cards:** 4 crypto-relevant entries found, all in L3 (PrismaX, FrodoBots, Codatta + teleop guild). Confirm you want these kept as distinct cards with `crypto_relevant=true`.
4. **Currency:** all revenue will be converted to GBP at 1 GBP = 1.27 USD (per spec §7) with "converted from USD" tags in Profile Cards.
5. **Employee-mode exclusion line:** I excluded pure PhD/5-yr research and "robotics engineer" roles, keeping only operator/technician/QA/devrel/forward-deployed/solutions/support and explicitly non-PhD software paths. Confirm this reading of §7 is what you want.
