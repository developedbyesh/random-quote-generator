const quotes = [
  'The best way to predict the future is to invent it. – Alan Kay',
  'Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll',
  'Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs',
  'The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt',
  'In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.',
  'The purpose of our lives is to be happy. – Dalai Lama',
  'Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer',
  "Life is what happens when you're busy making other plans. – John Lennon",
  'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. – Buddha',
  'In the middle of every difficulty lies opportunity. – Albert Einstein',
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  console.log(randomIndex);
  const randomQuote = quotes[randomIndex];
  document.getElementById('quote').innerText = randomQuote;
}

document.getElementById('newQuoteBtn').addEventListener('click', generateQuote);
