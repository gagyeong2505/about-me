import { useState } from 'react'
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import Typography from '@mui/material/Typography'
import { float, hop, reducedMotion } from '../animations.js'

function Squirrel() {
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" aria-hidden="true">
      <path d="M96 118c30-6 38-40 22-62-10-14-30-14-34 2 12-2 20 8 16 22-4 14-14 22-22 30z" fill="#C98A55" />
      <path d="M100 70c6-2 10 4 8 10" fill="none" stroke="#E8B887" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="66" cy="96" rx="30" ry="32" fill="#D99A62" />
      <ellipse cx="66" cy="104" rx="17" ry="20" fill="#F6DDBA" />
      <circle cx="62" cy="56" r="26" fill="#D99A62" />
      <path d="M42 40l-4-16 14 8z" fill="#C98A55" />
      <path d="M78 36l8-14 2 16z" fill="#C98A55" />
      <circle cx="53" cy="54" r="4" fill="#22351C" />
      <circle cx="71" cy="54" r="4" fill="#22351C" />
      <circle cx="54.5" cy="52.5" r="1.3" fill="#fff" />
      <circle cx="72.5" cy="52.5" r="1.3" fill="#fff" />
      <ellipse cx="47" cy="64" rx="5" ry="3" fill="#FFA8A8" opacity=".75" />
      <ellipse cx="77" cy="64" rx="5" ry="3" fill="#FFA8A8" opacity=".75" />
      <path d="M57 64c3 4 7 4 10 0" fill="none" stroke="#22351C" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="66" cy="88" rx="9" ry="10" fill="#8A5A3B" />
      <path d="M57 84c2-8 16-8 18 0z" fill="#5E3A22" />
      <path d="M66 76v-4" stroke="#5E3A22" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function ForestFriend({ lines }) {
  const [talkCount, setTalkCount] = useState(0)
  const line = talkCount === 0 ? '안녕! 나를 눌러서 말을 걸어 봐 🌳' : lines[(talkCount - 1) % lines.length]

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Box
        aria-live="polite"
        sx={{
          position: 'relative',
          px: 3,
          py: 1.5,
          bgcolor: 'forest.sunSoft',
          border: 3,
          borderColor: 'forest.sun',
          borderRadius: 3,
          textAlign: 'center',
          '&::after': {
            content: '""',
            position: 'absolute',
            left: '50%',
            bottom: -14,
            transform: 'translateX(-50%)',
            borderStyle: 'solid',
            borderWidth: '14px 10px 0 10px',
            borderColor: (t) => `${t.palette.forest.sun} transparent transparent transparent`,
          },
        }}
      >
        <Typography sx={{ fontWeight: 700 }}>{line}</Typography>
      </Box>
      <ButtonBase
        onClick={() => setTalkCount((n) => n + 1)}
        aria-label="숲속 친구 도토리에게 말 걸기"
        sx={{
          borderRadius: '50%',
          p: 1,
          animation: `${float} 2.4s ease-in-out infinite`,
          '&:focus-visible': { outline: 4, outlineColor: 'primary.main', outlineOffset: 4 },
          [reducedMotion]: { animation: 'none' },
        }}
      >
        <Box
          key={talkCount}
          sx={{
            display: 'flex',
            animation: talkCount > 0 ? `${hop} 0.5s ease-out` : 'none',
            [reducedMotion]: { animation: 'none' },
          }}
        >
          <Squirrel />
        </Box>
      </ButtonBase>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        다람쥐 도토리를 눌러 보세요 (말 건 횟수: {talkCount})
      </Typography>
    </Box>
  )
}

export default ForestFriend
