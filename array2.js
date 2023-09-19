const marver_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marver_heros.push(dc_heros);

// console.log(marver_heros);
// console.log(marver_heros[3][1]);

// const allHeros = marver_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_Heros = [...marver_heros, ...dc_heros]; //concat and ... this does similar thing
console.log(all_new_Heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Rabbi"));
console.log(Array.from("Rabbi"));
console.log(Array.from({ name: "Mahi" })); //interesting

//suppose you have a lots of data and need to convert it into an array..so what can you do?

let score1 = 400;
let score2 = 500;
let score3 = 600;

function myFunction() {
  console.log("TO see if we can inset a function in a array");
}

console.log(Array.of(score1, score2, score3, myFunction));
