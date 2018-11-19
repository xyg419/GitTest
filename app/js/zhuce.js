require(["config"], function(){
	require(["jquery","header","footer",], function($,header,footer){
		new Promise(function(resolve,reject){
			
			$("header").load("/html/component/header.html", function(){
				resolve();
				header.nav();
			})
			
			$("footer").load("/html/component/footer.html", function(){
					
			})
		}).then(function(){
			$("#zc_form").submit(function(e){
				e = e || event;
				var data = {
					username : $("#username").val(),
					password : $("#password").val()
				}
				
				var reg1 = /^[a-zA-Z0-9_-]{4,16}$/;  
				if(!reg1.test(data.username)){
					alert("请重新输入账号");
					return false;
				}
				var reg = /^.{6,}$/;
				if(!reg.test(data.password)){
					alert("请重新输入密码");
					return false;
				}
				console.log(data);
				//ajax请求
				$.ajax({
					method:"post",
					url:"http://localhost/projectserver/api/zhuce.php",
					data:data,
					dataType : "json",
					success : function(res){
						if(res.code === 1){
							alert("注册成功"); 
							location.href = "http://localhost:2333/html/component/login.html";
						}else{
							alert("注册失败");
						}
					}
				})
				e.preventDefault();
				return false;
			})
		})	
	})

})