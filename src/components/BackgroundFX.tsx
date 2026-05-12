export default function BackgroundFX() {
  return (
    <div className="bg-fx" aria-hidden="true">
      {/* 层①：点阵网格（纯 CSS，静态） */}
      <div className="bg-fx__grid" />

      {/* 层②：环境光晕（缓慢呼吸） */}
      <div className="bg-fx__glow bg-fx__glow--primary" />
      <div className="bg-fx__glow bg-fx__glow--accent" />

      {/* 层③：扫描线扫过效果 */}
      <div className="bg-fx__scanline" />
    </div>
  )
}
