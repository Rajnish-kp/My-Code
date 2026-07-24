////////////// create new record /////////////

   //Xrm.WebApi.createRecord(entityLogicName,date) .then(successCallback,errorCallBack)

let  expenseRequestId;
let data = {
    "xyz_name": " abhimanyu",
    "xyz_lastname": "kumar12244567"
}   

parent.Xrm.WebApi.createRecord("xyz_expenserequist", data). then(
    function success(result){
        expenseRequestId = result.id;
        alert("Success. Id:  " + expenseRequestId);
    },
    function ( error ){
        alert("Error:" + error . message)
    }
);

///////////////////// how to retrieve fields////////////////


function getMultipleRecord(executionContext){
    let formContext = executionContext.getFormContext();
    setTimeout(function(){
        let id=formContext.data.entity.getId().replace("{","").replace("}","");
    if (!id) {
        alert("Record ID not found. Please save the record first.");
        return;
    }


parent.Xrm.WebApi.retrieveRecord("xyz_expenserequist",id,"?$select=xyz_name,xyz_lastname,xyz_phone,xyz_age").then(

    function success(result){
        var data = {
            "xyz_firstname":result.xyz_name,
            "xyz_lastname":result.xyz_lastname,
            "xyz_phone":result.xyz_phone,
            "xyz_age":result.xyz_age
        };
        parent.Xrm.WebApi.createRecord("xyz_projects", data).then(
            function success(i){
                alert("hello rishu! it  has been  success ");
            },
            function error(eee){
                alert(eee.message);
            }
        )
    },
            function error(eee){
                alert(eee.message);}
            )
    },2000)
}




/////////// retrieve lookup value  /////////////


function getMyLook(executionContext){
    let formContext = executionContext.getFormContext();
    
     let lookup= formContext.getAttribute("xyz_primarycontact").getValue();
     if(lookup != null){
         let primaryContectId = lookup[0].id.replace("{","").replace("}","")
     

     Xrm.WebApi.retrieveRecord("xyz_democontact",primaryContectId,"?$select=xyz_phone").then(
        function success(result){
           console.log("phone Value ", result.xyz_phone);

            formContext.getAttribute("xyz_phone").setValue(result.xyz_phone);
            formContext.getAttribute("xyz_phone").setSubmitMode("always");
    },  
        function (error){
            console.log("We have faced some isue", error.message);
    }
  );
 }
} 

 
function checkAmount(executionContext){
    let formContext = executionContext.getFormContext();

    let loanAmount = formContext.getAttribute("xyz_loanamount").getValue();
    if(loanAmount > 1000000 ){
        formContext.getAttribute("xyz_risklevel").setValue(1);
    }else if(loanAmount <= 1000000 ){
        formContext.getAttribute("xyz_risklevel").setValue(2);
    }
}


function dynamicallyApearFields(executionContext){
    let formContext = executionContext.getFormContext();

    let managerApproval = formContext.getAttribute("xyz_managerapproval").getValue();
     if(managerApproval == 2){
        formContext.getControl("xyz_rejectionreason").setVisible(true);
        formContext.getAttribute("xyz_rejectionreason").setRequiredLevel("required");
     }else{
        formContext.getControl("xyz_rejectionreason").setVisible(false);
        formContext.getAttribute("xyz_rejectionreason").setRequiredLevel("required");
     }
}

function showButtonOnClick(primaryControl){
    let formContext = primaryControl;

    let managerApproval = formContext.getAttribute("xyz_managerapproval").getValue();
    let financeApproval = formContext.getAttribute("xyz_financeaproval").getValue();

    if(managerApproval == 3 && financeApproval == 2){
        return true ;
    }else{
        return false;        
    }
}


function showMessage(primaryControl){
    let formContext = primaryControl;

     alert("Do you want to approve this loan?");
}

//////////// updata record /////////

function updateRecord(primaryControl){
    let formContext = primaryControl;

   let financeApproval = formContext.getAttribute("xyz_financeaproval").getValue();
   let status = formContext.getAttribute("xyz_status").getValue();

  let  id=formContext.data.entity.getId().replace("{","").replace("}","");
    var data = {
        "xyz_financeaproval": financeApproval,
        "xyz_status": status
    }
      Xrm.WebApi.updateRecord("xyz_loanrequest",id,data).then(
         function success(result){
            console.log("record is updated")
            formContext.data.refresh();
         },
         function (error){
            console.log(error.message)
         }
      )
}

function newCreatRecord(executionContext){
    let formContext = executionContext.getFormContext();
     
    let auditname = formContext.getAttribute("xyz_auditname").Value();
    let actiontype = formContext.getAttribute("xyz_actiontype").Value();
    let loanrequestid = formContext.getAttribute("xyz_loanrequestid").Value();
    let actiondate = formContext.getAttribute("xyz_actiondate").Value();

let loanAuditsId;
let data = {
    "xyz_auditname" : "2",
    "xyz_actiontype": "2",
    "xyz_loanrequestid": "2",
    "xyz_actiondate": new Date() 
}
Xrm.WebApi.createRecord("xyz_loanaudit",data).then(
    function success(result){
        loanAuditsId = result.id;
        alert("success Id: "+ loanAuditsId);
    },
      function (error){
        alert("error :" + error.message);
      }
  );
}




function deleteRecord(primaryControl){
    let formContext = primaryControl;
    alert("Are sure want to delete this record");
     
    let id=formContext.data.entity.getId().replace("{","").replace("}","");
  
   Xrm.WebApi.deleteRecord("xyz_loanrequest",id).then(
     function success(result){
        alert("wow delete record successful",)
     },
        function (error){
            alert("Error ID : " + error.message);
        }
  )
   }


   