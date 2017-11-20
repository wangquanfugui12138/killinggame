/**
 * Created by admin on 2017/11/14.
 */
var arr=get_url();

window.onload=function(){
    var restKiller = 0;
    var restPeo = 0;
    //计算剩余杀手数目和平民数目
    for (var j = 1; j <= (Math.floor((arr.length) / 2)) + 1; j++) {
        var temp = sessionStorage.getItem("gamer" + j).split(',');
        if (temp[2] == 1) {
            if (temp[3] !=1 &&temp[3] != 2) {
                restKiller++;
            }
        }
        if (temp[2] == 0) {
            if (temp[3] != 1&&temp[3] != 2) {
                restPeo++;
            }
        }
    }
    //判断游戏是否结束
    if (restKiller != 0) {
        if (restKiller >= restPeo) {
            confirm("杀手胜利!");
            location.href = "end.html?restKiller=" + restKiller + "&restPeo=" + restPeo;
        }
        else {
            for(var i=1;i<=(Math.floor((arr.length)/2))+1;i++){
                var iskilled= sessionStorage.getItem("gamer"+i).split(',');//遍历玩家状态
                sessionStorage.setItem("endDay",iskilled[1]);
                if(sessionStorage.getItem("event")==0) {//判断是否为杀手杀人后跳转
                    if (iskilled[1] == 1) {//判断天数
                        if (iskilled[3] == 1) {//判断是否死亡
                            document.getElementById('sssr').style.backgroundColor = "#92b7a5";
                            document.getElementById('ysj1').style.borderColor = "transparent #92b7a5 transparent transparent";
                            var tips = document.createElement('div');
                            tips.id = "gamer" + i;
                            tips.style.float = "left";
                            tips.style.height = "1rem";
                            tips.style.width = "70%";
                            $(tips).css('top', "26%");
                            $(tips).css('left', "55%");
                            tips.style.position = "fixed";
                            tips.style.transform = "translate(-50%,-50%)";
                            tips.style.textAlign = "center";
                            tips.style.fontSize = "0.4rem";
                            tips.style.color = "#29bde0";
                            tips.style.lineHeight = "1rem";
                            if (iskilled[2] == 0)
                                tips.innerText = i + "号玩家被杀手杀死,真实身份是平民";
                            else
                                tips.innerText = i + "号玩家被杀手杀死,真实身份是杀手";
                            document.getElementById('nr').appendChild(tips);
                        }
                        else {
                            document.getElementById('sssr').style.backgroundColor = "#92b7a5";
                            document.getElementById('ysj1').style.borderColor = "transparent #92b7a5 transparent transparent";
                            var tips = document.createElement('div');
                            tips.id = "gamer" + i;
                            tips.style.float = "left";
                            tips.style.height = "2rem";
                            tips.style.width = "2rem";
                            tips.style.Top = "2%";
                            tips.style.Left = "7%";
                            tips.style.position = "absolate";
                            tips.style.textAlign = "center";
                            tips.style.fontSize = "0.5rem";
                            tips.style.color = "#29bde0";
                            tips.style.lineHeight = "2rem";
                            tips.innerText = "今夜无人死亡";
                            document.body.appendChild(tips);
                        }
                    }
                    else if (iskilled[1] == 2) {
                        document.getElementById('day').innerText = "第二天";
                        if (iskilled[3] == 1 && sessionStorage.getItem("dead"+iskilled[0]).split(',')[1] == 2) {
                            document.getElementById('sssr').style.backgroundColor = "#92b7a5";
                            document.getElementById('ysj1').style.borderColor = "transparent #92b7a5 transparent transparent";
                            var tips = document.createElement('div');
                            tips.id = "gamer" + i;
                            tips.style.float = "left";
                            tips.style.height = "1rem";
                            tips.style.width = "70%";
                            $(tips).css('top', "26%");
                            $(tips).css('left', "55%");
                            tips.style.position = "fixed";
                            tips.style.transform = "translate(-50%,-50%)";
                            tips.style.textAlign = "center";
                            tips.style.fontSize = "0.4rem";
                            tips.style.color = "#29bde0";
                            tips.style.lineHeight = "1rem";
                            if (iskilled[2] == 0)
                                tips.innerText = i + "号玩家被杀手杀死,真实身份是平民";
                            else
                                tips.innerText = i + "号玩家被杀手杀死,真实身份是杀手";
                            document.getElementById('nr').appendChild(tips);
                        }
                        else if(iskilled[3] == 1 && sessionStorage.getItem("dead"+iskilled[0]).split(',')[1] != 2){}
                        else{
                            document.getElementById('sssr').style.backgroundColor = "#92b7a5";
                            document.getElementById('ysj1').style.borderColor = "transparent #92b7a5 transparent transparent";
                            var tips = document.createElement('div');
                            tips.id = "gamer" + i;
                            tips.style.float = "left";
                            tips.style.height = "2rem";
                            tips.style.width = "2rem";
                            tips.style.Top = "2%";
                            tips.style.Left = "7%";
                            tips.style.position = "absolate";
                            tips.style.textAlign = "center";
                            tips.style.fontSize = "0.5rem";
                            tips.style.color = "#29bde0";
                            tips.style.lineHeight = "2rem";
                            tips.innerText = "今夜无人死亡";
                            document.body.appendChild(tips);
                        }
                    }
                    else if (iskilled[1] == 3) {
                        document.getElementById('day').innerText = "第三天";
                        if (iskilled[3] == 1 && sessionStorage.getItem("dead"+iskilled[0]).split(',')[1] == 3) {
                            document.getElementById('sssr').style.backgroundColor = "#92b7a5";
                            document.getElementById('ysj1').style.borderColor = "transparent #92b7a5 transparent transparent";
                            var tips = document.createElement('div');
                            tips.id = "gamer" + i;
                            tips.style.float = "left";
                            tips.style.height = "1rem";
                            tips.style.width = "70%";
                            $(tips).css('top', "26%");
                            $(tips).css('left', "55%");
                            tips.style.position = "fixed";
                            tips.style.transform = "translate(-50%,-50%)";
                            tips.style.textAlign = "center";
                            tips.style.fontSize = "0.4rem";
                            tips.style.color = "#29bde0";
                            tips.style.lineHeight = "1rem";
                            if (iskilled[2] == 0)
                                tips.innerText = i + "号玩家被杀手杀死,真实身份是平民";
                            else
                                tips.innerText = i + "号玩家被杀手杀死,真实身份是杀手";
                            document.getElementById('nr').appendChild(tips);
                        }
                        else if(iskilled[3] == 1 && sessionStorage.getItem("dead"+iskilled[0]).split(',')[1] != 2){}
                        else {
                            document.getElementById('sssr').style.backgroundColor = "#92b7a5";
                            document.getElementById('ysj1').style.borderColor = "transparent #92b7a5 transparent transparent";
                            var tips = document.createElement('div');
                            tips.id = "gamer" + i;
                            tips.style.float = "left";
                            tips.style.height = "2rem";
                            tips.style.width = "2rem";
                            tips.style.Top = "2%";
                            tips.style.Left = "7%";
                            tips.style.position = "absolate";
                            tips.style.textAlign = "center";
                            tips.style.fontSize = "0.5rem";
                            tips.style.color = "#29bde0";
                            tips.style.lineHeight = "2rem";
                            tips.innerText = "今夜无人死亡";
                            document.body.appendChild(tips);
                        }
                    }
                    else if (iskilled[1] == 4) {
                        document.getElementById('day').innerText = "第四天";
                        if (iskilled[3] == 1&& sessionStorage.getItem("dead"+iskilled[0]).split(',')[1] == 4) {
                            document.getElementById('sssr').style.backgroundColor = "#92b7a5";
                            document.getElementById('ysj1').style.borderColor = "transparent #92b7a5 transparent transparent";
                            var tips = document.createElement('div');
                            tips.id = "gamer" + i;
                            tips.style.float = "left";
                            tips.style.height = "1rem";
                            tips.style.width = "70%";
                            $(tips).css('top', "26%");
                            $(tips).css('left', "55%");
                            tips.style.position = "fixed";
                            tips.style.transform = "translate(-50%,-50%)";
                            tips.style.textAlign = "center";
                            tips.style.fontSize = "0.4rem";
                            tips.style.color = "#29bde0";
                            tips.style.lineHeight = "1rem";
                            if (iskilled[2] == 0)
                                tips.innerText = i + "号玩家被杀手杀死,真实身份是平民";
                            else
                                tips.innerText = i + "号玩家被杀手杀死,真实身份是杀手";
                            document.getElementById('nr').appendChild(tips);
                        }
                        else if(iskilled[3] == 1 && sessionStorage.getItem("dead"+iskilled[0]).split(',')[1] != 2){}
                        else {
                            document.getElementById('sssr').style.backgroundColor = "#92b7a5";
                            document.getElementById('ysj1').style.borderColor = "transparent #92b7a5 transparent transparent";
                            var tips = document.createElement('div');
                            tips.id = "gamer" + i;
                            tips.style.float = "left";
                            tips.style.height = "2rem";
                            tips.style.width = "2rem";
                            tips.style.Top = "2%";
                            tips.style.Left = "7%";
                            tips.style.position = "absolate";
                            tips.style.textAlign = "center";
                            tips.style.fontSize = "0.5rem";
                            tips.style.color = "#29bde0";
                            tips.style.lineHeight = "2rem";
                            tips.innerText = "今夜无人死亡";
                            document.body.appendChild(tips);
                        }
                    }
                }
                else if(sessionStorage.getItem("event")==1) {
                    iskilled[1]++;
                    sessionStorage.setItem("endDay",iskilled[1]);
                    if (iskilled[1] == 2)
                        document.getElementById('day').innerText = "第二天";
                    else if (iskilled[1] == 3)
                        document.getElementById('day').innerText = "第三天";
                    else if (iskilled[1] == 4)
                        document.getElementById('day').innerText = "第四天";
                }

                sessionStorage.setItem("gamer"+ i,iskilled);
            }
        }
    }
    else {
        confirm("平民胜利!");
        location.href = "end.html?restKiller=" + restKiller + "&restPeo=" + restPeo;
    }

}

//获得value值
function get_url() {
    var src = window.location.href;
    var I = src.indexOf("?value=") + 7;
    var I1 = src.indexOf("&num=");
    var ptr = src.substr(I,I1-I);
    return ptr;
}

//获得人数
function getnum() {
    var src = window.location.href;
    var ptr = src.substr(src.indexOf("&num=") + 5);
    return ptr;
}

//隐藏div
$(document).ready(function(){
    $("#day").click(function(){
        $("#nr").toggle("slow");
    });
});

//杀手杀人
$(document).ready(function(){
    $("#sssr").click(function(){
        if ($("#sssr").css('backgroundColor') == "rgb(41, 189, 224)") {
            $("#sssr").css('backgroundColor', "#92b7a5");
            $("#ysj1").css('border-color', "transparent #92b7a5 transparent transparent");
            sessionStorage.removeItem("event");
            sessionStorage.setItem("event",0);//设置跳转到杀人页面的标志 0为杀手杀人 1为投票
            location.href = "event.html?value=" + arr + "&num=" + getnum();
        }
    });
});

//死者遗言
$(document).ready(function() {
    $("#szyy").click(function () {
        if ($("#szyy").css('backgroundColor') == "rgb(41, 189, 224)") {
            if ($("#sssr").css('backgroundColor') != "rgb(41, 189, 224)") {
                document.getElementById('szyy').style.backgroundColor = "#92b7a5";
                document.getElementById('ysj2').style.borderColor = "transparent #92b7a5 transparent transparent";
                confirm("请死者发表遗言！");
            }
        }
    });
});

//依次发言
$(document).ready(function() {
    $("#ycfy").click(function () {
        if ($("#ycfy").css('backgroundColor') == "rgb(41, 189, 224)") {
            if ($("#szyy").css('backgroundColor') != "rgb(41, 189, 224)") {
                document.getElementById('ycfy').style.backgroundColor = "#92b7a5";
                document.getElementById('ysj3').style.borderColor = "transparent #92b7a5 transparent transparent";
                confirm("请玩家依次发言！");
            }
        }
    });
});

//全民投票
$(document).ready(function() {
    $("#qmtp").click(function () {
        if ($("#ycfy").css('backgroundColor') != "rgb(41, 189, 224)") {
            document.getElementById('qmtp').style.backgroundColor = "#92b7a5";
            document.getElementById('ysj4').style.borderColor = "transparent #92b7a5 transparent transparent";
            sessionStorage.removeItem("event");
            sessionStorage.setItem("event", 1);
            location.href = "event.html?value=" + arr + "&num=" + getnum();
        }
    });
});

//游戏中断
function stop(){
    var restKiller = 0;
    var restPeo = 0;
    //计算剩余杀手数目和平民数目
    for (var j = 1; j <= (Math.floor((arr.length) / 2)) + 1; j++) {
        var temp = sessionStorage.getItem("gamer" + j).split(',');
        if (temp[2] == 1) {
            if (temp[3] !=1 &&temp[3] != 2) {
                restKiller++;
            }
        }
        if (temp[2] == 0) {
            if (temp[3] != 1&&temp[3] != 2) {
                restPeo++;
            }
        }
    }
    confirm("游戏中断!");
    location.href = "end.html?restKiller=" + restKiller + "&restPeo=" + restPeo;
}