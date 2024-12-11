// const numbers = [21, 32, 24, 49, 34, 23];
// const students = {
//     name: 'shakib khan',
//     age: 23,
//     movies: ['nobab', 'pagol mastan', 'babla keno ekhane']
// };
//  const about = `my name is ${students.name} age of ${students.age} has number ${numbers[2]} also liked movies ${students.movies}`;
//  console.log(about);

// const numbers = [23, 28, 24, 76, 68, 67, 85];
// const athletes = {
//     name: 'ashraful',
//     age: 25,
//     trophies: ['t20 bataiya', 'oneday leage', 'kpt league']
// };
// const about = `my name is ${athletes.name} my age ${athletes.age} I have tropies ${athletes.trophies[0]} i have number ${numbers[2]}`;
// console.log(about);

// const myinfo = `my name is ${athletes.name}
// my age 10
// my study class 5`;
// console.log(myinfo);

// const numbers = [65, 49, 70, 56, 86];
// if(numbers[2]<=10){
//     console.log('ami bangali');
// }
// else if(numbers[0]>=10){
//     console.log('ami bangladeshi');
// }
// else{
//     console.log('ami bangali naaaaaaaa');
// };

// const teachers = ['abul', 'babul', 'babla', 'hablu'];
// if(teachers[1]==='babul' || teachers[3]==='babla'){
//     console.log('babul ashceeeeeeeee');
// }
// else if(teachers[0]==='abul'){
//     console.log('babul hobe abul');
// }

// else{
//     console.log('babul ashe neeeee');
// }
// const number = [12, 1, 2312, 413, 4];
// const add = number.filter(45);

// console.log(add);

// const numbers = [ 123, 1, 432, 45, 123, 2314, 31];
// numbers[0] = 100;

// for(let i=0; i>numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// const numbers = [100, 'abul', 48, 6, 46, 34, 63, 'babul', 64, 66, 6];

// for(let a=0; a<numbers.length; a++){
//     const num = numbers[a];
//     console.log(num);
// }

// function myCal(num1, num2){
//     const results = num1 / num2;
//     console.log(Math.round(results));
// }
//  myCal(2250, 457);

// const athlete = {
//     name: 'habibul bashar',
//     age: 324,
//     trophy: ['t20 cricket', 'bbl leage', 'hablu cricket']
// }
// const myVariable = 'age';
// console.log(athlete['age']);
// console.log(athlete.age);
// console.log(athlete[myVariable]);
// const athlete = {
//     name: 'habibul bashar',
//     age: 324,
//     trophy: ['t20 cricket', 'bbl leage', 'hablu cricket']
// }

// const about = `my name is ${athlete.name} my age ${athlete.age} i have trophy like ${athlete.trophy}`

// console.log(about);

const products = [
    {name: 'laptop', price: 303300, brand: 'hp', color: 'red'},
    {name: 'laptop', price: 33000, brand: 'lenovo', color: 'green'},
    {name: 'laptop', price: 30300, brand: 'iphone', color: 'yellow'},
];
const price = products.map(product => product.price);
console.log(price);