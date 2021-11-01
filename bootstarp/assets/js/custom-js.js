$('.alert').alert();
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
$(function () {
    $('[data-toggle="popover"]').popover()
});
$('.popover-dismiss').popover({
    trigger: 'focus'
});

$(document).ready(function(){
    $("body").scrollspy({
        target: "#navbar",
        offset: 70
    }) 
});
