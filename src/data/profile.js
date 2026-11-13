// 자기소개 내용. 아래 값만 바꾸면 페이지 내용이 바뀐다. (가상 인물)
const profile = {
  name: '나다솜',
  nickname: '재잘이',
  tagline: '숲길 산책과 수다를 사랑하는 새내기 웹 개발자',
  avatarAlt: '노란 모자를 쓰고 활짝 웃는 나다솜의 일러스트 프로필',
  messages: [
    { id: 'hi', text: '안녕! 나는 다솜이야. 친구들은 재잘이라고 불러 🐿️' },
    { id: 'from', text: '햇살 좋은 숲 근처 동네에서 자랐어. 지금은 서울에 살아!' },
    { id: 'job', text: '요즘은 React로 귀엽고 쓰기 편한 웹을 만드는 공부를 하고 있어.' },
    { id: 'talk', text: '말하는 걸 정말 좋아해서 회의 시간엔 아이디어가 멈추지 않아 💬' },
    { id: 'more', text: '아래로 내려가면 내가 좋아하는 것들도 보여줄게. 같이 가자!' },
  ],
  likes: [
    { id: 'walk', icon: 'forest', title: '숲길 산책', text: '주말마다 새로운 산책로를 찾아 걸어요.' },
    { id: 'chat', icon: 'chat', title: '수다 떨기', text: '좋은 이야기는 커피 한 잔과 함께라면 두 배!' },
    { id: 'code', icon: 'code', title: '웹 만들기', text: '작은 인터랙션 하나로 웃게 만드는 화면이 좋아요.' },
    { id: 'photo', icon: 'camera', title: '나뭇잎 사진', text: '계절마다 달라지는 잎 색을 모으고 있어요.' },
  ],
  friendLines: [
    '도토리 하나 줄까? 🌰',
    '오늘 날씨 진짜 좋다! ☀️',
    '다솜이는 말이 정말 많아. 나보다 많아!',
    '나뭇잎 사이로 햇살 보이지? 반짝반짝 ✨',
    '간지러워! 히히',
  ],
  contacts: [
    { id: 'email', icon: 'email', label: '이메일', href: 'mailto:hello@example.com' },
    { id: 'github', icon: 'github', label: 'GitHub', href: 'https://github.com/example' },
    { id: 'instagram', icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/example' },
  ],
}

export default profile
