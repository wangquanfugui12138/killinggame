/**
 * Created by admin on 2017/11/11.
 */
var n =document.getElementById('personNum');

function start(){
    var p=document.getElementById('people');
    var k=document.getElementById('killer');
    var num=document.getElementById('personNum').value;
    if(num==""){
        confirm("请输入参与的玩家数量！")
    }
    else{
        if(parseInt(num)<4||parseInt(num)>18) {
            confirm("请输入正确的玩家数量!")
        }
        else if(parseInt(num)>=4&&parseInt(num)<8){
            k.innerText="杀手1人";
            p.innerText="平民"+Math.floor(parseInt(num)-1)+"人";
            setTimeout(turn,2000);
        }
        else if(parseInt(num)>=8&&parseInt(num)<12){
            k.innerText="杀手2人";
            p.innerText="平民"+Math.floor(parseInt(num)-2)+"人";
            setTimeout(turn,2000);
        }
        else if(parseInt(num)>=12&&parseInt(num)<14){
            k.innerText="杀手3人";
            p.innerText="平民"+Math.floor(parseInt(num)-3)+"人";
            setTimeout(turn,2000);
        }
        else if(parseInt(num)>=14&&parseInt(num)<=18){
            k.innerText="杀手4人";
            p.innerText="平民"+Math.floor(parseInt(num)-4)+"人";
            setTimeout(turn,1500);
        }
    }
}

function turn(){
    location.href="查看身份.html?value="+document.getElementById('personNum').value;;
}

