var loggedIn;

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
        login();
        $("#newFamilyModal").modal("hide");
    });


    // LOGIN ****************************************************************************
    $("#loginBtn").on("click", function () {
        event.preventDefault();
        $("#loginModal").modal("show");

        $("#loginSubmit").on("click", function () {
            
            // $.get("/api/families/" + family, function(data) {

            // })

            login();
            $("#loginModal").modal("hide");
        })
    });


    function login() {
        $("#loginBtn").hide();
        $("#welcomeMessage").show();
        loggedIn = {
            name: $("#newFamilyName").val() || $("#loginName").val(),
            password: $("#newPassword").val() || $("#loginPassword").val()
        };
        sessionStorage.setItem("family name", loggedIn.name);
        $("#welcomeMessage").html("Welcome, " + sessionStorage.getItem("family name"));

    };


    // End of jQuery
});