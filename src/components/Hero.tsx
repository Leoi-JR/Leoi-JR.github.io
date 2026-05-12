import { useEffect, useRef, useState } from 'react'
import { Mail } from 'lucide-react'
import GitHubIcon from './GitHubIcon'

const LINES = [
  { prompt: '$', text: ' ./describe.sh' },
  { prompt: '>', text: '研究生深耕空间计算与 NLP，SCI 论文 2 篇；' },
  { prompt: '>', text: '构建产业经济数据全链路工具链，专注 AI 工程 / LLM 落地。' },
]

function useTypewriter(text: string, speed = 30, start = false) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    if (!start) return
    setDisplayed('')
    let i = 0
    const id = setInterval(() => {
      setDisplayed(text.slice(0, ++i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed, start])
  return displayed
}

export default function Hero() {
  const [step, setStep] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStep(1); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const l0 = useTypewriter(LINES[0].text, 40, step >= 1)
  const l1 = useTypewriter(LINES[1].text, 28, step >= 2)
  const l2 = useTypewriter(LINES[2].text, 28, step >= 3)

  useEffect(() => { if (l0.length === LINES[0].text.length && step === 1) setStep(2) }, [l0, step])
  useEffect(() => { if (l1.length === LINES[1].text.length && step === 2) setStep(3) }, [l1, step])

  const done = step >= 3 && l2.length === LINES[2].text.length

  return (
    <section className="hero section" ref={ref} aria-label="个人介绍">
      {/* 命令行标题 */}
      <div className="cmd-line content-width" style={{ opacity: step >= 1 ? 1 : 0, transition: 'opacity 0.4s' }}>
        <span className="prompt" aria-hidden="true">$</span>
        <span className="cmd"> cat hero.txt</span>
      </div>
      <div className="divider content-width" aria-hidden="true">{'═'.repeat(56)}</div>

      <div className="hero__spacer" />

      {/* 头像 + 名称区 */}
      <div
        className="hero__profile content-width"
        style={{ opacity: step >= 1 ? 1 : 0, transform: step >= 1 ? 'none' : 'translateY(16px)', transition: 'opacity 0.6s 0.1s, transform 0.6s 0.1s' }}
      >
        {/* 头像 */}
        <div className="hero__avatar" role="img" aria-label="头像">
          <img src="/avatar.png" alt="LeoiJR" className="hero__avatar-img" />
        </div>

        {/* 名称 + 职位 */}
        <div className="hero__name-block">
          <h1 className="hero__alias hero__name-h1">
            <span className="prompt" aria-hidden="true">~&gt;</span>
            &nbsp;LeoiJR
          </h1>
          <p className="hero__tag">AI 工程师 &nbsp;//&nbsp; NLP 工程师 &nbsp;//&nbsp; LLM 应用开发者</p>
          {/* 联系方式行 */}
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

      {/* 终端描述框 */}
      <div className="hero__terminal content-width" role="region" aria-label="自我介绍终端">
        <div className="hero__tb-line">
          <span className="hero__tb-prompt" aria-hidden="true">{LINES[0].prompt}</span>
          <span>{l0}</span>
          {step === 1 && l0.length < LINES[0].text.length && <span className="cursor" aria-hidden="true" />}
        </div>
        {step >= 2 && (
          <div className="hero__tb-line">
            <span className="hero__tb-prompt accent" aria-hidden="true">{LINES[1].prompt}</span>
            <span className="secondary">{l1}</span>
            {step === 2 && l1.length < LINES[1].text.length && <span className="cursor" aria-hidden="true" />}
          </div>
        )}
        {step >= 3 && (
          <div className="hero__tb-line">
            <span className="hero__tb-prompt accent" aria-hidden="true">{LINES[2].prompt}</span>
            <span className="secondary">{l2}</span>
            {!done && <span className="cursor" aria-hidden="true" />}
            {done && <span className="cursor" aria-hidden="true" />}
          </div>
        )}
      </div>

      <div className="hero__spacer hero__spacer--lg" />

      {/* CTA 按钮 */}
      <div className="hero__cta content-width" role="group" aria-label="操作按钮">
        <a href="#projects" className="btn btn--primary">[ 查看项目 ]</a>
      </div>
    </section>
  )
}
