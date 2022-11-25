const lyricses = [
  {
    lyrics: "더 미쳐 놀아 봐 즐기면서 해도 난 너무 쉽게 올라가",
    title: "Arcade",
  },
  { lyrics: "널 맞이할 내일이 금보다 빛나", title: "Better Than Gold" },
  {
    lyrics: "아무 걱정 하지 마 잘 될 거야 Hello Future",
    title: "Hello Future",
  },
  {
    lyrics:
      "잠깐 흔들려도 돼 멀리 돌아가도 돼 즐길 수 있으면 돼 결국 행복하면 돼",
    title: "오르골 (Life is Syill Going On)",
  },
  {
    lyrics: "이 밤이 가도 우리 이야기는 계속될 테니까",
    title: "Dream Run",
  },
  {
    lyrics: "내 삶을 위해 난 싸울거야 난 이 삶과의 사랑에 빠진 거니까",
    title: "Diggity",
  },
  {
    lyrics: "세상이 내 품에 있어 과거도 미래도 즐기고 있을 거야",
    title: "Diggity",
  },
  {
    lyrics: "이 돌고 도는 계절 속에 물든 너를 기억해 우릴 기억해 오래도록",
    title: "우리의 계절 (My Youth)",
  },
  {
    lyrics: "넌 이대로 있어주면 돼 늘 지금처럼만",
    title: "지금처럼만 (Be There For You)",
  },
  { lyrics: "믿어 뒤 보지 말고 같이 뛰어", title: "Trigger The Fever" },
];

const lyrics = document.querySelector("#lyrics span:first-child");
const title = document.querySelector("#lyrics span:last-child");

const todaysLyrics = lyricses[Math.floor(Math.random() * lyricses.length)];

lyrics.innerText = todaysLyrics.lyrics;
title.innerText = todaysLyrics.title;
