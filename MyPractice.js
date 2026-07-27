/*             // (JS=8) conparison of data type

 console.log(2 < 1) // false
 console.log(2 >= 1)// true
 console.log(2 > 1)//true
 console.log(2 == 1)//false
 console.log(2 != 1)// true


console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0);// false
console.log(null >= 0); // true

console.log(undefined == 0); //undefined
console.log(undefined > 0);//undefined
console.log(undefined < 0);//undefined


//value aur data type dono check karta hai

console.log("2"===2); // false

               //(JS=9) data type of JS summary

//Primitive 
// 7 type : string, Number,Boolean,Null, undefine,Symbol,BigInt
const score = 100;//Number
const scoreValue = 100.2;//number
const isLoggedIn = false;//Boolean
const outsideTemp = null ;//Null
let isEmail; // undefined

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId)//output:> false

const bifNumber = 1243145423566621n; // BigInt

// Reference (non primitive)
  //array,Object, functions

  const heros = ["shaktiman","naagraj","thor"]//array

  let myObj = {     
    name: "rishu",
    age: 18,               //Object    
    class: null,   

  }                   

 const myFun = function(){
       console.log("hello rishu");
    
}
// data type check karne ke liye 
         console.log(type )

         
              //(JS = 10) stack and heap memory
     
stack (Primitive ), heap ( non Primitive)
let myName = "rajnish";
let anotherName = myName;

anotherName = "rishu"

console.log(myName);//orignal value
console.log(anotherName);// copy value milega


let userOne = {
    email: "rishukp8859@google.com",
    upi: " user @yhi",
}
let userTwo = userOne;

userTwo.email = "rkp@gmail.com";
console.log(userOne.email);//orignal
console.log(userTwo.email);//orignal

            
            //(JS => 11) STRINGS 

  "hello" + "world"         
  'hello world'


let name = "rishu"
let lastName = "kumar"

 console.log(name + lastName)
 console.log(name + lastName + "DEVELOPER")
 console.log(`hello my name is ${name}and my lastName is ${lastName}`)

 // Different way to declear string
 const gameName = new String ('Pubg') // string output=> :"P",:"u",:"b",:"g"; AND lenght : 
 console.log(gameName[0]); //output => P
 console.log(gameName.__proto__.);
 console.log(gameName.lenght);// 8
 console.log(gameName.toUpperCase());// OP => PUBG
 console.log(gameName.toLowerCase());// OP => pubg
 console.log(gameName.charAt(2));// OP => b  (index passkarna hota hai )
 console.log(gameName.indexOf('u'));// OP => 1 ( isme charecter pass karna hota hai)
 
 const newString = gameName.substring(0,2); 
 console.log(newString);// OP => Pub

 let name = 'rishu';
let newName = name.slice(0,3);
let newName1 = name.slice(-0,3);
console.log(newName);// OP => ris
console.log(newName1);//OP => ris

const newStringName = "    rishu   ";
console.log(newStringName);//OP =>    rihsu   
console.log(newStringName.trim());//OP =>rishu

const url = "https://rishu.come/rishu%20kumar"
console.log(url.replace('%20','-'))//OP => https://rishu.come/rishu-kumar
   
  //includes string ke andar value check karne ke liye kiya jata hai 
console.log(url,includes('rishu'));// OP => true
console.log(url, includes('yadev'));// OP => false

// use split

const myModernString ="rishu-kumar-jo-reert" ;
console.log(myModernString.split('-'));// OP => [ 'rishu', 'kumar', 'jo', 'reert' ]



                //Number and maths in JS lecture(12)

+++++++++++++++++++++++Number+++++++++++++++++++++++++++++++


   const score = 400;
   console.log(score);// 400
   
   const balance = new Number(100);
   console.log(balence);// OP => 100 data type Number

   console.log(balance.toString(.lenght))
   console.log(balance.toFixed(2))// OP => 100.00

   const otherNumber = 123.8966;
   console.log(otherNumber.toprocision(4));// OP => 123.9
   console.log(otherNumber.toprocision(3));// OP => 123

   const hundreds = 1000000;
   console.log(hundreds.toLocaleString());// 1,000,000  in us formate
   console.log(hundreds.toLocaleString('en-IN'));// 10,00,00 in indian formate

++++++++++++++++++++MATHS++++++++++++++++++++++++++


console.log(Math); OP => Object

console.log(Math.abs(-4));// OP => 4 - + me ho jata hai 
console.log(Math.abs(4));// OP => 4 positive positive me hi rahta hai

console.log(Math.round(4.5))// OP => 4 : 5 ko round of  kar diya
console.log(Math.round(4.6));// OP => 5 
console.log(Math.ceil(4.2));// OP => 5 : top value ko choose karta hai jara shi bhi bada hoga to bhi
console.log(Math.floor(4.2));// OP => 4 : kam value ko choose karega 
console.log(Math.floor(4.9));// OP => 4 : floor lowest value hi lega 
console.log(Math.min(4, 5, 3, 2, 6));// 2
console.log(Math.max(4, 5, 3, 2, 6));// 6 

console.log(Math.random(4, 5, 3, 2, 6));// o aur 1 ke bich me value ayegi aur decimal me aati hai
console.log(Math.random()*10)//
console.log(Math.random()*10 + 1); // 0 ko avoid karne ke liye 
console.log(Math.floor(Math.random() * (max - min +1 )) + min) */


             // Dates and time in JS (13)

                 
  // instance of date

  /*let  myDate = new Date();
  console.log(myDate.toString());    // (Indian standard time)
  console.log(myDate.toLocaleDateString());  // 3/28/2026
  console.log(myDate.toLocaleString());  //  3/28/2026, 12:55:51 AM
  console.log(myDate.toDateString());  //  sat mar 28 2026
  console.log(myDate.toTimeString());  // 00 :58:00 GMT+0530 (Indian standard time)
  console.log(myDate.toLocaleTimeString());  // 1:00:46 AM

  console.log(typeof myDate);   // date is Object 

  let myCreatedDate = new Date(2022,0,26);
  console.log(myCreatedDate.toDateString());   //  Thu Jan 26 2022

  let newDate = new Date(2026, 0, 21, 4, 30);  //  YY/MM/DD
  console.log(newDate.toLocaleString());         // 1/21/2026, 4:30:00 AM  */ 

  let yourDate = new Date("01-12-2024")   // MM/DD/YY
 // console.log(yourDate.toLocaleString());  //  1/12/2024, 12:00:00 AM 

  let myTimeStamp = Date.now()

  //console.log(myTimeStamp);

  //console.log(yourDate.getTime); //  1774641693251  it gets since 1 january


  //  ================Convert into second ===========================

  //console.log(Math.floor(Date.now()/100));


//  kevle ek chiz chaiye to 
 /* let newDate = new Date()

  console.log(newDate.getDate());   // 28
  console.log(newDate.getDay());     // 6
  console.log(newDate.getFullYear());  // 2026
  console.log(newDate.getHours());       // 1
  console.log(newDate.getMonth());       // 2  month 0 se start hota hai 


    ++++++++++++++++++ //intresting +++++++++++++++++++


    newDate.toLocaleString('defoult',{
       weekday: "long",
    }) */



      //+++++++++++++++++++++//ARRAY +++++++++++++++++++++++++++
  
  
      let myArr = [0,1,2,3,4,5,6]
      let nameArr = ["thor ", "shaktiman"]
       
      let myArr2 = new Array(1,2,3,4,5)
     // console.log(myArr[3])  // 3
     // console.log(nameArr[0]) // only can give 0 = thor and 1 = shaktiman


          //ARRAY mathod ////////////////////////////////////////////////////////////////////

    // myArr.push(9);   // will be add in this [0,1,2,3,4,5,6,9]
     //myArr.pop();     // last element delete , iske ander koi bhi argument nhi dena hota
      //myArr.unshift(9)   // starting me value add
     // myArr.shift()       // start se value remove karta hai 
    // console.log(myArr.includes(4));  // value check karta hai aur true aur false me batata hai
    //console.log(myArr.indexOf(4));  // index number bata ahi 

   // const newArray = myArr.join()   convert into Array to string
   // console.log(newArray);          in string  
  //  console.log(myArr);    
  
      // slice , splice 

      //const myn1 = myArr.slice(1,3)

      //console.log(myn1);
      //console.log(myArr.splice(1,3));


     /* const marvel_heros = ["thor", "ironmane", "spiderman"]
      const  dc_heros = ["superman","flash","batman" ]
      marvel_heros.push(dc_heros) // [ 'thor', 'ironmane', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
      console.log(marvel_heros);
      console.log(marvel_heros[3][0])  */

       //dusra tarika add karne ka 

    // marvel_heros.push(dc_heros)
   //  console.log(marvel_heros);


  // Number and math ////////////////////////////////////////////////////////////////////////////

  const score = 100;
  //console.log(score)//100

  const balance = new Number(100);
  //console.log(balance);//[Number : 100 ]
  //console.log(balance.toString().length);

  //console.log(balance.toFixed(9));// 100.000000000

  const otherNumber = 12.43;
  //console.log(otherNumber.toPrecision(3)); // 12.4


//const otherNumber = 12.43;
 // console.log(otherNumber.toPrecision(1));// 1e+1 exponancial value

const newScore = 100000;
//console.log(newScore.toLocaleString('en-IN'));// 1,00,000


/// math -
// -------------------------------------------------------------------------------



//console.log(Math);// math is a obj
 
//console.log(Math.abs(-4))// convert into only positive not in ,pisitive to negetive 

 // round, ceil, floor, max((1, 5, 6 )), min((1, 3, 5))







 ////array //////

 let arr= [ 1,2,3,4,5,6,]
//console.log(Array.of(arr))


const score1 = 12
const score2 = 43
const score3 = 43

//console.log(Array.of(score1,score2,score3));  ////[ 12, 43, 43 ]




//console.log(Array.from({ name:" rishu"}));

const name = "rihsu"
const newName = Array.from(name);
//console.log(newName);

//console.log(Array.from("rishu"));  /// [ 'r', 'i', 's', 'h', 'u' ]


///console.log(Array.isArray("rishu"))


/////////////////object//////////////////////////////////////////////////////////

////   singleton 
//object.create

//object literals

//let object = {}



const obj1 = {1 : " a", 2: " b"}
const obj2 = {3 : " a", 4: " b"}
const  obj3 = {5: "a", 6: "b"}

//console.log(obj1,obj2,obj3);
const obje4 = Object.assign({}, obj1, obj2, obj3 );
console.log(obje4);

const obj6 = {...obj1 , ...obj2,}   //////// this use for sprad vlue ......................




/// old function
function add(a,b){
  return a+b;
} 

////new function 
const add = (a,b)=> a+b;

const add = (a,b)=> a+b;
const add=(a,b)=> a+b;







