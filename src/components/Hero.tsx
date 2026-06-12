import { Mail } from 'lucide-react'
import GitHubIcon from './GitHubIcon'

export default function Hero() {
  return (
    <section className="hero section" aria-label="个人介绍">
      <div className="hero__spacer" />

      <div className="hero__profile content-width">
        <div className="hero__avatar" role="img" aria-label="头像">
          <img src="/avatar.png" alt="LeoiJR" className="hero__avatar-img" />
        </div>

        <div className="hero__name-block">
          <h1 className="hero__name-h1">LeoiJR</h1>
          <p className="hero__tag">AI Engineer / NLP Engineer / LLM Developer</p>
          <div className="hero__contact-row">
            <a href="https://github.com/Leoi-JR" target="_blank" rel="noopener noreferrer"
               className="hero__contact-link" aria-label="GitHub 主页">
              <GitHubIcon size={14} />
              github.com/Leoi-JR
            </a>
            <a href="mailto:leoijianrong@gmail.com" className="hero__contact-link" aria-label="发送邮件">
              <Mail size={14} strokeWidth={1.5} aria-hidden="true" />
              leoijianrong@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="hero__spacer" />

      <div className="hero__intro content-width">
        <p>研究生方向为空间计算与 NLP，参与发表 SCI 论文 2 篇；</p>
        <p>主要负责非结构化数据清洗至 RAG 系统落地的相关工程，从事 AI 工程与 LLM 应用开发。</p>
      </div>

      <div className="hero__spacer hero__spacer--lg" />

      <div className="hero__cta content-width" role="group" aria-label="操作按钮">
        <a href="#projects" className="btn btn--primary">View Projects</a>
      </div>
    </section>
  )
}
