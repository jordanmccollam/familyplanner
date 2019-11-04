var currentFamily;

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

            $.get("/api/families/" + $("#loginName").val(), function (data) {
                if (data.password === $("#loginPassword").val()) {
                    login();
                    $("#loginModal").modal("hide");
                }
            });
        })
    });


    function login() {
        currentFamily = {
            name: $("#newFamilyName").val() || $("#loginName").val(),
            password: $("#newPassword").val() || $("#loginPassword").val()
        };
        sessionStorage.setItem("family name", currentFamily.name);
        sessionStorage.setItem("logged in", true);
        location.reload();
    };


    // If already logged in *******************************************************************************
    if (sessionStorage.getItem("logged in") === "true") {
        $("#loginBtn").hide();
        $("#welcomeMessage").show();
        $("#welcomeMessage").html("Welcome, " + sessionStorage.getItem("family name"));
    }

    // End of jQuery
});