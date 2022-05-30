// // JavaScript Document

$(function(){
	$.datepicker.setDefaults($.datepicker.regional['ko']); 
	$( "#startDate" ).datepicker({
			changeMonth: true, 
			changeYear: true,
			nextText: '다음 달',
			prevText: '이전 달', 
			dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], 
			monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			dateFormat: "yymmdd",
			maxDate: 0,                       // 선택할수있는 최소날짜, ( 0 : 오늘 이후 날짜 선택 불가)
			onClose: function( selectedDate ) {    
				//시작일(startDate) datepicker가 닫힐때
				//종료일(endDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
				$("#endDate").datepicker( "option", "minDate", selectedDate );
			}    

	});
	$( "#endDate" ).datepicker({
			changeMonth: true, 
			changeYear: true,
			nextText: '다음 달',
			prevText: '이전 달', 
			dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], 
			monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			dateFormat: "yymmdd",
			maxDate: 0,                       // 선택할수있는 최대날짜, ( 0 : 오늘 이후 날짜 선택 불가)
			onClose: function( selectedDate ) {    
				// 종료일(endDate) datepicker가 닫힐때
				// 시작일(startDate)의 선택할수있는 최대 날짜(maxDate)를 선택한 시작일로 지정
				$("#startDate").datepicker( "option", "maxDate", selectedDate );
			}    
	});    

	 /*input 캘린더*/
	if ($('.cal').length) {
		$('.cal').datepicker({
			dateFormat: "yy-mm-dd",
			monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
			monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
			dayNames: ['일요일' , '월요일' , '화요일' , '수요일' , '목요일' , '금요일' , '토요일'],
			showMonthAfterYear: true,
			changeYear:true,
			changeMonth:true,
			yearSuffix: "년",
			nextText:"다음달",
			prevText:"이전달"
		});
	}

	/* 11-06 추가 */
	
	/* gnb hover */
	// $('.gnb>ul>li').hover(function(){
    //     $('.menuBg,.dep2').stop().slideDown();
    // },function(){
	// 	$('.menuBg,.dep2').stop().slideUp();
    // });

	/* popup */
	$('.popButton').on({
		"click":function (){
			$('.popup.popShow').fadeIn();
		}
	})

	$('.popButton02').on({
		"click":function (){
			$('.popup.popShow02').fadeIn();
		}
	})

	$('.popButton03').on({
		"click":function (){
			$('.popup.popShow03').fadeIn();
		}
	})

	$('.popButton04').on({
		"click":function (){
			$('.popup.popShow04').fadeIn();
		}
	})

	$('.popButton05').on({
		"click":function (){
			$('.popup.popShow05').fadeIn();
		}
	})
	

	$('.gnb>ul>li').on({
		"mouseenter":function (){
			$('.menuBg,.dep2').stop().slideDown();
		}
	})

	$('.header-box').on({
		"mouseleave":function (){
			$('.menuBg,.dep2').stop().slideUp();
		}
	});

	$('.gnb.sub').on({
		"mouseleave":function (){
			$('.menuBg,.dep2').stop().slideUp();
		}
	});


	/*lnb dep2 */
    $('.dep1>li>p').on({
        "click": function (e) {
            if ($(this).next('.dep2').length) {
                e.preventDefault();
            }
            $(this).next('.dep2').slideToggle('fast');
            $(this).closest('li').toggleClass('active').siblings('li').removeClass('active').find('.dep2').slideUp('fast');
        }
    });

     /*lnb dep2 */
    $('#lnb>.dep2>li').on({
        "click": function (e) {
            $(this).addClass('active').siblings('li').removeClass('active');
            if ($(this).hasClass('li01')) {
                $(this).closest('.dep2').siblings('.line').css("top","69px");
            } else if ($(this).hasClass('li02')) {
                $(this).closest('.dep2').siblings('.line').css("top","90px");
            } else if ($(this).hasClass('li03')) {
                $(this).closest('.dep2').siblings('.line').css("top","111px");
            } else if ($(this).hasClass('li04')) {
                $(this).closest('.dep2').siblings('.line').css("top","131px");
            }
        }
    });

	/*lnb dep3 */
	$('#lnb .dep1 > li > .dep2 li').on({
		"click":function (){
			$(this).closest('li').toggleClass('on').siblings('li').removeClass('on');
		}
	})

	$('.aside .btnTop').click(function() {
        $('html').animate({scrollTop : 0}, 600);
    });

	/*탭 리스트*/
    $('.tabWrap.type01 .tabList li').on({
		"click":function (){
			$(this).closest('li').toggleClass('active').siblings('li').removeClass('active');
			$(this).closest('.tabNav').siblings('.tabContWrap').addClass('active').children('.tabCont').eq($(this).index()).toggleClass('active').siblings('.tabCont').removeClass('active');
			if( $(this).hasClass('active') ){
				$(this).closest('.tabNav').siblings('.btnArea').hide();
			} else{
				$(this).closest('.tabNav').siblings('.btnArea').show();
			} 
		}
	})

	$('.popTabWrap .tabList li').on({
		"click":function (){
			$(this).addClass('active').siblings('li').removeClass('active');
			$(this).closest('.tabNav').siblings('.tabCont').eq($(this).index()).addClass('active').siblings('.tabCont').removeClass('active');
		}
	  })

	$('.aside ul li .tabWrap.type01 .tabList li').on({
		"click":function (){
			if ($(this).hasClass('tab01')) {
				$('.leftMenu').css("height","657px");
            } else if ($(this).hasClass('tab02')) {
				$('.leftMenu').css("height","844px");
            } else if ($(this).hasClass('tab03')) {
				$('.leftMenu').css("height","347px");
            } else if ($(this).hasClass('tab04')) {
				$('.leftMenu').css("height","201px");
            }
		}
	})


	/* 업무관리 클릭 시 */
    $('.aside>ul>li>:first-child').on({
		"click":function (){
			$(this).closest('li').toggleClass('active');
		}
	})

	/* tabWrap에서 btnPrevClose 클릭 시 */
    $('.tabWrap.type01 > .btnArea > .btnPrevClose').on({
		"click":function (){
			$(this).parents('li').removeClass('active');
		}
	})

	/* leftMenu에서 btnPrevClose 클릭 시 */
    $('.leftMenu .btnPrevClose').on({
		"click":function (){
			$('.tabCont').removeClass('active').parent('.tabContWrap').removeClass('active').siblings('.btnArea').show().siblings('.tabNav').find('li').removeClass('active');
		}
	})

	/* btnAllClose 클릭 시 */
    $('.leftMenu .btnAllClose').on({
		"click":function (){
			$('.tabCont').removeClass('active');
			$(this).parents('li').removeClass('active');
			$('.tabList').children('li').removeClass('active').closest('.tabNav').siblings('.btnArea').show();
		}
	})

	/* btnMore 클릭 시 */
    $('.btnMore').on({
		"click":function (){
			$(this).siblings('.innerMore').toggleClass('active');
		}
	})

	$( ".layerGroup" ).sortable();

    $(document).on("click",".btnRemove",function() {
    	$(this).closest('.group').parent('li').remove();
    });
	/* --- */

	
	$('.common-nav-box>li').hover(function(e){
		e.preventDefault();
		$(this).children('a').siblings('ul').addClass('on');
	},function(){//leave
		$(this).children('a').siblings('ul').removeClass('on');
	});//hover event

	$('.common-nav-box>li>ul>li').hover(function(e){
		e.preventDefault();
		//console.log('22');
		$(this).children('a').siblings('ul').addClass('on');
	},function(){//leave
		$(this).children('a').siblings('ul').removeClass('on');
	});//hover event

	$('.common-nav-depth-depth>li').hover(function(e){
		e.preventDefault();
		console.log('22');
		$(this).children('a').siblings('ul').addClass('on');
	},function(){//leave
		$(this).children('a').siblings('ul').removeClass('on');
	});//hover event

	$('.depth-tab-box>.depth-tab>li>a').on('click',function(e){
		
		var idx = $(this).parents('li').index();
		e.preventDefault();
		$(this).parents('li').addClass('on').siblings('li').removeClass('on');
		$('.depth-box.tab.clb').eq(idx).addClass('on').siblings().removeClass('on');
		funLoad();
	});//depth tab click function

	$('.popup-tab-box>.popup-tab>li>a').on('click',function(e){
		var idx = $(this).parents('li').index();
		e.preventDefault();
		$(this).parents('li').addClass('on').siblings('li').removeClass('on');
		$('.popup-box.tab.clb').eq(idx).addClass('on').siblings().removeClass('on');
		funLoad();
	})//popup tab click function

	$('.popup-inner-tab>ul>li>a').on('click',function(e){
		var idx = $(this).parents('li').index();
		e.preventDefault();
		$(this).parents('li').addClass('on').siblings('li').removeClass('on');
		$('.popup-inner-box').eq(idx).addClass('on').siblings().removeClass('on');
		funLoad();
	});//popup tab click function

	$('.inner-depth-tab-box>.depth-tab>li>a').on('click',function(e){
		var idx = $(this).parents('li').index();
		console.log(idx);
		e.preventDefault();
		$(this).parents('li').addClass('on').siblings('li').removeClass('on');
		$('.inner-depth-box.tab').eq(idx).addClass('on').siblings().removeClass('on');
	});//depth tab click function


	$('.ul-list-table>li>a').on('click',function(e){
		e.preventDefault();
		$(this).parents('li').addClass('on').siblings().removeClass('on');
	});//


	$('.btn.toggle').on('click',function(){
		
		if($(this).hasClass('on')){
			$(this).addClass('off').removeClass('on');
			$(this).parents('.opentab-box').addClass('off').removeClass('on');
		}else if($(this).hasClass('off')){
			$(this).addClass('on').removeClass('off');
			$(this).parents('.opentab-box').addClass('on').removeClass('off');
		}
		$(this).parents('.depth-title-box').siblings('.depth-conts').slideToggle();
	});//btn toggle

	$('.btn.toggle2').on('click',function(){
		if($('.btn.toggle2').hasClass('on')){
			$('.btn.toggle2').addClass('off').removeClass('on');
		}else if($('.btn.toggle2').hasClass('off')){
			$('.btn.toggle2').addClass('on').removeClass('off');
		}
		$('.depth-conts.type-toggle').slideToggle();
	});//btn toggle

	$('.conts-menu>li>a').on('click',function(e){
		e.preventDefault();
		if($(this).parents('li').hasClass('on')){
			$(this).parents('li').addClass('off').removeClass('on');
		}else{
			$(this).parents('li').addClass('on').removeClass('off');
		}
	});//conts-menu-click

	$('.depth-conts-grid-tab-box>ul>li>a').on('click',function(e){
		var idx = $(this).parents('li').index();
		e.preventDefault();
		console.log(idx);
		$(this).parents('li').addClass('on').siblings().removeClass('on');
		$('.depth-conts-grid-box>li').eq(idx).addClass('on').siblings().removeClass('on');
	});




	$('.arrow-box').on('click',function(e){
		e.preventDefault();

		if($(this).parents('.call-menu-box').hasClass('off')){
			$(this).parents('.call-menu-box').addClass('on').removeClass('off');
		}else{
			$(this).parents('.call-menu-box').addClass('off').removeClass('on');
		}
		
	});//fixed menu button
	$('.arrow-box2').on('click',function(e){
		e.preventDefault();

		if($(this).parents('.call-menu-box').hasClass('off2')){
			$(this).parents('.call-menu-box').addClass('on2').removeClass('off2');
		}else{
			$(this).parents('.call-menu-box').addClass('off2').removeClass('on2');
		}
		
	});//fixed menu button


	$('.btn-box>button').on('click',function(){
		$(this).addClass('on').siblings().removeClass('on');
	});

	// 날짜 필드 readonly 속성 부여
	$("input[id^='date']").each(function(){
		var _this = this.id;
		$('#' + _this).datepicker({
			dateFormat: "yy-mm-dd",
			changeMonth: true,
			changeYear: true,
			showMonthAfterYear: true,
			dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], 
			monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
		});
		
		$("input[id=" + _this + "]").prop("readonly", true);
	});
	
	// input 요소 year 클래스 글자수 및 문자입력 제한
	$("input[class='year']").each(function(){
	    $(this).attr("onKeyDown", "this.value=this.value.replace(/[^0-9]/g,'')");
	    $(this).attr("maxLength", 4);
	});
	
	$.datepicker.setDefaults($.datepicker.regional['ko']); 
	$( "#startDate" ).datepicker({
			changeMonth: true, 
			changeYear: true,
			nextText: '다음 달',
			prevText: '이전 달', 
			dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], 
			monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			dateFormat: "yymmdd",
			maxDate: 0,                       // 선택할수있는 최소날짜, ( 0 : 오늘 이후 날짜 선택 불가)
			onClose: function( selectedDate ) {    
				//시작일(startDate) datepicker가 닫힐때
				//종료일(endDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
				$("#endDate").datepicker( "option", "minDate", selectedDate );
			}    

	});
	$( "#endDate" ).datepicker({
			changeMonth: true, 
			changeYear: true,
			nextText: '다음 달',
			prevText: '이전 달', 
			dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], 
			monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			dateFormat: "yymmdd",
			maxDate: 0,                       // 선택할수있는 최대날짜, ( 0 : 오늘 이후 날짜 선택 불가)
			onClose: function( selectedDate ) {    
				// 종료일(endDate) datepicker가 닫힐때
				// 시작일(startDate)의 선택할수있는 최대 날짜(maxDate)를 선택한 시작일로 지정
				$("#startDate").datepicker( "option", "maxDate", selectedDate );
			}    
			





	});    

	$('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

        e.preventDefault();
    });

    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

        e.preventDefault();
    });
	
	$("input[id^='number']").each(function(){
		var _this = this.id;

//스크롤시 사용
		$('#' + _this).on('mousewheel',function(e){
			e.preventDefault();
			e.stopPropagation();
			if(e.originalEvent.wheelDelta > 0){
				setQuantity('up');
			}else{
				setQuantity('down');
			}
		});//마우스스크롤

		$('#' + _this).siblings('button.up').on('mousedown',function(){
			setQuantity('up');
		});
		$('#' + _this).siblings('button.down').on('mousedown',function(){
			setQuantity('down');
		});

		function setQuantity(upordown) {
			
			var quantity = document.getElementById(_this);
			
			if (quantity.value > 1) {
				if (upordown == 'up'){++quantity.value;}
				else if (upordown == 'down'){--quantity.value;}}
			else if (quantity.value == 1) {
				if (upordown == 'up'){++quantity.value;}}
			else
				{quantity.value=1;}
		}
	});

	// quantity = document.getElementById('quantity');
            
    //         button_up=document.getElementById('up');
    //         button_down=document.getElementById('down');
            
    //         button_up.onclick=function() {setQuantity('up');}
    //         button_down.onclick=function() {setQuantity('down');}
            
    //         function setQuantity(upordown) {
    //             var quantity = document.getElementById('quantity');
            
    //             if (quantity.value > 1) {
    //                 if (upordown == 'up'){++quantity.value;}
    //                 else if (upordown == 'down'){--quantity.value;}}
    //             else if (quantity.value == 1) {
    //                 if (upordown == 'up'){++quantity.value;}}
    //             else
    //                 {quantity.value=1;}
    //         }



		// var posY = $(this).clientX;
		// console.log(posY);
		// $('.sizing').draggable({
		// 	axis: 'y',
		// });





		setDrag('.sizing-box');
		function setDrag(selector) {
			//var startX = 0;
			var startY = 0;
			var delX = 0;
			var delY = 0;
			var offsetY = 0;
			var isClickAllowed = true;
		
			$(selector).on('mousedown', function(e) {
				//startX = e.clientX;
				startY = e.clientY;
				offsetY = $(selector).position().top;
				//console.log(startY);
				$(document).on('mousemove', function(e) {
					var Lset = offsetY + delY
					delY = e.clientY - startY;
					if(Lset > 50){
						e.preventDefault();
					$(selector).css({ 'top': (offsetY + delY) + 'px'});
						if (Math.abs(delX) > 10 || Math.abs(delY) > 10) isClickAllowed = false;
					$('.moving-box').css({ 'height': (offsetY + delY) + 'px'});
					}
				});
				$(document).on('mouseup', function(e) {
					$(document).off('mousemove mouseup');
				});
				}).on('click', function(e) {
				if (isClickAllowed === false) {
					e.preventDefault();
					isClickAllowed = true;
				}
			});
		}

		$('.selectBox').on('click', function(e){
			var $tgPoint = $(e.target);
			console.log($tgPoint);
//			if($(this).children('div.checkboxes').hasClass('on')){
//				$(this).children('div.checkboxes').addClass('off').removeClass('on');		
//			}
//			else{
//				$(this).children('div.checkboxes').addClass('on').removeClass('off');
//			}
			$(this).children('div.checkboxes').addClass('on').removeClass('off');
		});//selectbox
		$('body').on('click', function(e){
			// var selector = $('.selectBox>.checkboxes.on')[0];
			// if($('.selectBox>.checkboxes').hasClass('on') && $(e.target).parents('.selectBox')[0] !== $('.selectBox')[0] && $(e.target).parents('.checkboxes')[0] !== selector){
			// 	$('.checkboxes').removeClass('on');
			// }
			var $tgPoint = $(e.target);
			//console.log($tgPoint);
			var $popCallBtn = $tgPoint.parents().hasClass('selectBox');
			//console.log($popCallBtn);
			var $popArea = $tgPoint.parents().hasClass('checkboxes');
			//console.log($popArea);
			if( !$popCallBtn && !$popArea){
				$('.checkboxes').addClass('off').removeClass('on');
				//$('.main-nav').removeClass('on');
			}//바디클릭시 select 닫기 
		});

//		20210903 임시 js
		$('.type-drag>.popup-title-box').on('mousedown',function(){
//			console.log('asd');
			$('.type-drag').draggable({disabled:false});
		});//드래그 이벤트
		$('.type-drag>.popup-title-box').on('mouseup',function(){
//			console.log('dasd');
			$('.type-drag').draggable({disabled:true});
		});//드래그 이벤트 삭제

});//jQb area



// 그리드 사이즈 자동조절하는 함수
function funLoad(){
	var dis = $('.depth-conts.type01').is(":visible");
	var Cheight = $('.depth-conts-table').outerHeight(true);
	var CheightOn = $('.depth-box.on .depth-conts-table').outerHeight(true);
	var Mnum = CheightOn+10;
	var Mnumoff = Cheight+10;
	var box_title = $('.depth-title-box').outerHeight(true);
	var box_titleOn = $('.depth-box.on .depth-title-box').outerHeight(true);
	var box_conts = $('.depth-conts.type01').outerHeight(true);
	var box_contsOn = $('.depth-box.on .depth-conts.type01').outerHeight(true);
	var box_grid_tab_box = $('.depth-conts-grid-tab-box').outerHeight(true);
	// var box_tab_box = $('.depth-tab-box').outerHeight(true);
	var boxT = box_title + box_grid_tab_box;
	var boxP = box_title + box_conts + box_grid_tab_box;
	var boxX1 = box_titleOn + box_contsOn;
	var boxTC = box_title + box_conts;
	// var boxTCOn = CheightOn +  box_titleOn

	if(dis === false ){//conts 가 닫혀있을때
		$('.depth-conts-grid-box.type01').css('height', "calc(100% - " + boxT + "px)");
		$('.depth-conts-grid-box.type02').css('height', "calc(100% - " + box_titleOn + "px)");
		$('.depth-conts-grid-box.type03').css('height', "calc(100% - " + box_title + "px)");
		//$('.depth-conts-grid.type02').css('height', "calc(100% - " + box_titleOn + "px)");
		//console.log(box_title);
	}else{
		$('.depth-conts-grid-box.type01').css('height', "calc(100% - " + boxP + "px)");
		$('.depth-conts-grid-box.type02').css('height', "calc(100% - " + boxX1 + "px)");
		$('.depth-conts-grid-box.type03').css('height', "calc(100% - " + boxTC + "px)");
		//console.log(box_titleOn);
		//$('.depth-conts-grid.type02').css('height', "calc(100% - " + boxX1 + "px)");
	}//type00
	if($('.depth-box').hasClass('on')){
		$('.depth-conts-grid.type00').css('height', "calc(100% - " + Mnum + "px)");//type00
	}else{
		$('.depth-conts-grid.type00').css('height', "calc(100% - " + Mnumoff + "px)");//type00
	}
	if($('.depth-conts-grid').hasClass('value')){// 그리드 하단에 value이 붙을때 
		var heightNow = $('.depth-conts-grid').height();
		var ValueH = $('.depth-conts-grid-value').outerHeight();
		var Gheight = heightNow - ValueH;
		console.log(heightNow);
		$('.depth-conts-grid.type00').css('height', Gheight + "px");//type00
	}
}
// window.onload = funLoad;
$(document).ready(funLoad);
window.onresize = funLoad; 


// var expanded = false;

// 		function showCheckboxes() {
// 		var checkboxes = document.getElementsByClassName("checkboxes");
// 		if (!expanded) {
// 			checkboxes.style.display = "block";
// 			expanded = true;
// 		} else {
// 			checkboxes.style.display = "none";
// 			expanded = false;
// 		}
// 		


function setCloseOption(e1, e2){
	$("input[id=" + e1 + "]").datepicker("option", "onClose", function(selectedDate){
		// 시작일(startDate) datepicker가 닫힐때
		// 종료일(endDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
		$("input[id=" + e2 + "]").datepicker("option", "minDate", selectedDate);
	});

	$("input[id=" + e2 + "]").datepicker("option", "onClose", function(selectedDate){
		// 종료일(endDate) datepicker가 닫힐때
		// 시작일(startDate)의 선택할수있는 최대 날짜(maxDate)를 선택한 시작일로 지정
		$("input[id=" + e1 + "]").datepicker( "option", "maxDate", selectedDate);
	});
}