const printQuote = () => {
  fetch("output.json")
    .then(data => data.json())
    .then(function (data) {
      const randIndex = Math.floor(Math.random() * data.length);
      const randQuote = data[randIndex];
	    quote.innerHTML = `"${ randQuote.Content }"`;
	    quoteAuthor.innerHTML = `- ${ randQuote.Title }`;
	});  
};

printQuote();
