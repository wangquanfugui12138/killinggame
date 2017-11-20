/**
 * Created by admin on 2017/11/17.
 */

window.onload=function(){
    document.getElementById('all').innerText="剩余玩家:"+parseInt(parseInt(getkill())+parseInt(getpeo()))+"人";
    document.getElementById('kill').innerText="杀手:"+getkill()+"人";
    document.getElementById('peo').innerText="平民:"+getpeo()+"人";
    for(var i=1;i<=sessionStorage.getItem("endDay");i++){//天数
        document.getElementById('d'+i).innerText="第"+i+"天";
        for(var j=1;j<=sessionStorage.getItem("perNum");j++){//玩家数
            if(sessionStorage.getItem("dead"+j)!=null) {//获取死者信息
                var temp = sessionStorage.getItem("dead" + j).split(',');
                if (temp != undefined) {
                    if (temp[1] == i) {
                        if (temp[2] == 1){
                            if(temp[3]==0)
                                document.getElementById('k' + i).innerText = "黑夜:" + temp[0] + "号被杀死了,真实身份是平民";
                            else
                                document.getElementById('k' + i).innerText = "黑夜:" + temp[0] + "号被杀死了,真实身份是杀手";
                        }
                        else{
                            if(temp[3]==0)
                                document.getElementById('p' + i).innerText = "白天:" + temp[0] + "号被投死了,真实身份是平民";
                            else
                                document.getElementById('p' + i).innerText = "白天:" + temp[0] + "号被投死了,真实身份是杀手";
                        }
                    }
                }
            }
        }


    }
};

//读取杀手人数
function getkill() {
    var src = window.location.href;
    var I = src.indexOf("?restKiller=") + 12;
    var I1 = src.indexOf("&restPeo=");
    var ptr = src.substr(I,I1-I);
    return ptr;
}

//读取平民人数
function getpeo() {
    var src = window.location.href;
    var ptr = src.substr(src.indexOf("&restPeo=") + 9);
    return ptr;
}

function regame(){
    sessionStorage.clear();
    location.href="kg.html";
}