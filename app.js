const son1 = document.querySelector("#son1");
const son2 = document.querySelector("#son2");

const javob1 = document.querySelector("#javob1");
const javob2 = document.querySelector("#javob2");
const javob3 = document.querySelector("#javob3");
const javob4 = document.querySelector("#javob4");

const raqam1 = Math.ceil(Math.random() * 10);
const raqam2 = Math.ceil(Math.random() * 10);

son1.textContent = raqam1;
son2.textContent = raqam2;
const natija = raqam1 + raqam2;

javob1.textContent = natija - 1;
javob2.textContent = natija - 2;
javob3.textContent = natija + 1;
javob4.textContent = natija + 2;

const randomFour = Math.ceil(Math.random() * 4);
if (randomFour == 1) {
  javob1.textContent = natija;
} else if (randomFour == 2) {
  javob2.textContent = natija;
} else if (randomFour == 3) {
  javob3.textContent = natija;
} else {
  javob4.textContent = natija;
}

javob1.onclick = function () {
  if (javob1.textContent == natija) {
    javob1.classList.add("!bg-green-400");
  } else {
    javob1.classList.add("!bg-red-400");
  }
};
javob2.onclick = function () {
  if (javob2.textContent == natija) {
    javob2.classList.add("!bg-green-400");
  } else {
    javob2.classList.add("!bg-red-400");
  }
};
javob3.onclick = function () {
  if (javob3.textContent == natija) {
    javob3.classList.add("!bg-green-400");
  } else {
    javob3.classList.add("!bg-red-400");
  }
};
javob4.onclick = function () {
  if (javob4.textContent == natija) {
    javob4.classList.add("!bg-green-400");
  } else {
    javob4.classList.add("!bg-red-400");
  }
};
