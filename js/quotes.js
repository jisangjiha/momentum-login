const quotes = [
  {
    quote: "When you have faults, do not fear to abandon them.",
    author: "Confucios",
  },
  { quote: "Age is no guarantee of maturity.", author: "Lawana Blackwell" },
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Madndela",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  { quote: "The die is cast.", author: "Julius caesar" },
  {
    quote: "Only I can change me life, no one can do it for me.",
    author: "Carol Burnett",
  },
  { quote: "When in doubt, choose change.", author: "Lily Leung" },
  { quote: "Life is unfair, get used to it.", author: "Bill Gates" },
  { quote: "Being happy never goes out of style.", author: "Lilly Pulitzer" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;