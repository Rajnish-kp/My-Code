const { jsx } = require("react/jsx-runtime");

function fieldsMandetory(executionContext){
    let formContext = executionContext.getFormContext();

    let gender = formContext.getAttribute("trn_gender").getValue();

    if(gender === 933440000 ){ // Male
     formContext.getAttribute("trn_phone").setRequiredLevel("required");
     formContext.getAttribute("trn_email").setRequiredLevel("none");
     formContext.ui.tabs.get("tab_2").setVisible(false); // hide tab
     formContext.ui.tabs.get("{29e44670-78b1-4da7-b9cf-81d2eff4e1f9}").sections.get("null_section_4").setVisible(false);  //hide section
     formContext.getControl("trn_dateofbirth").setDisabled(false); // field lock 
    }else{
        formContext.getAttribute("trn_phone").setRequiredLevel("none");
        formContext.getAttribute("trn_email").setRequiredLevel("required");
        formContext.ui.tabs.get("tab_2").setVisible(true); // hide tab
        formContext.ui.tabs.get("{29e44670-78b1-4da7-b9cf-81d2eff4e1f9}").sections.get("null_section_4").setVisible(true); // show tab
             formContext.getControl("trn_dateofbirth").setDisabled(true);  //field unlock

    }
}



function subgridHideshow(executionContext){
    let formContext = executionContext.getFormContext();

    let subgridHide = formContext.getAttribute("trn_requirement").getValue();


    if(subgridHide != null ){
         let subgridControl = formContext.getControl("Subgrid_new_2");

        if(subgridHide === true ){
        subgridControl.setVisible(true);
         }else{
            subgridControl.setVisible(false);
        }
    }
}


function copyNumber(executionContext){
    let formContext = executionContext.getFormContext();

    let  quickView = formContext.ui.quickForms.get("QuickviewControl1775536932649");
    

    if(quickView !== undefined){

        if(quickView.isLoaded()){

            let fieldValue = quickView.getAttribute("trn_phone").getValue();
            alert(fieldValue);

        }else{
            alert("quickView Not Loaded ");
        }
    }
}

 function lockRecord(executionContext){
    let formContext = executionContext.getFormContext();

    let status = formContext.getAttribute("trn_status").getValue();

    if(status === 933440001){
        
        formContext.getControl("trn_courseid").setDisabled(false);
        formContext.getControl("trn_enrollmentdate").setDisabled(false);
//formContext.getControl("trn_phone").setDisabled(false);
        formContext.getControl("trn_studentid").setDisabled(false);
        formContext.getControl("trn_name").setDisabled(false);
        formContext.getControl("trn_feespaid").setDisabled(false);
        formContext.data.save();

    }else{
          formContext.getControl("trn_courseid").setDisabled(true);
        formContext.getControl("trn_enrollmentdate").setDisabled(true);
       // formContext.getControl("trn_phone").setDisabled(true);
        formContext.getControl("trn_studentid").setDisabled(true);
        formContext.getControl("trn_name").setDisabled(true);
        formContext.getControl("trn_feespaid").setDisabled(true);
       // formContext.data.unSave();

   
    }

 }  

 function saveOnPrevent(executionContext){
      let formContext = executionContext.getFormContext();
      let prevent = executionContext.getEventArgs();
    
      let checkCondition = formContext.getAttribute("trn_status").getValue();

       if (checkCondition !==  933440001){
        prevent.preventDefault();
    }
 }

function showButton(primaryControl){
    let formContext = primaryControl;

    let studentName = formContext.getAttribute("trn_name").getValue();
    let email = formContext.getAttribute("trn_email").getValue();
    let phone = formContext.getAttribute("trn_phone").getValue();

    if(studentName != null && email != null && phone != null ){
        return true;

    }else{
        return false;
    }

}

function actionOnSave(primaryControl){
      let formContext = primaryControl;

      formContext.getAttribute("trn_status").setValue(933440002);
  
}

function refreshButton(executionContext){
    let formContext = executionContext.getFormContext();

      formContext.ui.refreshRibbon(true);
}


  function hideTab(executionContext){
      let formContext = executionContext.getFormContext();

      formContext.ui.tabs.get("tab_3").setVisible(false);
      formContext.ui.tabs.get("tab_4").setVisible(false);
      
  }

  function showFinanceTab(primaryControl){
    let formContext = primaryControl;

    formContext.ui.tabs.get("tab_3").setVisible(true);
    formContext.ui.tabs.get("tab_3").setFocus();

   }
  
/*function showDocumentTab(executionContext){
    let formContext = executionContext.getFormContext();

    let allowDocument = formContext.getAttribute("trn_allowdocument").getValue();

   if(allowDocument === true){
     formContext.ui.tabs.get("tab_4").setVisible(true);
     formContext.ui.tabs.get("tab_4").setFocus();
   }else{
         formContext.ui.tabs.get("tab_4").setVisible(false);
   } 
}*/

function showDocumentButton(primaryControl){
    let formContext = primaryControl;

    let allowDocument = formContext.getAttribute("trn_allowdocument").getValue();
         
       if(allowDocument === true){
        return true;
       }else{
         return false;
       }

       // return allowDocument === true;
}

function clickOnButton(primaryControl){
    let formContext = primaryControl;

    formContext.ui.tabs.get("tab_4").setVisible(true);
    formContext.ui.tabs.get("tab_4").setFocus();
}

  

///// Prevent on save /////////////////////

function preventOnsave(executionContext){
    let formContext =executionContext.getFormContext();
    let prevent = executionContext.getEventArgs();




}



///////////////// craate syntex for web api ////////////

Xrm.WebApi.createRecord(entityLogicName,date) .then(successCallback,errorCallBack)
