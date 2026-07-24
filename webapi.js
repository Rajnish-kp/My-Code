////////////////// create new record ////////////

// ///Xrm.WebApi.createRecord(entityLogicName,date) .then(successCallback,errorCallBack)

// let  expenseRequestId;
// let data = {
//     "xyz_name": " abhimanyu",
//     "xyz_lastname": "kumar12244567"
// }   

// parent.Xrm.WebApi.createRecord("xyz_expenserequist", data). then(
//     function success(result){
//         expenseRequestId = result.id;
//         alert("Success. Id:  " + expenseRequestId);
//     },
//     function ( error ){
//         alert("Error:" + error . message)
//     }
// );


// ///////////////////// how to retrieve multiple fields////////////////

// function getMultipleRecord(executionContext){
//     let formContext = executionContext.getFormContext();
//     setTimeout(function(){
//         let id=formContext.data.entity.getId().replace("{","").replace("}","");
//     if (!id) {
//         alert("Record ID not found. Please save the record first.");
//         return;
//     }

 

// parent.Xrm.WebApi.retrieveRecord("xyz_expenserequist",id,"?$select=xyz_name,xyz_lastname,xyz_phone,xyz_age").then(

//     function success(result){
//         var data = {
//             "xyz_firstname":result.xyz_name,
//             "xyz_lastname":result.xyz_lastname,
//             "xyz_phone":result.xyz_phone,
//             "xyz_age":result.xyz_age
//         };
//         parent.Xrm.WebApi.createRecord("xyz_projects", data).then(
//             function success(i){
//                 alert("hello anjali");
//             },
//             function error(eee){
//                 alert(eee.message);
//             }
//         )
//     },
//             function error(eee){
//                 alert(eee.message);}
//             )
//     },2000)
// }




// /////////// retrieve lookup value  /////////////


// function getMyLook(executionContext){
//     let formContext = executionContext.getFormContext();
    
//      let lookup= formContext.getAttribute("xyz_primarycontact").getValue();
//      if(lookup != null){
//          let primaryContectId = lookup[0].id.replace("{","").replace("}","")
     

//      Xrm.WebApi.retrieveRecord("xyz_democontact",primaryContectId,"?$select=xyz_phone").then(
//         function success(result){
//            console.log("phone Value ", result.xyz_phone);

//             formContext.getAttribute("xyz_phone").setValue(result.xyz_phone);
//             formContext.getAttribute("xyz_phone").setSubmitMode("always");
//     },  
//         function (error){
//             console.log("We have faced some isue", error.message);
//     }
//   );
//  }
// } 

// ///////// updata Record /////////

// function updatedRecord(primaryControl){
//     let formContext = primaryControl;

//     let financeApproval = formContext.getAttribute("").getValue();
//     let status = formContext.getAttribute("").getvalue();

//     let id = formContext.data.entity.getId().replace("{","").replace("}","");
     
//     let data = {
//         "xyz_abc": financialApproval,
//         "xyz_status": status 
//     }
//      Xrm.WebApi.updateRecord("xyz_abcrequest",id,Data).then(
//         function success (result){
//             console.log(" wow rishu, you finaly did it ");
//         },
//          function (error){ 
//             console.log(error.message)
//          }
//      )
// }


/////////////Customer inquiry to loan Application

function createLoanApplication(executionContext) {
    var formContext = executionContext.getFormContext();
    var inquiryStatus = formContext.getAttribute("new_inquirystatus").getValue();

    if (inquiryStatus == 2) {   // selected Qualified field

        var inquiryId = formContext.data.entity.getId().replace(/[{}]/g, "");

        var customerName = formContext.getAttribute("new_inquirynumber").getValue();

        var loanAmount = formContext.getAttribute("new_estimatedloanamount").getValue();

        var loanType = formContext.getAttribute("new_interestedloantype").getValue();

        var loanData = {

            new_customefullname: customerName,
            new_loanamount: loanAmount,
            new_loantype: loanType,

             new_applicationdate: new Date(),

            new_status: 1,

            "new_sourceinquiryid@odata.bind":
                 "/new_customerinquiries(" + inquiryId + ")"
        };

        Xrm.WebApi.createRecord("new_loanapplication", loanData)
            .then(function (result) {

                var loanAppId = result.id;

                var updateData = {
                    new_inquirystatus: 3
                };

                Xrm.WebApi.updateRecord(
                    "new_customerinquiry",
                    inquiryId,
                    updateData
                ).then(function () {

                    alert("WOW!! Record Created Successfully.");

                    Xrm.Navigation.openForm({
                        entityName: "new_loanapplication",
                        entityId: loanAppId
                    });

                });

            })
            .catch(function (error) {

                alert("Ohh Shitt!! Record Not Created.");

                console.log(error.message);

            });
    }
}



function loanApplicationWhenLoad(executionContext){
    let formContext = executionContext.getFormContext();

    if( formContext.ui.getFormType() !== 2 ) {
      return;
  }

   let customerLookup = formContext.getAttribute("new_customerprofileid").getValue();

   if(!customerLookup){
      return;
   }
 
   let customerId = customerLookup[0].id.replace("{", "").replace("}", "");


    Xrm.WebApi.retrieveRecord("new_customerprofile",customerId,"?$select=new_firstname, new_lastname, new_creditscore, new_creditbureau, new_lastcreditpulldate").then(
        function success(result){

           var firstName = result.new_firstname;
            var lastName = result.new_lastname;
            var creditScore = result.new_creditscore;
            var creditBureau = result.new_creditbureau;
            var lastPullDate = result.new_lastcreditpulldate;
  

            formContext.getAttribute("new_creditscoresnapshot").setValue(creditScore);
            if(creditScore < 650){
            
                formContext.ui.setFormNotification("Warning: Customer Credit Score is below 650.","WARNING", "creditscorewarning");

            
           
             if (lastPullDate) {

                var today = new Date();
                var pullDate = new Date(lastPullDate);

                var diffDays = (today - pullDate) / (1000 * 60 * 60 * 24);

                if (diffDays > 90) {

                    formContext.ui.setFormNotification(
                        "Credit report is older than 90 days. Please refresh.",
                        "INFO",
                        "creditinfo"
                    );

                } 
             }
        }
       
        }, 
        function (error) {
            console.log(error.message);

        }

        
    );

}


/////////// retrieve multiple record


function loadLoanApplications(executionContext) {

    var formContext = executionContext.getFormContext();

    // Current Customer Id
    var customerId = formContext.data.entity.getId();

    if (!customerId) {
        return;
    }

    customerId = customerId.replace("{", "").replace("}", "");

    // OData Query
    var query =
        "?$select=new_name,new_loanamount,new_status,new_applicationdate" +
        "&$filter= new_customerprofileid eq " + customerId +
        " and new_status in (1,2)" +
        " and statecode eq 0" +
        "&$orderby=new_applicationdate desc" +
        "&$top=10";

    Xrm.WebApi.retrieveMultipleRecords(
        "new_loanapplication",
        query
    ).then(

        function success(result) {

            var html = "";

            if (result.entities.length === 0) {

                html = "<h3>No active applications found.</h3>";

            }
            else {

                html = "<table border='1' style='border-collapse:collapse;width:100%'>";
                html += "<tr>";
                html += "<th>Application Name</th>";
                html += "<th>Loan Amount</th>";
                html += "<th>Status</th>";
                html += "<th>Application Date</th>";
                html += "</tr>";

                result.entities.forEach(function (record) {

                    var name = record.new_name || "";

                    var amount = record.new_loanamount != null
                        ? record.new_loanamount.toLocaleString()
                        : "";

                    var status = "";

                    switch (record.new_status) {

                        case 1:
                            status = "Draft";
                            break;

                        case 2:
                            status = "Submitted";
                            break;

                        default:
                            status = "";
                    }

                    var appDate = "";

                    if (record.new_applicationdate) {

                        appDate = new Date(record.new_applicationdate)
                            .toLocaleDateString();

                    }

                    html += "<tr>";
                    html += "<td>" + name + "</td>";
                    html += "<td>" + amount + "</td>";
                    html += "<td>" + status + "</td>";
                    html += "<td>" + appDate + "</td>";
                    html += "</tr>";

                });

                html += "</table>";

            }

            // HTML Web Resource me bhejna
            var webResource = formContext.getControl("WebResource_LoanList");

            if (webResource) {

                webResource.getContentWindow().then(

                    function (contentWindow) {

                        contentWindow.showLoanApplications(html);

                    }

                );

            }

        },

        function (error) {

            console.log(error.message);

        }

    );

}






/////========================== 4 Update Record


function loadLoanApplications(executionContext) {

    var formContext = executionContext.getFormContext();

    var customerId = formContext.data.entity.getId();

    if (!customerId) return;

    customerId = customerId.replace(/[{}]/g, "");

    var query =
        "?$select=new_name,new_loanamount,new_status,new_applicationdate" +
        "&$filter=_new_customerprofileid_value eq " + customerId +
        " and (new_status eq 1 or new_status eq 2)" +
        " and statecode eq 0" +
        "&$orderby=new_applicationdate desc" +
        "&$top=10";

    Xrm.WebApi.retrieveMultipleRecords("new_loanapplication", query).then(

        function (result) {

            var html = "";

            if (result.entities.length === 0) {

                html = "<h3>No active applications found.</h3>";

            } else {

                html = "<table style='width:100%;border-collapse:collapse;' border='1'>";
                html += "<tr>";
                html += "<th>Name</th>";
                html += "<th>Amount</th>";
                html += "<th>Status</th>";
                html += "<th>Date</th>";
                html += "</tr>";

                result.entities.forEach(function (r) {

                    var status = "";

                    if (r.new_status == 1)
                        status = "Draft";
                    else if (r.new_status == 2)
                        status = "Submitted";

                    html += "<tr>";
                    html += "<td>" + (r.new_name || "") + "</td>";
                    html += "<td>" + (r.new_loanamount || "") + "</td>";
                    html += "<td>" + status + "</td>";
                    html += "<td>" +
                        (r.new_applicationdate ?
                            new Date(r.new_applicationdate).toLocaleDateString() : "")
                        + "</td>";
                    html += "</tr>";

                });

                html += "</table>";

            }

            var wr = formContext.getControl("WebResource_LoanList");

            if (wr) {

                wr.getContentWindow().then(function (cw) {

                    cw.showLoanApplications(html);

                });

            }

        },

        function (error) {

            console.log(error.message);

        }

    );

}


/////////////////////////////================ 5 delete recorde

// Web Resource: new_loanapplication_autodelete.js

function autoDeleteCancelledDraft(executionContext) {

    var formContext = executionContext.getFormContext();
    var eventArgs = executionContext.getEventArgs();

    var status = formContext.getAttribute("new_status").getValue();
    var subStatus = formContext.getAttribute("new_substatus").getValue();

    // Only Draft + Cancelled by Customer
    if (status !== 1 || subStatus !== 4) {
        return;
    }

    // Stop normal save
    eventArgs.preventDefault();

    var confirmStrings = {
        title: "Confirm Delete",
        text: "This will permanently delete the cancelled draft loan application. Continue?"
    };

    var confirmOptions = {
        height: 200,
        width: 450
    };

    Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
        function (success) {

            if (!success.confirmed) {

                // Revert value
                formContext.getAttribute("new_substatus").setValue(null);

                return;
            }

            var recordId = formContext.data.entity.getId().replace(/[{}]/g, "");

            Xrm.WebApi.deleteRecord("new_loanapplication", recordId).then(

                function () {

                    Xrm.Navigation.openAlertDialog({
                        text: "Loan Application deleted successfully."
                    }).then(function () {

                        Xrm.Navigation.navigateTo(
                            {
                                pageType: "entitylist",
                                entityName: "new_loanapplication"
                            }
                        );

                    });

                },

                function (error) {

                    Xrm.Navigation.openErrorDialog({
                        message: error.message
                    });

                }

            );

        }

    );

}





