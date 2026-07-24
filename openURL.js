function createDuplicateRecord(executionContext){
    let formContext = executionContext.getFormContext();
    
    let userName = formContext.getAttribute("firstname").getValue();
    // let userLastName = formContext.getAttribute("lastname").getValue();
    let userJobtitle = formContext.getAttribute("jobtitle").getValue();
   // let userAccountName = formContext.getAttribute("parentcustomerid").getValue();
    let userEmail = formContext.getAttribute("emailaddress1").getValue();
    let userBusinessPhone = formContext.getAttribute("telephone1").getValue();
    // let userPhoneNumber = formContext.getAttribute("mobilephone").getValue();
   


    let data = {
        "rs_name": userName,
        "rs_address": userJobtitle,
        "rs_email": userEmail,
        "rs_phonenumber": userBusinessPhone,    
    }

    Xrm.WebApi.creatRecord("rs_newemployee", recordId ).then(
    function success(result) {
        console.log("Record created with ID: " + result.id);
    },
    function error(error) {
        console.log(error.message);
    }
);
}





















function deleteRecord(executionContext) {
    var formContext = executionContext.getFormContext();
    var recordId = formContext.data.entity.getId().replace("{", "").replace("}", "");

    Xrm.WebApi.deleteRecord("rs_newemployee", recordId).then(
        function success() {
            Xrm.Navigation.openAlertDialog({
                text: "Record Deleted Successfully"
            });
        },
        function error(error) {
            Xrm.Navigation.openAlertDialog({
                text: error.message
            });
        }
    );
}
