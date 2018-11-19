require(["config"], function(){
	require(["jquery","swiper","header", "footer","lunbo","cookie"], function($,swiper,header,footer,lunbo,cookie){

		//promise
		
			$("header").load("/html/component/header.html", function(){
				header.nav();
				header.state();
			})
			$(".lunbo").load("/html/component/lunbo.html", function(){
				var obj ={
					goPrev : "goprev",
					goNext : "gonext"
				}
				
				$(".lunbo").lunbo(obj);
				
			})
			$("footer").load("/html/component/footer.html", function(){
				
			})
			
		



	})
})