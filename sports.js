//Slaideris

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

//"Lasīt vairāk" poga

const readMoreBtn = document.querySelector('.js-read-more-btn')
const text = document.querySelector('.js-myText')

readMoreBtn.addEventListener('click', (e) => {
  text.classList.toggle('show-more');
  if(readMoreBtn.innerText === 'Lasīt vairāk') {
    readMoreBtn.innerText = 'Lasīt mazāk';
  }else{
    readMoreBtn.innerText = 'Lasīt vairāk';
  }
})

//Skrollerītis

let scrollBar = document.getElementById('scroll')
let height = document.body.scrollHeight - window.innerHeight
window.onscroll = function (){
  let scrollHeight = (window.pageYOffset / height) * 105
  scrollBar.style.height = `${scrollHeight}%`
}

//Komentāri

const commentBox = document.querySelector('.js-comments')
let html = ''

const addHtml = (name, body) => {
    html = html + `
    <div class="comment">
        <h4 class="name">Vārds: ${name}</h4>
        <span calss="text">Komentārs: ${body}</span>
    </div>
    `
}

const form = document.querySelector('.js-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.querySelector('.js-form-text').value
    const body = document.querySelector('.js-form-body').value
    addHtml(name, body)
    commentBox.innerHTML = html
})
