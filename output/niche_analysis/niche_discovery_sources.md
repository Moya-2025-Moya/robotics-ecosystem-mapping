# Niche Discovery Sources / 生态位溯源

记录每个生态位是从哪个公司招聘页/平台/社区/gig帖发现的，附原始 URL。

> 完整的未归并原始枚举(含每条来源)见 `REVIEW1_raw_enumeration.md`。本文件给出**最终归并后**每个 niche 的主要发现来源。


方法: §3.1 Step A (公司 careers / LinkedIn / Wellfound) + Step B (Hugging Face LeRobot、Upwork/Fiverr/Toptal、YC、OSS 贡献者生态、加密数据协议)。六层并行检索，每条至少一个真实 URL。


## L1 — Robot Foundation Models / 机器人基础模型


**`L1-SOLO-01` 开源VLA微调自由顾问** (solo)
- 锚定: Upwork/Toptal (锚: OpenVLA + LeRobot)
- https://www.upwork.com/freelance-jobs/model-tuning/
- https://github.com/openvla/openvla
- https://www.toptal.com/freelance-jobs/developers/machine-learning

**`L1-SOLO-02` 独立具身AI研究者 / LeRobot贡献者** (solo)
- 锚定: Hugging Face Hub (LeRobot/RLDS社区)
- https://huggingface.co/blog/lerobot-datasets
- https://huggingface.co/lerobot
- https://markaicode.com/monetize-open-source-github-income/

**`L1-SOLO-03` 机器人/具身AI 教育者与内容创作者** (solo)
- 锚定: Hugging Face LeRobot教程; Class Central SO-ARM课程; The Construct (ROS2)
- https://www.classcentral.com/course/youtube-assemble-and-calibrate-so-100-lerobot-tutorial-7-by-jess-moss-361046
- https://learnopencv.com/vision-language-action-models-lerobot-policy/
- https://bloggingx.com/udemy-course-creator-earnings/

**`L1-SOLO-04` 具身红队 / VLA评测基准搭建者** (solo)
- 锚定: OpenVLA; GR00T; pi0 (研究+服务)
- https://arxiv.org/abs/2411.18676
- https://wraith.sh/learn/ai-bug-bounty-programs
- https://blog.theinterviewguys.com/best-ai-red-teaming-job/

**`L1-MICRO-01` VLA微调/遥操作转策略 工具平台微创业** (micro_startup)
- 锚定: phospho; EmbodiFlow (IO-AI)
- https://github.com/phospho-app/phosphobot
- https://io-ai.tech/platform/en/guides/Pipeline/LeRobot/Pi0/
- https://www.roboticscenter.ai/blog/scaling-vla-training-on-a-budget

**`L1-MICRO-02` VLA微调即服务工作室** (micro_startup)
- 锚定: SVRC (Silicon Valley Robotics Center)
- https://www.roboticscenter.ai/blog/scaling-vla-training-on-a-budget
- https://www.ycombinator.com/companies/sensei

**`L1-EMP-01` 机器人AI开发者关系/布道师 (DevRel)** (employee)
- 锚定: Hugging Face (LeRobot); NVIDIA (Isaac/GR00T)
- https://apply.workable.com/huggingface/
- https://huggingface.co/lerobot
- https://jobs.nvidia.com/careers/job/893393720842
- https://www.glassdoor.com/Salaries/developer-advocate-salary-SRCH_KO0,18.htm

**`L1-EMP-02` 前置部署/解决方案工程师 (基础模型机器人公司)** (employee)
- 锚定: Physical Intelligence; Covariant; Field AI
- https://jobs.ashbyhq.com/physicalintelligence
- https://startup.jobs/deployment-robotics-engineer-covariant-2472935
- https://jobs.lever.co/field-ai/dfa08958-6fc7-43f3-ac1f-b4c5767b0d12
- https://www.levels.fyi/companies/palantir/salaries/software-engineer/title/fdse

## L2 — Simulation & Sim-to-Real / 仿真与Sim2Real


**`L2-SOLO-01` 自由机器人仿真工程师 (Isaac/Gazebo/ROS2)** (solo)
- 锚定: Upwork (锚: ROS2 + Isaac Sim/Gazebo/Webots)
- https://www.upwork.com/services/product/development-it-ros-simulation-using-gazebo-or-coppelliasim-simulator-1594617482903941120
- https://www.upwork.com/freelancers/~01dfce3ec81c2ef8af

**`L2-SOLO-02` SimReady/USD 数字孪生3D资产卖家** (solo)
- 锚定: NVIDIA Omniverse SimReady; Unreal Fab / Unity Asset Store
- https://developer.nvidia.com/omniverse/simready-assets
- https://www.cgchannel.com/2025/08/get-165-modular-3d-assets-for-creating-a-warehouse-in-unreal-engine/
- https://www.unrealengine.com/en-US/blog/fab-content-marketplace-launches-in-october-publishing-portal-opens-today

**`L2-SOLO-03` MuJoCo/Isaac Lab 插件与sim-to-real开发者** (solo)
- 锚定: GitHub (MuJoCo-Warp / Isaac Lab)
- https://github.com/mujocolab/mjlab
- https://github.com/URLab-Sim/UnrealRoboticsLab
- https://markaicode.com/monetize-open-source-github-income/

**`L2-MICRO-01` 世界模型/仿真环境微创业 (策略评测)** (micro_startup)
- 锚定: One Robot (YC)
- https://techcrunch.com/2025/03/13/10-startups-to-watch-from-y-combinators-w25-demo-day/

**`L2-MICRO-02` 制造业合成数据+仿真CV产品微创业** (micro_startup)
- 锚定: Bucket Robotics (YC S24)
- https://www.workatastartup.com/companies/bucket-robotics

**`L2-EMP-01` 合成数据/仿真数据流水线工程师** (employee)
- 锚定: Applied Intuition; Parallel Domain; SKY ENGINE AI
- https://boards.greenhouse.io/appliedintuition/jobs/4220708005
- https://www.skyengine.ai/careers/junior-python-engineer
- https://www.linkedin.com/jobs/view/field-engineer-at-parallel-domain-2846451658

**`L2-EMP-02` 仿真软件工程师 (游戏引擎)** (employee)
- 锚定: Applied Intuition; Parallel Domain; Unity Technologies
- https://paralleldomain.com/jobs/13418400-1d5d-5066-8ff0-1d61099a581e/
- https://careers.unity.com/position/senior-robotics-software-engineer/3144217
- https://www.levels.fyi/companies/applied-intuition/salaries/software-engineer

**`L2-EMP-03` 仿真解决方案架构师 (Omniverse/Isaac/数字孪生)** (employee)
- 锚定: NVIDIA (Isaac/Omniverse); Duality AI (Falcon)
- https://job-boards.greenhouse.io/dualityroboticsinc/jobs/4494526005
- https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/job/Solutions-Architect--Omniverse_JR1974757-1

## L3 — Data Infrastructure / 数据基础设施


**`L3-SOLO-01-CN` 现场遥操作数据采集员 (中国数据工厂)** (solo)
- 锚定: DataOcean AI; Datatang; Lingyu (TeleAvatar)
- https://restofworld.org/2026/china-robots-training-centers-workers/
- https://www.technologyreview.com/2026/04/01/1134863/

**`L3-SOLO-01-WEST` 居家远程遥操作数据采集员 (西方)** (solo)
- 锚定: SVRC Robotics Center; Claru
- https://www.roboticscenter.ai/research/robot-data-collection-cost-breakdown
- https://claru.ai/solutions/teleoperation-data
- https://www.ziprecruiter.com/Jobs/Robot-Teleoperation

**`L3-SOLO-02` 机器人演示数据集制作与销售** (solo)
- 锚定: Hugging Face Hub; Robotics Center / DeepAware AI
- https://huggingface.co/blog/lerobot-datasets
- https://www.roboticscenter.ai/marketplace
- https://www.deepawareai.com/

**`L3-SOLO-03` 第一视角演示视频 零工采集员** (solo)
- 锚定: Awign; Mecka AI; DoorDash Tasks
- https://www.awign.com/business/data-annotation/robotech-egocentric
- https://www.technologyreview.com/2026/04/01/1134863/humanoid-data-training-gig-economy-2026-breakthrough-technology/

**`L3-SOLO-04` 加密遥操作/Drive-to-Earn 数据操作员** (solo · crypto)
- 锚定: PrismaX ($PIX); FrodoBots Lab / BitRobot
- https://www.therobotreport.com/prismax-launches-with-11m-to-scale-virtual-datasets-for-robotics-foundation-models/
- https://www.frodobots.ai/earth-rovers
- https://airdrops.io/prismax/

**`L3-SOLO-05` 加密激励数据标注员 (Codatta)** (solo · crypto)
- 锚定: Codatta ($XNY / Metis)
- https://www.codatta.io/
- https://docs.codatta.io/codatta/faqs
- https://www.coingecko.com/en/coins/codatta

**`L3-SOLO-06` 自由动作捕捉采集师 (Rokoko/Xsens)** (solo)
- 锚定: Fiverr/Upwork (锚: Rokoko, Xsens)
- https://www.fiverr.com/gigs/mocap
- https://mocaponline.com/blogs/mocap-news/motion-capture-cost-guide

**`L3-SOLO-07` 自由数据标注/打标承包人** (solo)
- 锚定: Upwork (锚: micro1, Scale AI)
- https://www.upwork.com/freelance-jobs/data-annotation/
- https://www.ziprecruiter.com/Salaries/Data-Annotation-Salary

**`L3-MICRO-01-CN` 机器人数据采集工厂运营 (中国)** (micro_startup)
- 锚定: DataOcean AI; Datatang; Integer Intelligence
- https://restofworld.org/2026/china-ai-robotics-training-data/
- https://restofworld.org/2026/china-robots-training-centers-workers/

**`L3-MICRO-01-WEST` 微型遥操作数据工作室 (西方)** (micro_startup)
- 锚定: 卖给 SVRC / Cortex AI / 实验室
- https://www.roboticscenter.ai/blog/scaling-robot-data-collection-teams
- https://www.roboticscenter.ai/marketplace

**`L3-MICRO-02` 动作捕捉即服务 精品工作室** (micro_startup)
- 锚定: Fiverr/Toptal (锚: Rokoko, Xsens)
- https://www.fiverr.com/digitalcircus/create-bespoke-character-animations-with-my-own-mocap-studio
- https://mocaponline.com/blogs/mocap-news/motion-capture-cost-guide

**`L3-MICRO-03` 第一视角采集 班组运营/外勤主管** (micro_startup)
- 锚定: Awign; Mecka; Human Archive
- https://www.awign.com/categories/field_survey/jobs/factory_egocentric_video_capturing_supervisor
- https://techcrunch.com/2026/05/26/human-archive-taps-into-indias-services-startups-to-collect-data-for-physical-ai/

**`L3-MICRO-04` 加密遥操作公会运营 (PrismaX)** (micro_startup · crypto)
- 锚定: PrismaX ($PIX)
- https://www.panewslab.com/en/articles/oan41zwd
- https://medium.com/@chaseyvy/decentralizing-the-future-of-physical-ai-introducing-prismax-ed7c32165780

**`L3-MICRO-05` 标注/质检 微型供应商** (micro_startup)
- 锚定: Scale AI / Encord / Objectways
- https://builtin.com/company/encord/jobs
- https://innodata.com/ai-data-marketplace/

**`L3-EMP-01` 远程遥操作操作员 (受雇)** (employee)
- 锚定: Adamo; Claru; Sensei; Extend Robotics
- https://claru.ai/solutions/teleoperation-data
- https://www.extendrobotics.com/teleoperation
- https://www.ziprecruiter.com/Jobs/Robot-Teleoperation

**`L3-EMP-02` 数据运营经理/人类数据策略师** (employee)
- 锚定: Encord; Scale AI
- https://simplify.jobs/c/Encord
- https://www.salary.com/research/company/surge-ai-salary

**`L3-EMP-03` 机器人数据标注员/视频审核员 (受雇)** (employee)
- 锚定: micro1 Data Engine; Scale AI
- https://www.micro1.ai/data-engine/robotics
- https://www.glassdoor.com/Salaries/data-annotator-salary-SRCH_KO0,14.htm

**`L3-EMP-04` 数据贡献者招募/社区运营** (employee)
- 锚定: micro1; Scale AI; DoorDash Tasks
- https://humandata.micro1.ai/human-data/talent/sourcing-annotators
- https://www.micro1.ai/careers

**`L3-EMP-05` 数据平台/数据基建工程师 (机器人)** (employee)
- 锚定: Foxglove; Scale AI
- https://foxglove.dev/careers
- https://www.levels.fyi/companies/open-robotics/salaries/software-engineer

## L4 — AI-Native Hardware / AI原生硬件


**`L4-SOLO-01` 自由机器人CAD/3D打印设计师** (solo)
- 锚定: Upwork / Cad Crowd
- https://www.upwork.com/hire/robotics-engineer/
- https://www.cadcrowd.com/blog/what-are-cad-services-prices-and-drafting-design-costs-for-freelance-services-firms/

**`L4-SOLO-02` 开源硬件套件 社区/开发者关系 (合约)** (solo)
- 锚定: Hugging Face LeRobot; Seeed Studio
- https://github.com/huggingface/lerobot
- https://huggingface.co/docs/lerobot/integrate_hardware

**`L4-MICRO-01-CN` SO-ARM/LeRobot 套件与零件制造转售 (深圳供应链)** (micro_startup)
- 锚定: Seeed Studio; Waveshare; WowRobo
- https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html
- https://www.waveshare.com/so-arm100-3dp-parts-kit.htm

**`L4-MICRO-01-WEST` SO-ARM/LeRobot 套件组装转售与打包 (西方)** (micro_startup)
- 锚定: WowRobo; Seeed Studio; PartaBot; AIFITLAB
- https://shop.wowrobo.com/products/so-arm100-diy-kit-assembled-version
- https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html
- https://aifitlab.com/products/lerobot-so-arm100

**`L4-MICRO-02` 3D打印机器人零件/STL 卖家** (micro_startup)
- 锚定: The Robot Studio开源(经Etsy/Tindie/MakerWorld)
- https://github.com/TheRobotStudio/SO-ARM100
- https://www.waveshare.com/so-arm100-3dp-parts-kit.htm
- https://pixup3d.com/blog/3d-printing-side-hustle/

**`L4-MICRO-03` 机器人配件/挂载套件制造商** (micro_startup)
- 锚定: Unitree Go2/G1 (经自有站/RoboStore/MakerWorld)
- https://robostore.com/collections/unitree-go2-accessories
- https://futurology.tech/products/unitree-go2-modular-mounting-kit

**`L4-EMP-01` 人形机器人操作员/数据采集飞行员** (employee)
- 锚定: Figure AI; 1X Technologies; Apptronik
- https://job-boards.greenhouse.io/figureai/jobs/4406268006
- https://1x.recruitee.com/o/operator-data-collection-day-shift
- https://www.figure.ai/careers

**`L4-EMP-02` 机器人装配与测试技术员** (employee)
- 锚定: Apptronik
- https://job-boards.greenhouse.io/apptronik/jobs/5988482004
- https://www.glassdoor.com/Salaries/assembly-and-test-technician-salary-SRCH_KO0,28.htm

**`L4-EMP-03` 机器人现场服务工程师** (employee)
- 锚定: Boston Dynamics
- https://bostondynamics.com/careers/
- https://www.salary.com/research/company/boston-dynamics-inc/field-service-engineer-salary

**`L4-EMP-04` 硬件应用/集成工程师 (灵巧手/传感器)** (employee)
- 锚定: PSYONIC; Wonik; GelSight
- https://www.psyonic.io/careers
- https://www.glassdoor.com/Salaries/robotics-application-engineer-salary-SRCH_KO0,29.htm

## L5 — Software Stack & Middleware / 软件栈与中间件


**`L5-SOLO-01` 自由ROS/ROS2 软件开发者** (solo)
- 锚定: Upwork / Arc.dev
- https://www.upwork.com/freelance-jobs/robot-operating-system/
- https://www.upwork.com/hire/robot-operating-system-freelancers/

**`L5-SOLO-02` 机器人平台插件/模块开发者 (Viam/Foxglove)** (solo)
- 锚定: Viam Registry; Foxglove扩展
- https://www.viam.com/product/registry
- https://docs.foxglove.dev/docs/extensions
- https://github.com/foxglove/studio-extension-marketplace

**`L5-SOLO-03` 开源机器人中间件维护者 (GitHub Sponsors)** (solo)
- 锚定: dora-rs
- https://github.com/dora-rs/dora
- https://markaicode.com/monetize-open-source-github-income/

**`L5-MICRO-01` 机器人车队集成咨询 (1-5人)** (micro_startup)
- 锚定: Formant; InOrbit
- https://formant.io/
- https://wellfound.com/company/formantinc
- https://nicolalazzari.ai/guides/ai-consultant-pricing-us

**`L5-MICRO-02` 基于Viam/Formant的垂直SaaS微应用** (micro_startup)
- 锚定: Viam; Formant
- https://www.viam.com/product/registry
- https://www.viam.com/pricing

**`L5-EMP-01` 前置部署/解决方案工程师 (机器人中间件)** (employee)
- 锚定: Viam; Formant; Foxglove
- https://job-boards.greenhouse.io/viamrobotics
- https://formant.io/careers/
- https://jobs.ashbyhq.com/foxglove/eb4f866e-4c0c-4291-89ae-6e8027b30476

**`L5-EMP-02` 机器人软件工程师 (ROS2, 非博士路径)** (employee)
- 锚定: InOrbit; Rapyuta; Open Robotics生态
- https://www.glassdoor.com/Salaries/robotics-software-engineer-salary-SRCH_KO0,26.htm
- https://www.levels.fyi/companies/agility-robotics/salaries/software-engineer

**`L5-EMP-03` 机器人技术/应用支持工程师 (AMR车队)** (employee)
- 锚定: Rapyuta Robotics; InOrbit
- https://apply.workable.com/rapyuta-robotics/
- https://www.glassdoor.com/Salaries/robotics-application-engineer-salary-SRCH_KO0,29.htm

**`L5-EMP-04` 机器人DevOps/SRE与功能安全工程师** (employee)
- 锚定: 3Laws Robotics; FORT Robotics; Saphira AI
- https://3laws.io/careers/senior-systems-engineer-software-certification-robotics-aerospace/
- https://www.fortrobotics.com/careers
- https://www.glassdoor.com/Salaries/functional-safety-engineer-salary-SRCH_KO0,26.htm

## L6 — Vertical Deployments / 垂直部署


**`L6-SOLO-01` Part 107无人机巡检/测绘服务个体** (solo)
- 锚定: Skydio/DJI + DroneDeploy
- https://uavcoach.com/drone-services-pricing/
- https://www.skyebrowse.com/news/posts/drone-services-pricing

**`L6-SOLO-02` 农业机器人除草承包人 (除草即服务)** (solo)
- 锚定: FarmWise; Carbon Robotics (LaserWeeder)
- https://carbonrobotics.com/laserweeder-g2
- https://smallgrains.wsu.edu/weeders-of-the-west/2024/10/31/farmdroid/
- https://www.farm-equipment.com/blogs/6-opinions-columns/post/20156-laser-weeding-reduces-weed-management-costs

**`L6-SOLO-03` 自主洗地机 业主-操作员 (清洁服务)** (solo)
- 锚定: Tennant/Nilfisk/Kärcher KIRA; Gausium
- https://www.tennantco.com/en_us/1/machines/scrubbers/robotic-scrubbers.html
- https://commercialrobotvacuums.com/real-cost-of-commercial-robotic-floor-cleaners/
- https://sproutmation.com/blog/autonomous-floor-scrubber-roi

**`L6-MICRO-01` 区域RaaS转售/部署集成商** (micro_startup)
- 锚定: Avidbots/Gausium/SoftBank; SMP Robotics; Locus
- https://www.robotlab.com/cleaning-robots
- https://smprobotics.com/security_robot/distributor-security-robot/
- https://blog.hardfin.com/what-is-robots-as-a-service-raas

**`L6-MICRO-02` 面向中小企业的垂直机器人采用顾问** (micro_startup)
- 锚定: 平台无关(Chef/Miso/Avidbots/Locus)
- https://blog.hardfin.com/what-is-robots-as-a-service-raas
- https://builtin.com/robotics/robotics-as-a-service-raas
- https://nicolalazzari.ai/guides/ai-consultant-pricing-us

**`L6-MICRO-03` 建筑/基础设施无人机服务公司 (1-5人)** (micro_startup)
- 锚定: Skydio + DroneDeploy / DSLRPros
- https://uavcoach.com/drones-in-construction/
- https://www.dslrpros.com/blogs/drone-trends/drone-infrastructure-inspection-for-bridges-roads-and-buildings

**`L6-EMP-01` 远程机器人操作员/接管干预专员** (employee)
- 锚定: Plus One Robotics; Coco Robotics; Serve Robotics
- https://www.plusonerobotics.com/careers
- https://startup.jobs/robot-pilot-coco-2745936
- https://www.ziprecruiter.com/Salaries/Coco-Delivery-Salary

**`L6-EMP-02` 垂直机器人 现场部署/服务技术员** (employee)
- 锚定: Mujin/OSARO/Pickle (仓储); Carbon/FarmWise (农业); Miso/Chef (食品)
- https://www.glassdoor.com/Salaries/robotics-field-service-technician-salary-SRCH_KO0,33.htm
- https://carbonrobotics.com/job-openings
- https://www.misorobotics.com/careers

**`L6-EMP-03` RaaS客户成功/部署经理** (employee)
- 锚定: Chef Robotics; Brain Corp; Diligent Robotics
- https://www.chefrobotics.ai/careers
- https://www.diligentrobots.com/join-our-team-1
- https://www.glassdoor.com/Salary/Locus-Robotics-Customer-Success-Manager-Salaries-E1583739_D_KO15,39.htm

**`L6-EMP-04` 商用无人机操作员/Part 107飞手 (受雇)** (employee)
- 锚定: Skydio部署
- https://www.skydio.com/blog/skydio-accelerates-part-107-drone-businesses
- https://www.ziprecruiter.com/Jobs/Part-107-Pilot