// slider

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function(slide, index) {
  slide.style.left = `${index * 100}%`;
});

let count = 0;

nextBtn.addEventListener('click', function() {
  count++;
  carousel();
});

prevBtn.addEventListener('click', function() {
  if (count > 0) {
    count--;
  }
  carousel();
});

function carousel() {


  
  if (count === 0) {
    nextBtn.style.display = 'block';
    prevBtn.style.display = 'none';
  } else if (count === slides.length - 1) {
    nextBtn.style.display = 'none';
    prevBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'block';
    prevBtn.style.display = 'block';
  }

  slides.forEach(function(slide) {
    slide.style.transform = `translateX(-${count * 200}%)`;
  });
}


carousel();
