const prompt = require("prompt-sync")();

/*for(let i = 1; i<=10; i++){
   // //console.log(i);
} 


for(let i = 10 ; i >= 1 ; i--){
   // console.log(i);
}

for(let i = 1 ; i <=50; i++){
     if( i%2===0){
       // console.log(i);
     }
}

for(let i = 1 ; i<=50; i++){
    if( i%2 != 0 ){
      //  console.log(i);
    }
}

for(let i = 1 ; i<=10 ; i++){
  //console.log("5","*",i, "=",i*5);
}



/*let num = prompt("Enter Number:");
let count = parseInt(num)
 if(num >= 0){
   // console.log("positive");
 }else if(num < 0){
    //console.log("negative");
 }*/


/* let number = Number(prompt("Enter  a number"));
  if (number %2===0){                   
    console.log("even  ")
  }else {
    console.log("odd")
  }*/


//  let age = prompt("What is your name?");
//   console.log(typeof(age));
//   if(age > 18 ){
//     // console.log("eligible for vote")
//   }else {
//     //console.log("not eligible for vote");
//   }

// This opens a pop-up and stores the result in a variable
/*let name = prompt("What is your name?");

// If the user clicks OK, 'name' holds the text; if Cancel, it holds null
if (name !== null) {
    console.log("Hello, " + name + "!");
}
    



  let num1 = Number(prompt("  3456789"));
console.log(num1);







////function  buttonOnClick(primaryControl){
   //et formContext = primaryControl;

  
 let arr = [ 1,2,3,4,5,6,6]
 for( let i=0 ; i<=arr.length ; i++){
    console.log(i);
 }  */


function checkLoanEligibility(age, salary, cibil) {
  
  if (age > 21 && salary > 25000 && cibil > 700) {
    return "Eligible for Loan";
  } else {
    return "Not Eligible for Loan";
  }
}


let age = 25;
let salary = 30000;
let cibil = 750;

if (age > 21 && salary > 25000 && cibil > 700) {
    console.log("Eligible to apply for the loan.");
} else {
    console.log("Not eligible to apply for the loan.");
}

  ///  2 Employee bonus calculation

  /*let experience = 7;
  let performancerRating = 10  ;
   let salary = 10;
   if ( experience > 7 && performancerRating  > 10 && salary < 14 ){
          console.log("Employee is eligible for bonus ")
      
   }else{
       console.log("Employee is not eligible for bonus ")
   }*/
 

   function calculateBonus(experience, rating, salary) {

    if (experience > 5 && rating > 8 && salary < 1000000) {
       // console.log("Employee is eligible for bonus");
    } else {
       // console.log("Employee is not eligible for bonus");
    }

}

// Example
calculateBonus(6, 9, 800000);


6, 9, 800000

////replace("{","").replace("}","")















///////////// OOps /////////////////////


// class////------------- ----
   class Animal {
      constructor(){
         console.log(" Object is created....")

      }
        eats(){
          console.log(" mai kha rha hu ")
        }
        jumps(){
          console.log("Mai kud rha hu")
        }
      

  }
  let a = new Animal()
  console.log (a)




 let object = {
    eats: true 
   };
   let  rabit =  {
        jumps : true 
    }
    console.log(object);

////////////////////////////////////////////////closer

    function outer(){
    count = 0 ;
    
    
     return function() {
         count++ ;
         console.log(count)
     };
}
let demo = outer();

demo();
demo();
demo();
