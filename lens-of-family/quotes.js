// quotes.js

import quotes from '../lens-of-family/quotes.mjs'; 


// Get the quote-container element where the quotes will be appended
const quoteContainer = document.getElementById('quote-container');

// Iterate over the quotes array and create dynamic quote boxes
quotes.forEach(quote => {
  // Create the quote box div
  const quoteBox = document.createElement('div');
  quoteBox.classList.add('quote-box');
  
  // Create the quote text paragraph
  const quoteText = document.createElement('p');
  quoteText.textContent = `"${quote.text}"`;
  
  // Create the author span
  const quoteAuthor = document.createElement('span');
  quoteAuthor.textContent = `- ${quote.author}`;
  
  // Append the quote text and author to the quote box
  quoteBox.appendChild(quoteText);
  quoteBox.appendChild(quoteAuthor);
  
  // Append the quote box to the quote container
  quoteContainer.appendChild(quoteBox);
});

