var loggedIn = false;

$(document).ready(function () {
    $("#welcomeMessage").hide();

    // START FAMILY ***************************************
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
        loggedIn = true;
    };


    // LOGIN *******************************************
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

        $.get("/api/families", family, function (data) {
            // console.log(data);

            for (var i = 0; i < data.length; i++) {
                if (family.name === data[i].name && family.password === data[i].password) {
                    $("#loginBtn").hide();
                    $("#welcomeMessage").show();
                    $("#welcomeMessage").html("Welcome, " + data[i].name);
                    loggedIn = true;
                    $("#loginModal").modal("hide");
                }
            }
        });
    }


    // End of jQuery
})