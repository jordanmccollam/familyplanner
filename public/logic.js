var loggedIn = false;

$(document).ready(function() {
    $("#welcomeMessage").hide();

    $("#startFamily").on("click", function() {
        event.preventDefault();
        $("#newFamilyModal").modal("show");
    });

    $("#newFamilySubmit").on("click", function() {
        event.preventDefault();
        
        var newFamily = {
            name: $("#newFamilyName").val(),
            password: $("#newPassword").val()
        };

        $.post("/api/families", newFamily);
        newLogin(newFamily.name);

        $("#newFamilyModal").modal("hide");
    });

    function newLogin(name) {
        $("#loginBtn").hide();
        $("#welcomeMessage").show();
        $("#welcomeMessage").html("Welcome, " + name);
        loggedIn = true;
    };




// End of jQuery
})