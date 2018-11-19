require(["config"], function(){
	require(["jquery","header", "footer","cookie"], function($,header,footer,cookie){
		new Promise(function(resolve,reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
				header.nav();
				header.state();
			})
			
			$("footer").load("/html/component/footer.html", function(){
					
			})
			
		}).then(function(){

			//处理表单提交
			$("#form").submit(function(e){
				//构造请求携带的参数
				e = e || event;
				var data = {
					username : $("#username").val(),
					password : $("#password").val()
				};
				
				$.ajax({
					method:"post",
					data : data,
					dataType : "json",
					url:"http://localhost/projectserver/api/login.php",
					success: function(res){
//						console.log(res);
						if(res.code === 1){
							alert("登录成功");
							$.cookie("user",data.username,{
								path : "/"
							})
							//document.cookie = "login=true;path=/"; //使用cookie记录登录状态
							location.href = "http://localhost:2333/index.html";
						}else{
							alert("用户名或者密码错误");
						}
					}
				})
				e.preventDefault;
				return false;
			})
		})
	})
})