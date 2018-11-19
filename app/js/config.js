require.config({
	baseUrl: "/",
	paths: {				
		"header": "module/header",
		"footer": "module/footer",
		"jquery": "libs/jquery/jquery-1.11.3",
		"bootstrap": "libs/bootstrap/js/bootstrap",
		"tools": "libs/tools",
		"template": "libs/template-web",	
		"lunbo":"module/lunbo",
		"swiper" : "module/swiper",		
		"migrate": "libs/jquery-migrate-1.2.1.min",
		"cookie" : "libs/jquery.cookie",
		"fdj" : "module/fdj"
		
	},
	//垫片
	shim:{
		"bootstrap": {
			deps: ["jquery"]
		}
	}
})