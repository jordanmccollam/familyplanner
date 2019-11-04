$(document).ready(function() {

    $("#newMemberSubmit").on("click", function() {
        event.preventDefault();

        var newMember = {
            name: $("#newMemberName").val(),
            color: $("#newMemberColor input:radio:checked").val()
        };
        console.log(newMember);
    })

// END of jQuery
})