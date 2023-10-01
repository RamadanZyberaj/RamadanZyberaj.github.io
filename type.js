const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const intervalTime = 10000; // 10 sekonda

//-------------------------------------------

//Per telefona 
const slidest = document.querySelectorAll('.slide2');
let currentIndext = 0;
const intervalTimet = 10000; // 10 sekonda






//pjesa e sliderit

// Funksioni për të ndërruar sliderët
function nextSlide() {
  // Fshij klasën active nga slideri aktual
  slides[currentIndex].classList.remove('active');

  // Përcakto indeksin e sliderit të ardhshëm
  currentIndex = (currentIndex + 1) % slides.length;

  // Shto klasën active në sliderin e ri
  slides[currentIndex].classList.add('active');
}

// Ekzekuto funksionin për të ndërruar sliderët në interval të caktuar
setInterval(nextSlide, intervalTime);



//-----------------------------------------------------

//per telefon
//pjesa e sliderit

// Funksioni për të ndërruar sliderët
function nextSlide2() {
  // Fshij klasën active nga slideri aktual
  slidest[currentIndext].classList.remove('active');

  // Përcakto indeksin e sliderit të ardhshëm
  currentIndext = (currentIndext + 1) % slidest.length;

  // Shto klasën active në sliderin e ri
  slidest[currentIndext].classList.add('active');
}

// Ekzekuto funksionin për të ndërruar sliderët në interval të caktuar
setInterval(nextSlide2, intervalTimet);








/*------------------------------------*/


//funksioni per telefona
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


