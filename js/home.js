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

    var hand = $(".hand");
    var heart1 = $(".heart1");
    var heart2 = $(".heart2");
    var heart3 = $(".heart3");
    var heart4 = $(".heart4");
    var gold_1 = $(".gold-des");

    var water = $("#drop");
    var showerHead = $(".shower_head");
    var waters = $(".waters");


    function initWater() {
        for (var i = 0; i < 10; i++) {
            var num1 = Math.random() * 100;
            var num2 = Math.random() * 28;
            var img = '<img class="water" style="position: absolute;left:' + num1 + '%;top: ' + num2 + '%;width: 15px;height: 25px" src="img/水滴.png">';
            water.append(img);
        }
    }


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

        /**点击返回按钮时触发*/
        back.click(function () {
            window.close();
        });

        /**点击签到按钮时触发*/
        signIn.click(function () {
            open("sign.html", "_self");
            // window.location.href = "sign.html";
        });

        /**点击抚摸按钮时触发*/
        stroke.click(function () {
            // sheep.css("transform", "scaleY(2)");
            hand.show("slow", function () {
                hand.animate({bottom: '-=3%', opacity: '0.4'}, "slow");
                hand.animate({opacity: '0.8'}, "slow");
                hand.animate({bottom: '+=3%'}, "slow");
                hand.fadeOut(2000);
            });
            gold_1.show("fast", function () {
                // gold_1.animate({top: '-=10%'}, "slow");
                // gold_1.animate({top: '-=10%'}, "fast");
                gold_1.animate({top: '15%'}, 3000, "swing", function () {
                    gold_1.fadeOut("slow");
                });
            });
            heart1.fadeIn(500);
            heart2.fadeIn(1000);
            heart3.fadeIn(1500);
            heart4.fadeIn(2000);
            heart1.fadeOut("slow");
            heart2.fadeOut("slow");
            heart3.fadeOut("slow");
            heart4.fadeOut("slow");
            // heart.show("slow"), function () {
            //
            // }
        });


        /**点击洗澡按钮时触发*/
        bath.click(function () {
            showerHead.fadeIn(500);
            initWater();
            water.fadeIn(1000);
            waters.fadeIn(1500, function () {
                setInterval(function () {
                    showerHead.fadeOut("slow");
                    water.fadeOut("slow");
                    waters.fadeOut("slow");
                }, 5000)
            });
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
            $.ajax({
                // url: "http://www.wyd.com/admin/Signin/signIn",
                url: "http://www.wyd.com/admin/Login/login",
                dataType: "text",
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
    }
});

