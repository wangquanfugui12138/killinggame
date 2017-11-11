/**
 * Created by admin on 2017/11/11.
 */
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
        else{
            k.innerText="杀手"+Math.floor(parseInt(num)/4)+"人";
            p.innerText="平民"+(parseInt(num)-2*(Math.floor(parseInt(num)/4)))+"人";
        }
    }
}