window.onload=function(){
	var musicphoto=document.getElementById("music_photo");
	var audio=document.getElementsByTagName("audio")[0];
	musicphoto.onclick=function(){
		if(audio.paused){
			audio.play();
			musicphoto.src="img/music_on.png";
		}else{
			audio.pause();
			musicphoto.src="img/music_off.png";
		}
	}
	change();
}

//loading切换
function change(){
	document.getElementById("loading").style.display="none";
	document.getElementById("homePage").style.display="block";
}
//男生按钮的点击事件
function maleClick(){
	var formale=document.getElementById("formale");
	var male=document.getElementById("male");
	formale.style.backgroundColor="#ddd";
	formale.style.color="#000";
	male.style.backgroundColor="#000";
	male.style.color="#ddd";
	male.name="true";
	}
//女生按钮的点击事件
function formaleClick(){
	var formale=document.getElementById("formale");
	var male=document.getElementById("male");
	formale.style.backgroundColor="#000";
	formale.style.color="#ddd";
	male.style.backgroundColor="#ddd";
	male.style.color="#000";
	male.name="false";
	}
//提交按钮事件
function sumbitClick(){
	var home=document.getElementById("homePage");
	var result=document.getElementById("resultPage");
	var name =document.getElementById("nameSub").value;
	if(name==''){
		alert("请输入您的大名");
	}else if(document.getElementById("male").name=="true"){
		home.style.display="none";
		result.style.display="block";
		console.log("111");
		next();
	}else  if(document.getElementById("male").name=="false"){
		home.style.display="none";
		result.style.display="block";
		document.getElementById("textView").value="\n什么？？？\n\n程序猿有女的？？？\n\n别闹！！";
		document.getElementById("btnNext").disabled="disabled";
	}
	
}

function resultView(){
	var name =document.getElementById("nameSub").value;
	var arr = new Array();
	arr[0]="有一天\n"+name+"去菜市场买肉，\n要了一公斤， \n拿到公平电子秤上一称\n不高兴的跑回肉店对老板说：\n怎么少了24克！";
	arr[1]=name+"和女友去北京玩,\n女友对"+name+"说\n“紫禁城占得地方好大呀！”\n"+name+"一激灵\n“快快快，杀死那个子进程！”";
	arr[2]="女神：你能让这个论坛的人都吵起来，我今晚就跟你走。\n"+name+":PHP语言是最好的语言！\n论坛炸锅了，各种吵架。\n女神：服了你了，走吧，你想干啥都行。\n"+name+":今天不行了，我一定要说服他们，\nPHP语言是最好的语言!";
	arr[3]=name+"有一天发帖子\n“各位JR，我想做一个程序猿，请问有什么要注意的?”\n某猿：“等我下班跟你细说”\n\n然后……\n就没有然后了";
	arr[4]=name+"每天半夜三更才打完代码回家。\n他媳妇抱怨：\n“你就不能提早点回家么？”\n于是第二天，\n"+name+"一直写代码到天亮\n提着油条豆浆回家了。";
	arr[5]="有一天"+name+"决定练习书法，\n于是重金购买文房四宝。\n一日，饭后突生雅兴，\n一番研墨拟纸，\n并点上上好檀香。\n定神片刻，泼墨挥毫，\n郑重地写下一行字：\nhello world！";
	arr[6]="有一天"+name+"说\n我去交友网站找女朋友了。\n朋友问，\n找到了么？\n"+name+"说，\n我找到了\n他们页面的一个bug……"; 
	arr[7]="程序员A：\n借我1000元吧。\n"+name+"：\n给你凑个整数，\n\n1024元吧!";
	arr[8]="有一天我问"+name+"\n“那么多人盗版你们开发的游戏，\n你们该怎么养家糊口？”\n"+name+"说:\n“哈哈哈，别逗了!\n程序员哪有家要养”";
	arr[9]=name+"非常喜欢穿NIKE，\n更熟记NIKE的那句广告语：\nJUST DO IT。 \n然后…\n"+name+"从此进入了\nIT行业。";
	arr[10]="有一天我问"+name+"：\n如何快速挣到5W元？\n"+name+"告诉我：\n\nwhile(!5W)}{继续编程;}";
	arr[11]=name+"有一天去跑项目，\n走进一家面馆，问：\n“你们需要客户端吗？”\n老板答，\n面一般是伙计端，\n忙的时候才要客户端。"
	arr[12]="有一天，"+name+"去医院看病，\n大夫告知他得了类风湿\n"+name+"一脸不高兴，问大夫\n“那我孩子会不会被遗传啊？”\n大夫不解，\n"+name+"一脸诧异，\n“类不是能继承吗？”"
	arr[13]=name+"的英文名叫NULL，\n有一天他入职了一家新公司\n为他建立档案时,\n公司的数据库崩溃了。";
	arr[14]="有天加班，\n"+name+"突然站起来说：\n“兄弟们先忙着，我去结个婚。”";
	arr[15]=name+"最讨厌的100件事：\n0.写文档\n1.写注释\n10.别人不写文档\n11.别人不写注释";
	arr[16]=name+"肯定会是一个非常好的男朋友\n因为他每天都在想，\n我特么到底哪错了？";
	arr[17]="某猿和"+name+"讲述他的经历\n“昨天有个妹子开车带我到山顶，随后把衣服脱了和我说你可以带走你想要的”\n"+name+"问：“那你怎么做的？”\n“我把她的车开走了。”\n"+name+"回答道：\n“也是奥，她的衣服你也穿不了”";   
	arr[18]="有天"+name+"和朋友在食堂吃饭，\n"+name+"：“快点吃吧，还要回去打代码呢”\n朋友：“写代码有毛用，还不是没有女朋友！”"+name+"生气的回答道：\n“女朋友有毛用，又不能帮你写代码！！”";
	arr[19]="一位记者采访某程序员\n称呼其为程先生\n程序员：\n“您太客气了，叫我序员就行了”\n这位记者又来采访架构师"+name+",\n同样称呼其贾先生\n"+name+":\n“您太客气了，叫我狗屎就行了...” ";
	arr[20]="有天公司"+name+"在界面上显示了一个 周天，\n然后PM看到了，让他改成周日，\n"+name+"懒得改，\n俩人都不让步，\n最后，协商改成了周昊 。";
	var result=arr[Math.floor((Math.random())*21)];
	return result;
}

//监听DOM和jsbridge
function next(){
		var resultTxt=resultView();
		document.getElementById("textView").value=resultTxt;
}

document.addEventListener('DOMContentLoaded', function () {
    function audioAutoPlay() {
        var audio = document.getElementById('audio');
            audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
    }
    audioAutoPlay();
});

// 音乐播放
function autoPlayMusic() {
    // 自动播放音乐效果，解决浏览器或者APP自动播放问题
    function musicInBrowserHandler() {
        musicPlay(true);
        document.body.removeEventListener('touchstart', musicInBrowserHandler);
    }
    document.body.addEventListener('touchstart', musicInBrowserHandler);
    // 自动播放音乐效果，解决微信自动播放问题
    function musicInWeixinHandler() {
        musicPlay(true);
        document.addEventListener("WeixinJSBridgeReady", function () {
            musicPlay(true);
        }, false);
        document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
    }
    document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
}
function musicPlay(isPlay) {
    var media = document.querySelector('#audio');
    if (isPlay && media.paused) {
        media.play();
    }
    if (!isPlay && !media.paused) {
        media.pause();
    }
}




