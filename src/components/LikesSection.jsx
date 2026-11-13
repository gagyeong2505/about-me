import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ChatBubbleRounded from '@mui/icons-material/ChatBubbleRounded'
import CodeRounded from '@mui/icons-material/CodeRounded'
import Forest from '@mui/icons-material/Forest'
import PhotoCameraRounded from '@mui/icons-material/PhotoCameraRounded'
import { bounce, reducedMotion } from '../animations.js'

const ICONS = {
  forest: Forest,
  chat: ChatBubbleRounded,
  code: CodeRounded,
  camera: PhotoCameraRounded,
}

function LikesSection({ likes }) {
  return (
    <Box
      component="ul"
      sx={{
        listStyle: 'none',
        m: 0,
        p: 0,
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
        gap: 3,
      }}
    >
      {likes.map((like, i) => {
        const Icon = ICONS[like.icon]
        return (
          <Box
            component="li"
            key={like.id}
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'flex-start',
              p: 3,
              bgcolor: 'background.paper',
              border: 3,
              borderColor: i % 2 === 0 ? 'forest.leaf' : 'forest.sun',
              borderRadius: 4,
              transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
              '&:hover, &:active': { animation: `${bounce} 0.4s ease-out forwards` },
              [reducedMotion]: { '&:hover, &:active': { animation: 'none' } },
            }}
          >
            <Box
              sx={{
                flexShrink: 0,
                display: 'grid',
                placeItems: 'center',
                width: 52,
                height: 52,
                borderRadius: '50%',
                bgcolor: i % 2 === 0 ? 'forest.leafSoft' : 'forest.sunSoft',
                color: 'primary.main',
              }}
            >
              <Icon aria-hidden="true" />
            </Box>
            <Box>
              <Typography variant="h3" component="h3" sx={{ mb: 0.5 }}>
                {like.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>{like.text}</Typography>
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default LikesSection
