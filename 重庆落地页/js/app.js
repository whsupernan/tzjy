    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "http://appendix.tzidt.com/help/tzform.js";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
    window.onload = function(){
        function $(id){return document.querySelector(id)}
        var reg = /^[1]+[34578]+[0-9]{9}/; // 验证电话号码的正则
        $("#btn1").onclick = function(){    //需要点击的按钮
            submit("#weixin");  //需要提交元素的ID
        };
        function submit(id1){
            var name = $(id1).value; // 获取表单的值
            var xl = document.querySelector("[name='xl']:checked");
            var time = document.querySelector("[name='time']:checked");
            var age = document.querySelector("[name='age']:checked");
            var why = document.querySelector("[name='why']:checked");
            if(name !== "" && xl && time && age && why){
                if(name == localStorage.getItem("name")){
                    alert("亲，您提交的信息我们正在处理！")
                }else{
                    function successMethod(){
                        alert("提交成功！"); 
                        localStorage.setItem("name",name);
                        $(id1).value = ""; //重置表单
                    }
                    var modelId = 534;  // 提交表单的ID
                    var cols = [xl.value,time.value,age.value,why.value,name,"重庆","/","/"];
                    saveForm(modelId,cols,successMethod);
                }
            }else{
                alert("请完善您的有效信息！");
            }
        }
    }