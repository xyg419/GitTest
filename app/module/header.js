define(["jquery"],function($){
	function Header(){
		
	}
	Header.prototype.nav = function(){
		var list = $(".list_b");
		var baba = $("#baba");
		
		
		$("#baba").hover(function(){
			//enter
			list.css({"display":"block"});
		},function(){
			//leave
			list.css({"display":"none"});
		})		
	}
	/*取cookie*/
	Header.prototype.state = function(){
		
		var username = $.cookie("user");
		var leave = $("#leave");//退出 删除cookie
//		console.log(username);
		if(username){
			//隐藏原来的li
			$(".nb1").hide();
			//显示账号和退出按钮
			$(".nb2").show().html(username + "欢迎您");
			leave.css({"display":"block"});
			leave.click(function(){
				//删除cookie
				$.cookie(username,'',{expires:-1});
				//隐藏退出按钮。显示原状态
				leave.hide();
				$(".nb1").show();
				$(".nb2").hide();
			})
		}
		
	}
	return new Header();
})