/*function fieldsRequired(executionContext){
    let formContext = executionContext.getFormContext();

    let status = formContext.getAttribute("xyz_status").getValue();
    
    if(status === 974170000){
        formContext.getAttribute("xyz_phone").setRequiredLevel("required");
        formContext.getAttribute("xyz_email").setRequiredLevel("none");
    }else{
        formContext.getAttribute("xyz_phone").setRequiredLevel("none");
        formContext.getAttribute("xyz_email").setRequiredLevel("required");
    }
}



function alertMassage(primaryControl){
    let formContext = primaryControl;

    let name = formContext.getAttribute("xyz_name").getValue();
    let phone = formContext.getAttribute("xyz_phone").getValue();
    let email = formContext.getAttribute("xyz_email").getValue();
    
    if(name === null && phone === null && email === null){
      alert("Please complete all required application");

    }else{
      let financialTab = formContext.ui.tabs.get("tab_2").setVisible(true);
        formContext.ui.tabs.get("tab_2").setFocus();
            formContext.getAttribute("xyz_reviewstatus").setValue(974170003);

    }
}
function showRevealButton(primaryControl){
    let formContext = primaryControl;

    let status = formContext.getAttribute("xyz_status").getValue();
         
       if(status === 974170000){
        return true;
       }else{
         return false;
        }
}
 // return allowDocument === true;

 function refButton(executionContext){
    let formContext = executionContext.getFormContext();

    formContext.ui.refreshRibbon();
 }




 function getlookupValue(executionContext){
    let formContext = executionContext.getFormContext();

    let lookup = formContext.getAttribute("xyz_primarycontact").getValue();

      if(lookup [0] != null){

         let lookup = lookup[0].id;  
         let name = lookup[0].name;
         let entity = lookup[0].entityType;

         formContext.getAttribute("xyz_email");
         formContext.setValue("xyz_dublicateemail");
      }
 }*/






function RibbonValidation(primaryControl) {  // button show/hide
    let formContext = primaryControl;

    let statusValue = formContext.getAttribute("xyz_status").getValue();
    let emailValue = formContext.getAttribute("xyz_email").getValue();
    let incomeValue = formContext.getAttribute("xyz_income").getValue();


    if (statusValue === 974170000) {
        if (emailValue || incomeValue) {
            return true;
        } else {
            return false;
        }

    } else {
        return false;
    }

}
function buttonShow(primaryControl) { //command on button 
    let formContext = primaryControl;

    formContext.ui.tabs.get("tab_3").setVisible(true);
    formContext.ui.tabs.get("tab_3").setFocus();
}


function RibButton(executionContext) {
    let formContext = executionContext.getFormContext();
    formContext.ui.refreshRibbon();
}

function setAmountOnchange(executionContext) {
    let formContext = executionContext.getFormContext();

    let lookupField = formContext.getAttribute("xyz_course").getValue();

    let manualAmount = 0;


    if (lookupField != null) {
        let lookupId = lookupField[0].name;

        if (lookupId === "BCA") {
            manualAmount = 2300;
        } else if (lookupId === "MA") {
            manualAmount = 60000;
        } 
        formContext.getAttribute("xyz_amount").setValue(manualAmount);
    }
}

function hideAbcTab(primaryControl) {
    let formContext = primaryControl;

    formContext.ui.tabs.get("tab_4").setVisible(false);
}
 
function ribbonShow(primaryControl){
    let formContext = primaryControl;

   let lookupField = formContext.getAttribute("xyz_course").getValue();

    if (lookupField != null) {
        let lookupId = lookupField[0].name;

    if (lookupId === "B.Tech") {
            return true;
        }else{
            return false ;
        }
    }
}



function  ShowSmartRibbonButton(primaryControl){
     let formContext = primaryControl;

     let allowField  = formContext.getAttribute("xyz_allow").getValue();
     let Choice = formContext.getAttribute("xyz_student").getValue();

     if(allowField === true && Choice === 22){ 
              return true ;
         }else{
            return false ;
         }
     }


function  actionOnTriggerButton(primaryControl){
     let formContext = primaryControl;

          let  email = formContext.getAttribute("xyz_email").getValue();
          let phone = formContext.getAttribute("xyz_phone").getValue();
          let income = formContext.getAttribute("xyz_income").getValue();
         if(phone || email  ) {
            if(income > 0 ){
             formContext.data.save();
         }else{
             Xrm.Navigation.openAlertDialog({
                text:" pleas  Fill Data In Fields"
             })
         }
     }
}


function showButtonRibb(primaryControl){  // Enable rule
    let formContext = primaryControl;

    let statusAct =formContext.getAttribute("xyz_status").getValue();
    let allowYas = formContext.getAttribute("xyz_allow").getValue();

    if(statusAct  === 974170002  && allowYas === true){
        return true ; 
    }else{
       return false ;
    }
}



function showTabAb(primaryControl){
    let formContext = primaryControl;
    let amount = formContext.getAttribute("xyz_amount").getValue(); 
    if(amount != null ){
    if(amount > 1000 ){
        formContext.ui.tabs.get("tab_5").setVisible(true);
            formContext.ui.tabs.get("tab_5").setFocus();

        formContext.ui.tabs.get("tab_6").setVisible(false);
    }else if(amount < 1000){
        formContext.ui.tabs.get("tab_6").setVisible(true);
           formContext.ui.tabs.get("tab_6").setFocus();

        formContext.ui.tabs.get("tab_5").setVisible(false);
    }
 }
}



function VisibilityConditions(primaryControl){
    let formContext = primaryControl;

    let approvalStatus = formContext.getAttribute("xyz_approvalstatus").getValue();
    let email = formContext.getAttribute("xyz_email").getValue();
    let phone = formContext.getAttribute("xyz_phone").getValue();

    if(approvalStatus === 1){
        if(email || phone ){
            formContext.getAttribute("xyz_approvalstatus").setValue(2);
            Xrm.Navigation.openAlertDialog({
                text : " Sent For Approval "
            })
        }else{
            alert("you  did not fill data ")
        }
    }
}

function ApproveVisibilityConditions(primaryControl){
    let formContext = primaryControl;

    let statusPending = formContext.getAttribute("xyz_approvalstatus").getValue();

    if( statusPending === 2){
        formContext.getAttribute("xyz_approvalstatus").setValue(3);
    
        formContext.getControl("xyz_name").setDisabled(true);
        formContext.getControl("xyz_email").setDisabled(true);
        formContext.getControl("xyz_phone").setDisabled(true);
        formContext.getControl("xyz_income").setDisabled(true);
        formContext.getControl("xyz_status").setDisabled(true);
        formContext.getControl("xyz_allow").setDisabled(true);
        formContext.getControl("xyz_student").setDisabled(true);
        formContext.getControl("xyz_primarycontact").setDisabled(true);
        formContext.getControl("xyz_dublicateemail").setDisabled(true);
        formContext.getControl("xyz_amount").setDisabled(true);
    }else{
        formContext.getControl("xyz_name").setDisabled(false);
        formContext.getControl("xyz_email").setDisabled(false);
        formContext.getControl("xyz_phone").setDisabled(false);
        formContext.getControl("xyz_income").setDisabled(false);
        formContext.getControl("xyz_status").setDisabled(false);
        formContext.getControl("xyz_allow").setDisabled(false);
        formContext.getControl("xyz_student").setDisabled(false);
        formContext.getControl("xyz_primarycontact").setDisabled(false);
        formContext.getControl("xyz_dublicateemail").setDisabled(false);
        formContext.getControl("xyz_amount").setDisabled(false);
    }
}

function RejectedButton(primaryControl){
    let formContext = primaryControl;

    let staPending = formContext.getAttribute("xyz_approvalstatus").getValue();
     
    if(staPending ===  2){
        formContext.getAttribute("xyz_approvalstatus").setValue(4);
        formContext.getControl("xyz_email").setDisabled(false);
        formContext.getControl("xyz_phone").setDisabled(false);
        formContext.getControl("xyz_income").setDisabled(false);
        formContext.getControl("xyz_status").setDisabled(false);
        formContext.getControl("xyz_allow").setDisabled(false);
        formContext.getControl("xyz_student").setDisabled(false);
        formContext.getControl("xyz_primarycontact").setDisabled(false);
        formContext.getControl("xyz_dublicateemail").setDisabled(false);
        formContext.getControl("xyz_amount").setDisabled(false);
    }
}

function onLoadEvent(executionContext){
    let formContext = executionContext.getFormContext();

    let disableAllFields = formContext.getAttribute("xyz_approvalstatus").getValue();
  
    if(disableAllFields === 3){
        formContext.getControl("xyz_email").setDisabled(true);
        formContext.getControl("xyz_phone").setDisabled(true);
        formContext.getControl("xyz_income").setDisabled(true);
        formContext.getControl("xyz_status").setDisabled(true);
        formContext.getControl("xyz_allow").setDisabled(true);
        formContext.getControl("xyz_student").setDisabled(true);
        formContext.getControl("xyz_primarycontact").setDisabled(true);
        formContext.getControl("xyz_dublicateemail").setDisabled(true);
        formContext.getControl("xyz_amount").setDisabled(true);
    }else{
        formContext.getControl("xyz_name").setDisabled(false);
        formContext.getControl("xyz_email").setDisabled(false);
        formContext.getControl("xyz_phone").setDisabled(false);
        formContext.getControl("xyz_income").setDisabled(false);
        formContext.getControl("xyz_status").setDisabled(false);
        formContext.getControl("xyz_allow").setDisabled(false);
        formContext.getControl("xyz_student").setDisabled(false);
        formContext.getControl("xyz_primarycontact").setDisabled(false);
        formContext.getControl("xyz_dublicateemail").setDisabled(false);
        formContext.getControl("xyz_amount").setDisabled(false);
    }
}

function validateEmailAndphone(executionContext){
    let formContext = executionContext.getFormContext();

    let email = formContext.getAttribute("xyz_email").getValue();
    let phone = formContext.getAttribute("xyz_phone").getValue();

    if(email === null){
      formContext.getAttribute("xyz_phone").setRequiredLevel("required");
      formContext.getAttribute("xyz_email").setRequiredLevel("none");

    }else if( phone === null){
       formContext.getAttribute("xyz_email").setRequiredLevel("required");
       formContext.getAttribute("xyz_phone").setRequiredLevel("none");
    }
}

function requiredFields(executionContext){
    let formContext = executionContext.getFormContext();

     formContext.getAttribute("xyz_email").setRequiredLevel("required");
     formContext.getAttribute("xyz_phone").setRequiredLevel("required");
}

function onLoadEvent(executionContext) {
    let formContext = executionContext.getFormContext();

    let approvalStatus = formContext.getAttribute("xyz_approvalstatus").getValue();

    let fields = [
        "xyz_name",
        "xyz_email",
        "xyz_phone",
        "xyz_income",
        "xyz_status",
        "xyz_allow",
        "xyz_student",
        "xyz_primarycontact",
        "xyz_dublicateemail",
        "xyz_amount"
    ];

    let shouldDisable = (approvalStatus === 3);

    // 🔹 For loop use kiya
    for (let i = 0; i < fields.length; i++) {
        let control = formContext.getControl(fields[i]);
        
        if (control) {
            control.setDisabled(shouldDisable);
        }
    }
}

function openHtmlPage(primaryControl){
    let formContext = primaryControl;
    let webResourceName = "xyz_Projects";
    let windowOptions = { hieght: 500,  width : 600 };
     

   // let formData = formContext.getAttribute("").setValue();

    Xrm.Navigation.openWebResource(webResourceName, windowOptions);
}

/*function checkAge(primaryControl){
  let formContext = primaryControl;

   let phone = formContext.getAttribute("xyz_phone").getValue();
   let age = formContext.getAttribute("xyz_age").getValue();
   let vote = formContext.getAttribute("xyz_vote").getValue();

   if (age >= 18 ){
        formContext.getAttribute("xyz_vote").setVisible(true);
        formContext.getAttribute("xyz_vote").setValue(true);   
   }else if(vote === true){
       return true ;
   }else{
        return false ;
   }
}     */  

function clickOnButton(primaryControl){
    let formContext = primaryControl;
    let allowPage = formContext.getAttribute("xyz_allowwebpage").getValue();

     let sections =formContext.ui.tabs.get("tab_1").sections.get("null_section_5");
            sections.setVisible(true);  
}




 function  voteHide(executionContext){
    let formContext = executionContext.getFormContext();

     formContext.getControl("xyz_vote").setVisible(false); 
 }



 function showVoteFields(executionContext){
    let formContext = executionContext.getFormContext();

    let phone = formContext.getAttribute("xyz_phone").getValue();
    let age = formContext.getAttribute("xyz_age").getValue();

    if(phone && age){
        if (age >= 18 ){
        formContext.getControl("xyz_vote").setVisible(true);
        formContext.getAttribute("xyz_vote").setValue(true);   
        }
   }else{
    alert("pls enter value");
   }
}

function newHtmlPage(executionContext){
    let formContext = executionContext.getFormContext();

    let openNewHtmlPage = formContext.getAttribute("xyz_allowwebpage").getValue();
     if(openNewHtmlPage === true){
        
        let webResourceName = "xyz_Projects";
       let windowOptions = { hieght: 500,  width : 600 };
    
    Xrm.Navigation.openWebResource(webResourceName, windowOptions);
}
     
}



function webPageOpen(primaryControl){
    let formContext = primaryControl;
     
   let webResourceName = "xyz_Projects";
   let windowOptions = { hieght: 600, width: 700};

   Xrm.Navigation.openWebResource(webResourceName,windowOptions);

}



function webButtonShowOnClick(primaryControl){ 
     let formContext = primaryControl;

     let webPage = formContext.getAttribute("xyz_allowwebpage").getValue();
      if(webPage === true){
        return true ;
      }else{
        return false ;
      }
}

function refWebPage(executionContext){
    let formContext = executionContext.getFormContext();
     formContext.ui.refreshRibbon();
}


function allRecordInOne(executionContext){
    let formContext = executionContext.getFormContext();
   
    let customername = formContext.getAttribute("xyz_customername").getValue();
    if(customername === 2){
        formContext.ui.tabs.get("tab_2").setVisible(true);
    }else{
      alert("pls enter the optione ")
    }
  }



 function lastFields(executionContext){
    let formContext = executionContext.getFormContext();
    let region = formContext.getAttribute("xyz_region").getValue();

    if(region === 2 ){
        formContext.getAttribute("xyz_legalreview").setRequiredLevel("required");  
    }else {
    formContext.getAttribute("xyz_legalreview").setRequiredLevel("none");  
    }
 }

 function whenSecShow(executionContext){
    let formContext = executionContext.getFormContext();

    let directorApproval = formContext.getAttribute("xyz_dealamount").getValue();
    if(directorApproval >= 1000000){
       formContext.ui.tabs.get("tab_2").sections.get("section_1")
            .setVisible(true);
         }
    }



    function dealCloseButton (primaryControl){
        let formContext = primaryControl;

        let  discountPercentage = formContext.getAttribute("xyz_discountpercentage").getValue();
        if(discountPercentage > 25 ){
            return false ;
        }else{
            return true ;
        }
    }


    function setNotification(executionContext){
        let formContext = executionContext.getFormContext(); 

        let competitorInvolved = formContext.getAttribute("xyz_competitorinvolved").getValue();

        if(competitorInvolved === true){
            let message = " high Risk Deal - Directore Approval Required  ";
            let notificationId = "escalationAlert";
         
            formContext.ui.setFormNotification(message, "ERROR",notificationId);
     }else{
        formContext.ui.clearFormNotification("escalationAlert");
     }
    }


    function visibilityConditions(primaryControl){
        let formContext = primaryControl;

        let status = formContext.getAttribute("xyz_status").getValue();
        let managerApproval = formContext.getAttribute("xyz_managerapproval").getValue();
        let amount = formContext.getAttribute("xyz_amount").getValue();
        let urgent = formContext.getAttribute("xyz_urgent").getValue();
        if(status === 3 && managerApproval === true ){
          if( amount != null && amount < 50000){
            return true  ;
          }else  {
            return false ;
          } 
        }else if(amount > 50000 && urgent === false ){
            return true ;
        }else{  
            return false ;
        }
    }


    function studentForm(primaryControl){
        let formContext = primaryControl;
        
        let webResourceName = "xyz_Projects";
        let windowOptions = { hieght: 500, width: 600} ;

        Xrm.Navigation.openWebResource(webResourceName,windowOptions);
    }
    

//////////////////// table Name ---------- Employee Asset Requist------------------




    function formImplementation(executionContext){
        let formContext = executionContext.getFormContext();
        

         formContext.ui.tabs.get("tab_2").setVisible(false);
         formContext.ui.tabs.get("tab_3").setVisible(false);
         
          formContext.getControl("xyz_itapproval").setDisabled(true);
          formContext.getControl("xyz_deviceallocated").setDisabled(true);
          formContext.getControl("xyz_requistcompleted").setDisabled(true);

          
    }

    function responceOnAmount(executionContext){
        let formContext = executionContext.getFormContext();
        let assetCost = formContext.getAttribute("xyz_assetcost").getValue();   

        if(assetCost > 50000){
            formContext.ui.tabs.get("tab_2").setVisible(true);
            formContext.getAttribute("xyz_managerapproval").setRequiredLevel("required");
          }else{
            formContext.ui.tabs.get("tab_2").setVisible(true);
            formContext.getAttribute("xyz_managerapproval").setRequiredLevel(true);
          }        

    }


 function logicType(executionContext){
     let formContext = executionContext.getFormContext();

      let urgent = formContext.getAttribute("xyz_isurgent").getValue();

      if(urgent === true){
        formContext.getControl("xyz_comments").setVisible(true);
        formContext.getAttribute("xyz_comments").setRequiredLevel("required");
      }else{
        formContext.getControl("xyz_comments").setVisible(false);
        formContext.getAttribute("xyz_comments").setRequiredLevel("none");
      }
  }

  function managerApprovalManipulation(executionContext){
    let formContext = executionContext.getFormContext();

     let managerApproval = formContext.getAttribute("xyz_managerapproval").getValue();
     let itApprovalYas = formContext.getAttribute("xyz_itapproval").getValue();

     if(managerApproval  == true || itApprovalYas == true ){
        formContext.ui.tabs.get("tab_3").setVisible(true);
        formContext.getControl("xyz_itapproval").setDisabled(false);
        formContext.getControl("xyz_deviceallocated").setDisabled(false);
     }else{
        formContext.ui.tabs.get("tab_3").setVisible(false);
        formContext.getControl("xyz_itapproval").setDisabled(true);
     }
  }


  function manipulatField(executionContext){
    let formContext = executionContext.getFormContext();
    
    let deviceAllocated = formContext.getAttribute("xyz_deviceallocated").getValue();
    

    if(deviceAllocated == true){
        formContext.getControl("xyz_requistcompleted").setDisabled(false);
        formContext.getAttribute("xyz_requistcompleted").setValue(true)
        formContext.getControl("xyz_name").setDisabled(true);
        formContext.getControl("xyz_requeststatus").setDisabled(true);
        formContext.getControl("xyz_assettype").setDisabled(true);
        formContext.getControl("xyz_assetcost").setDisabled(true);
        formContext.getControl("xyz_isurgent").setDisabled(true);
        formContext.getControl("xyz_managerapproval").setDisabled(true);
        formContext.getControl("xyz_itapproval").setDisabled(true); 
    }else{
        formContext.getControl("xyz_name").setDisabled(false);
        formContext.getControl("xyz_requeststatus").setDisabled(false);
        formContext.getControl("xyz_assettype").setDisabled(false);
        formContext.getControl("xyz_assetcost").setDisabled(false);
        formContext.getControl("xyz_isurgent").setDisabled(false);
        formContext.getControl("xyz_managerapproval").setDisabled(false);
        formContext.getControl("xyz_itapproval").setDisabled(false); 
    }
  }


  //////////////////////// Employee on  Button Click 


function onClickEmployee(primaryControl){   
    let formContext = primaryControl;
     let  requistStatus = formContext.getAttribute("xyz_requeststatus").getValue();
     let assetConst = formContext.getAttribute("xyz_assetcost").getValue();

     if(requistStatus == 2 && assetConst > 50000){
        return true;
     }else{
        return false;
     }
}

  //// On button Click start approvel

  function whenbuttonClick(primaryControl){
     let formContext = primaryControl;
     
    formContext.ui.tabs.get("tab_2").setVisible(true);
    formContext.ui.tabs.get("tab_2").setFocus();
  }


////////// for Send to IT button //////////////////////////////////////////


function showSendButton(primaryControl){
    let formContext = primaryControl;

    let managerApproval = formContext.getAttribute("xyz_managerapproval").getValue();
    if(managerApproval === true){
         return true;
    }else{
        return false;
    }
}


function clickSendTo(primaryControl){
    let formContext = primaryControl;

   formContext.ui.tabs.get("tab_3").setVisible(true);
   formContext.ui.tabs.get("tab_3").setFocus();
}


/////////////Complete Request ribbon button show//////////

function completeRequest(primaryControl){
    let formContext = primaryControl;

    let tapproval = formContext.getAttribute("xyz_itapproval").getValue();
    let deviceAllocated  = formContext.getAttribute("xyz_itapproval").getValue();
    if(tapproval == true && deviceAllocated == true){
          return true ;
    }else{
        return false ;
    }
}

function setComplete(primaryControl){
    let formContext = primaryControl;
    
    formContext.getAttribute("xyz_requistcompleted").setValue(true);
    formContext.getControl("xyz_name").setDisabled(true);
    formContext.getControl("xyz_requeststatus").setDisabled(true);
    formContext.getControl("xyz_assettype").setDisabled(true);
    formContext.getControl("xyz_assetcost").setDisabled(true);
    formContext.getControl("xyz_isurgent").setDisabled(true);
    formContext.getControl("xyz_managerapproval").setDisabled(true);
    formContext.getControl("xyz_itapproval").setDisabled(true); 
    formContext.getControl("xyz_requistcompleted").setDisabled(true);
    formContext.getControl("xyz_deviceallocated").setDisabled(true);
    alert("success")
}


