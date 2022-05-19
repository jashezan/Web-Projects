AOS.init();
const text = document.getElementById("text");
const author = document.getElementById("author");
const qbtn = document.getElementById("qbtn");
const tbtn = document.getElementById("tbtn");

let data = [];
let quote = {};

const getNewQuote = (quotes) => {
  let rnum = Math.floor(Math.random() * quotes.length);
  quote = quotes[rnum];
  text.innerText = `" ${quote.text} "`;
  author.innerText = `- ${
    quote.author ? quote.author : "Some Wise Man"
  }`;
};

const getQuote = async () => {
  data = await fetch("https://type.fit/api/quotes");
  data = await data.json();
  getNewQuote(data);
};

getQuote();

const tweetNow = (data)=>{
  let url = `https://twitter.com/intent/tweet?text=${quote.text} %0A%0A - ${quote.author}`;
  window.open(url);
}

qbtn.addEventListener("click", () => {
  getNewQuote(data);
});

tbtn.addEventListener("click", () => {
  tweetNow(data);
});
