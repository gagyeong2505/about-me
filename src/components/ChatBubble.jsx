import Box from '@mui/material/Box'
import { bounce, popIn, reducedMotion } from '../animations.js'

// CSS로 그린 말풍선. tilt는 살짝 기울이는 각도(deg)다.
function ChatBubble({ children, tilt = 0, footer }) {
  return (
    <Box
      sx={{
        position: 'relative',
        alignSelf: 'flex-start',
        maxWidth: { xs: '100%', sm: '85%' },
        ml: 2,
        animation: `${popIn} 0.45s ease-out both`,
        [reducedMotion]: { animation: 'none' },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          px: 2.5,
          py: 1.5,
          bgcolor: 'forest.bubble',
          color: 'text.primary',
          border: 3,
          borderColor: 'forest.leaf',
          borderRadius: 3,
          borderBottomLeftRadius: 6,
          boxShadow: (t) => `4px 4px 0 ${t.palette.forest.leafSoft}`,
          transform: `rotate(${tilt}deg)`,
          transition: 'transform 0.2s ease',
          '&:hover, &:active': {
            animation: `${bounce} 0.4s ease-out forwards`,
          },
          [reducedMotion]: { '&:hover, &:active': { animation: 'none' } },
          // 말풍선 꼬리
          '&::before': {
            content: '""',
            position: 'absolute',
            left: -16,
            bottom: 8,
            borderStyle: 'solid',
            borderWidth: '8px 16px 8px 0',
            borderColor: (t) => `transparent ${t.palette.forest.leaf} transparent transparent`,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            left: -10,
            bottom: 11,
            borderStyle: 'solid',
            borderWidth: '5px 10px 5px 0',
            borderColor: (t) => `transparent ${t.palette.forest.bubble} transparent transparent`,
          },
        }}
      >
        {children}
      </Box>
      {footer}
    </Box>
  )
}

export default ChatBubble
