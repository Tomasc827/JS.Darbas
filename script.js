// 1. Skaiciu Suma
// function sumCalc() {
//   let sumEvens = 0;
//   let sumOdds = 0;

//   for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//       sumEvens += i;
//     } else {
//       sumOdds += i;
//     }
//   }
//   return {
//     sumEvens: sumEvens,sumOdds: sumOdds

//   };
// }
// const totalSum = sumCalc();
// console.log(totalSum.sumEvens + totalSum.sumOdds);

// 2. Random Exercise Generator

// const exercise = ["Push-ups","Sit-ups","Bear Crawls", "1 mile run", "60 second plank", "Burpees","Jumping Jacks","Squats","weighted Squats", "Inch Worms"];

//   const randomExercises = (amount) => {
//     if (amount > exercise.length) {
//       console.log(`Number (${amount}) is higher than amount of exercise (${exercise.length}).`);
//       return;
//     }
//     if (amount < 0) {
//       console.log(`Number (${amount}) cannot be negative.`);
//       return;
//     }

//     const random = [...exercise].sort(() => 0.6 - Math.random());
//     return random.slice(0, amount);
//   };

//   console.log(randomExercises(4));

// 4.Duotas vardu masyvas.

// const names = ["Olivia", "Jackson", "Sophia", "Elijah", "Ava", "Liam", "Isabella"];
// const removeOlivia = names.shift(0)
// const masonFront = (array2) => {
//   return ["Mason", ...array2];
// };
// const myName = (array3, name) => {
//   return [...array3, name];
// };
// const removeName = (array4, chooseName) => {
//   return array4.filter(name => name !== chooseName);
// };
// const bobArray = (array5) => {
//   return array5.map(name => `${name}withBob`);
// };
// const FromZtoA = (array6) => {
//   return [...array6].sort((a, b) => b.localeCompare(a));
// };

// console.log(removeOlivia);
// console.log(`no Olive`,names);
// console.log(masonFront(names));
// console.log(myName(names,"Tomas"));
// console.log(removeName(names,"Jackson"));
// console.log(bobArray(names));
// console.log(FromZtoA(names));

// 5.Procentu Skaiciuockle

// document
//   .getElementById("form")
//   .addEventListener("submit", function (e) {
//     e.preventDefault();
//     const number = parseFloat(document.getElementById("number").value);
//     const percentage = parseFloat(document.getElementById("percentage").value);
//     const total = (number * percentage) / 100;
//     document.getElementById("total").textContent = total;
//   });

// 3. Monetu Skaiciuokle

// function coinCounter() {
//   let coins = 0;
//   let extraCoin = true;
//   while (extraCoin) {
//     console.log(`Total ${coins} coins.`);
//     let answer = askForCoin("Want Coin? (Taip/Ne)");
//     if (answer.toLowerCase() === "Taip") {
//       coins++;
//     } else if (answer.toLowerCase() === "Ne") {
//       extraCoin = false;
//     } else {
//       console.log("Taip arba Ne");
//     }
//   }
//   console.log("Bye");
// }
// function askForCoin(question) {
//   console.log(question);
//   return "Taip"; 
// }
// console.log(coinCounter())