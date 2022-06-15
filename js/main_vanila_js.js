// main2.js : javascript
var devWidth;
var limitsize=768;

window.addEventListener('load',function(){
    devWidth = document.querySelector("body").offsetWidth;
    // console.log("load devWidth : "+devWidth);

    window.addEventListener('resize',function(){
        devWidth = document.querySelector("body").offsetWidth;        
        console.log("resize devWidth : "+devWidth);

    });//window.resize

    {// 햄버거 버튼 클릭
        var mobBtn = document.querySelector("div.mobBtn");
        var mobCloseBtn = document.querySelector("div.mobBtn_close");
        var mob = document.querySelector(".mob");
        var body = document.querySelector("body");
        var bg = document.querySelector(".bg");
        mobBtn.addEventListener("click", function () {
            mob.classList.add("on");
            mobCloseBtn.classList.add("on");
            body.classList.add("on");
            bg.classList.add("on");
            this.style.display = "none";
        });// mobBtn.click - open

        mobCloseBtn.addEventListener("click", function () {
            mob.classList.remove("on");
            mobCloseBtn.classList.remove("on");
            body.classList.remove("on");
            bg.classList.remove("on");
            this.style.display = "block";
        });// mobBtn.click - open
    }

    {// 주메뉴
       var gnbMenu = document.querySelectorAll("nav.gnb>ul>li");
       var headerWrap = document.querySelector(".header_wrap");
       var formSrch = document.querySelector("form.srch");
       var srchOpen = document.querySelector(".srch_open");
       var topMenuDD = document.querySelectorAll("dl.topMenu>dd");
       var subMenu = document.querySelectorAll(".gnb>ul>li>ul");
       
       
       for (var i = 0; i < gnbMenu.length; i++) {//hover : mouseover & mouseout
           gnbMenu[i].addEventListener('mouseover', function(){
               // 모바일에서 실행X
               if (devWidth < limitsize) return false;
   
               // 열린 검색박스 닫기 : form.srch.on
               if (formSrch.offsetWidth > 0 && formSrch.offsetHeight > 0) {// is visible 대용
                   formSrch.classList.remove("on");
                   srchOpen.classList.remove("on");
               }
   
               // 열린 고객센터 메뉴 닫기 : dl.topMenu>dd:nth-of-type(5).on
               if (topMenuDD[4].classList.contains("on")) {
                   topMenuDD[4].classList.remove("on");
               }
   
               // header_wrap : show
               headerWrap.classList.add("on");     //.header_wrap.on {height:445px;}
   
               subMenu.forEach(function(item) {
                   item.classList.add("on");       //nav.gnb>ul>li>ul.on {display:block;}
               });
           });// mouseover

           gnbMenu[i].addEventListener('mouseout', function(){
               // 모바일에서 실행X
               if (devWidth < limitsize) return false;

               // header_wrap : hide
               headerWrap.classList.remove("on");

               // 
               subMenu.forEach(function(item) {
                   item.classList.remove("on");
               });
           });// mouseout
       }// for
    }

    {// 모바일 주메뉴
        var gnbMenuMob = document.querySelectorAll(".mob_gnb > ul > li");
        // console.log(gnbMenuMob);

        for(i=0;i<gnbMenuMob.length;i++){
            gnbMenuMob[i].addEventListener('click',function(){
                gnbMenuMob.forEach(function(item){
                    item.classList.remove("on");
                });// gnbMenuMob.forEach
                this.classList.toggle("on");
            });// mob_gnb ul li
        }// for
    }

    {// 검색창
        srchOpen.addEventListener('click', function(){
            this.classList.toggle("on");
            formSrch.classList.toggle("on");

            if(this.classList.contains("on")){
                this.children[0].setAttribute("title","검색입력서식 닫기");
            }else{
                this.children[0].setAttribute("title","검색입력서식 열기");
            }
        });// srchOpen.click
    }

    {// 고객센터
        // common
        topMenuDD[4].addEventListener("click",function(){
            this.classList.toggle("on");
            if(this.classList.contains("on")){
                this.children[0].setAttribute("title","고객센터 닫기");
            }else {
                this.children[0].setAttribute("title","고객센터 열기");
            }
        });

        // 모바일
        var mobTopMenu = document.querySelectorAll(".mob_topMenu>dd");
        mobTopMenu[4].addEventListener("click",function(){
            this.classList.toggle("on");
            if(this.classList.contains("on")){
                this.children[0].setAttribute("title","고객센터 닫기");
            }else {
                this.children[0].setAttribute("title","고객센터 열기");
            }
        });

    }

    {// apear & loop
        var appear = "";
        for (var i=0;i<57;i++) {
            if(i<10){
                appear += '<img src="images/appear/appear_0000' + i + '.png" alt="로그인버튼 ' + i + '" />'
            }else{
                appear += '<img src="images/appear/appear_000' + i + '.png" alt="로그인버튼 ' + i + '" />'
            }  
        }
        //$("a.appear").html(appear);
        document.querySelector("a.appear").innerHTML = appear;

        var loop = "";
        for (var i=0;i<82;i++) {
            if(i<10){
                loop += '<img src="images/loop/loop_0000' + i + '.png" alt="로그인버튼 ' + i + '" />'
            }else {
                loop += '<img src="images/loop/loop_000' + i + '.png" alt="로그인버튼 ' + i + '" />'
            }  
        }
        // $("a.loop").html(loop);
        document.querySelector("a.loop").innerHTML = loop;

        /* 로그인 이미지 애니메이션 */
        var appearImg = document.querySelectorAll("a.appear>img");
        for (var k=0;k<57;k++) {
            appearImg[k].style.animation = "ani 2.75s linear "+(k * 0.05)+"s 1 normal";
        }

        var loopImg = document.querySelectorAll("a.loop>img");
        for (var j=0;j<82;j++) {
           loopImg[j].style.animation = "ani 2.75s linear "+(j * 0.05 + 2.85)+"s infinite normal";
        }
    }

    {// Banner
        {//재료
            var bnnNum = 0;
            var lastNum = document.querySelectorAll(".banner_frame>section").length-1;
            var Banner_w = document.querySelector(".banner_frame>section").offsetWidth;

            var BnnSection = document.querySelectorAll(".banner_frame>section");
            var nextBtn = document.querySelector("a.next");
            var prevBtn = document.querySelector("a.prev");
            var BnnFrame = document.querySelector(".banner_frame");
            
            var BnnArrowBtn = document.querySelectorAll(".arrow a");
            var BnnRollBtn = document.querySelectorAll(".rolling a");

            //console.log(bnnNum);
            //console.log(lastNum);
            //console.log(banner_w);
            //console.log(BnnFrame);
            //console.log(BnnSection);
            //console.log(BnnArrowBtn);
            //console.log(BnnRoll);

        }

        {// next btn
            nextBtn.addEventListener('click',function(){
                // banner 전환
                bnnNum++;
                if(bnnNum>lastNum) {bnnNum=0;}
                BnnFrame.style.left = bnnNum * -Banner_w +"px";
                //transition을 pc에서 추가함!
 
                //arrow&rolling white 적용
                if( BnnSection[bnnNum].classList.contains("white") ){
                    BnnArrowBtn.forEach(function(item){
                        item.classList.add("white");
                    });
                    BnnRollBtn.forEach(function(item){
                        item.classList.add("white");
                    });
                }else {
                    BnnArrowBtn.forEach(function(item){
                        item.classList.remove("white");
                    });
                    BnnRollBtn.forEach(function(item){
                        item.classList.remove("white");
                    });
                }// for~else~

                // 페이지에 따른 rolling.on
                BnnRollBtn.forEach(function(item){
                    item.classList.remove("on");
                });
                BnnRollBtn[bnnNum].classList.add("on");
            });//next
        }

        {// prev btn
            prevBtn.addEventListener('click',function(){
                // banner 전환
                bnnNum--;
                if(bnnNum<0) {bnnNum=lastNum;}
                BnnFrame.style.left = bnnNum * -Banner_w+"px";

                //arrow&rolling white 적용
                if( BnnSection[bnnNum].classList.contains("white") ){
                    BnnArrowBtn.forEach(function(item){
                        item.classList.add("white");
                    });
                    BnnRollBtn.forEach(function(item){
                        item.classList.add("white");
                    });
                }else {
                    BnnArrowBtn.forEach(function(item){
                        item.classList.remove("white");
                    });
                    BnnRollBtn.forEach(function(item){
                        item.classList.remove("white");
                    });
                }// for~else~

                // 페이지에 따른 rolling.on
                BnnRollBtn.forEach(function(item){
                    item.classList.remove("on");
                });
                BnnRollBtn[bnnNum].classList.add("on");
            });//prev
        }

        {// AutoBanner
            function autoBanner(){
                bnnNum++;
                if(bnnNum>lastNum) {bnnNum=0;}
                BnnFrame.style.left = bnnNum * -Banner_w +"px";
                //transition을 pc에서 추가함!
 
                //arrow&rolling white 적용
                if( BnnSection[bnnNum].classList.contains("white") ){
                    BnnArrowBtn.forEach(function(item){
                        item.classList.add("white");
                    });
                    BnnRollBtn.forEach(function(item){
                        item.classList.add("white");
                    });
                }else {
                    BnnArrowBtn.forEach(function(item){
                        item.classList.remove("white");
                    });
                    BnnRollBtn.forEach(function(item){
                        item.classList.remove("white");
                    });
                }// for~else~

                // 페이지에 따른 rolling.on
                BnnRollBtn.forEach(function(item){
                    item.classList.remove("on");
                });
                BnnRollBtn[bnnNum].classList.add("on");
            }
              //일정한 시간동안 계속 반복, 5초마다 next
            var autoBnn = setInterval(autoBanner,5000);
        }

        {// play & pause
            var flag = true;
            var playBtn = document.querySelector("a.play");

            playBtn.addEventListener('click',function(){
                if(flag){
                    clearInterval(autoBnn);
                    this.classList.add("pause");
                    flag = false;
                }else{
                    autoBnn = setInterval(autoBanner,5000);
                    this.classList.remove("pause");
                    flag = true;
                }
            });

        }

        {// rollBtn 클릭 -> Banner 전환
            var BnnRoll = document.querySelectorAll(".banner_roll li");
            BnnRoll.forEach(function(item){
                item.addEventListener('click',rollAction);
            });//BnnRoll.click   
    
            function rollAction(item){
                curRoll = item.currentTarget;       //클릭 이벤트가 전달된 엘리먼트
                parentRoll = curRoll.parentElement; //연결된 엘리먼트의 부모
                childRoll = parentRoll.children;    //부모 엘리먼트의 자식 엘리먼트들
                bnnNum = Array.from(childRoll).indexOf(curRoll);     //연결된 엘리먼트의 인덱스

                console.log(BnnRoll);       //li * 6ea, 0~5번

                console.log(curRoll);       //클릭한 li
                console.log(parentRoll);    //ul.banner_roll
                console.log(childRoll);     //ul.banner_roll의 자식 = BnnRoll과 동일
                console.log(bnnNum);        //

                BnnFrame.style.left = bnnNum * -Banner_w +"px";
                //transition을 pc에서 추가함!
 
                //arrow&rolling white 적용
                if( BnnSection[bnnNum].classList.contains("white") ){
                    BnnArrowBtn.forEach(function(item){
                        item.classList.add("white");
                    });
                    BnnRollBtn.forEach(function(item){
                        item.classList.add("white");
                    });
                }else {
                    BnnArrowBtn.forEach(function(item){
                        item.classList.remove("white");
                    });
                    BnnRollBtn.forEach(function(item){
                        item.classList.remove("white");
                    });
                }// if~else~

                // 페이지에 따른 rolling.on
                BnnRollBtn.forEach(function(item){
                    item.classList.remove("on");
                });
                BnnRollBtn[bnnNum+1].classList.add("on");
            }//function rollAction

        }

    }

    {// content1 quick
        {// 이미지 삽입
            var quick1="";
        for (l=0;l<20;l++) {
            if(l<10){
                quick1 += '<img src="images/quick01/quick01_0000' + l + '.png" alt="카드등록 안내 ' + l + '" />'
            }else{
                quick1 += '<img src="images/quick01/quick01_000' + l + '.png" alt="카드등록 안내 ' + l + '" />'
            }  
        }
        //$("span.quick1").html(quick1);
        document.querySelector("span.quick1").innerHTML = quick1;

        var quick2="";
        for (l=0;l<20;l++) {
            if(l<10){
                quick2 += '<img src="images/quick02/quick02_0000' + l + '.png" alt="포인트적립처 안내 ' + l + '" />'
            }else{
                quick2 += '<img src="images/quick02/quick02_000' + l + '.png" alt="포인트적립처 안내 ' + l + '" />'
            }  
        }
        // $("span.quick2").html(quick2);
        document.querySelector("span.quick2").innerHTML = quick2;

        var quick3="";
        for (l=0;l<20;l++) {
            if(l<10){
                quick3 += '<img src="images/quick03/quick03_0000' + l + '.png" alt="보너스포인트 안내 ' + l + '" />'
            }else{
                quick3 += '<img src="images/quick03/quick03_000' + l + '.png" alt="보너스포인트 안내 ' + l + '" />'
            }  
        }
        // $("span.quick3").html(quick3);
        document.querySelector("span.quick3").innerHTML = quick3;

        var quick4="";
        for (l=0;l<20;l++) {
            if(l<10){
                quick4 += '<img src="images/quick04/quick04_0000' + l + '.png" alt="쿠폰혜택 안내 ' + l + '" />'
            }else{
                quick4 += '<img src="images/quick04/quick04_000' + l + '.png" alt="쿠폰혜택 안내 ' + l + '" />'
            }  
        }
        // $("span.quick4").html(quick4);
        document.querySelector("span.quick4").innerHTML = quick4;

        }

        //mouseover & mouseout
        var quickMenu = document.querySelectorAll(".content1>ul>li");

        quickMenu.forEach(function(item){
            item.addEventListener("mouseover", function(){
                for (var k=0;k<20;k++) {
                    var quickImg = this.children[0].children[0].children;  //quickMenu>a>span>img
                    quickImg[k].style.animation = "ani 1s linear "+(k * 0.05)+"s 1 normal";
                }
            });// quickMenu.mouseover
            item.addEventListener("mouseout", function(){
                for (var k=0;k<20;k++) {
                    var quickImg = this.children[0].children[0].children;
                    quickImg[k].style.animation = "none";
                }
            });// quickMenu.mouseout
        });// quickMenu.forEach
    }

    {// content3 
        {//재료
            var BrandFilter = document.querySelectorAll(".content3_inner>ul>li>a");             // console.log(BrandFilter);
            var BrandLink = document.querySelectorAll(".content3_inner>div>ul>li");             // console.log(BrandLink);

            var Brand_Ent = document.querySelectorAll(".content3_inner>div>ul>.ent");           //4ea   console.log(Brand_Ent);
            var Brand_Shop = document.querySelectorAll(".content3_inner>div>ul>.shop");         //9ea   console.log(Brand_Shop);
            var Brand_Diner = document.querySelectorAll(".content3_inner>div>ul>.diner");       //12ea  console.log(Brand_Diner);
            var Brand_Box = document.querySelectorAll(".content3_inner>div>ul>.box");           //1ea   console.log(Brand_Box);
        }

        {//브랜드 포인트 적립% 안내
            for (i=0;i<BrandLink.length;i++){
                BrandLink[i].querySelector("a").addEventListener('mouseover',function(){
                    this.classList.add("on");
                });//mouseover
                BrandLink[i].querySelector("a").addEventListener('mouseout',function(){
                    this.classList.remove("on");
                });//mouseout
            }// for
        }
        
        {//브랜드 분류 click-display:block or none
            BrandFilter.forEach(function(filter){
                filter.addEventListener('click',function(e){
                    /* 맨위로 점프 금지 */ 
                    e.preventDefault();
                    
                    /* BrandFilter on/off */
                    BrandFilter.forEach(function(item){
                        item.classList.remove("on");
                    });
                    this.classList.add("on");
  
                    /* BrandLink block/none */
                    var thisClass = this.parentElement.className;   
                    //console.log(thisClass); .className; 대신에 .getAttribute('class')도 가능;
                    BrandLink.forEach(function(link){
                        link.style.display = "none";
                        switch(thisClass){
                            case "all" : link.style.display = "block";break;
                            case "ent" : Brand_Ent.forEach(function(item){item.style.display = "block";});break;
                            case "shop" : Brand_Shop.forEach(function(item){item.style.display = "block";});break;
                            case "diner" : Brand_Diner.forEach(function(item){item.style.display = "block";});break;
                            case "box" : Brand_Box.forEach(function(item){item.style.display = "block";});break;
                        }// switch
                        
                    });// BrandLink.forEach
                });// filter.click      
            });// BrandFilter.forEach
        }
        
    }// content3

    {// 패밀리사이트
        var familySite = document.querySelector(".family_site");
        familySite.addEventListener('click',function(event){
            event.preventDefault();
            this.classList.toggle("on");
            if (this.classList.contains("on")){
                this.children[0].setAttribute("title","닫기");
            }else {
                this.children[0].setAttribute("title","열기");
            }
        });
    }

    {// 스크롤 이벤트
        var topBtn = document.querySelector('div.top');
        window.addEventListener('scroll',function(){
            var scroll = document.querySelector("html").scrollTop;

            {//top버튼 위치
                if(scroll < 100){topBtn.classList.remove("on","ab");
                }else if(100 <= scroll && scroll < 2600){    
                    topBtn.classList.remove("ab");
                    topBtn.classList.add("on");
                }else if(2600 <= scroll){
                    topBtn.classList.add("ab");
                }// if~else if~else if~

            }

            {// 도넛
                var DN_combineLeft = document.querySelector(".combine_Left");
                var DN_Left_s = document.querySelector(".doughnut_Left_s");
                var DN_Left_L = document.querySelector(".doughnut_Left_L");
                var DN_Center_M = document.querySelector(".doughnut_Center_M");
                var DN_Center_s = document.querySelector(".doughnut_Center_s");
                var DN_Right_M = document.querySelector(".doughnut_Right_M");
                var DN_Right_s = document.querySelector(".doughnut_Right_s");
                var DN_combineRight = document.querySelector(".combine_Right");
                
                DN_combineLeft.style.top = 71 + scroll*0.5;
                DN_Left_s.style.top = 796 + scroll*1.1;
                DN_Left_L.style.top = 1726 + scroll*0.1;
                DN_Center_M.style.top = 722 + scroll*0.1;
                DN_Center_s.style.top = 991 + scroll*1.1;
                DN_Right_M.style.top = 365 + scroll*0.5;
                DN_Right_s.style.top = 947 + scroll*0.1;
                DN_combineRight.style.top = 300 + scroll*0.7;

            }

        });// window.scroll

        {//topBtn.click
            topBtn.addEventListener('click',function(event){
                event.preventDefault();
                window.scroll({
                    top:0,
                    left:0,
                    behavior : 'smooth'
                });
            });

        }
        
    }
    
});//window.load