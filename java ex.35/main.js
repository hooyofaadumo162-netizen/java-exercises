


function changeImage() {
  const image = document.querySelector('#image');
// prompts
 const url = prompt("geli image URL");
  const color = prompt("geli color sawirkaga");
  const width = prompt("geli width sawirkaga");
  const height = prompt("geli heighka sawirkaga");
  const border = prompt("geli border sawirkaga");
  const padding = prompt("geli padding sawirkaga");
// changing
  image.setAttribute('src' ,url);
  image.style.backgroundColor = color;
  image.style.width = width;
  image.style.height = height;
  image.style.border = border;
  image.style.padding = padding;
}
