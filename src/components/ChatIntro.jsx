import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import DoneAllRounded from '@mui/icons-material/DoneAllRounded'
import ChatBubble from './ChatBubble.jsx'
import { blink, reducedMotion } from '../animations.js'

const NEXT_MESSAGE_DELAY = 1300
const TILTS = [-1.5, 1, -0.5, 1.5, -1]

const visuallyHidden = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
}

function TypingDots() {
  return (
    <Box
      role="status"
      sx={{ display: 'flex', alignItems: 'center', gap: 0.75, ml: 4, py: 1 }}
    >
      <Box component="span" sx={visuallyHidden}>입력 중</Box>
      {[0, 1, 2].map((i) => (
        <Box
          key={i}
          aria-hidden="true"
          sx={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            bgcolor: 'forest.leafDeep',
            animation: `${blink} 1s ease-in-out ${i * 0.15}s infinite`,
            [reducedMotion]: { animation: 'none' },
          }}
        />
      ))}
    </Box>
  )
}

function ChatIntro({ messages }) {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [shown, setShown] = useState(1)
  const visibleCount = prefersReducedMotion ? messages.length : shown
  const isTyping = visibleCount < messages.length

  useEffect(() => {
    if (!isTyping) return undefined
    const timer = setTimeout(() => setShown((n) => n + 1), NEXT_MESSAGE_DELAY)
    return () => clearTimeout(timer)
  }, [isTyping, shown])

  return (
    <Box>
      <Box
        component="ol"
        role="log"
        aria-live="polite"
        aria-label="재잘이와의 대화"
        sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        {messages.slice(0, visibleCount).map((message, i) => (
          <Box component="li" key={message.id} sx={{ display: 'flex', flexDirection: 'column' }}>
            <ChatBubble
              tilt={TILTS[i % TILTS.length]}
              footer={
                <Typography
                  variant="caption"
                  sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.75, ml: 1, color: 'text.secondary' }}
                >
                  <DoneAllRounded aria-hidden="true" sx={{ fontSize: 16, color: 'primary.main' }} />
                  읽음
                </Typography>
              }
            >
              <Typography sx={{ fontSize: { xs: '1rem', sm: '1.1rem' }, fontWeight: 500 }}>
                {message.text}
              </Typography>
            </ChatBubble>
          </Box>
        ))}
      </Box>
      {isTyping && (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2, gap: 2 }}>
          <TypingDots />
          <Button variant="text" color="primary" onClick={() => setShown(messages.length)}>
            한 번에 다 보기
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default ChatIntro
