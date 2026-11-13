import { createTheme } from '@mui/material/styles'

// 재잘재잘 숲속 친구: 노랑·연두는 면과 장식에, 글자는 짙은 숲색으로 쓴다.
const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#2E6B34', contrastText: '#FFFFFF' },
        secondary: { main: '#FFD43B', contrastText: '#2A3B1F' },
        background: { default: '#FFFBEA', paper: '#FFFFFF' },
        text: { primary: '#22351C', secondary: '#4A5E3F' },
        forest: {
          sun: '#FFD43B',
          sunSoft: '#FFF1B8',
          leaf: '#A8E063',
          leafSoft: '#E4F7CC',
          leafDeep: '#5B9A35',
          trunk: '#8A5A3B',
          bubble: '#FFFFFF',
          bubbleMine: '#E4F7CC',
          sky: '#FFFBEA',
        },
      },
    },
    dark: {
      palette: {
        primary: { main: '#A8E063', contrastText: '#16240F' },
        secondary: { main: '#F2C94C', contrastText: '#16240F' },
        background: { default: '#14211A', paper: '#1D3024' },
        text: { primary: '#F3F8EA', secondary: '#C4D6B5' },
        forest: {
          sun: '#F2C94C',
          sunSoft: '#3A3820',
          leaf: '#7DB84E',
          leafSoft: '#24402B',
          leafDeep: '#4F8A35',
          trunk: '#6E4A33',
          bubble: '#1D3024',
          bubbleMine: '#2B4A2F',
          sky: '#14211A',
        },
      },
    },
  },
  typography: {
    fontFamily:
      '"Roboto", "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans KR", sans-serif',
    h1: { fontSize: 'clamp(2.25rem, 6vw, 3.75rem)', fontWeight: 800, lineHeight: 1.15 },
    h2: { fontSize: 'clamp(1.6rem, 4vw, 2.25rem)', fontWeight: 800, lineHeight: 1.2 },
    h3: { fontSize: '1.15rem', fontWeight: 700 },
    body1: { fontSize: '1rem', lineHeight: 1.7 },
    button: { fontWeight: 700, textTransform: 'none' },
  },
  shape: { borderRadius: 20 },
  spacing: 8,
})

export default theme
