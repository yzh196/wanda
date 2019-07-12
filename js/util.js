/*初始化工作区高度*/
var slidewidth = $("#slidbar").innerWidth();
var subwidth = $("#sub-menu").innerWidth();
/*初始化iframe*/
function iwork() {
	var frameheight = window.innerHeight - 50;
	//console.log('iwork====' + frameheight);
	$("#framezone").css("height", frameheight);
	$("#slidbar").css("height", frameheight);
};

function iFrameSize(slidewidth) {
	var ifmwidth = window.innerWidth - slidewidth;
}

function treeSize(subwidth) {
	var treewidth = window.innerWidth - subwidth;
	var treeheight = window.innerHeight - 4;
	$("#treeifm").css("height", treeheight);
}
Window.onload = iwork();
window.onresize = function() {
	    iwork();
		iFrameSize(slidewidth);
		treeSize(subwidth);
	}

/*侧栏导航滚动条*/
$(document).ready(function() {
	$(".mCustomScrollbar").attr("data-mcs-theme", "minimal-dark");
	$(".mCustomScrollbar").mCustomScrollbar({
		//axis:"yx",
		axis: "y",
		theme: "minimal-dark",
		scrollInertia: 400,
		mouseWheel: {
			scrollAmount: "auto"
		}
	});
	
});



/*侧栏动画*/
$("#slidbar ul.nav>li>a").click(function() {
	$("#slidbar ul.nav>li").removeClass("active");
	$("#slidbar ul.nav>li").removeClass("haschild");
	$(this).parent().addClass("active");
	var haschild = $(this).parent().attr("data-child");
	if (haschild == "haschild") {
		$(this).parent().addClass("haschild");
	}
});
/*二级侧栏*/
$("#sub-menu>ul>li>a").click(function() {
	$("#sub-menu>ul li").removeClass("active");
	$(this).parent().addClass("active");
});
$("#sub-menu>ul>li>a").click(function() {
	//alert(0);
	$(this).parent().find("ul").slideToggle();
});

/*收缩侧栏*/
$("#showslid").click(function() {
	
	return false;
	
	var tree = $(window.frames["ifm"].document).find('#sub-menu');
	var treezone = $(window.frames["ifm"].document).find('#treezone');
	if (tree != "") {
		tree.toggleClass("hidden");
		if (tree.attr("class") == "sub-menu animated fadeInLeft hidden") {
			treezone.css("margin-left", 0);
			treeSize(subwidth);
		} else {
			treezone.css("margin-left", 107);
			treeSize(subwidth);
		};
	}
	$("#slidbar").toggleClass("minilidbar");
	var slidervalue = $("#slidbar").attr("class");
	if (slidervalue == "slidbar minilidbar") {
		var ifmwidth = window.innerWidth - slidewidth;
		$("#framezone").css("margin-left", 36);
		iFrameSize(36);
	} else {
		var ifmwidth = window.innerWidth - slidewidth;
		$("#framezone").css("margin-left", slidewidth);
		iFrameSize(slidewidth);
	};
});

/*导航动画*/
$("#nav>li>a").click(function() {
	var toggle = $(this).attr("data-caret");
	if (toggle != "no") {
		$("#nav>li").removeClass("active");
		$(this).parent().addClass("active");
		$("#slidbar>ul>li").removeClass("active haschild");
	} else {
		return 0;
	}
});
/*workspace*/
$(".fadeInDown .label").hover(function() {
	$(".fadeInDown .label i").removeClass("fadeInLeft");
	$(this).find("i").addClass("fadeInLeft");
});
/*设备页面SVG高度*/
$(document).ready(function() {
	var ewidth = window.innerHeight - $(".svg-box-foot").outerHeight() - 69;
	$(".svg-con").height(ewidth);
});

/*初始化复选框 初始化日期插件*/
$(document).ready(function() {
	$("input[datetype='checkbox']").icheck({
		checkboxClass: 'icheckbox_minimal-grey',
		radioClass: 'iradio_minimal-grey',
		increaseArea: '20%' // optional
	});
	
	$('input[type="time"]').datetimepicker({
		language:  'zh-CN',
        format: 'hh:ii',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 1,
		minView: 0,
		maxView: 1,
		forceParse: 0
      });
      
    $('input[type="datetime"]').datetimepicker({
	 	language:  'zh-CN',
        format: 'yyyy-mm-dd',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0
	 });    
});


/*2016年5月23日22:08:17*/
    //页面中有tree
    if($(".ztreebox").length > 0){//左边有树的列表页面
    	ztreeheight = window.innerHeight - 69;
        $(".zTreeDemoBackground").css("height",ztreeheight ); 
    }
      if($(".ztree-content .tab-content").length > 0){//左边有树的列表页面
    	ztreeheight = window.innerHeight - 101;
        $(".ztree-content .tab-content").css("height",ztreeheight ); 
    }
    
    