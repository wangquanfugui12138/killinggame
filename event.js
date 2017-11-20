/**
 * Created by admin on 2017/11/15.
 */
var inum=getnum();
var iarr=getarr().split(',');

window.onload=cd(iarr,inum);
window.onload=function(){
    var tag=sessionStorage.getItem("event");
    if(tag==0){

    }
    else{
        document.getElementById('topic').innerText="玩家投票";
        document.getElementById('tips').innerText="发言结束,请各位玩家投票";
        document.getElementById('ts').innerText="点击你要投出的玩家号码";
    }
    for(var i=1;i<=inum;i++) {
        if(sessionStorage.getItem("dead" + i)!=null) {
            var temp = sessionStorage.getItem("dead" + i).split(',');
            if (temp[2] == 1 || temp[2] == 2) {
                document.getElementById('gamer' + i).style.backgroundColor = "silver";
            }
        }
    }
};
//读取位置
function getarr() {
    var src = window.location.href;
    var I = src.indexOf("?value=") + 7;
    var I1 = src.indexOf("&num=");
    var ptr = src.substr(I,I1-I);
    return ptr;
}

//读取人数
function getnum() {
    var src = window.location.href;
    var ptr = src.substr(src.indexOf("&num=") + 5);
    return ptr;
}

//创建div
function cd(arr,num) {
    var fadiv = document.createElement('div');
    fadiv.id = "pa";
    fadiv.style.position = "absolute";
    fadiv.style.height = "60%";
    fadiv.style.top = "17%";
    fadiv.style.left = "15%";
    fadiv.style.right = "15%";
    document.body.appendChild(fadiv);
    for (var i = 1; i <= num; i++) {
        var chdiv = document.createElement('div');
        chdiv.id = "gamer" + i;
        chdiv.style.float = "left";
        chdiv.style.height = "4.5rem";
        chdiv.style.width = "4.5rem";
        chdiv.style.marginTop = "2%";
        chdiv.style.marginLeft = "7%";
        chdiv.style.marginRight = "1%";
        chdiv.style.border = "0.1rem solid white";
        chdiv.style.backgroundColor = "#f4d085";
        chdiv.style.textAlign = "center";
        chdiv.style.fontSize = "0.5rem";
        chdiv.style.color = "black";
        chdiv.style.lineHeight = "3rem";
        if (arr[i - 1] == 0) {
            chdiv.innerText = "平民";
        }
        else {
            chdiv.innerText = "杀手";
        }
        fadiv.appendChild(chdiv);
        var numdiv = document.createElement('div');
        numdiv.style.backgroundColor = "#92b7a5";
        numdiv.style.textAlign = "center";
        numdiv.style.fontSize = "0.25rem";
        numdiv.style.color = "white";
        numdiv.style.lineHeight = "1.5rem";
        numdiv.style.width = "100%";
        numdiv.style.height = "1.5rem";
        numdiv.innerText = i + "号";
        chdiv.appendChild(numdiv);
    }
}

//选择号码杀人
$(document).ready(function(){
    $("#pa>div").click(function(){
        if($(this).css('backgroundColor')=="rgb(244, 208, 133)"){
            $(this).css('backgroundColor',"#92b7a5");
        }
        else if($(this).css('backgroundColor')=="rgb(192, 192, 192)"){}
        else{
            $(this).css('backgroundColor',"#f4d085");
        }
    })
})

//确认
function en(){
    var k=[0,0];
    var tag=sessionStorage.getItem("event");
    if(tag==0) {
        for (var i = 1; i <= getnum(); i++) {
            if ($("#gamer" + i).css('backgroundColor') == "rgb(146, 183, 165)") {
                k[0]++;
                k[1] = i;
            }
        }
        if (k[0] > 1) {
            confirm("只能选择杀一个人!");
        }
        else {
            var temp = sessionStorage.getItem("gamer" + k[1]).split(',');
            temp[3] = 1;
            var temp1 = [temp[0], temp[1], temp[3], temp[2]];
            sessionStorage.setItem("gamer" + k[1], temp);
            sessionStorage.setItem("dead" + k[1], temp1);
            window.location.href = "judge.html?value=" + iarr + "&num=" + inum;
        }
    }
    else{
        for (var i = 1; i <= getnum(); i++) {
            if ($("#gamer" + i).css('backgroundColor') == "rgb(146, 183, 165)") {
                k[0]++;
                k[1] = i;
            }
        }
        if (k[0] > 1) {
            confirm("只能选择投出一个人!");
        }
        else {
            var temp = sessionStorage.getItem("gamer" + k[1]).split(',');
            temp[3] = 2;
            var temp1=[temp[0],temp[1],temp[3],temp[2]];
            sessionStorage.setItem("gamer" + k[1], temp);
            sessionStorage.setItem("dead"+k[1],temp1);
            window.location.href = "judge.html?value=" + iarr + "&num=" + inum;
        }
    }
}