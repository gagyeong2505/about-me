import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import EmailRounded from '@mui/icons-material/EmailRounded'
import GitHub from '@mui/icons-material/GitHub'
import Instagram from '@mui/icons-material/Instagram'
import { bounce, reducedMotion } from '../animations.js'

const ICONS = {
  email: EmailRounded,
  github: GitHub,
  instagram: Instagram,
}

function ContactSection({ contacts }) {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
      {contacts.map((contact) => {
        const Icon = ICONS[contact.icon]
        const isExternal = contact.href.startsWith('http')
        return (
          <Button
            key={contact.id}
            component="a"
            href={contact.href}
            variant="contained"
            size="large"
            startIcon={<Icon aria-hidden="true" />}
            {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
            sx={{
              px: 3,
              py: 1.5,
              borderRadius: 999,
              boxShadow: (t) => `0 4px 0 ${t.palette.forest.leafDeep}`,
              '&:hover, &:focus-visible': {
                animation: `${bounce} 0.4s ease-out forwards`,
                bgcolor: 'primary.main',
              },
              [reducedMotion]: { '&:hover, &:focus-visible': { animation: 'none' } },
            }}
          >
            {contact.label}
            {isExternal && (
              <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
                (새 창에서 열림)
              </span>
            )}
          </Button>
        )
      })}
    </Stack>
  )
}

export default ContactSection
