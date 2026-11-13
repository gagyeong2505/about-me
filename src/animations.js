import { keyframes } from '@mui/material/styles'

// 움직임을 줄이도록 설정한 사용자에게는 애니메이션을 끈다.
export const reducedMotion = '@media (prefers-reduced-motion: reduce)'

export const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`

export const bounce = keyframes`
  0% { transform: scale(1); }
  40% { transform: scale(1.08); }
  70% { transform: scale(0.98); }
  100% { transform: scale(1.04); }
`

export const popIn = keyframes`
  0% { opacity: 0; transform: translateY(12px) scale(0.9); }
  70% { opacity: 1; transform: translateY(-2px) scale(1.02); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`

export const sway = keyframes`
  0%, 100% { transform: rotate(-10deg) translateY(0); }
  50% { transform: rotate(10deg) translateY(8px); }
`

export const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const hop = keyframes`
  0%, 100% { transform: translateY(0) scaleY(1); }
  20% { transform: translateY(0) scaleY(0.9); }
  50% { transform: translateY(-20px) scaleY(1.05); }
  80% { transform: translateY(0) scaleY(0.95); }
`

export const blink = keyframes`
  0%, 80%, 100% { opacity: 0.25; transform: translateY(0); }
  40% { opacity: 1; transform: translateY(-3px); }
`
