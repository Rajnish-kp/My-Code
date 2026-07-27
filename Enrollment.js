function opnenEnrollmentRecord(executionContexet){
    let formContext = executionContexet.getFormContext();


    let stage = formContext.data.process.getActiveStage();
    if(stage.getAntityName() === "new_enrollment"){

        let open={
            entityName : "new_enrollment"
        };
       
       Xrm.Navigation.openForm(open);
    }
}