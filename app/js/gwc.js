require(["config"], function(){
	require(["jquery","header","footer","cookie"], function($,header,footer,cookie){
		new Promise(function(resolve,reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
				header.nav();
				header.state();
			})
			
			$("footer").load("/html/component/footer.html", function(){
					
			})
		})
	})
})
