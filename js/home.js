$(function () {
    //左边
    var share = $("#share");
    var detail = $("#detail");
    var interaction = $("#interaction");
    var personInfo = $("#person_info");
    var about = $("#about");

    //右边
    var back = $("#back");
    var signIn = $("#sign_in");
    var stroke = $("#stroke");
    var bath = $("#bath");
    var feed = $("#feed");
    var drinking = $("#drinking");

    //背景
    var goodFloor = $("#goodFloor");
    var sportsGround = $("#sportsGround");
    var avenue = $("#avenue ");
    var background = $("#bg");
    var classes = ['bg-goodFloor', 'bg-sportsGround', 'bg-avenue'];

    //羊驼
    var sheep = $(".sheep");

    clickEvent();

    //切换背景图片
    function applyClasses($elem, toAdd, exclude) {
        exclude = exclude ? exclude : 'fullScreen';
        $elem.removeClass(classes.filter(function (c) {
            return c !== exclude
        }).join(' '));
        $elem.addClass(toAdd);
    }

    function clickEvent() {
        /**点击返回按钮时触发*/
        back.click(function () {
            window.close();
        });

        /**点击签到按钮时触发*/
        signIn.click(function () {
            // alert("签到+1");
            $.ajax({
                // url: "http://www.wyd.com/admin/Signin/signIn",
                url: "http://www.wyd.com/admin/Login/login",
                dataType:"text",
                data: {"name": "吕布1", "password": "123456"},  //参数值
                type: "POST",   //请求方式
                beforeSend: function () {
                    //请求前的处理
                    console.log("beforeSend");
                },
                success: function (req) {
                    //请求成功时处理
                    console.log(req.toString());
                },
                complete: function () {
                    //请求完成的处理
                    console.log("complete");
                },
                error: function () {
                    //请求出错处理
                    console.log("error");
                }
            });
        });

        /**点击至善楼按钮时触发*/
        goodFloor.click(function () {
            applyClasses(background, 'bg-goodFloor');
            background.fadeIn();
        });

        /**点击运动场按钮时触发*/
        sportsGround.click(function () {
            applyClasses(background, 'bg-sportsGround');
            background.fadeIn();
        });

        /**点击林荫道按钮时触发*/
        avenue.click(function () {
            applyClasses(background, 'bg-avenue');
            background.fadeIn();
        });

        /**点击抚摸按钮时触发*/
        stroke.click(function () {
            // sheep.css("transform", "scaleY(2)");
        });
        /**点击洗澡按钮时触发*/
        bath.click(function () {
            // sheep.css("transform", "translateX(-30%)");

            // sheep.css("transform", "rotate3d(30,10,30,deg)");
        });
        /**点击喂食按钮时触发*/
        feed.click(function () {
            // sheep.css("transform", "skew(15deg,20deg)");
        });
        /**点击喝水按钮时触发*/
        drinking.click(function () {
            // sheep.css("transform", "skew(-15deg,-20deg)");
            // sheep.css("transform", "translateX(-30%)");

            // sheep.css("transform", "rotate(15deg,25deg)");
        });
    }
});

