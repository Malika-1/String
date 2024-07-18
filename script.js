//string

// " "; ' '; ` `


// let lorem = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, ex minima aspernatur ab vero in.'

// let m = lorem.indexOf('m');
// let a = lorem.indexOf('a');
// let l = lorem.indexOf('l');
// let i = lorem.indexOf('i');
// let k = lorem.indexOf('k');
// console.log('m'.toUpperCase() + 'a' + 'l' + 'i' + 'k' + 'a');


//replace
//let username = 'aaa!bbb!ccc'
// username = username.replaceAll('!', '3')
// console.log(username);

// console.log(username.split('!').join('@'));

let username = 'aaa@bbb@ccc'
console.log(username.split('@').join('!'));


let str = 'HELLO WORLD';
let str2 = str.slice(0, 1).toUpperCase()  + str.slice(1).toLowerCase();
console.log(str2);

let html = 'Hello, it is HTML'
console.log(html.split('HTML').join('not JS'));

let name = 'alex'
console.log(name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase());

let number = Math.random();
let u = number.toString();
console.log(u.split('.').join(''));

let text = 'Lex Luter has a big suit'
let a = text.indexOf('a');
let l = text.indexOf('l');
let e = text.indexOf('e');
let x = text.indexOf('x');
console.log('a'.toUpperCase() + 'l' + 'e' + 'x');