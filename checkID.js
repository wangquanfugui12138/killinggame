/**
 * Created by admin on 2017/11/11.
 */
var one=1;//4-5
var two=1;//6-7
var three=1;//8-11
var four=1;//12-14
var five=1;//15-18

var n=parseInt(get_url());//玩家数量
var arr1=new Array(n);
for(var k=0;k<n;k++){
    arr1[k]=k;
}
var arr2=new Array(n);
for (var i = 0; i < n; i++) {
    arr2[i] = 0;
}
var index1 = getNum(arr1,1);
var index2 = getNum(arr1,2);
var index3 = getNum(arr1,3);
var index4 = getNum(arr1,4);
var index5 = getNum(arr1,5);

//分发身份 0代表平民 1代表杀手
function check(){
    if(document.getElementById('turn').value.indexOf("开始游戏") < 0) {
        if (n >= 4 && n < 6) {
            arr2[index1] = 1;
            if (one <= n) {
                if (document.getElementById('turn').value.indexOf("号身份") >= 0) {
                    if (arr2[one - 1] == 0)
                        document.getElementById('sf').innerText = "平民";
                    else
                        document.getElementById('sf').innerText = "杀手";
                    document.getElementById('fpImage').style.display = "none";
                    document.getElementById('sfImage').style.display = "block";
                    document.getElementById('sf').style.display = "block";
                    if (one != n) {
                        document.getElementById('turn').value = "隐藏并传递给" + parseInt(one + 1) + "号";
                        one++;
                    }
                    else
                        document.getElementById('turn').value = "法官查看";

                }
                else if (document.getElementById('turn').value.indexOf("法官查看") >= 0) {
                    document.getElementById('zy').style.display = "none";
                    document.getElementById('n').style.display = "none";
                    document.getElementById('topic').innerText = "法官日记";
                    document.getElementById('turn').value = "开始游戏";
                    creatdiv(arr2, n);
                }
                else {
                    document.getElementById('Number').innerText = one;
                    document.getElementById('fpImage').style.display = "block";
                    document.getElementById('sfImage').style.display = "none";
                    document.getElementById('sf').style.display = "none";
                    document.getElementById('turn').value = "查看" + one + "号身份";
                }
            }
        }
        else if (n >= 6 && n < 8) {
            arr2[index2[0]] = 1;
            arr2[index2[1]] = 1;
            if (two <= n) {
                if (document.getElementById('turn').value.indexOf("号身份") >= 0) {
                    if (arr2[two - 1] == 0)
                        document.getElementById('sf').innerText = "平民";
                    else
                        document.getElementById('sf').innerText = "杀手";
                    document.getElementById('fpImage').style.display = "none";
                    document.getElementById('sfImage').style.display = "block";
                    document.getElementById('sf').style.display = "block";
                    if (two != n) {
                        document.getElementById('turn').value = "隐藏并传递给" + parseInt(two + 1) + "号";
                        two++;
                    }
                    else
                        document.getElementById('turn').value = "法官查看";

                }
                else if (document.getElementById('turn').value.indexOf("法官查看") >= 0) {
                    document.getElementById('zy').style.display = "none";
                    document.getElementById('n').style.display = "none";
                    document.getElementById('topic').innerText = "法官日记";
                    document.getElementById('turn').value = "开始游戏";
                    creatdiv(arr2, n);
                }
                else {
                    document.getElementById('Number').innerText = two;
                    document.getElementById('fpImage').style.display = "block";
                    document.getElementById('sfImage').style.display = "none";
                    document.getElementById('sf').style.display = "none";
                    document.getElementById('turn').value = "查看" + two + "号身份";
                }
            }
        }
        else if (n >= 8 && n < 12) {
            arr2[index3[0]] = 1;
            arr2[index3[1]] = 1;
            arr2[index3[2]] = 1;
            if (three <= n) {
                if (document.getElementById('turn').value.indexOf("号身份") >= 0) {
                    if (arr2[three - 1] == 0)
                        document.getElementById('sf').innerText = "平民";
                    else
                        document.getElementById('sf').innerText = "杀手";
                    document.getElementById('fpImage').style.display = "none";
                    document.getElementById('sfImage').style.display = "block";
                    document.getElementById('sf').style.display = "block";
                    if (three != n) {
                        document.getElementById('turn').value = "隐藏并传递给" + parseInt(three + 1) + "号";
                        three++;
                    }
                    else
                        document.getElementById('turn').value = "法官查看";

                }
                else if (document.getElementById('turn').value.indexOf("法官查看") >= 0) {
                    document.getElementById('zy').style.display = "none";
                    document.getElementById('n').style.display = "none";
                    document.getElementById('topic').innerText = "法官日记";
                    document.getElementById('turn').value = "开始游戏";
                    creatdiv(arr2, n);
                }
                else {
                    document.getElementById('Number').innerText = three;
                    document.getElementById('fpImage').style.display = "block";
                    document.getElementById('sfImage').style.display = "none";
                    document.getElementById('sf').style.display = "none";
                    document.getElementById('turn').value = "查看" + three + "号身份";
                }
            }
        }
        else if (n >= 12 && n < 15) {
            arr2[index4[0]] = 1;
            arr2[index4[1]] = 1;
            arr2[index4[2]] = 1;
            arr2[index4[3]] = 1;
            if (four <= n) {
                if (document.getElementById('turn').value.indexOf("号身份") >= 0) {
                    if (arr2[four - 1] == 0)
                        document.getElementById('sf').innerText = "平民";
                    else
                        document.getElementById('sf').innerText = "杀手";
                    document.getElementById('fpImage').style.display = "none";
                    document.getElementById('sfImage').style.display = "block";
                    document.getElementById('sf').style.display = "block";
                    if (four != n) {
                        document.getElementById('turn').value = "隐藏并传递给" + parseInt(four + 1) + "号";
                        four++;
                    }
                    else
                        document.getElementById('turn').value = "法官查看";

                }
                else if (document.getElementById('turn').value.indexOf("法官查看") >= 0) {
                    document.getElementById('zy').style.display = "none";
                    document.getElementById('n').style.display = "none";
                    document.getElementById('topic').innerText = "法官日记";
                    document.getElementById('turn').value = "开始游戏";
                    creatdiv(arr2, n);
                }
                else {
                    document.getElementById('Number').innerText = four;
                    document.getElementById('fpImage').style.display = "block";
                    document.getElementById('sfImage').style.display = "none";
                    document.getElementById('sf').style.display = "none";
                    document.getElementById('turn').value = "查看" + four + "号身份";
                }
            }
        }
        else if (n >= 15 && n <= 18) {
            arr2[index5[0]] = 1;
            arr2[index5[1]] = 1;
            arr2[index5[2]] = 1;
            arr2[index5[3]] = 1;
            arr2[index5[4]] = 1;
            if (five <= n) {
                if (document.getElementById('turn').value.indexOf("号身份") >= 0) {
                    if (arr2[five - 1] == 0)
                        document.getElementById('sf').innerText = "平民";
                    else
                        document.getElementById('sf').innerText = "杀手";
                    document.getElementById('fpImage').style.display = "none";
                    document.getElementById('sfImage').style.display = "block";
                    document.getElementById('sf').style.display = "block";
                    if (five != n) {
                        document.getElementById('turn').value = "隐藏并传递给" + parseInt(five + 1) + "号";
                        five++;
                    }
                    else
                        document.getElementById('turn').value = "法官查看";

                }
                else if (document.getElementById('turn').value.indexOf("法官查看") >= 0) {
                    document.getElementById('zy').style.display = "none";
                    document.getElementById('n').style.display = "none";
                    document.getElementById('topic').innerText = "法官日记";
                    document.getElementById('turn').value = "开始游戏";
                    creatdiv(arr2, n);
                }
                else {
                    document.getElementById('Number').innerText = five;
                    document.getElementById('fpImage').style.display = "block";
                    document.getElementById('sfImage').style.display = "none";
                    document.getElementById('sf').style.display = "none";
                    document.getElementById('turn').value = "查看" + five + "号身份";
                }
            }
        }
    }
    else{
        for(var o=1;o<=n;o++){
            var para=[o,1,arr2[o-1],0];
            sessionStorage.setItem("gamer"+o,para);
        }
        sessionStorage.setItem("perNum",n);
        location.href="judge.html?value="+arr2+"&num="+n;
    }
}

//获得value值
function get_url() {
    var src = window.location.href;
    var I = src.substr(src.indexOf("?value=") + 4).length;
    var T = src.indexOf("?value=");
    if (0 >= T) return "";
    if (I == src.length) return -1;
    var ptr = src.substr(src.indexOf("?value=") + 7);
    return ptr;
}

//获得随机数
function getNum(arr, num) {
    var temp_array = new Array();
    for (var index in arr) {
        temp_array.push(arr[index]);
    }
    var return_array = new Array();
    for (var i = 0; i<num; i++) {
        if (temp_array.length>0) {
            var arrIndex = Math.floor(Math.random()*temp_array.length);
            return_array[i] = temp_array[arrIndex];
            temp_array.splice(arrIndex, 1);
        } else {
            break;
        }
    }
    return return_array;
}

//生成div
function creatdiv(arr,num){
    var fadiv=document.createElement('div');
    fadiv.id="pa";
    fadiv.style.position="absolute";
    fadiv.style.height="85%";
    fadiv.style.top="9%";
    fadiv.style.left="5%";
    fadiv.style.right="5%";
    document.body.appendChild(fadiv);
    for(var i=1;i<=num;i++){
        var chdiv=document.createElement('div');
        chdiv.id="div"+i;
        chdiv.style.float="left";
        chdiv.style.height="6rem";
        chdiv.style.width="6rem";
        chdiv.style.marginTop="2%" ;
        chdiv.style.marginLeft="5.5%" ;
        chdiv.style.marginRight="1%" ;
        chdiv.style.border="0.2rem solid white";
        chdiv.style.backgroundColor="#f4d085";
        chdiv.style.textAlign="center";
        chdiv.style.fontSize="1.5rem";
        chdiv.style.color="black";
        chdiv.style.lineHeight="4.5rem";
        if (arr[i - 1] == 0) {
            chdiv.innerText = "平民";
        }
        else {
            chdiv.innerText = "杀手";
        }
        fadiv.appendChild(chdiv);
        var numdiv=document.createElement('div');
        numdiv.style.backgroundColor="#92b7a5";
        numdiv.style.textAlign="center";
        numdiv.style.fontSize="1rem";
        numdiv.style.color="white";
        numdiv.style.lineHeight="1.5rem";
        numdiv.style.width="100%";
        numdiv.style.height="25%";
        numdiv.innerText=i+"号";
        chdiv.appendChild(numdiv);
    }
}