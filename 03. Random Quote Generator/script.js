const quotes = [
  {
    name: "Albert Einstein",
    quote: "Imagination is more important than knowledge.",
  },
  {
    name: "Maya Angelou",
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
  {
    name: "Walt Disney",
    quote: "The way to get started is to quit talking and begin doing.",
  },
  {
    name: "Nelson Mandela",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    name: "Steve Jobs",
    quote: "Your time is limited, don't waste it living someone else's life.",
  },
  {
    name: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    name: "Mark Twain",
    quote: "The secret of getting ahead is getting started.",
  },
  {
    name: "Helen Keller",
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
  },
  {
    name: "William Shakespeare",
    quote:
      "The fool doth think he is wise, but the wise man knows himself to be a fool.",
  },
  {
    name: "Ralph Waldo Emerson",
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  },
  {
    name: "Martin Luther King Jr.",
    quote:
      "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
  },
  {
    name: "Eleanor Roosevelt",
    quote: "No one can make you feel inferior without your consent.",
  },
  {
    name: "Thomas Edison",
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
  },
  {
    name: "Gandhi",
    quote:
      "The weak can never forgive. Forgiveness is the attribute of the strong.",
  },
  {
    name: "J.K. Rowling",
    quote: "It does not do well to dwell on dreams and forget to live.",
  },
  {
    name: "Bob Marley",
    quote:
      "The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.",
  },
  {
    name: "Aristotle",
    quote:
      "It is during our darkest moments that we must focus to see the light.",
  },
  {
    name: "Mother Teresa",
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  },
  {
    name: "Henry Ford",
    quote: "Whether you think you can, or you think you can't – you're right.",
  },
  {
    name: "Confucius",
    quote:
      "Our greatest glory is not in never falling, but in rising every time we fall.",
  },
];

const quoteBtn = document.getElementById("quote-btn");
const quteEl = document.getElementById("quote");
const author = document.getElementById("author");

quoteBtn.addEventListener("click", function () {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  quteEl.innerText = quotes[randomQuote].quote;
  author.innerText = quotes[randomQuote].name;
});
