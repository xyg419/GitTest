require(["config"], function(){
	require(["jquery","header","footer","cookie","fdj"], function($,header,footer,cookie,fdj){
		new Promise(function(resolve,reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
				header.nav();
				header.state();
			})
			
			$("footer").load("/html/component/footer.html", function(){
					
			})
		}).then(function(obj){
			$("#small").fdj({
				sbox : "small",
				fdj :"slider",
				biggest:"big",
				bImg:"bigImg"
			})
				
			
//			fdj.fdj(obj);
			console.log(obj);
		})
	})
})
