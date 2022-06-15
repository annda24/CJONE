//main.js
$(document).ready(function(){
   
    {// 1. 로그인 이미지 appear&loop
    //2/8 예제 4번 참고, 13. 문서객체조작 참고
    var appear = "";
    for (var i=0;i<57;i++) {
        if(i<10){
            appear += '<img src="images/appear/appear_0000' + i + '.png" alt="로그인버튼 ' + i + '" />'
        }else{
            appear += '<img src="images/appear/appear_000' + i + '.png" alt="로그인버튼 ' + i + '" />'
        }  
    }
    $("a.appear").html(appear);

    var loop = "";
    for (var i=0;i<82;i++) {
        if(i<10){
            loop += '<img src="images/loop/loop_0000' + i + '.png" alt="로그인버튼 ' + i + '" />'
        }else {
            loop += '<img src="images/loop/loop_000' + i + '.png" alt="로그인버튼 ' + i + '" />'
        }  
    }
    $("a.loop").html(loop);

    /* 로그인 이미지 애니메이션 */
    for (var k=0;k<57;k++) {
        $(".appear>img").eq(k).css({"animation":"ani 2.75s linear "+(k*.05)+"s 1 normal"})
    }
    for (var j=0;j<82;j++) {
        $(".loop>img").eq(j).css({"animation":"ani 2.75s linear "+(j*.05+2.85)+"s infinite normal"})
    }

    }// 1. 로그인 이미지

    {// 2. open/close : 검색창 + 고객센터 + footer>family site
        /* 검색 */
        $("span.srch_open").bind("click focus", function(e){
            e.preventDefault();

            $(this).toggleClass("on");
            $("form.srch").toggleClass("on");

            if($(this).hasClass("on")){
                $(this).children("a").attr("title","검색입력서식 닫기");
            }else{
                $(this).children("a").attr("title","검색입력서식 열기");
            }
        });// 검색

        /* 모바일 주메뉴 */
        $(".mob_gnb > ul > li").click(function(){
            $(this).siblings().removeClass("on");
            $(this).toggleClass("on");
            
        });// mob_gnb ul li

        //전체메뉴 열기
        $("div.mobBtn").click(function(){
            $("div.mobBtn_close").addClass("on");
            $("div.mob").addClass("on");
            $("body").addClass("on");
            $(".bg").addClass("on");
            $(this).hide();

        }); //전체메뉴 열기
        //전체메뉴 닫기 1-btn
        $("div.mobBtn_close").click(function(){
            $(this).removeClass("on");
            $("div.mob").removeClass("on"); 
            $("body").removeClass("on");
            $(".bg").removeClass("on");
            $("div.mobBtn").show();
        }); //전체메뉴 닫기

        //전체메뉴 닫기 2-mouseleave
        $("div.mob").mouseleave(function(){
            $("div.mobBtn_close").removeClass("on");
            $("div.mob").removeClass("on"); 
            $("body").removeClass("on");
            $(".bg").removeClass("on");
            $("div.mobBtn").show();
        });

        
        /* 고객센터:모바일 */
        $("dl.mob_topMenu>dd").eq(4).click(function(){
            $(this).toggleClass("on");

        // on/off에 따라 title 변경
            if($(this).hasClass("on")){
                $(this).children("a").attr("title","고객센터 닫기");
            }else{
                $(this).children("a").attr("title","고객센터 열기");
            }
        });// 고객센터:모바일

        /* 고객센터 */
        $("dl.topMenu>dd").eq(4).bind("click focus", function(e){
            e.preventDefault();

            $(this).toggleClass("on");

        // on/off에 따라 title 변경
            if($(this).hasClass("on")){
                $(this).children("a").attr("title","고객센터 닫기");
            }else{
                $(this).children("a").attr("title","고객센터 열기");
            }
        });// 고객센터

        // family_stie
        $(".family_site").bind("click focus", function(e){
            // 클릭시 새로고침 x
            e.preventDefault();

            // on/off
            $(this).toggleClass("on");

            // on/off에 따라 title 변경
            if($(this).hasClass("on")){
                $(this).children("a").attr("title","닫기");
            }else{
                $(this).children("a").attr("title","열기");
            }
        }); //family_stie > a toggle
    }// 2. open/close

    /* 2. resize */
    $(window).resize(function(){
        $devWidth = $("body").width();
        $banner_w=$("body>section").width();
    });

    {// 3. 주메뉴 : hover:on
        var $devWidth;
        var $limitsize = 768;  

        $devWidth = $("body").width();
        console.log($devWidth);

        $("nav.gnb > ul > li > a").bind("mouseover focus",function(){
            // 모바일에서 함수 실행 X
            if($devWidth < $limitsize) return false;

            // 열린 검색박스 닫기
            if( $("form.srch").is(":visible") ){
                $("form.srch").removeClass("on");
                $(".srch_open").removeClass("on");
            }
            // 열린 고객센터 메뉴 닫기
            if( $("dl.topMenu>dd").eq(4).hasClass("on") ){
                $("dl.topMenu>dd").eq(4).removeClass("on");
            }
            // show
            $(".header_wrap").stop().animate({"height":"445px"},300,"linear",function(){
                $("nav.gnb > ul > li > ul").css({"display":"block"});
            });
        });// mouseover

        $("nav.gnb").bind("mouseleave blur",function(){
            // 모바일에서 함수 실행 X
            if($devWidth < $limitsize) return false;

            // hide
            $(".header_wrap").stop().animate({"height":"120px"},300,"linear",function(){
                $("nav.gnb > ul > li > ul").css({"display":"none"});
            });
        });// mouseleave

        $("nav.gnb>ul").mouseover(function(){
            $("div.header_wrap").addClass("on");
        });
        $("nav.gnb>ul").mouseleave(function(){
            $("div.header_wrap").removeClass("on");
        });
    }// 3. 주메뉴

    {// 모바일 
        
    }


    {// Banner
        /* 1. banner */
        var $bnnNum = 0;
        var $lastNum = $(".banner_frame>section").size()-1;
        var $banner_w = $("body>section").width();

        console.log($lastNum);

        /* 3. next/prev btn */
        //next
        $(".next").click(function(){
            $bnnNum++;                      //$bnnNum 증가
            if($bnnNum>$lastNum) $bnnNum=0; //마지막에서 next하면 처음으로

            $(".banner_frame").stop().animate({"left":$bnnNum*-$banner_w},600,"linear",function(){
                // section에 .white 유무 확인
                if($(".banner_frame>section").eq($bnnNum).hasClass("white")){ //.arrow>a와 .rolling a에 addclass"on"
                    $(".arrow > a").addClass("white");
                    $(".rolling a").addClass("white");
                }else{ //없으면 removeClass"on"
                    $(".arrow > a").removeClass("white");
                    $(".rolling a").removeClass("white");  
                }

                // 해당 .banner_roll a에 addClass"on" / 해당X : removeClass"on"
                $(".banner_roll a").removeClass("on");
                $(".banner_roll a").eq($bnnNum).addClass("on");
            });
        });//next
        //prev
        $(".prev").click(function(){
            $bnnNum--;                      //$bnnNum 감소
            if($bnnNum<0) $bnnNum=$lastNum; //처음에서 prev하면 마지막으로

            $(".banner_frame").stop().animate({"left":$bnnNum*-$banner_w},600,"linear",function(){
                // section에 .white 유무 확인
                if($(".banner_frame>section").eq($bnnNum).hasClass("white")){//.arrow>a와 .rolling a에 addclass"on"
                    $(".arrow > a").addClass("white");
                    $(".rolling a").addClass("white");
                }else{ //없으면 removeClass"on"
                    $(".arrow > a").removeClass("white");
                    $(".rolling a").removeClass("white");  
                }

                // 해당 .banner_roll a에 addClass"on" / 해당X : removeClass"on"
                $(".banner_roll a").removeClass("on");
                $(".banner_roll a").eq($bnnNum).addClass("on");
            });
        });//prev

        /* 4. autoBanner */
        function autoBanner(){
            $bnnNum++;                      //$bnnNum 증가
            if($bnnNum>$lastNum) $bnnNum=0; //마지막에서 next하면 처음으로
            $(".banner_frame").stop().animate({"left" : $bnnNum*-$banner_w},600,"linear",function(){
                // section에 .white 유무 확인
                if( $(".banner_frame > section").eq($bnnNum).hasClass("white") ){ //.arrow>a와 .rolling a에 addclass"on"
                    $(".arrow > a").addClass("white");
                    $(".rolling a").addClass("white");
                }else{ //없으면 removeClass"on"
                    $(".arrow > a").removeClass("white");
                    $(".rolling a").removeClass("white");  
                }
        
                // 해당 .banner_roll a에 addClass"on" / 해당X : removeClass"on"
                $(".banner_roll a").removeClass("on");
                $(".banner_roll a").eq($bnnNum).addClass("on");
            }); //animate
        }; //autoBanner
        
        //일정한 시간동안 계속 반복, 5초마다 next
        var $autoBnn = setInterval(autoBanner,5000);

        // .rolling>p>a : play&pause
        var flag = true;        //재생
        $("a.play").click(function(){
            if(flag){ //pause
                clearInterval($autoBnn);
                $(this).addClass("pause");
                flag=false;
            }else{ //play
                $autoBnn = setInterval(autoBanner,5000);
                $(this).removeClass("pause");
                flag=true;
            }
        });
        
        // .banner_roll>li>a를 클릭하면 해당 section으로 바로 이동
        var $banner = $(".banner_roll a").click(function(){
            $bnnNum = $banner.index(this);
            clearInterval($autoBnn);
            $autoBnn = setInterval(autoBanner,5000);
            $(".banner_frame").stop().animate( {"left":-$bnnNum*$banner_w},600,"linear",function(){        
                // section에 .white 유무 확인
                if($(".banner_frame>section").eq($bnnNum).hasClass("white")){ //.arrow>a와 .rolling a에 addclass"on"
                    $(".arrow > a").addClass("white");
                    $(".rolling a").addClass("white");
                }else{ //없으면 removeClass"on"
                    $(".arrow > a").removeClass("white");
                    $(".rolling a").removeClass("white");  
                }

                // 해당 .banner_roll a에 addClass"on" / 해당X : removeClass"on"
                $(".banner_roll a").removeClass("on");
                $(".banner_roll a").eq($bnnNum).addClass("on");
            });  //animate
        }); //$banner

        //모바일 가로/세로 화면 전환시 맞는 위치에 있도록 애니메이션 적용
        $("body>section").bind("orientationchange",function(){
            $banner_w=$("body>section").width();
            $(".banner_frame").animate({"left":$bnnNum*-$banner_w},600,"linear");
        });

        //모바일에서 드래그
        $("body>section").bind("swipeleft",function(){
            $(".next").trigger("click");
        });
        $("body>section").bind("swiperight",function(){
            $(".prev").trigger("click");
        });
    }// banner

    {// content1 퀵메뉴 이미지 quick1~4
        var quick1="";
        for (l=0;l<20;l++) {
            if(l<10){
                quick1 += '<img src="images/quick01/quick01_0000' + l + '.png" alt="카드등록 안내 ' + l + '" />'
            }else{
                quick1 += '<img src="images/quick01/quick01_000' + l + '.png" alt="카드등록 안내 ' + l + '" />'
            }  
        }
        $("span.quick1").html(quick1);

        var quick2="";
        for (l=0;l<20;l++) {
            if(l<10){
                quick2 += '<img src="images/quick02/quick02_0000' + l + '.png" alt="포인트적립처 안내 ' + l + '" />'
            }else{
                quick2 += '<img src="images/quick02/quick02_000' + l + '.png" alt="포인트적립처 안내 ' + l + '" />'
            }  
        }
        $("span.quick2").html(quick2);

        var quick3="";
        for (l=0;l<20;l++) {
            if(l<10){
                quick3 += '<img src="images/quick03/quick03_0000' + l + '.png" alt="보너스포인트 안내 ' + l + '" />'
            }else{
                quick3 += '<img src="images/quick03/quick03_000' + l + '.png" alt="보너스포인트 안내 ' + l + '" />'
            }  
        }
        $("span.quick3").html(quick3);

        var quick4="";
        for (l=0;l<20;l++) {
            if(l<10){
                quick4 += '<img src="images/quick04/quick04_0000' + l + '.png" alt="쿠폰혜택 안내 ' + l + '" />'
            }else{
                quick4 += '<img src="images/quick04/quick04_000' + l + '.png" alt="쿠폰혜택 안내 ' + l + '" />'
            }  
        }
        $("span.quick4").html(quick4);

        //hover
        $(".content1 a").hover(function(){   //mouseover
            for (var k=0;k<20;k++) {
                $(this).find("span").children().eq(k).css({"animation":"ani 1s linear "+(k*.05)+"s 1 normal"})
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        },function(){                        //mouseleave
            $(this).find("span").children().css({"animation":"none"})
        });
    }// content1

    {// content2 스크롤 도넛
        $(window).scroll(function(){
            var scroll = $(this).scrollTop();
            console.log(scroll);

            //도넛
            $(".combine_Left").css({"top":71 + scroll*0.5});
            $(".doughnut_Left_s").css({"top":796 + scroll*1.1});
            $(".doughnut_Left_L").css({"top":1726 + scroll*0.1});
            
            $(".doughnut_Center_M").css({"top":722 + scroll*0.1});
            $(".doughnut_Center_s").css({"top":991 + scroll*1.1});

            $(".doughnut_Right_M").css({"top":365 + scroll*0.5});
            $(".doughnut_Right_s").css({"top":947 + scroll*0.1});
            $(".combine_Right").css({"top":-300 + scroll*0.7});
        }); //도넛

    }// content2

    {// content3
        // content3_inner div a hover
        $(".content3_inner > div > ul > li").hover(function(){ //mouseover
            $(this).addClass("on");
        },function(){                               //mouseleave
            $(this).removeClass("on");
        });

        //class에 따른 display none/block
        $(".content3_inner > ul > li > a").bind("click focus", function(e){
            e.preventDefault();
            $(".content3_inner > ul > li > a").removeClass("on");
            $(this).addClass("on");

            var $thisClass = $(this).parent().attr("class");      
            $(".content3_inner > div > ul > li").hide();  
            switch($thisClass){
                case "all" :
                    $(".content3_inner > div > ul > li").show();  
                    break;
                case "ent" :
                    $(".content3_inner > div ul").find(".ent").show();
                    break;
                case "shop" :
                    $(".content3_inner > div li").filter(".shop").show();
                    break;
                case "diner" :
                    $(".content3_inner > div ul").find(".diner").show();
                    break;
                case "box" :
                    $(".content3_inner > div li").filter(".box").show();
                    break;
            } //switch

        }); //.bind("click focus")
    }// content3
    
    {// footer
        $(window).scroll(function(){
            var scroll = $(this).scrollTop();
            console.log(scroll);

            //top버튼 위치
            if(scroll < 100){ // 안보임
                $("div.top").removeClass("on ab");
            }else if(scroll >= 100 && scroll < 2600){ // 스크롤따라다님
                $("div.top").removeClass("ab");
                $("div.top").addClass("on");
            }else if(scroll >= 2600){ // footer 위에 고정
                $("div.top").addClass("ab");
            }
        });
    }// footer
    
}); //$(document).ready
