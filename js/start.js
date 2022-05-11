var word = document.getElementsByClassName("word");
var start_Enter = document.getElementsByClassName("start_Enter");
var bg = document.getElementsByClassName("bg");
var reply = document.getElementsByClassName("reply");
var width = (document.documentElement.clientWidth || document.body.clientWidth);
var height = (document.documentElement.clientHeight || document.body.clientHeight);
let spanBefore = document.querySelectorAll("span")[0];
var word_aft = getComputedStyle(spanBefore,"::after");
window.onload=a;
function a(){
    var i = 0;
    var o = 0;
    var end = false;
    var xh = true;
    setTimeout(function(){
        var t = setInterval(function(){
            i++;
            bg[0].style.filter = "blur(" + i + "px)";
            if(i>=100){
                clearInterval(t);
                end = true;
            }
            if(end == true){
                setInterval(function () {
                    if(xh){
                        var l = setInterval(function(){
                            i--;
                            bg[0].style.filter = "blur(" + i + "px)";
                            if(i<=20){
                                clearInterval(l);
                                xh = false;
                            }
                        },30)
                    }else{
                        var l = setInterval(function(){
                            i++;
                            bg[0].style.filter = "blur(" + i + "px)";
                            if(i>=100){
                                clearInterval(l);
                                xh = true;
                            }
                        },30)
                    }
                    console.log(xh);
                },3500);
            }
        },10);      //记时器t(每分秒加1点模糊度,加载完成后执行呼吸效果)
        var n = setInterval(function(){
            o++;
            bg[0].style.filter = "blur(" + i + "px)";
            start_Enter[0].style.opacity = o/100;
            if(o>100){
                clearInterval(n);
            }
        },10);      //记时器t(每分秒加1点透明度)
        word[0].style.marginBottom = "20vh";
        document.onmousemove = function(e){
            reply[0].style.left=e.pageX -5 + "px";
            reply[0].style.top=e.pageY +35 + "px";
        }
        start_Enter[0].onmouseover = function (){
            reply[0].style.display = "flex";
            reply[0].children[0].innerHTML = "后续正在开发中qwq";
            console.log("进去了");
        }
        start_Enter[0].onmouseout = function (){
            reply[0].style.display = "none";
            console.log("出来了");
        }
    },1100)     //定时器(在1.1秒后执行)
    if(height>width){
        start_Enter[0].style.width = "40vw";
        start_Enter[0].style.height = "4vh";
        reply[0].style.width = "50vw";
        word[0].style.marginRight = "5vw";
        console.log("手机");
    }else{
        console.log("电脑");
    }       //判断pc/pe
}