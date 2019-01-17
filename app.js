$("button").click(addTask);
$(document).on("click", "#delete", removeTask);

$("input").keypress(function(event) {
    if (even.which === 13) {

        addTask();
    };
    
});

function addTask() {
    var task = $("#new-task").val();

    $("#tasks").append("<h2>" + task + "<span id='delete'<button type='button' class='btn btn-danger'>X</button></span></h2>");

    $("#new-task").val("");
};

function removeTask() {
    $(this).closest("h2").remove();
}