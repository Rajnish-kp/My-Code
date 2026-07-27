let x = 2;
let y = 5;
 
console.log(x < y );


console.log(typeof y); 
 
const name = "   rishu";
console.log(typeof name); // string


let bull = true ;
console.log(typeof bull);  //Boolean

const tamp = null;
 console.log(typeof tamp); // object

let stateName;
 console.log(typeof stateName);

 let score = "123abc"; 
 let valueInNumber = Number(score)
 console.log(valueInNumber,typeof valueInNumber); //NaN , number
 
  
 let isloggedIn = "";
 let booleanIsLoggedIn = Boolean(isloggedIn);
 console.log( booleanIsLoggedIn ); // false


 let value = 6;
 let newValue = -value;
 console.log(newValue); // -6


 let named = "Rishu";
 let lastName = " Rajnish";
 let  finelName = named + lastName;
 console.log(finelName); // Rishu Rajnish

 console.log("1" + 2); // 12
 console.log(1 + "2"); //12
  console.log("2" + "2") // 12
 console.log("1" + 2 + 3 ); //123
 console.log(2 + 2 + 2 + "2") //62


 //let num1, num2, num3,
 //num1 = num2 = num3 = 2 + 2

 //console(num2)

  //javascript is a dynamically typed languase 

//let x = 29;  // number
 x = "rishu"; // string


// reference or  (non primitive )

const heros = [ " sarukhan", "salmankhan", "prabhas" ];
let myObj = {
   name : "rishu",
   age : 18,
   hight : 5.8,
   carName : null,

}

let myFunction = function(){
    //console.log("hello world");
}



 //        stack and heap



 let userOne = {
     email : "rishu23@gmail.com",
     upi : "rkp233",
 }

 let userTwo = userOne 

 userTwo.email = "rajnishkumar@gmail.com";
 userOne.upi = "rhaaff@@4343";

 //console.log(userOne);
// console.log(userTwo);


 // string enterPolation

 //console.log('Hello my name is ${Rajnish }and my nick name is ${ rihsu}')


 let variableName = new String('hello');
 console.log(variableName[0]);  //h
  console.log(variableName.length);  //5
  console.log(variableName.length);  
  console.log(variableName.toUpperCase());  
  console.log(variableName.toLowerCase());
  
  
  // trim and replace


  let largeName = "radharadha20radharaadha20radharadha";
  let realName = largeName.replace('20','-');

 // console.log(realName);

  let str = "hshffei       ";
  let newStr = str.trim();
 console.log(newStr);
