/**
 * Created by li on 2018/1/17.
 */
    $(function(){
        var reg = /^[1]+[34578]+[0-9]{9}/; // 验证电话号码的正则
        var k = 0;  // 为了保险起见 使用变量
        $("#btn1").click(function(){    //需要点击的按钮
            submit("#telephone1");  //需要提交元素的ID
        });

        function submit(id2){
            var tel  = $(id2).val();   //  获取表单的值
            if (tel == ""){
                alert("手机号不能为空！！");
            }
            else
                if( reg.test(tel)){
                    if(tel == localStorage.getItem("tel") || k){
                        alert("亲，您提交的信息我们正在处理！");
                    }else{
                        function successMethod(){
                            alert("恭喜您发送成功！！稍后会有老师向您联系！！");
                            k = 1;
                            localStorage.setItem("tel",tel);
                            $(id1).val(""); //重置表单
                            $(id2).val(""); //重置表单
                        }
                        var modelId = 575;
                        var cols = [];
                        cols.push(tel);
                        // alert("ok");
                        saveForm(modelId,cols,successMethod);
                    }
                }else{
                    alert("手机号输入错误！！");
            }
        }

    });
