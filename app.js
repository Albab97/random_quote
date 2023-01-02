let btn = document.querySelector('.btn')
let quote = document.querySelector('.quote')
let author = document.querySelector('.author')

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    author: `Mahatma Gandhi`
},{
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    author: `Albert Einstein`
},{
    quote: `"Your time is limited, so don't waste it living someone else's life."`,
    author: `Steve Jobs`
},{
    quote: `"Tell me and I forget, teach me and I remember, involve me and I learn."`,
    author: `Benjamin Franklin`
},{
    quote: `"The journey of a thousand miles begins with one step."`,
    author: `Lao Tzu`
},{
    quote: `"It doesn't matter how slowly you go as long as you don't stop."`,
    author: `Confucious`
}];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
})