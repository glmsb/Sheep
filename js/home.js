$(function () {
    var back = $("#back");
    var signIn = $(".sign_in");
    var goodFloor = $("#goodFloor");
    var sportsGround = $("#sportsGround");
    var avenue = $("#avenue ");
    var background = $("#bg");

    clickEvent();

    function clickEvent() {
        /**点击返回按钮时触发*/
        back.click(function () {
            window.close();
        });

        /**点击签到按钮时触发*/
        signIn.click(function () {
            alert("签到+1")
        });

        /**点击至善楼按钮时触发*/
        goodFloor.click(function () {
            background.siblings().removeClass("bg-goodFloor");
            background.addClass("bg-goodFloor");
            background.fadeIn();
        });

        /**点击运动场按钮时触发*/
        sportsGround.click(function () {
            background.siblings().removeClass("bg-sportsGround");
            background.addClass("bg-sportsGround");
            background.fadeIn();
        });

        /**点击林荫道按钮时触发*/
        avenue.click(function () {
            background.siblings().removeClass("bg-avenue");
            background.addClass("bg-avenue");
            background.fadeIn();
        });
    }
});

