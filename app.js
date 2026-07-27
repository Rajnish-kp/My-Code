// const students = {
//     name : " Sraddha Khapra ",
//     marks : 43.5,
//     printMarks : function(){
//         console.log("marks : ", this.marks );
//     },
// };

// // console.log(students)



//  const car  = {
//     name : " bmw",
//     modern : 300,
//     priceCar(){
//         console.log("car price is 1000000000000 ")
//     },
//  }

//  const suzuki = {
//     modern : 2026
//  };

//  suzuki.__proto__ = car ;



// class Person {
//     constructor(){
//          this.spicies = " Homo sapiens"
//     }
//     run(){
//         console.log(" he is running")
//     }
//     eat(){
//         console.log("He is eats")
//     }

//     sleep(){
//         console.log(" He is sleep")
//     }
    
//     work(){
//         console.log(" Do Nothing")
//     }   
// }
 
// class Engineer extends Person{
//     work(){
//         console.log("Problems solver ", " Build something")
//     }
    
// }
// class Ductor extends Person {
//     work(){
//         console.log(" Trat patients")
//     }
// }

// let rishuObj = new Engineer()


// super(Person)













class Person {
    eat(){
         console.log(" he is eating");
    }
    work(){
        console.log("he is working")
    }
}
class Engineer extends Person{
     work(){
        console.log(" Problem solves ", " build something")
     }
     
}

let obj = new Person ();


