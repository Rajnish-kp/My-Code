// const { useDebugValue } = require("react");

// function openURL(executionContext){
//     let formContext = executionContext.getFormContext();
    
//     let name = formContext.getAttribute("rs_tittel").getValue();
//     console.log(name);
// }


// // Get
// var name = formContext.getAttribute("name").getValue();
// // Set
// formContext.getAttribute("name").setValue("John Doe");


// // practice 

// function  newValue(executionContext){
//     let formContext = executionContext.getFormContext();

//     let name = formContext.getAttribute("").getValue();
//         formContext.getAttribute("").setValue();
// }


// function str(executionContext){
//     let formContext = executionContext.getFormContext();

//     let name = formContext.getAttribute().getValue();
//     console.log();
// }
// function str2(exeutionContext){
//     let formContext = executionContext.getFormContext();

//     let name2 = formContext.getAttribute("").getValue();
//     console.log();
// }
                    
//    function str3(executionContext){                                   
//      let formContext = executionContext.getFormContext();

//     let name3 = formContext.getAttribute("rs_ejf").etValue();
//        formContext.getAttribute("rs_rifndf").setValue(name3);
//        console.log();
        
    
// }



// // get and set practice

//  function fhdiof(executionContext){
//     let ForContext = executionContext.getFormContext();

//     let riokj = formContext.getAttribute("").getValue();
//         formContext.getAttribute("").setValue();
//           console.log()
//  }

//  function newUrl(exeutionContext){
//     let 
//  }

// function openURL(executionContext){
//  let formContext = executionContext.getFormContext();

//  let name = formContext.getAttribute("name").getValue();
//     formContext.getAttribute("rs_accountname1").setValue(name);

// let telephone = formContext.getAttribute( "telephone1");
//     formContext.getAttribute("rs_phone2").setValue(telephone);

// let tax = formContext.getAttribute("rs_taxiid").getValue();
//      formContext.getAttribute("nw_taxid").setValue(tax);

// let website = formContext.getAttribute("websiteurl").getValue();
//    formContext.getAttribute("rs_website2").setValue(website);

// let prAccount = formContext.getAttribute("parentaccountid").getValue();
//     formContext.getAttribute("rs_parentaccount2").setValue(prAccount);

// let trSymbol = formContext.getAttribute("tickersymbol").getValue();
//     formContext.getAttribute("rs_trickytymbol").setValue(trSymbol);
// }
// let sdk = window.sdk || {};
// (
//     function() {
//        this.formOnload = function(executionContext) {

//         let formContex = executionContext.getFormContext();
//         let name = formContex.getAttribut("").getValue();
//         console.log(name);
//        } 
//     }
// ).call (sdk); 


//get set ++++++++++++++++++++++++++




function add(executionContext){
    let formContex = executionContext.getFormContex();

    let name = formContex.getAttribute("").getValue();
        formContext.getAttribute("").setValue();

}

// Creat dubllicate reacoe












































// function openURL(executionContext){
//  let formContext = executionContext.getFormContext();
 
//  let age = formContext.getAttribute("age").getValue(); 
//  if(age >= 18 ){
//  let name = formContext.getAttribute("name").getValue();
    
// let telephone = formContext.getAttribute( "telephone1");
//     formContext.getAttribute("rs_phone2").setValue(telephone);

// let tax = formContext.getAttribute("rs_taxiid").getValue();
//      formContext.getAttribute("nw_taxid").setValue(tax);

// let website = formContext.getAttribute("websiteurl").getValue();
//    formContext.getAttribute("rs_website2").setValue(website);

// let prAccount = formContext.getAttribute("parentaccountid").getValue();
//     formContext.getAttribute("rs_parentaccount2").setValue(prAccount);

// let trSymbol = formContext.getAttribute("tickersymbol").getValue();
//     formContext.getAttribute("rs_trickytymbol").setValue(trSymbol);
//   }
//  else{
//     console.log("Rest of the code");
//  }

//  }  

//  function add(executionContext){
//     let formContext = executionContext.getFormContext();

//     let name = formContext.getAttribute("name").getValue();
//        formContex.getAttribute("").setValue(name);
//  }














//  function add(executionContext){
//     let formContex = executionContext.getFormContext();

//      let name = formContext.getAttribute("").setValue();
//       formContext.getAttribute("").setValue();
//  }
 
// function ContectLoad() {
//     alert (this is Onload event of form);
// }

// function ContectSave(){
//     alert ("this is save event of form");

// }






function createDuplicateRecord(executionContext){
    let formContext = executionContext.getFormContext();
    
    let userName = formContext.getAttribute("firstname").getValue();
    let userLastName = formContext.getAttribute("lastname").getValue();
    let userJobtitle = formContext.getAttribute("jobtitle").getValue();
   // let userAccountName = formContext.getAttribute("parentcustomerid").getValue();
    let userEmail = formContext.getAttribute("emailaddress1").getValue();
    let userBusinessPhone = formContext.getAttribute("telephone1").getValue();
    let userPhoneNumber = formContext.getAttribute("rs_phonenumber").getValue();

    let data = {
        "firstname": userName,
        "lastname": userLastName,
        "jobtitle": userJobtitle,
        "emailaddress1": userEmail,
        "telephone1": userBusinessPhone,
        "rs_phonenumber": userPhoneNumber,
       
    }
   Xrm.WebApi.createRecord("account", data).then(
    function success(result) {
        console.log("Record created with ID: " + result.id);
    },
    function error(error) {
        console.log(error.message);
    }
);

}