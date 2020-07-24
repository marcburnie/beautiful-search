const box = $('.sfbg');
box.remove();

$.get('https://picsum.photos/list', (result) => {
  // const result = JSON.parse(response);
  console.log(result, 'result');

  function getRandomArbitrary() {
    return Math.floor(Math.random() * result.length);
  }

  let random = getRandomArbitrary();
  console.log(random, 'random');
  let image = 'https://unsplash.it/1700/1000?image=' + result[random].id;
  console.log(image, 'image');

  $('#viewport').css(
    'background',
    `url('${image}') no-repeat center center fixed`
  );
});

setTimeout(quotation, 1000);

function quotation() {
  $.get('https://type.fit/api/quotes', (response) => {
    const data = JSON.parse(response);
    function randomize() {
      return Math.floor(Math.random() * data.length);
    }
    let randomQuote = randomize();

    if (data[randomQuote].text.length > 80) return quotation();

    $('#searchform').prepend(
      `<center><blockquote id="quote"> <span class="color">${data[randomQuote].text}</span></blockquote></center> <center><p><span class="color"> ${data[randomQuote].author} </span></p></center> `
    );
    // console.log(data[randomQuote], 'dataRandom');
  });
}
