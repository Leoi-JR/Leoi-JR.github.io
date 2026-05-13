const SKILLS = [
  {
    label: 'AI / ML',
    items: ['PyTorch', 'Transformers', 'Sentence-Transformers', 'CuPy (GPU)'],
  },
  {
    label: 'LLM / RAG',
    items: ['RAG Pipeline', 'Context Engineering', 'BM25 + Embedding + Reranker + RRF', 'HyDE', 'Prompt Engineering'],
  },
  {
    label: 'Agent 框架',
    items: ['Dify', 'LangGraph', 'Tool Calling'],
  },
  {
    label: '数据处理',
    items: ['Pandas · NumPy', 'PyArrow / Parquet', 'MySQL · PostgreSQL · ChromaDB'],
  },
  {
    label: '编程语言',
    items: ['Python（主力）', 'TypeScript / JavaScript'],
  },
  {
    label: '工程能力',
    items: ['Flask · Git / GitHub', 'Docker · Linux · Conda'],
  },
  {
    label: '工具链',
    items: ['Claude Code (含 MCP) · Cursor · Copilot'],
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
      <div className="cmd-line content-width">
        <span className="prompt" aria-hidden="true">$</span>
        <span className="cmd"> cat about.md</span>
      </div>
      <div className="divider content-width" aria-hidden="true">{'─'.repeat(56)}</div>

      <div className="about__box content-width">
        {/* 个人简介 */}
        <p className="about__para">
          研究生阶段聚焦地理空间 Tokenization 与时空轨迹表征学习——探索将城市空间关系编码为离散 Token 以增强 AI 模型的空间推理能力，参与发表 SCI 论文 2 篇。<br />
          毕业后在规划设计行业担任数据/算法工程师近两年，围绕大规模文本数据的智能化处理，
          独立构建了一套完整工具链——从关键词规则引擎、向量 Embedding 流水线，到 LLM 驱动的 RAG 系统与 Agent 工作流设计，
          覆盖数据工程、NLP 算法设计与全栈应用开发全链路。现专注于 AI 工程 / LLM 应用落地。
        </p>

        {/* 技术栈 */}
        <div className="about__skills">
          <div className="cmd-line" style={{ fontSize: 'var(--fs-base)' }}>
            <span className="prompt" aria-hidden="true">$</span>
            <span className="cmd"> apt list --installed</span>
          </div>
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
          <div className="cmd-line" style={{ fontSize: 'var(--fs-base)' }}>
            <span className="prompt" aria-hidden="true">$</span>
            <span className="cmd"> cat education.txt</span>
          </div>
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
