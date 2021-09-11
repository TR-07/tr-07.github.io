$(document).ready(function() {
    console.log(window.location.search);
    if (window.location.search == '?accordeon-contact-item') {
        $('#accordeon-nachricht-collapse-item').addClass('show');
        $("#button_nachricht_open").removeClass("collapsed");
    }
});