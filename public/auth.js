$(document).ready(function () {
    $("#welcomeMessage").hide();

    // START FAMILY ****************************************************************
    $("#startFamily").on("click", function () {
        event.preventDefault();
        $("#newFamilyModal").modal("show");
    });

    $("#newFamilySubmit").on("click", function () {
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
    };


    // LOGIN ****************************************************************************
    $("#loginBtn").on("click", function () {
        event.preventDefault();
        $("#loginModal").modal("show");

        $("#loginSubmit").on("click", function () {
            login();
        })
    });

    function login() {
        var family = {
            name: $("#loginName").val(),
            password: $("#loginPassword").val()
        };
    }


    // End of jQuery
});