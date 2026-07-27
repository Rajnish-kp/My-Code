function setDates(executionContext) {
    var formContext = executionContext.getFormContext();

    var issueDateField = formContext.getAttribute("lib_issuedate");
    var dueDateField = formContext.getAttribute("lib_duedate");

    if ( issueDateField !=null && issueDateField.getValue() == null) {

        var today = new Date();
        issueDateField.setValue(today);

        var dueDate = new Date();
        dueDate.setDate(today.getDate() + 14);

        dueDateField.setValue(dueDate);
    }
}



