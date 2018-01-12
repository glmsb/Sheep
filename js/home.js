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

    var twoGrass = $(".two_grass");

    var cup = $(".cup");
    var sun1 = $(".sun1");
    var sun2 = $(".sun2");
    var sun3 = $(".sun3");

    var dialogAbout = $(".dialog_about");
    var btnKnow = $("#btn_know");

    var dialogPerson = $(".dialog_person");


    function initWater() {
        water.empty();
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

    //显示金币减少的过程
    function showGold() {
        gold_1.show("fast", function () {
            gold_1.animate({bottom: '85%'}, 3000, "swing", function () {
                // gold_1.attr('bottom', "54%");
                gold_1.fadeOut("slow");
            });
        });
        gold_1.css("bottom", "54%");
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
            hand.show("slow", function () {
                hand.animate({bottom: '-=3%', opacity: '0.4'}, "slow");
                hand.animate({opacity: '0.8'}, "slow");
                hand.animate({bottom: '+=3%'}, "slow");
                hand.fadeOut(2000);
            });

            gold_1.attr('src', "img/减金币.png");
            showGold();
            heart1.fadeIn(500);
            heart2.fadeIn(1000);
            heart3.fadeIn(1500);
            heart4.fadeIn(2000);
            heart1.fadeOut("slow");
            heart2.fadeOut("slow");
            heart3.fadeOut("slow");
            heart4.fadeOut("slow");
        });

        /**点击洗澡按钮时触发*/
        bath.click(function () {
            // gold_1[0].src;//获取
            gold_1.attr('src', "img/金币减4.png");
            showerHead.attr('src', "img/莲蓬头.png");
            waters.attr('src', "img/一滩水.png");
            console.log(gold_1[0].src);
            showerHead.fadeIn(500);
            initWater();
            water.fadeIn(1000);
            showGold();
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
            gold_1.attr('src', "img/金币减3.png");
            showerHead.attr('src', "img/胡萝卜.png");
            waters.attr('src', "img/一堆草.png");
            showerHead.fadeIn(500);
            water.fadeIn(1000);
            twoGrass.fadeIn(1200);
            showGold();
            waters.fadeIn(1500, function () {
                setInterval(function () {
                    showerHead.fadeOut("slow");
                    water.fadeOut("slow");
                    twoGrass.fadeOut("slow");
                    waters.fadeOut("slow");
                }, 3000)
            });
        });

        /**点击喝水按钮时触发*/
        drinking.click(function () {
            cup.show("slow");
            gold_1.attr('src', "img/减金币.png");
            showGold();
            sun1.fadeIn(500);
            sun2.fadeIn(1000);
            sun3.fadeIn(1500);
            setInterval(function () {
                cup.fadeOut("slow");
                sun1.fadeOut("slow");
                sun2.fadeOut("slow");
                sun3.fadeOut("slow");
            }, 3000);

            /* $.ajax({
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
             });*/
        });


        about.click(function () {
            overlay.show();
            dialogAbout.fadeToggle();
            overlay.click(function () {
                dialogAbout.fadeOut();
                overlay.close();
            })
        });
        btnKnow.click(function () {
            dialogAbout.fadeOut();
            overlay.close();
        });

        personInfo.click(function () {
            dialogPerson.fadeToggle();
        })
    }
});

