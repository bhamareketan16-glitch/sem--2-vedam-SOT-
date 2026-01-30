let str = "   Hello Developers cat dog  "; 
console.log(str)
console.log(str.length)

console.log(str.charAt(9));
console.log(str.charCodeAt(9));  

console.log(str.substring(10)); 

console.log(str.substring(10,12));
//start > end
console.log(str.substring(12,10));

console.log(str.substring(-100)); 

let sl1 = str.slice(10); 
console.log(sl1); 
let sl2 = str.slice(10,12);
console.log(sl2); 

let sl3 = str.slice(12,10); 
console.log(sl3); 
let sl4 = str.slice(-10);
console.log(sl4);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.trim());
console.log(str.includes("cat")); // Boolean output & case-sensitive
