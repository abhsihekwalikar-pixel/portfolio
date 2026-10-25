import { motion, useReducedMotion } from 'framer-motion'

const codeRows = [
  { indent: 0, segments: [['keyword', 'const'], ['plain', ' interface = {']] },
  { indent: 1, segments: [['property', '  performance'], ['plain', ': '], ['value', "'optimized'"]] },
  { indent: 1, segments: [['property', '  accessibility'], ['plain', ': '], ['value', 'true']] },
  { indent: 1, segments: [['property', '  scale'], ['plain', ': '], ['value', "'without limits'"]] },
  { indent: 0, segments: [['plain', '}']] },
]

const chartBars = [32, 46, 40, 63, 54, 76, 68, 91, 82, 100, 86, 108]

export default function HeroVisual() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="hero-visual" aria-label="Abstract code editor and performance dashboard">
      <motion.div
        className="hero-visual__float"
        animate={shouldReduceMotion ? undefined : { y: [0, -12, 0] }}
        transition={shouldReduceMotion ? undefined : { duration: 6, ease: 'easeInOut', repeat: Infinity }}
      >
        <div className="hero-visual__tilt">
          <div className="hero-visual__glow" aria-hidden="true" />
          <div className="hero-visual__window">
            <div className="hero-visual__topbar">
              <div className="hero-visual__dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <span className="hero-visual__filename">high5 / experience.ts</span>
              <span className="hero-visual__topbar-mark">● LIVE</span>
            </div>

            <div className="hero-visual__workspace">
              <div className="hero-visual__code">
                <div className="hero-visual__tabs">
                  <span className="hero-visual__tab hero-visual__tab--active">experience.ts</span>
                  <span className="hero-visual__tab">preview</span>
                </div>
                <div className="hero-visual__editor">
                  {codeRows.map((row, index) => (
                    <div className="hero-visual__code-row" key={`code-${index}`}>
                      <span className="hero-visual__line-number">{String(index + 1).padStart(2, '0')}</span>
                      <code style={{ paddingLeft: `${row.indent * 14}px` }}>
                        {row.segments.map(([style, text], segmentIndex) => (
                          <span className={`hero-visual__syntax hero-visual__syntax--${style}`} key={`${index}-${segmentIndex}`}>
                            {text}
                          </span>
                        ))}
                      </code>
                    </div>
                  ))}
                  <div className="hero-visual__code-row hero-visual__code-row--comment">
                    <span className="hero-visual__line-number">06</span>
                    <code>// built with intent</code>
                  </div>
                </div>
              </div>

              <div className="hero-visual__dashboard">
                <div className="hero-visual__dashboard-label">
                  <span>System performance</span>
                  <span>LIVE</span>
                </div>
                <div className="hero-visual__metric">
                  <strong>98<span>/100</span></strong>
                  <span className="hero-visual__metric-change">↗ 12.8%</span>
                </div>
                <div className="hero-visual__chart" aria-hidden="true">
                  <div className="hero-visual__chart-grid" />
                  <svg viewBox="0 0 300 118" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="hero-chart-fill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 93 C24 87 25 72 49 78 S76 68 92 72 S119 48 143 58 S169 54 190 39 S216 49 235 32 S270 34 300 10 V118 H0Z" fill="url(#hero-chart-fill)" />
                    <path d="M0 93 C24 87 25 72 49 78 S76 68 92 72 S119 48 143 58 S169 54 190 39 S216 49 235 32 S270 34 300 10" fill="none" stroke="#10b981" strokeWidth="2" />
                  </svg>
                  <div className="hero-visual__chart-bars">
                    {chartBars.map((height, index) => (
                      <i key={`bar-${index}`} style={{ height: `${height}px` }} />
                    ))}
                  </div>
                </div>
                <div className="hero-visual__chart-labels"><span>09:00</span><span>12:00</span><span>15:00</span><span>18:00</span></div>
              </div>
            </div>

            <div className="hero-visual__status">
              <span><i /> All systems operational</span>
              <span>BUILD 001 — HIGH5</span>
            </div>
          </div>
        </div>
      </motion.div>
      <span className="hero-visual__caption">Thoughtful engineering. By design.</span>
    </div>
  )
}
