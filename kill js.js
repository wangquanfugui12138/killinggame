/**
 * Created by admin on 2017/11/11.
 */
var n =document.getElementById('personNum');

function start(){
    var p=document.getElementById('people');
    var k=document.getElementById('killer');
    var num=document.getElementById('personNum').value;
    if(num==""){
        confirm("�������������������")
    }
    else{
        if(parseInt(num)<4||parseInt(num)>18) {
            confirm("��������ȷ���������!")
        }
        else if(parseInt(num)>=4&&parseInt(num)<8){
            k.innerText="ɱ��1��";
            p.innerText="ƽ��"+Math.floor(parseInt(num)-1)+"��";
            setTimeout(turn,2000);
        }
        else if(parseInt(num)>=8&&parseInt(num)<12){
            k.innerText="ɱ��2��";
            p.innerText="ƽ��"+Math.floor(parseInt(num)-2)+"��";
            setTimeout(turn,2000);
        }
        else if(parseInt(num)>=12&&parseInt(num)<14){
            k.innerText="ɱ��3��";
            p.innerText="ƽ��"+Math.floor(parseInt(num)-3)+"��";
            setTimeout(turn,2000);
        }
        else if(parseInt(num)>=14&&parseInt(num)<=18){
            k.innerText="ɱ��4��";
            p.innerText="ƽ��"+Math.floor(parseInt(num)-4)+"��";
            setTimeout(turn,1500);
        }
    }
}

function turn(){
    location.href="�鿴���.html?value="+document.getElementById('personNum').value;;
}

