var images;


images = ['https://imgur.com/NMe9Iij', 'https://imgur.com/vCqZdL0', 'https://imgur.com/ETCdKD5'];


document.getElementById('next').addEventListener('click', (event) => {
  let element_carousel = document.getElementById('carousel');
  element_carousel.setAttribute("src", images.slice(-1)[0]);
  images.push(images.shift());

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_carousel2 = document.getElementById('carousel');
  element_carousel2.setAttribute("src", images[0]);
  images.unshift(images.pop());

});
