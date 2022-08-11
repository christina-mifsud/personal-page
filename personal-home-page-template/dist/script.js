var images;


images = ['https://i.imgur.com/NMe9Iij.jpg', 'https://i.imgur.com/vCqZdL0.jpg', 'https://i.imgur.com/ETCdKD5.jpg'];
let element_carousel = document.getElementById('carousel');
element_carousel.setAttribute("src", images[0]);


document.getElementById('next').addEventListener('click', (event) => {
  let element_carousel2 = document.getElementById('carousel');
  element_carousel2.setAttribute("src", images.slice(-1)[0]);
  images.push(images.shift());

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_carousel3 = document.getElementById('carousel');
  element_carousel3.setAttribute("src", images[0]);
  images.unshift(images.pop());

});



document.getElementById('submit').addEventListener('click', (event) => {
  let element_comments = document.getElementById('comments');
  let new_li = document.createElement('li');
  let new_a = document.createElement('a');
  new_a.innerText = 'CLICK ME!';
  new_a.setAttribute("href", 'https://youtu.be/dQw4w9WgXcQ');

  new_li.appendChild(new_a);

  element_comments.appendChild(new_li);

});
