$("document").ready(function() {
    $(".k").css("color", "cyan");
    $(".k").css("text-align", "center");
    $('p:first').css("color", "white");
    $("p:last").css("color", "blue");
    $('body').css("background-image", "url(http://images2.alphacoders.com/246/246522.jpg)");
    $("body").css("background-size", "cover");
    $('#replaceWHtml').bind('click', replaceWHtml);
    $("#replaceWText").bind("click", replaceWText);


    $(".chartme-btn-main").css("background-color", "red");


    $('.chartme-btn-main').click(function() {
        $(this).toggleClass('active');
        $("body").css("background-image", "url(http://www.mexicoguru.com/jigsaw/flag.jpg)");
        $("#replaceWHtml").css("color", "black");

        $("#pork").css("color", "white");
        $("#pork").css("text-align", "center");

        $("#hu").accordion({header: "h3"});
        $("#hu").css("opacity", "0.7");

    });

    $("#superHumans").accordion({header: "h3"});
    $("#superHumans").css("opacity", "0.7");

    $("h1").bind("mouseover", mouseOverMe);
    $("h1").bind("mouseout", mouseOutMe);

});

function mouseOverMe() {
    $("h1").css("color", "red");
}
function mouseOutMe() {
    $("h1").css("color", "cyan");
}
function replaceWHtml() {
    $('#ptag').html('<h6>HI<h6>');
}
function replaceWText() {
    $("#change").text("<h6>HI<h6>");
}



