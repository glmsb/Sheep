const WHITE = 0;
const LIGHT_BROWN = 1;
const NIGGER_BROWN = 2;
const BLACK = 3;

/*在页面DOM文档加载完成后加载执行的，等效于$(document).ready(function(){...});
优于window.onload，后者必须等到页面内包括图片的所有元素加载完毕后才能执行。*/
$(function () {
    var lis = $("li");
    var colors = ["white","rgb(224,206,144)","rgb(113,88,48)","black"];
    for (var i = 0; i < lis.length; i++) {
        var li = $(lis.get(i));
        li.css("background-color", colors[i]);
    }

    $("ul").on("click","li",function (event) {
        // var ul = $("ul");
        var li = $(this);
        li.siblings().removeClass("select");
        li.addClass("select");
    });
});

function chooseColor(color) {
    alert($(event.target).name);
    $(event.target).setAttribute("background", "#f00");
}

function goGift() {
    window.location.href = "gift.html";
}

function goHome() {
    window.location.href = "home.html";
}