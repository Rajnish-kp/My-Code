function showAlert(executionContext) {
    var formContext = executionContext.getFormContext();
    alert("Form Loaded Successfully!");
}

function formOnLoad(executionContext) {
    var formContext = executionContext.getFormContext();

    var lookup = formContext.getAttribute("bt_project").getValue();

    if (lookup[0] != null) {

        var guidofProject = lookup[0].id;
        var name = lookup[0].name;
        var entity = lookup[0].entityType;

        formContext.ui.setFormNotification("GUID OF THE PROJECT iS " + guidofProject, "INFO", " 1");
        formContext.ui.setFormNotification(" NAME OF THE PROJECT IS " + guidofProject, "INFO", " 2")
        formContext.ui.setFormNotification(" ENTITY TYPE IS " + guidofProject, "INFO", " 3")
    }

}


function showMessage() {
    alert("Button Clicked!");

}


function getValueName(executionContext) {
    var formContext = executionContext.getFormContext();

    var name1 = formContext.getAttribute("bt_projectname").getValue();
    formContext.getAttribute("bt_projectname").setValue("My name is rishu");

    if (name1 != null) {
        formContext.getControl("bt_projectname").setNotification("Error message");

    }
}



function getValues(executionContext) {
    var formContext = executionContext.getFormContext();
    var name = formContext.getAttribute("bt_name").getValue();
    var email = formContext.getAttribute("bt_email").getValue();

      //formContext.getAttribute("bt_name").setValue(" Real Name Is Rishu  ");
      //formContext.getAttribute("bt_email").setValue(" Rajnish123@.com ");

//   const email = executionContext.getAndSetValues("bt_email");


      if  (!email && !email.includes("@")){
        alert("Invilid Email ");
      }

    
}



function validateEmail(executionContext) {
    var formContext = executionContext.getFormContext();

    var email = formContext.getAttribute("bt_email").getValue();

    if (email && !email.includes("@")) {
        alert("Invalid Email");
    }
}



function showAlert(executionContext){
var formContext = executionContext.getFormContext();
alert("Hello from IND");
}

function openNewWindow(primaryControl) {
    window.open("https://org499da401.crm8.dynamics.com", "_blank", "width=500,height=400");
}
