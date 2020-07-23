// var box = document.getElementsByClassName('.light-chip');
// var boxParent = box.parentElement();
// box.parentNode.removeChild(box);

const box = $('.sfbg');
// box.parent();
box.remove();

// const contents = document.getElementById('contents');
// const contentsParent = contents.parent();
// contents.parentNode.removeChild(contents);
// contentsParent.insertBefore(el, contentsParent.firstChild);

// $.ajax({
//   method: 'GET',
//   url: 'https://picsum.photos/list',
//   success: function (result) {
//     function getRandomArbitrary(min, max) {
//       return Math.floor(Math.random() * (max - min) + min);
//     }

//     let image = getRandomArbitrary(0, result.length - 1);

//     var contents = $('#contents');
//     var contentsParent = contents.parent();

//     contentsParent.prepend(
//       '<img src="https://unsplash.it/1200/800?image=" + image.id>'
//     );

//     var message = contentsParent.prepend(
//       '<div>Get back to building your dreams</div>'
//     );

//     message.addClass('beautText');
//     contents.remove();
//   },
//   error: function (err) {},
// });

const quotes = [
  {
    quote:
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    author: 'Martin Fowler',
  },
  {
    quote: 'First, solve the problem. Then, write the code.',
    author: 'John Johnson',
  },
  {
    quote: 'Experience is the name everyone gives to their mistakes.',
    author: 'Oscar Wilde',
  },
  {
    quote: 'In order to be irreplaceable, one must always be different',
    author: 'Coco Chanel',
  },
  {
    quote: 'Java is to JavaScript what car is to Carpet.',
    author: 'Chris Heilmann',
  },
  {
    quote: 'Knowledge is power.',
    author: 'Francis Bacon',
  },
  {
    quote:
      'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.',
    author: 'Dan Salomon',
  },
  {
    quote:
      'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.',
    author: 'Antoine de Saint-Exupery',
  },
  {
    quote: 'Code is like humor. When you have to explain it, it’s bad.',
    author: 'Cory House',
  },
  {
    quote: 'Fix the cause, not the symptom.',
    author: 'Steve Maguire',
  },
  {
    quote:
      'Optimism is an occupational hazard of programming: feedback is the treatment.',
    author: 'Kent Beck',
  },
  {
    quote:
      'When to use iterative development? You should use iterative development only on projects that you want to succeed.',
    author: 'Martin Fowler',
  },
  {
    quote: 'Simplicity is the soul of efficiency.',
    author: 'Austin Freeman',
  },
  {
    quote: 'Before software can be reusable it first has to be usable.',
    author: 'Ralph Johnson',
  },
  {
    quote: 'Make it work, make it right, make it fast.',
    author: 'Kent Beck',
  },
  {
    quote:
      'I learned the fundamentals for programming, which is just what I needed as a first step for my career change!',
    author: 'Takayoshi Y.',
  },
  {
    quote:
      'Learning to code is useful no matter what your career ambitions are.',
    author: 'Arianna Huffington',
  },
  {
    quote:
      'We salute the coders, designers, and programmers already hard at work at their desks, and we encourage\n every student who can’t decide whether to take that computer science class to give it a try',
    author: 'Michael Bloomberg',
  },
  {
    quote:
      'To be prepared for the demands of the 21st century—and to take advantage of its opportunities',
    author: 'Todd Park',
  },
  {
    quote: 'Learning to code is learning to create and innovate.',
    author: 'Enda Kenny',
  },
  {
    quote:
      'On a deeper level you are already complete. When you realize that, there is a playful, joyous energy behind what you do.',
    author: 'Eckhart Tolle',
  },
  {
    quote: 'Most people are about as happy as they make up their minds to be.',
    author: 'Abraham Lincoln',
  },
  {
    quote:
      'Happiness is not something you postpone for the future; it is something you design for the present.',
    author: 'Jim Rohn',
  },
  {
    quote: 'Be happy for this moment. This moment is your life.',
    author: 'Omar Khayyam',
  },
  {
    quote:
      'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
    author: 'Herman Cain',
  },
  {
    quote: 'Happiness depends upon ourselves.',
    author: 'Aristotle',
  },
  {
    quote:
      'If you want others to be happy, practice compassion. If you want to be happy, practice compassion.',
    author: 'Dalai Lama',
  },
  {
    quote:
      'Life will bring you pain all by itself. Your responsibility is to create joy.',
    author: 'Milton Erickson',
  },
  {
    quote:
      'The secret of happiness is not in doing what one likes, but in liking what one does.',
    author: 'James M. Barrie',
  },
  {
    quote: 'Happiness is a state of activity.',
    author: 'Aristotle',
  },
  {
    quote:
      'If you spend your whole life waiting for the storm, you’ll never enjoy the sunshine.',
    author: 'Morris West',
  },
  {
    quote:
      'The foolish man seeks happiness in the distance, the wise grows it under his feet.',
    author: 'James Oppenheim',
  },
  {
    quote: 'And remember, no matter where you go, there you are.',
    author: 'Confucius',
  },
  {
    quote:
      'True happiness is… to enjoy the present, without anxious dependence upon the future.',
    author: 'Lucius Annaeus Seneca',
  },
  {
    quote: 'The grass is always greener where you water it.',
    author: 'Unknown',
  },
  {
    quote:
      'Happiness is when what you think, what you say, and what you do are in harmony.',
    author: 'Mahatma Gandhi',
  },
  {
    quote: 'There is no way to happiness – happiness is the way.',
    author: 'Thich Nhat Hanh',
  },
  {
    quote:
      'Happiness is not something ready made. It comes from your own actions.',
    author: 'Dalai Lama',
  },
  {
    quote:
      'The Constitution only gives people the right to pursue happiness. You have to catch it yourself.',
    author: 'Benjamin Franklin',
  },
  {
    quote: 'Happiness… consists in giving, and in serving others.',
    author: 'Henry Drummond',
  },
];

// randomly generate a quote; 46 quotes to choose from
// const getRandom = (max, min = 0) => {
//   //min is always 0; max is quotes.length
//   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// };
const randomQuote = Math.floor(Math.random() * quotes.length);

$('#prm').append(
  `<blockquote id="quote"> <span class="color">${quotes[randomQuote].quote}</span></blockquote> <p><span class="color"> ${quotes[randomQuote].author} </span></p> `
);
//   sec.append('')

// function displayImage() {
const images = [
  'https://cdn.wallpapersafari.com/62/94/BNcTEH.jpg',
  'https://wcrates.files.wordpress.com/2015/07/woods-landscape-wallpaper.jpg',
  'https://cdn.wallpapersafari.com/36/96/CjREFa.jpg',
  'https://www.gratistodo.com/wp-content/uploads/2017/02/Faros-Wallpapers-16.jpg',
  'https://wallpapercave.com/wp/X5kBGw4.jpg',
  'https://cdn.wallpapersafari.com/97/37/kwjRMG.jpg',
  'http://hdwallpaperfun.com/wp-content/uploads/2014/09/Funny-Penguin-Wallpaper-Free-Download-4612.jpg',
  'http://getwallpapers.com/wallpaper/full/7/d/e/393833.jpg',
  'https://wallpaperaccess.com/full/310823.jpg',
  'http://getwallpapers.com/wallpaper/full/3/c/e/560642.jpg',
  'https://i.pinimg.com/originals/6e/ba/94/6eba94af70acac044a5aaceee9e96d41.jpg',
  'http://www.photofurl.com/wp-content/uploads/2008/12/subbyng_wallpaper.jpg',
  'https://images.designtrends.com/wp-content/uploads/2016/03/28072900/Raccoon-Animal-Funny-Wallpaper-Background.jpg',
  'http://getwallpapers.com/wallpaper/full/d/f/d/369096.jpg',
  'https://wallpapercave.com/wp/yXFe7p9.jpg',
  'https://cdn.wallpapersafari.com/56/62/QoSfe8.jpg',
  'http://thewowstyle.com/wp-content/uploads/2015/04/Desktop-Wallpaper-HD2.jpg',
  'https://hdblackwallpaper.com/wallpaper/2015/05/computer-black-wallpaper-hd-and-screensavers-15-wide-wallpaper.jpeg',
  'https://cdn.wallpapersafari.com/49/55/NhAVCo.jpg',
  'http://getwallpapers.com/wallpaper/full/3/7/c/309461.jpg',
  'https://wallpapertag.com/wallpaper/full/2/b/7/154686-free-coding-background-1920x1080-cell-phone.jpg',
  'https://wallpapertag.com/wallpaper/full/8/e/7/405861-top-coding-wallpaper-2560x1440.jpg',
  'https://wallpapercave.com/wp/CMfHHAx.jpg',
  'https://www.dogs-wallpapers.eu/dog/flowers-maltese-white-color-doggy.jpg',
  'https://wallpapercave.com/wp/HNWmYRU.jpg',
  'https://download-screensavers.biz/images/cool-mac-os-screensavers-2.jpg',
  'https://cdn.wallpapersafari.com/72/23/g6tHhV.jpg',
  'https://wallpapercave.com/wp/fEaDSdZ.jpg',
  'https://cdn.wallpapersafari.com/74/27/zmkZOp.jpg',
  'https://wallpapercave.com/wp/aPAgqe6.jpg',
  'https://assets.wallpapersin4k.org/uploads/2017/04/Totoro-Wallpaper-15.jpg',
  'https://livewallpaperhd.com/wp-content/uploads/2017/10/Cute-Strawberry-Cake-Wallpaper.jpg',
  'https://7wallpapers.net/wp-content/uploads/1_Kiwi.jpg',
  'http://alliswall.com/file/4083/1920x1200/16:9/beach_party_cocktail.jpg',
  'https://img5.goodfon.com/wallpaper/nbig/2/b8/hot-drink-cups-coffee-different.jpg',
];

let image = images[Math.floor(Math.random() * images.length)];
console.log(image);

$('#viewport').css(
  'background',
  `url('${image}') no-repeat center center fixed`
);
// $('#viewport').css({ 'background-color': 'blue' });
// });
