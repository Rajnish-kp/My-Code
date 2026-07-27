function onLookupRecordChange(executionContext){
    let formContext = executionContext.getFormContext();

    let lookupField = formContext.getAttribute("trn_courseid").getValue();

    let manualAmount = 0;

    if (lookupField != null){
       let lookupId = lookupField[0].name;

       if(lookupId === "BA") {
         manualAmount = 25000;

       }else if(lookupId === "MA") {
          manualAmount = 30000;
       
       }else if(lookupId === "MCA"){
          manualAmount = 4500;
        }
        
    }
    formContext.getAttribute("trn_feespaid").setValue(manualAmount);
}


