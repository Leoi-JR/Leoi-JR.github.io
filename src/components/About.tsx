const SKILLS = [
  {
    label: '数据工程',
    items: [
      '数据治理', 'ETL', '主数据管理', '数据仓库', '数据建模', 
      '数据爬取', '文档解析与结构化 (PDF/Office/OCR)', 
      'SQL', 'MySQL', 'PostgreSQL', 'Pandas'
    ],
  },
  {
    label: 'AI / LLM',
    items: [
      'RAG', 'Embedding', 'Agent 工作流 (Dify)', 
      'Prompt Engineering', '向量检索'
    ],
  },
  {
    label: '工程开发',
    items: [
      'Python', 'Flask', '多进程 / 多 GPU 并行调度', 
      'Docker', 'Git'
    ],
  },
]

const EDUCATION = [
  {
    period: '2021.09 — 2024.06',
    school: '深圳大学',
    major: '地理信息与智慧城市',
    degree: '工学硕士（保送）',
  },
  {
    period: '2017.09 — 2021.06',
    school: '深圳大学',
    major: '地理空间信息工程',
    degree: '工学学士',
  },
]

export default function About() {
  return (
    <section className="about section" id="about" aria-label="关于我">
      <div className="section-header content-width">
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about__box content-width">
        {/* 个人简介 */}
        <p className="about__para">
          研究生研究方向为空间计算与 NLP，主要探索将空间关系编码为离散 Token 应用于 AI 模型推理，参与发表 SCI 论文 2 篇。<br /><br />
          毕业后担任数据工程师与 AI 应用工程师，参与业务数据的治理与解析。工作内容涵盖数据清洗、规则引擎、向量 Embedding 流水线，以及 LLM 驱动的 RAG 系统与 Agent 工作流的搭建。<br />
          目前主要从事非结构化数据处理及大模型智能应用（RAG / Agent）的相关开发工作。
        </p>

        {/* 技术栈 */}
        <div className="about__skills">
          <h3 className="projects__cat-title" style={{marginBottom: '16px'}}>Skills & Tools</h3>
          <dl className="about__skill-grid" aria-label="技术栈">
            {SKILLS.map(({ label, items }) => (
              <div key={label} className="about__skill-group">
                <dt className="about__skill-label">{label}</dt>
                <dd className="about__skill-items">
                  {items.map((s) => (
                    <span key={s} className="about__skill-item">{s}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 教育经历 */}
        <div className="about__edu">
          <h3 className="projects__cat-title" style={{marginBottom: '16px'}}>Education</h3>
          <ul className="about__edu-list" aria-label="教育经历">
            {EDUCATION.map((e) => (
              <li key={e.period} className="about__edu-item">
                <span className="about__edu-period">{e.period}</span>
                <span className="about__edu-info">
                  {e.school} &nbsp;·&nbsp; {e.major} &nbsp;·&nbsp;
                  <span className="about__edu-degree">{e.degree}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
