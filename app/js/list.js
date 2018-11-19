require(["config"], function(){
	require(["jquery","header", "footer","cookie","template"], function($,header,footer,cookie,template){
		new Promise(function(resolve,reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
				header.nav();
				header.state();
			})
			
			$("footer").load("/html/component/footer.html", function(){
					
			})
		}).then(function(){
//			console.log(11);
			
			
			$.ajax({
				method:"get",
//				url:"http://localhost/projectserver/api/list.php",
				url:"http://rap2api.taobao.org/app/mock/115081/products",
//				url:"http://rap2api.taobao.org/app/mock/117359/project",
				success:function(res){
//					console.log(res);
					var html = template("pro-template",{products: res.products});
//					console.log(html);
					$("#proList").html(html);
				}
			});
		})
		
	
	
	
	
	})

})