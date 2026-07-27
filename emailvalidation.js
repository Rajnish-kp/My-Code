function emailval(executionContext){
    var formContext=executionContext.getFormContext();

    var email =formContext.getAttribute("bt_email").getvalue();
     if(!email){
        alert("Invalid Email");
     }

}
