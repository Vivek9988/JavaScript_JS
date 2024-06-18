const marvel_heros = ["thor", "shaktiman", "veerbahadur"];
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);

//const all_heros =marvel_heros.concat(dc_heros);  // concat method to add the array

 //console.log(all_heros);

//  const all_new_heros=[...dc_heros, ...marvel_heros];   // new method to add the array better than the concat
//  console.log(all_new_heros)

 
//const another_array=[1,2,3,[4,5,6],7,[7,8,[9,7]]];

//const real_another_array=another_array.flat(Infinity);
//console.log(real_another_array)


//console.log(Array.isArray("Vivek"));
//console.log(Array.from("Vivek"));


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));
console.log([marvel_heros + dc_heros]);




