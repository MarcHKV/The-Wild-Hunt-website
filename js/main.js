var contact_data = "";
var about_data = ""

$(document).ready(function () {

    $.get("../static/Markdowns/Contact.md", function (data) {
        contact_data = data;
        renderMarkdown("content", data);
    }, 'text');

    $.get("../static/Markdowns/About.md", function (data) {
        about_data = data;
    }, 'text');
});

$("#render_news").click(function () {
    renderMarkdown("content", news_data); //render News
});

$("#render_contact").click(function () {
    renderMarkdown("content", contact_data); //render Media
});

$("#render_about").click(function () {
    renderMarkdown("content", about_data); //render About
});

//function to render markdown
function renderMarkdown(target, markdown) {
    var element = document.getElementById(target);
    $(element).addClass("slide-in-blurred-right");
    var new_element = element.cloneNode(true);

    $.get(markdown, function (data) {
        document.getElementById(target).innerHTML =
            marked(markdown);
    }, 'text');

    element.parentNode.replaceChild(new_element, element);

}