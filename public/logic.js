$(document).ready(function() {

    $("#startFamily").on("click", function() {
        $("#newFamilyModal").modal("show");
    });

    $("#newFamilySubmit").on("click", function() {
        $("#newFamilyModal").modal("hide");
        var newFamily = {
            name: $("#newFamilyName").val(),
            password: $("#newPassword").val()
        };

        
    })

// End of jQuery
})