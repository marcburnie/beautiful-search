// removes div that causes a blank strip across webpage
const box = $('.sfbg');
box.remove();

// random number generator
const randomize = (len) => {
  return Math.floor(Math.random() * len);
};

// gets random photo from photo API and displays it as background to webpage
$.get('https://picsum.photos/list', (response) => {
  let randomImage = randomize(response.length);
  let image = 'https://unsplash.it/1900/1000?image=' + response[randomImage].id;

  $('#viewport').css(
    'background',
    `url('${image}') no-repeat center center fixed`
  );
});

// gets random quote from quote API and displays it on webpage
const quotation = () => {
  $.get('https://type.fit/api/quotes', (response) => {
    const data = JSON.parse(response);
    let randomQuote = randomize(data.length);

    if (data[randomQuote].text.length > 80) return quotation();

    let author = data[randomQuote].author;
    if (author === null) author = 'Unknown';

    $('div#searchform.jhp').prepend(
      `<center><blockquote id="quote"> <span class="color">${data[randomQuote].text}</span></blockquote></center> <center><p><span class="color"> ~ ${author} ~</span></p></center> `
    );
  });
};

// sends quote function to web API to give photo time to load
setTimeout(quotation, 1000);
