/**
 * Created by admin on 2017/11/11.
 */
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
        else{
            k.innerText="ɱ��"+Math.floor(parseInt(num)/4)+"��";
            p.innerText="ƽ��"+(parseInt(num)-2*(Math.floor(parseInt(num)/4)))+"��";
        }
    }
}