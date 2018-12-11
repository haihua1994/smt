var isWeixin,iOS = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent),btnHamm;
var upEvent = window.PointerEvent ? "pointerup" : ( ( 'ontouchstart' in window ) || window.DocumentTouch && document instanceof DocumentTouch ) ? "touchend" : "mouseup";
var preload,$taobao="",$verify="",isRuler=false,$scale=1;
var $bgSound,$knockSound,isMusic=true;


(function (doc, win) {
	if (!win.addEventListener) return;
	var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function () {
		var clientWidth = docEl.clientWidth;
		var clientHeight = docEl.clientHeight;
		if (!clientWidth) return;
		$scale=clientWidth / 750;
		docEl.style.fontSize = 100 * $scale + 'px';
		var getTop=(1070+113)*$scale,getD=0;
		if(clientHeight>getTop+80*$scale){
			getD=clientHeight-getTop-80*$scale;
		}else if(clientHeight<getTop){
			getD=clientHeight-getTop;
		}
		$("#award-page>p").css({top:766*$scale+getD});
		$("#award-page>span").css({top:730*$scale+getD});
		$("#award-page>a").css({top:1070*$scale+getD});
		$("#award-page>i").css({top:1040*$scale+getD});
		$("#clor").css({top:671*$scale+getD});
		$("#light").css({top:671*$scale+getD});
	},
	domLoaded = function () {
		recalc();
	};
	recalc();
	setTimeout(recalc,300);
	//if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', domLoaded, false);
	win.addEventListener('load', recalc, false);
})(document, window);

// function MusicSwitch(){
// 	//isMusic? $bgSound[0].pause():$bgSound[0].play();
// 	$("#music-btn").empty();
// 	if(isMusic){
// 		$bgSound[0].pause();
// 		$("#music-btn").append("<i></i>");
// 	}else{
// 		$bgSound[0].play();
// 		$("#music-btn").append("<b></b>");
// 	}
// 	isMusic=!isMusic;
// }

// function FirstLoading(){
// 	var loadImages=["qrcode_bg.jpg","logo.png","chuizi.png","open.png","start_btn.png","music.png","coupons.png","award_ls.png","back_btn.png","bg_get.png","bg_no.png","bg_out.png","btn_no.png","btn_out.png","buy_btn.png","close.png","confirm_btn.png","clor.png","light.png","fly.png","heart.png","input_bg.png","logo.png","open.png","out_no.png","refirm_bg.png","reload.png","rule_btn.png","rule_top.png","rule_words.png","tips_bg.png","word_get.png","word_no.png","word_out.png"];
// 	var basePath="/images/";
// 	for(var i=0;i<loadImages.length;i++) loadImages[i]=basePath+loadImages[i];
// 	jQuery.imgpreload(loadImages,{number:6,all: PreloadImages});
// }

// function PreloadImages(){
// 	//$code=GetQueryStringByName("code");
// 	//console.log($code);
// }

// function ShowTipsAct($str){
// 	$("#tips-str").text($str);
// 	$("#tips-pop,#mask-page2").fadeIn(300,function(){$("#tips-pop").addClass("animate");});
// 	$("#tips-confirm").off("click").on("click",CloseTipsAct);
// }

// function CloseTipsAct(){
// 	$("#tips-confirm").off("click");
// 	$("#tips-pop,#mask-page2").fadeOut(300,function(){$("#tips-pop").removeClass("animate");});
// }

// function RulerBtnClick(){
// 	//ShowTipsAct("aaaaa");
// 	/*
// 	$("#erro-str").text("sfafasfasdf");
// 	$("#mask-page").fadeIn(300);
// 	$("#award-erro").fadeIn(300,function(){$("#award-erro").addClass("animate");});
// 	*/
// 	/*
// 	$("#mask-page").fadeIn(300);
// 	$("#award-type").removeClass().addClass("tp1");
// 	$("#award-get").fadeIn(300,function(){$("#award-get").addClass("animate");});
// 	setTimeout(function(){$("#hrt1").addClass("hrt");},1300);
// 	setTimeout(function(){$("#hrt2").addClass("hrt");},1300*2);
// 	setTimeout(function(){$("#hrt3").addClass("hrt");},1300*3);
// 	*/
// 	$("#rule-btn").off("click");
// 	$("#ruler-layer,#mask-page").fadeIn(300);
// 	if(!isRuler){
// 		isRuler=true;
// 		$('#ruler-con').jScrollPane({verticalDragMinHeight:142*$scale,verticalDragMaxHeight:142*$scale});
// 	}
// 	$("#ruler-close").off("click").on("click",CloseRulerAct);
// }

// function CloseRulerAct(){
// 	$("#ruler-close").off("click");
// 	$("#ruler-layer,#mask-page").fadeOut(300);
// 	$("#rule-btn").off("click").on("click",RulerBtnClick);
// }

// function FreshCaptchAct(){
// 	$("#captcha-id").val("");
// 	$("#captcha-img").attr("src","/captcha.php?rnd="+Math.random());
// }


// function LotteryBtnClick(){
// 	$("#lottery_btn").off("click");
// 	$("#lottery_btn").hide();
// 	$("#egg-body,#chui-body").addClass("motion");
// 	$("#clor,#light").addClass("in-ani");
// 	isMusic && $knockSound[0].play();
// 	setTimeout(ShowTaobaoInputAct,1300);
// }

// function ShowTaobaoInputAct(){
// 	isMusic && $bgSound[0].play();
// 	$("#mask-page").fadeIn(300);
// 	$("#user-div").fadeIn(300);
// 	FreshCaptchAct();
// 	$("#captcha-img,#fresh-btn").off("click").on("click",FreshCaptchAct);
// 	$("#confirm-btn").off("click").on("click",ConfirmBtnClick);
// 	GetBeforeInfo();
// }

// function GetBeforeInfo(){
// 	var postData={};
// 	postData["rnd"] = Math.random();
// 	postData["type"]="getinfo";
// 	$.ajax({
// 		type: "post",
// 		timeout: 10000,
// 		dataType:"json",
// 		url:"/api.php",
// 		data:JSON.stringify(postData),
// 		headers: {'Content-Type': 'application/json'},
// 		success:function(data){
// 			if(parseInt(data["status"])==1) $("#taobao-id").val(data["data"]);
// 		}
// 	});
// }

// function ConfirmBtnClick(){
// 	var postData={};
// 	postData["taobao-id"] = $.trim($("#taobao-id").val());
// 	postData["captcha-id"] = $.trim($("#captcha-id").val());
// 	if(!postData["taobao-id"]){ShowTipsAct("请输入淘宝用户名");return false;}
// 	if(!postData["captcha-id"] || postData["captcha-id"].length!=4){ShowTipsAct("请正确输入验证码");return false;}
// 	postData["type"]="checkcode";
// 	$("#confirm-btn").off("click");
// 	$.ajax({
// 		type: "post",
// 		timeout: 10000,
// 		dataType:"json",
// 		url:"/api.php",
// 		data:JSON.stringify(postData),
// 		headers: {'Content-Type': 'application/json'},
// 		success:function(data){
// 			switch(parseInt(data["status"])){
// 				case 1:
// 					$taobao=postData["taobao-id"];
// 					$verify=postData["captcha-id"];
// 					$("#taobao-cid").text($taobao);
// 					$("#user-div").hide();
// 					$("#user-confirm-div").fadeIn(300);
// 					$("#reconfirm-btn").off("click").on("click",ReconfirmBtnClick);
// 					$("#back-btn").off("click").on("click",BackBtnClick);
// 					break;
// 				case 10:
// 					ShowTipsAct(data["info"]);
// 					FreshCaptchAct();
// 					$("#confirm-btn").off("click").on("click",ConfirmBtnClick);
// 					break;
// 				default:
// 					ShowTipsAct(data["info"]);
// 					$("#confirm-btn").off("click").on("click",ConfirmBtnClick);
// 			}
// 		},
// 		error: function(e){
// 			ShowTipsAct("于服务器通讯失败，请重试");
// 			$("#confirm-btn").off("click").on("click",ConfirmBtnClick);
// 		}
// 	});
// }

// function ReconfirmBtnClick(){
// 	var postData={};
// 	postData["taobao-id"] = $taobao;
// 	postData["captcha-id"] = $verify;
// 	postData["code"] = $code;
// 	//console.log(postData["code"]);
// 	if(!postData["code"] || postData["code"].length!=10){
// 		//ShowTipsAct("链接已失效，请重新扫描二维码");
// 		ShowErroPop("链接已失效，请重新扫描二维码");
// 		return false;
// 	}
// 	postData["type"]="savecode";
// 	$("#reconfirm-btn").off("click");
// 	$.ajax({
// 		type: "post",
// 		timeout: 10000,
// 		dataType:"json",
// 		url:"/api.php",
// 		data:JSON.stringify(postData),
// 		headers: {'Content-Type': 'application/json'},
// 		success:function(data){
// 			switch(parseInt(data["status"])){
// 				case 1:
// 					var $at=parseInt(data["data"]["award_type"]);
// 					if($at==1 || $at==2 || $at==3){
// 						$("#user-confirm-div").hide();
// 						$("#award-type").removeClass().addClass("tp"+$at);
// 						$("#award-get").fadeIn(300,function(){$("#award-get").addClass("animate");});
// 						setTimeout(function(){$("#hrt1").addClass("hrt");},1300);
// 						setTimeout(function(){$("#hrt2").addClass("hrt");},1300*2);
// 						setTimeout(function(){$("#hrt3").addClass("hrt");},1300*3);
// 					}else{
// 						$("#user-confirm-div").hide();
// 						$("#award-no").fadeIn(300,function(){$("#award-no").addClass("animate");});
// 					}
// 					break;
// 				case 1077:  //暂未使用
// 					ShowTipsAct(data["info"]);
// 					FreshCaptchAct();
// 					$("#reconfirm-btn").off("click").on("click",ReconfirmBtnClick);
// 					break;
// 				case 100:
// 					$("#user-confirm-div").hide();
// 					$("#award-out").fadeIn(300,function(){$("#award-out").addClass("animate");});
// 					break;
// 				default:
// 					//ShowTipsAct(data["info"]);
// 					//$("#reconfirm-btn").off("click").on("click",ReconfirmBtnClick);
// 					ShowErroPop(data["info"]);
// 			}
// 		},
// 		error: function(e){
// 			ShowErroPop("与服务器通讯失败，请重试");
// 			//ShowTipsAct("服务器通讯失败，请重试");
// 			//$("#reconfirm-btn").off("click").on("click",ReconfirmBtnClick);
// 		}
// 	});
// }


// function ShowErroPop($str){
// 	$("#erro-str").text($str);
// 	$("#user-confirm-div").hide();
// 	$("#award-erro").fadeIn(300,function(){$("#award-erro").addClass("animate");});
// 	$("#erro-confirm").off("click").on("click",ErroBtnAct);
// }


// function ErroBtnAct(){
// 	$("#award-erro").removeClass("animate");
// 	$("#award-erro,#mask-page").fadeOut(300);
// 	$("#egg-body,#chui-body").removeClass("motion");
// 	$("#clor,#light").removeClass("in-ani");
// 	$("#lottery_btn").off("click").on("click",LotteryBtnClick);
// 	$("#lottery_btn").show();
// 	$("#egg-body").removeClass("motion");
// }

// function BackBtnClick(){
// 	$("#back-btn").off("click");
// 	$("#user-confirm-div").hide();
// 	ShowTaobaoInputAct();
// }


// function GetQueryStringByName(name){ 
// 	var result = location.search.match(new RegExp("[\?\&]" + name+ "=([^\&]+)","i")); 
// 	if(result == null || result.length < 1){ 
// 		return ""; 
// 	} 
// 	return result[1]; 
// }

// function IsWeixinCheck(){
// 	var ua = navigator.userAgent.toLowerCase();
// 	if(ua.match(/MicroMessenger/i)=="micromessenger") {
// 		return true;
//  	} else {
// 		return false;
// 	}
// }





