import { Cpu, BotMessageSquare, Database, Globe } from 'lucide-react'
import React from 'react'

type Project = {
  name: string
  desc: string
  tags: string[]
  intro?: string
  source?: string
}

type Category = {
  id: string
  title: string
  icon: React.ReactNode
  projects: Project[]
}

const CATEGORIES: Category[] = [
  {
    id: 'llm',
    title: 'LLM & Agent',
    icon: <BotMessageSquare size={16} strokeWidth={1.5} />,
    projects: [
      {
        name: '电商商品智能问答 Agent',
        desc: '电商场景下的自然语言查询商品系统。基于 Amazon 商品数据集构建清洗管线，基于 BGE-M3 混合检索层，通过 LLM 意图解析路由到检索引擎，FastAPI + SSE 实现流式输出。',
        tags: ['FastAPI', 'LLM', 'ChromaDB', 'Agent'],
        source: 'https://github.com/Leoi-JR/product-qa-agent',
      },
      {
        name: 'ESG 报告自动生成系统',
        desc: '支持多种文档格式的三路混合检索（Query Embedding + HyDE + BM25 + Reranker），LLM 多章节并发撰稿，配套 Next.js 编辑平台（SSE 实时进度、版本历史）。',
        tags: ['Python', 'Next.js', 'BM25', 'ChromaDB', 'MySQL'],
        source: 'https://github.com/Leoi-JR/esg-report-generator',
      },
      {
        name: '智能招商问答 Agent',
        desc: '基于 Dify 构建多阶段 Agent 工作流：意图识别 → 双工具路由（SQL 查询 / 联网搜索）→ LLM 归纳输出。集成内部 SQL 逻辑与外部联网搜索。',
        tags: ['Dify', 'Tool Calling', 'SQL', 'LLM'],
      },
    ],
  },
  {
    id: 'embedding',
    title: 'AI Vector Engineering',
    icon: <Cpu size={16} strokeWidth={1.5} />,
    projects: [
      {
        name: '跨域语义检索与特征匹配',
        desc: '专利相似度批量计算，融合 IPC 层级与语义向量。跨域语义对齐系统，Qwen3-Embedding-8B 编码 4096 维向量，全矩阵余弦相似度计算。',
        tags: ['Python', 'PyTorch', 'Flask', 'CuPy', 'Transformers'],
        source: 'https://github.com/Leoi-JR/patent-similarity',
      },
      {
        name: '产业语义匹配平台',
        desc: '基于矩阵批量运算的企业信息→产业链节点归类。双链匹配逻辑，集成 LLM 辅助阈值校准，可扩展至百万级文档。',
        tags: ['Python', 'CuPy', 'LLM API', 'Parquet'],
        source: 'https://github.com/Leoi-JR/industry-chain-matcher',
      },
    ],
  },
  {
    id: 'data',
    title: 'Data Engineering',
    icon: <Database size={16} strokeWidth={1.5} />,
    projects: [
      {
        name: '大规模文本规则匹配',
        desc: '大规模文本关键词规则匹配工具。三阶段短路求值减少冗余正则，向量化匹配与正则缓存，多进程处理 Parquet，将处理时间从数周压缩至天级。',
        tags: ['Python', 'Pandas', 'Regex', 'Pytest'],
        source: 'https://github.com/Leoi-JR/gualian',
      },
    ],
  },
  {
    id: 'web',
    title: 'Fullstack Web',
    icon: <Globe size={16} strokeWidth={1.5} />,
    projects: [
      {
        name: '合作伙伴资源管理系统',
        desc: '全栈管理平台，提供 Java+Vue 与 Node.js+React 双版本。多维度数据看板、三级角色权限、JWT + CSRF Token 安全认证。',
        tags: ['Node.js', 'React', 'MySQL', 'JWT'],
        source: 'https://github.com/Leoi-JR/partner-resource-hub',
      },
    ],
  },
]

export default function Projects() {
  return (
    <section className="projects section" id="projects" aria-label="项目">
      <div className="section-header content-width">
        <h2 className="section-title">Selected Projects</h2>
        <p className="section-desc">
          以下项目覆盖 LLM 应用、向量检索、NLP 算法与全栈开发，涉及从数据处理到 Agent 系统落地的相关工程链路。
        </p>
      </div>

      <div className="projects__list content-width">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="projects__category">
            <h3 className="projects__cat-title">
              <span className="projects__cat-icon" aria-hidden="true">{cat.icon}</span>
              {cat.title}
            </h3>

            <div className="projects__grid">
              {cat.projects.map((p) => (
                <article key={p.name} className="project-card">
                  <header className="project-card__header">
                    <h4 className="project-card__title">{p.name}</h4>
                    <div className="project-card__links">
                      {p.source && (
                        <a href={p.source} className="project-card__link" target="_blank" rel="noopener noreferrer">GitHub</a>
                      )}
                    </div>
                  </header>

                  <p className="project-card__desc">{p.desc}</p>

                  <footer className="project-card__footer">
                    <ul className="project-card__tags" aria-label="技术标签">
                      {p.tags.map((t) => (
                        <li key={t} className="project-card__tag">{t}</li>
                      ))}
                    </ul>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
