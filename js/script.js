let slideIndex = 1;
function setSlide(input, index) {
  slideIndex = index;
  let item = document.querySelector(`#${input}`);
  let slides = [...document.querySelector(".slides").children];
  slides.forEach((element) => {
    element.classList.remove("active");
  });
  item.classList.add("active");
}
setInterval(() => {
  slideIndex += 1;
  if(slideIndex==4){
    slideIndex=1;
  }
  setSlide(`slide${slideIndex}`, slideIndex);
}, 10000);



function changeColor(star) {
  if (star.style.color === 'yellow') {
     star.style.color = 'black';
  } else {
     star.style.color = 'yellow';
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
});

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // اینجا می‌توانید کدهای مربوط به ثبت نام کاربر را اضافه کنید
  
  closePopup();
});

// ditails of products



