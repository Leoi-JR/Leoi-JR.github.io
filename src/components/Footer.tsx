export default function Footer() {
  return (
    <footer className="footer section" id="contact" aria-label="页脚与联系方式">
      <div className="cmd-line content-width" style={{ fontSize: 'var(--fs-md)' }}>
        <span className="prompt" aria-hidden="true">$</span>
        <span className="cmd"> mail -s "期待合作" leoijianrong@gmail.com</span>
      </div>

      <p className="footer__tag content-width">
        // 开放全职 &amp; 项目合作机会
      </p>

      <div className="divider content-width" style={{ paddingTop: 'var(--sp-4)' }} aria-hidden="true">
        {'─'.repeat(56)}
      </div>

      <div className="footer__copy content-width">
        <span>© 2026 LeoiJR</span>
        <span className="footer__blink" aria-hidden="true">
          <span className="cursor" style={{ width: 10, height: 16 }} />
          {' _'}
        </span>
      </div>
    </footer>
  )
}
