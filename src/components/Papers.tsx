const PAPERS = [
  {
    authors: 'Fei Huang, Jian-Rong Lv, Guo-Long Li & Yang Yue',
    title: 'SPOK: tokenizing geographic space for enhanced spatial reasoning in GeoAI',
    journal: 'International Journal of Geographical Information Science',
    year: '2025',
    role: '第二作者',
    doi: 'https://doi.org/10.1080/13658816.2025.2497810',
  },
  {
    authors: 'Huang F, Lv J, Yue Y.',
    title: 'Jointly spatial-temporal representation learning for individual trajectories',
    journal: 'Computers, Environment and Urban Systems',
    year: '2024',
    extra: '112: 102144',
    role: '第二作者',
    doi: 'https://doi.org/10.1016/j.compenvurbsys.2024.102144',
  },
  {
    authors: 'Li X, Huang F, Lv J, et al.',
    title: 'Be more real: Travel diary generation using LLM agents and individual profiles',
    journal: 'arXiv preprint',
    year: '2024',
    extra: 'arXiv:2407.18932',
    role: '第三作者',
    doi: 'https://arxiv.org/abs/2407.18932',
  },
]

export default function Papers() {
  return (
    <section className="papers section" id="papers" aria-label="论文成果">
      <div className="cmd-line content-width">
        <span className="prompt" aria-hidden="true">$</span>
        <span className="cmd"> cat publications.bib</span>
      </div>
      <div className="divider content-width" aria-hidden="true">{'─'.repeat(56)}</div>

      <ol className="papers__list content-width" aria-label="论文列表">
        {PAPERS.map((p, i) => (
          <li key={i} className="paper-item">
            <div className="paper-item__index" aria-hidden="true">[{i + 1}]</div>
            <div className="paper-item__body">
              <p className="paper-item__authors">{p.authors}</p>
              <a href={p.doi} target="_blank" rel="noopener noreferrer"
                 className="paper-item__title">
                {p.title}
              </a>
              <p className="paper-item__meta">
                <em>{p.journal}</em>
                {p.extra && <span>，{p.extra}</span>}
                <span>，{p.year}</span>
                <span className="paper-item__role">&nbsp;·&nbsp;{p.role}</span>
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
