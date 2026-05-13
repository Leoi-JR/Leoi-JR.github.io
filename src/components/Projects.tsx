import { Cpu, BotMessageSquare, Database, Globe } from 'lucide-react'
import React from 'react'

type Project = {
  dir: string
  date?: string
  desc: string
  tags: string[]
  intro?: string   // 技术介绍链接
  source?: string  // GitHub 链接（内部项目可为空）
}

type Category = {
  id: string
  cmd: string
  projects: Project[]
}

const CATEGORIES: Category[] = [
  {
    id: 'embedding',
    cmd: 'ls ~/projects/ai-vector/',
    projects: [
      {
        dir: 'patent-similarity/',
        desc: '专利相似度批量计算系统。融合 IPC 层级结构相似度与语义向量相似度（标题+摘要），多 GPU 并行调度，每专利最多检索 1000 个近邻，结果导出 Parquet。',
        tags: ['Python', 'PyTorch', 'Flask', 'CuPy', 'Pytest'],
        intro: 'https://leoi-jr.github.io/patent-similarity/slides.html',
        source: 'https://github.com/Leoi-JR/patent-similarity',
      },
      {
        dir: 'policy-industry-matching/',
        desc: '政策文本与国民经济行业分类语义对齐系统。Qwen3-Embedding-8B 编码 4096 维向量，多 GPU 并行 Embedding 服务，全矩阵余弦相似度，自动输出政策-行业关联三元组。',
        tags: ['Python', 'Qwen3-Embedding', 'Transformers', 'NumPy', 'GPU'],
        source: 'https://github.com/Leoi-JR/policy-industry-matching',
      },
      {
        dir: 'industry-chain-matcher/',
        desc: '基于矩阵批量运算的企业信息→产业链节点归类系统。双链匹配逻辑（L0 门控 + 通用链），集成 LLM 辅助阈值校准流水线，可扩展至百万级文档。',
        tags: ['Python', 'CuPy', 'LLM API', 'NumPy', 'Parquet'],
        intro: 'https://leoi-jr.github.io/industry-chain-matcher/index.html',
        source: 'https://github.com/Leoi-JR/industry-chain-matcher',
      },
    ],
  },
  {
    id: 'llm',
    cmd: 'ls ~/projects/llm-rag/',
    projects: [
      {
        dir: 'investment-agent/',
        desc: '智能招商问答 Agent（内部项目）。基于 Dify 构建多阶段 Agent 工作流：意图识别 → 双工具路由（SQL 查询 / 联网搜索）→ LLM 归纳输出。SQL 查询逻辑自行编写并集成至工作流，兼顾本地数据深度与外部信息覆盖。',
        tags: ['Dify', 'Tool Calling', 'SQL', 'LLM'],
      },
      {
        dir: 'esg-report-generator/',
        desc: 'ESG 报告全链路自动生成系统。支持 7 种文档格式（含扫描件 OCR），三路混合检索（Query Embedding + HyDE + BM25 + Reranker + RRF），LLM 多章节并发撰稿，配套 Next.js 编辑平台（SSE 实时进度、富文本编辑、版本历史）。',
        tags: ['Python', 'Next.js', 'BM25', 'ChromaDB', 'MySQL'],
        intro: 'https://leoi-jr.github.io/esg-report-generator/showcase/index.html',
        source: 'https://github.com/Leoi-JR/esg-report-generator',
      },
    ],
  },
  {
    id: 'data',
    cmd: 'ls ~/projects/data-engineering/',
    projects: [
      {
        dir: 'gualian/',
        desc: '大规模文本关键词规则匹配与标注工具（RuleKit）。10 种关键词组合规则，三阶段短路求值（Like → Must → Unlike）显著减少冗余正则操作，引入向量化匹配与正则编译缓存，将全量数据处理时间从数周压缩至天级别。多进程并行处理大规模 Parquet，88 个单元测试用例。',
        tags: ['Python', 'Pandas', 'ProcessPoolExecutor', 'Regex', 'Pytest'],
        intro: 'https://leoi-jr.github.io/rulekit/',
        source: 'https://github.com/Leoi-JR/gualian',
      },
    ],
  },
  {
    id: 'web',
    cmd: 'ls ~/projects/fullstack/',
    projects: [
      {
        dir: 'partner-resource-hub/',
        desc: '全栈合作伙伴资源管理系统，提供 Java + Vue 与 Node.js + React 双技术栈版本。多维度分类筛选、数据看板（月度趋势、类型分布）、三级角色权限、JWT + HttpOnly Cookie + CSRF Token 安全认证。',
        tags: ['Node.js', 'Express', 'React', 'TypeScript', 'MySQL', 'JWT'],
        intro: 'https://leoi-jr.github.io/partner-resource-hub/',
        source: 'https://github.com/Leoi-JR/partner-resource-hub',
      },
    ],
  },
]

const CATEGORY_LABELS: Record<string, { icon: React.ReactNode; text: string }> = {
  embedding: { icon: <Cpu size={14} strokeWidth={1.5} />,            text: 'AI 向量工程 / Embedding Pipeline' },
  llm:       { icon: <BotMessageSquare size={14} strokeWidth={1.5} />, text: 'LLM 应用 / RAG 系统' },
  data:      { icon: <Database size={14} strokeWidth={1.5} />,        text: '数据工程 / 大规模文本处理' },
  web:       { icon: <Globe size={14} strokeWidth={1.5} />,           text: '全栈 Web 开发' },
}

export default function Projects() {
  return (
    <section className="projects section" id="projects" aria-label="项目">
      <div className="cmd-line content-width">
        <span className="prompt" aria-hidden="true">$</span>
        <span className="cmd"> ls -la ~/projects/</span>
      </div>
      <div className="divider content-width" aria-hidden="true">{'─'.repeat(56)}</div>

      <p className="projects__intro content-width">
        以下项目覆盖 NLP 算法工程、向量检索、LLM 应用与全栈开发等方向，体现了从数据处理流水线到 RAG 系统落地、Agent 工作流设计的完整工程实践。
      </p>

      <div className="projects__list content-width">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="projects__category">
            {/* 分类标题 */}
            <h2 className="projects__cat-title">
              <span className="prompt" aria-hidden="true">#</span>
              &nbsp;
              <span className="projects__cat-icon" aria-hidden="true">{CATEGORY_LABELS[cat.id].icon}</span>
              &nbsp;{CATEGORY_LABELS[cat.id].text}
            </h2>

            {/* 项目列表 */}
            {cat.projects.map((p) => (
              <article key={p.dir} className="project-card">
                <header className="project-card__header">
                  <span className="project-card__dir">
                    drwxr-xr-x &nbsp;leoi &nbsp;staff &nbsp;4096 &nbsp;<strong>{p.dir}</strong>
                  </span>
                </header>

                <p className="project-card__desc">{p.desc}</p>

                <footer className="project-card__footer">
                  <ul className="project-card__tags" aria-label="技术标签">
                    {p.tags.map((t) => (
                      <li key={t} className="project-card__tag">#{t.toLowerCase().replace(/[.\s/]/g, '')}</li>
                    ))}
                  </ul>
                  <div className="project-card__links">
                    {p.intro && (
                      <a href={p.intro} className="project-card__link project-card__link--accent"
                         target="_blank" rel="noopener noreferrer">[ 技术介绍 ]</a>
                    )}
                    {p.source && (
                      <a href={p.source} className="project-card__link project-card__link--primary"
                         target="_blank" rel="noopener noreferrer">[ GitHub ]</a>
                    )}
                  </div>
                </footer>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
