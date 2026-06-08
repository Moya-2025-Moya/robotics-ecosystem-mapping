# AI × Robotics Ecosystem Mapping

286 家公司、六层架构(L1-L6)、$40.81B 资本的 AI×机器人生态图谱,及衍生分析。

## 目录结构

```
.
├── data/            原始与富化数据集 (CSV)
├── reports/         生态叙事报告 (md + docx)
│   └── layers/      L1-L6 分层报告 (docx)
├── requirements/    任务需求规格 (phase1 / phase2 / gate2)
├── output/
│   └── niche_analysis/   个人生态位分析交付物 (见下)
└── build/docx/      docx 报告生成管线 (脚本 + data/ JSON + node 依赖)
```

## data/
| 文件 | 内容 |
|---|---|
| `ai_robotics_census_enriched.csv` | 286 家公司富化普查 (主表, 25列) |
| `ai_robotics_census_phase1.csv` | Phase 1 原始普查 |
| `ai_robotics_capital_map.csv` | 资本映射 |
| `ai_robotics_active_investors.csv` | 活跃投资者 |
| `ai_robotics_quarterly_funding.csv` | 季度融资 |
| `excluded_entries.csv` | 排除条目 |
| `reassignment_candidates.csv` | 层级重分配候选 |
| `search_log.csv` | 检索日志 |

## reports/
- `ai_robotics_ecosystem_report_june2026.md` — 生态总报告 (Markdown)
- `AI_Robotics_Ecosystem_Report_June2026_v2.docx` — 总报告 (最终 docx, v2)
- `layers/AI_Robotics_L{1..6}_..._v2.docx` — 六个分层报告

## output/niche_analysis/ — 个人生态位 Census
| 文件 | 内容 |
|---|---|
| `niche_census.csv` | 64 个个人生态位 × 22 列 (机读, GBP) |
| `niche_census_report.md` | Profile Cards 报告 + 收益/门槛/时间窗对比表 |
| `niche_discovery_sources.md` | 每个生态位的发现来源 URL |
| `REVIEW1_raw_enumeration.md` | 92 条未归并原始枚举 (审计留存) |
| `ai_robotics_niche_assessment_EN.docx` | 投行风评估报告 (全英文) |
| `ai_robotics_niche_assessment_CN.docx` | 投行风评估报告 (中文正文/英文结构标签) |

## build/docx/ — docx 生成管线
- `render.js` — 渲染器,从 `data/*.json` 生成 docx
- `_make_sections.py` — 生成 `data/sections.json`(章节文案 EN+CN)
- `validate.py` — 校验 docx (结构/风格/页面)
- `data/` — 所有输入 JSON;`node_modules/` — docx 依赖 (git 忽略)

重新生成:
```
cd build/docx && npm install                 # 首次需要
python _make_sections.py                      # 仅当章节文案改动
node render.js en "../../output/niche_analysis/ai_robotics_niche_assessment_EN.docx"
node render.js cn "../../output/niche_analysis/ai_robotics_niche_assessment_CN.docx"
python validate.py ../../output/niche_analysis/ai_robotics_niche_assessment_EN.docx ../../output/niche_analysis/ai_robotics_niche_assessment_CN.docx
```
