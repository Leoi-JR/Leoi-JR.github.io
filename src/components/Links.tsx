import { Mail } from 'lucide-react'
import GitHubIcon from './GitHubIcon'

const LINKS = [
  {
    icon: <GitHubIcon size={20} />,
    label: 'github.com/Leoi-JR',
    href: 'https://github.com/Leoi-JR',
    ariaLabel: 'GitHub 主页',
  },
  {
    icon: <Mail size={20} strokeWidth={1.5} aria-hidden="true" />,
    label: 'leoijianrong@gmail.com',
    href: 'mailto:leoijianrong@gmail.com',
    ariaLabel: '发送邮件',
  },
]

export default function Links() {
  return (
    <section className="links section" id="links" aria-label="联系方式">
      <div className="section-header content-width">
        <h2 className="section-title">Links</h2>
      </div>

      <div className="links__grid content-width" role="list">
        {LINKS.map(({ icon, label, href, ariaLabel }) => (
          <a
            key={href}
            href={href}
            className="links__item"
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            role="listitem"
          >
            {icon}
            <span>{label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
