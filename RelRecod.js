function showSelectedRecords(primaryControl) {

    var selectedItems = primaryControl.getGrid().getSelectedRows();
    var count = selectedItems.getLength();

    // ❌ More than 2 records
    if (count > 2) {
        Xrm.Navigation.openAlertDialog({
            text: "Not allowed: Select maximum 2 records only."
        });
        return;
    }

    // ❌ No record selected
    if (count === 0) {
        Xrm.Navigation.openAlertDialog({
            text: "Please select at least 1 record."
        });
        return;
    }

    // ✅ 1 or 2 records → show Name + GUID
    var result = "";

    selectedItems.forEach(function (item) {
        var entity = item.getData().getEntity();

        var name = entity.getPrimaryAttributeValue();
        var id = entity.getId();

        result += "Name: " + name + "\nGUID: " + id + "\n\n";
    });

    // ✅ Show popup
    Xrm.Navigation.openAlertDialog({
        text: result
    });
}




function openSpecificRecord(primaryControl) {

    var entityFormOptions = {
        entityName: "trn_studenttable",  // apni table ka logical name (e.g. contact, lead)
        entityId: "615f4e76-f431-f111-88b4-002248d64c8c" // record ka GUID
    };

    Xrm.Navigation.openForm(entityFormOptions).then(
        function () {
            console.log("Record opened");
        },
        function (error) {
            console.log(error.message);
        }
    );
}
 

 // different code 
function showAlertOnTwoRecords(selectedControl) {
    try {
        var selectedCount = selectedControl.getGrid().getSelectedRows().getLength();

        if (selectedCount === 2) {
            alert("2 records select kiye gaye hain!");
        } else {
            alert("Please select exactly 2 records.");
        }
    } catch (e) {
        console.log(e.message);
    }
}