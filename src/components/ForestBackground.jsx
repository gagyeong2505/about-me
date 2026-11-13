import Box from '@mui/material/Box'
import { reducedMotion, spin, sway } from '../animations.js'

const LEAVES = [
  { top: '14%', left: '6%', size: 28, delay: '0s', color: 'forest.leaf' },
  { top: '32%', left: '90%', size: 22, delay: '1.2s', color: 'forest.leafDeep' },
  { top: '52%', left: '3%', size: 18, delay: '0.6s', color: 'forest.sun' },
  { top: '68%', left: '94%', size: 26, delay: '2s', color: 'forest.leaf' },
  { top: '84%', left: '10%', size: 20, delay: '1.6s', color: 'forest.leafDeep' },
]

const TREES = [
  { x: 40, h: 150, tone: 'leafDeep' },
  { x: 150, h: 110, tone: 'leaf' },
  { x: 260, h: 170, tone: 'leafDeep' },
  { x: 380, h: 120, tone: 'leaf' },
  { x: 820, h: 130, tone: 'leaf' },
  { x: 930, h: 175, tone: 'leafDeep' },
  { x: 1050, h: 115, tone: 'leaf' },
  { x: 1160, h: 155, tone: 'leafDeep' },
]

function Leaf({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 20C4 10 10 4 20 4c0 10-6 16-16 16z" />
      <path d="M4 20L14 10" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />
    </svg>
  )
}

function ForestBackground() {
  return (
    <Box
      aria-hidden="true"
      sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}
    >
      {/* 햇살 */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: -70, md: -90 },
          right: { xs: -70, md: -60 },
          width: { xs: 200, md: 280 },
          height: { xs: 200, md: 280 },
          color: 'forest.sun',
          animation: `${spin} 60s linear infinite`,
          [reducedMotion]: { animation: 'none' },
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="currentColor">
          {Array.from({ length: 12 }, (_, i) => (
            <rect
              key={i}
              x="96"
              y="4"
              width="8"
              height="30"
              rx="4"
              transform={`rotate(${i * 30} 100 100)`}
              opacity="0.7"
            />
          ))}
          <circle cx="100" cy="100" r="56" />
        </svg>
      </Box>

      {/* 흩날리는 나뭇잎 */}
      {LEAVES.map((leaf) => (
        <Box
          key={`${leaf.top}-${leaf.left}`}
          sx={{
            position: 'absolute',
            top: leaf.top,
            left: leaf.left,
            color: leaf.color,
            opacity: 0.8,
            animation: `${sway} 5s ease-in-out ${leaf.delay} infinite`,
            [reducedMotion]: { animation: 'none' },
          }}
        >
          <Leaf size={leaf.size} />
        </Box>
      ))}

      {/* 바닥의 나무들 */}
      <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: { xs: 110, md: 170 } }}>
        <svg width="100%" height="100%" viewBox="0 0 1200 180" preserveAspectRatio="xMidYMax slice">
          {TREES.map((tree) => (
            <g key={tree.x}>
              <Box component="rect" x={tree.x - 6} y={180 - 40} width="12" height="40" rx="4" sx={{ fill: (t) => t.palette.forest.trunk }} />
              <Box
                component="ellipse"
                cx={tree.x}
                cy={180 - tree.h / 2 - 20}
                rx={tree.h / 3.2}
                ry={tree.h / 2}
                sx={{ fill: (t) => t.palette.forest[tree.tone] }}
              />
            </g>
          ))}
          <Box component="path" d="M0 170 Q300 150 600 168 T1200 165 V180 H0Z" sx={{ fill: (t) => t.palette.forest.leafDeep }} />
        </svg>
      </Box>
    </Box>
  )
}

export default ForestBackground
