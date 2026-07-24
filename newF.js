
let Sdk = window.Sdk || {};
(
  function () {

         this.formOnLoad = function (executionContext) {

         }

         this.MainPhoneOnChange = function (executionContext) {

             let formContext = executionContext.getFormContext();

             let phoneNumber = formContext.getAttribute("telephonel").getValue();

             let expression = new RegExp("((\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}");

              if (!expression.test (phoneNumber)) {

               alert("Enter phone number in US format");

           }

        }
    }
).call(Sdk);

// number 
 
const score = 29;

// string

const name = "noida";

// Boolean 

const isloggedin = false; 

// null 

const outsideTemp = null;
 
// undefine 
const isEmail;

// symbole 

const id = symbole ('123');
const ontherId = symbole ('123');

console.log(id === aontherId);

//bigInt
const number =  232424124155n;




