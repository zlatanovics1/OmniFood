/*Bad code-- use classes for cleaner and faster approach */

const mealCounter = document.querySelector(".meal-counter");

const heroSection = document.querySelector(".section-hero");

const header = document.querySelector(".main-header");

let mealArray = mealCounter.textContent.slice(0, -1).split(",");

let meals = +mealArray[0] * 1000 + +mealArray[1];

let i;

const incMeals = function () {
  if (meals < 250001) {
    mealCounter.textContent = `${Math.floor(meals / 1000)},` + `${meals % 1000}`.padStart(3, 0) + "+";

    meals++;
  } else {
    clearInterval(i);
  }
};

const observeCounter = function ([e], observer) {
  if (e.isIntersecting) {
    i = setInterval(incMeals, 1);
    observer.unobserve(mealCounter);
  }
};

const mealCounterObserver = new IntersectionObserver(observeCounter, {
  threshold: 0.1,
  root: null,
});

const init = () => mealCounterObserver.observe(mealCounter);

init();

const observeHeader = function (e, observer) {
  const [target] = e;
  if (!target.isIntersecting) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

const stickyObserver = new IntersectionObserver(observeHeader, {
  threshold: 0.1,
  root: null,
  rootMargin: "150px",
});

stickyObserver.observe(heroSection);
