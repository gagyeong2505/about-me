import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import ChatIntro from '../components/ChatIntro.jsx'
import ContactSection from '../components/ContactSection.jsx'
import ForestBackground from '../components/ForestBackground.jsx'
import ForestFriend from '../components/ForestFriend.jsx'
import LikesSection from '../components/LikesSection.jsx'
import profile from '../data/profile.js'
import profileImg from '../assets/profile.svg'
import { float, reducedMotion } from '../animations.js'

const NAV_ITEMS = [
  { id: 'chat', label: '수다' },
  { id: 'likes', label: '좋아하는 것' },
  { id: 'friend', label: '숲속 친구' },
  { id: 'contact', label: '연락처' },
]

function Section({ id, title, children }) {
  return (
    <Box component="section" id={id} aria-labelledby={`${id}-title`} sx={{ py: { xs: 5, md: 7 }, scrollMarginTop: 16 }}>
      <Typography
        variant="h2"
        component="h2"
        id={`${id}-title`}
        sx={{ mb: 4, textAlign: 'center', '&::before': { content: '"🌿 "' } }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  )
}

function AboutPage() {
  return (
    <Box sx={{ position: 'relative', minHeight: '100svh', bgcolor: 'forest.sky', color: 'text.primary' }}>
      <ForestBackground />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, pb: { xs: 16, md: 22 } }}>
        <Box component="header" sx={{ pt: { xs: 3, md: 4 } }}>
          <Box component="nav" aria-label="페이지 내 이동">
            <Box
              component="ul"
              sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}
            >
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    underline="none"
                    sx={{
                      display: 'inline-block',
                      px: 2,
                      py: 0.75,
                      borderRadius: 999,
                      fontWeight: 700,
                      color: 'text.primary',
                      bgcolor: 'background.paper',
                      border: 2,
                      borderColor: 'forest.leaf',
                      transition: 'transform 0.15s ease, background-color 0.15s ease',
                      '&:hover, &:focus-visible': { bgcolor: 'forest.leafSoft', transform: 'scale(1.05)' },
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: { xs: 3, sm: 5 },
              pt: { xs: 5, md: 8 },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <Box
              component="img"
              src={profileImg}
              alt={profile.avatarAlt}
              width={200}
              height={200}
              sx={{
                width: { xs: 160, md: 200 },
                height: 'auto',
                borderRadius: '50%',
                border: 6,
                borderColor: 'forest.sun',
                bgcolor: 'background.paper',
                transform: 'rotate(-3deg)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover, &:active': {
                  transform: 'rotate(3deg) scale(1.03)',
                  boxShadow: (t) => `0 0 0 10px ${t.palette.forest.sunSoft}`,
                },
              }}
            />
            <Box>
              <Typography
                component="p"
                sx={{
                  display: 'inline-block',
                  px: 2,
                  py: 0.5,
                  mb: 1.5,
                  borderRadius: 999,
                  fontWeight: 700,
                  bgcolor: 'forest.sun',
                  color: 'secondary.contrastText',
                }}
              >
                안녕, 나는 {profile.nickname}!
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  animation: `${float} 2.4s ease-in-out infinite`,
                  [reducedMotion]: { animation: 'none' },
                }}
              >
                {profile.name}
              </Typography>
              <Typography sx={{ mt: 1.5, fontSize: '1.15rem', color: 'text.secondary' }}>
                {profile.tagline}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box component="main">
          <Section id="chat" title="재잘재잘 수다 타임">
            <ChatIntro messages={profile.messages} />
          </Section>
          <Section id="likes" title="내가 좋아하는 것">
            <LikesSection likes={profile.likes} />
          </Section>
          <Section id="friend" title="숲속 친구를 소개할게">
            <ForestFriend lines={profile.friendLines} />
          </Section>
          <Section id="contact" title="나랑 이야기하자">
            <Typography sx={{ textAlign: 'center', mb: 3, color: 'text.secondary' }}>
              궁금한 게 있으면 언제든 말 걸어 줘. 답장은 빠르고 길게 할게!
            </Typography>
            <ContactSection contacts={profile.contacts} />
          </Section>
        </Box>

        <Box component="footer" sx={{ textAlign: 'center', pt: 2 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © 2026 {profile.name} · 햇살 드는 숲에서 만들었어요
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default AboutPage
