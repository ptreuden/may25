console.log("js file connected");

let input = document.getElementById("input");
let addButton = document.getElementById("addButton");
let listItemContainer = document.getElementById("list-item-container");

const addName = () => {
  let newText = document.createTextNode(input.value);
  let newLi =  document.createElement("li");
  newLi.classList.add("list-item");
  let newP = document.createElement("p");
  newP.appendChild(newText);
  let newButton = document.createElement("button");
  newButton.innerHTML = "X";
  newButton.classList.add("xButton");
  newLi.appendChild(newButton);
  newLi.appendChild(newP);
  listItemContainer.appendChild(newLi);
  input.value = "";
}

const checkInputLength = () => {
  if (input.value !== "") {
    addName();
  }
}

const checkKey = (e) => {
  // console.log(e);
if (e.which === 13) {
    checkInputLength();
  }
}

const deleteName = (e) => {
  if(e.target.className === "xButton") {
    e.target.parentElement.remove();
  }
}

addButton.addEventListener("click", checkInputLength);
input.addEventListener("keydown", checkKey);
listItemContainer.addEventListener("click", deleteName);

const multi = (a, b) => {
  console.log(a * b);
}

// multi(2, 5);

const curried = (a) => {
  return function(b) {
    console.log(a * b);
  }
}

const composed = (f, g) => (a) => f(g(a));



const add2 = (a) => {
  return a + 2;
}

const sub3 = (a) => {
  return a - 3;
}

let answer = composed(add2, sub3)(5);

// console.log(answer);

const array3 = [2, 3, 5, 10];

const tripled = array3.map((num) => {
  return num * 3;
});

const filtered = array3.filter((num) => {
  return num > 10;
});

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  sayHi(){
    console.log("Hi");
  }
}

// const jack = new Person("Jack", 119);
//
// // jack.sayHi();
//
// class Man extends Person {
//   constructor(name, age, gender){
//     super(name, age);
//     this.gender = gender;
//   }
//   sayBye(){
//     console.log("Bye");
//   }
// }
//
// const william = new Man("William", 78, "male");
//
// // william.sayHi();
// // william.sayBye();
//
// let arrayZ = [1, 2, 3, 4];
//
// let arrayX = [].concat(arrayZ);
//
// let objZ = {
//   prop1: "a",
//   prop2: "b"
// }
//
// let objX = { ...objZ };
//
// objZ.prop3 = "c";
//
// console.log(objZ);
// console.log(objX);

// let player2 = {
//   cheetah: {
//     color: "spotted",
//     speed: 10,
//     cunning: 0
//   }
// }
//
// let cunning2 = player2?.cheetah?.cunning ?? "no cunning";
//
// console.log(cunning2);

console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");
