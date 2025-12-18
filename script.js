let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");

  shoppinCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

let shoppinCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shoppinCart.classList.toggle("active");

  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");

  searchForm.classList.remove("active");
  shoppinCart.classList.remove("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");

  searchForm.classList.remove("active");
  shoppinCart.classList.remove("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppinCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

// Products slider
var productsSwiper = new Swiper(".products-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: { delay: 7500, disableOnInteraction: false },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1020: { slidesPerView: 3 },
  },
});

// Review slider
var reviewSwiper = new Swiper(".review-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: { delay: 2500, disableOnInteraction: false },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1020: { slidesPerView: 3 },
  },
});
