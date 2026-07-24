function updateOn(executionContexet){
    let formContext = executionContexet.getFormContext();

    let formType = formContext.ui.getFormType();
   
    if(formType === 1 ){
         return true;
    }

     let  firstUpdate = formContext.getAttribute("learn_phone").getValue();

     if(firstupdate === true){
        formContext.setFormNotification("You are only allowed to modify and save this record once after creation.", "ERROR", "block_second_save");
        executionContext.getEventArgs().preventDefault();
     }else{
       formContext.getAttribute("learn_phone").setValue(true);
     }
   }

   