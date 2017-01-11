$(function() {

		$(".control-right").click(function() {
			if(parseInt($(".item-list").css("margin-left")) == 0) {
				$(".item-list").css("margin-left", "-296px");
				$(".ite1").removeClass("pager-active");
				$(".ite2").addClass("pager-active");

			}
			if(parseInt($(".item-list").css("margin-left")) == -296) {
				$(".item-list").css("margin-left", "-592px");
				$(".ite2").removeClass("pager-active");
				$(".ite3").addClass("pager-active");
			}
		})
		$(".control-left").click(function() {
			if(parseInt($(".item-list").css("margin-left")) == -592) {
				$(".item-list").css("margin-left", "-296px");
				$(".ite3").removeClass("pager-active");
				$(".ite2").addClass("pager-active");
			}
			if(parseInt($(".item-list").css("margin-left")) == -296) {
				$(".item-list").css("margin-left", "0");
				$(".ite2").removeClass("pager-active");
				$(".ite1").addClass("pager-active");
			}
		})
		$(".ite2").click(function() {
			if(parseInt($(".item-list").css("margin-left")) == 0){
				$(".item-list").css("margin-left", "-296px");
				$(".ite1").removeClass("pager-active");
				$(".ite2").addClass("pager-active");
			}
			if(parseInt($(".item-list").css("margin-left")) == -592){
				$(".item-list").css("margin-left", "-296px");
				$(".ite3").removeClass("pager-active");
				$(".ite2").addClass("pager-active");
			}
		})
		$(".ite3").click(function() {
			if(parseInt($(".item-list").css("margin-left")) == 0){
				$(".item-list").css("margin-left", "-592px");
				$(".ite1").removeClass("pager-active");
				$(".ite3").addClass("pager-active");
			}
			if(parseInt($(".item-list").css("margin-left")) == -296){
				$(".item-list").css("margin-left", "-592px");
				$(".ite2").removeClass("pager-active");
				$(".ite3").addClass("pager-active");
			}
		})
		$(".ite1").click(function() {
			if(parseInt($(".item-list").css("margin-left")) == -296){
				$(".item-list").css("margin-left", "0");
				$(".ite2").removeClass("pager-active");
				$(".ite1").addClass("pager-active");
			}
			if(parseInt($(".item-list").css("margin-left")) == -592){
				$(".item-list").css("margin-left", "0");
				$(".ite3").removeClass("pager-active");
				$(".ite1").addClass("pager-active");
			}
		})
		
		//second;
		$(".control-right1").click(function() {
			if(parseInt($(".item-list1").css("margin-left")) == 0) {
				$(".item-list1").css("margin-left", "-296px");
				$(".ite4").removeClass("pager-active");
				$(".ite5").addClass("pager-active");

			}
			if(parseInt($(".item-list1").css("margin-left")) == -296) {
				$(".item-list1").css("margin-left", "-592px");
				$(".ite5").removeClass("pager-active");
				$(".ite6").addClass("pager-active");
			}
			if(parseInt($(".item-list1").css("margin-left")) == -592) {
				$(".item-list1").css("margin-left", "-888px");
				$(".ite6").removeClass("pager-active");
				$(".ite7").addClass("pager-active");
			}
		})
		$(".control-left1").click(function() {
			if(parseInt($(".item-list1").css("margin-left")) == -888) {
				$(".item-list1").css("margin-left", "-592px");
				$(".ite7").removeClass("pager-active");
				$(".ite6").addClass("pager-active");
			}
			if(parseInt($(".item-list1").css("margin-left")) == -592) {
				$(".item-list1").css("margin-left", "-296px");
				$(".ite6").removeClass("pager-active");
				$(".ite5").addClass("pager-active");
			}
			if(parseInt($(".item-list1").css("margin-left")) == -296) {
				$(".item-list1").css("margin-left", "0");
				$(".ite5").removeClass("pager-active");
				$(".ite4").addClass("pager-active");
			}
		})
		//如果在第二页
		$(".ite4").click(function() {
			if(parseInt($(".item-list1").css("margin-left")) == -296){
				$(".item-list1").css("margin-left", "0");
				$(".ite5").removeClass("pager-active");
				$(".ite4").addClass("pager-active");
			}
			if(parseInt($(".item-list1").css("margin-left")) == -592){
				$(".item-list1").css("margin-left", "0");
				$(".ite6").removeClass("pager-active");
				$(".ite4").addClass("pager-active");
			}
			if(parseInt($(".item-list1").css("margin-left")) == -888){
				$(".item-list1").css("margin-left", "0");
				$(".ite7").removeClass("pager-active");
				$(".ite4").addClass("pager-active");
			}
		})
		$(".ite5").click(function() {
			if(parseInt($(".item-list1").css("margin-left")) == 0){
				$(".item-list1").css("margin-left", "-296px");
				$(".ite4").removeClass("pager-active");
				$(".ite5").addClass("pager-active");
			}
			if(parseInt($(".item-list1").css("margin-left")) == -592){
				$(".item-list1").css("margin-left", "-296px");
				$(".ite6").removeClass("pager-active");
				$(".ite5").addClass("pager-active");
			}
			if(parseInt($(".item-list1").css("margin-left")) == -888){
				$(".item-list1").css("margin-left", "-296px");
				$(".ite7").removeClass("pager-active");
				$(".ite5").addClass("pager-active");
			}
		})
		$(".ite6").click(function() {
			if(parseInt($(".item-list1").css("margin-left")) == 0){
				$(".item-list1").css("margin-left", "-592px");
				$(".ite4").removeClass("pager-active");
				$(".ite6").addClass("pager-active");
			}
			if(parseInt($(".item-list1").css("margin-left")) == -296){
				$(".item-list1").css("margin-left", "-592px");
				$(".ite5").removeClass("pager-active");
				$(".ite6").addClass("pager-active");
			}
			if(parseInt($(".item-list1").css("margin-left")) == -888){
				$(".item-list1").css("margin-left", "-592px");
				$(".ite7").removeClass("pager-active");
				$(".ite6").addClass("pager-active");
			}
		})
		$(".ite7").click(function() {
			if(parseInt($(".item-list1").css("margin-left")) == 0){
				$(".item-list1").css("margin-left", "-888px");
				$(".ite4").removeClass("pager-active");
				$(".ite7").addClass("pager-active");
			}
			if(parseInt($(".item-list1").css("margin-left")) == -296){
				$(".item-list1").css("margin-left", "-888px");
				$(".ite5").removeClass("pager-active");
				$(".ite7").addClass("pager-active");
			}
			if(parseInt($(".item-list1").css("margin-left")) == -592){
				$(".item-list1").css("margin-left", "-888px");
				$(".ite6").removeClass("pager-active");
				$(".ite7").addClass("pager-active");
			}
		})
		
		//third;
		$(".control-right2").click(function() {
			if(parseInt($(".item-list2").css("margin-left")) == 0) {
				$(".item-list2").css("margin-left", "-296px");
				$(".ite8").removeClass("pager-active");
				$(".ite9").addClass("pager-active");

			}
			if(parseInt($(".item-list2").css("margin-left")) == -296) {
				$(".item-list2").css("margin-left", "-592px");
				$(".ite9").removeClass("pager-active");
				$(".ite10").addClass("pager-active");
			}
			if(parseInt($(".item-list2").css("margin-left")) == -592) {
				$(".item-list2").css("margin-left", "-888px");
				$(".ite10").removeClass("pager-active");
				$(".ite11").addClass("pager-active");
			}
		})
		$(".control-left2").click(function() {
			if(parseInt($(".item-list2").css("margin-left")) == -888) {
				$(".item-list2").css("margin-left", "-592px");
				$(".ite11").removeClass("pager-active");
				$(".ite10").addClass("pager-active");
			}
			if(parseInt($(".item-list2").css("margin-left")) == -592) {
				$(".item-list2").css("margin-left", "-296px");
				$(".ite10").removeClass("pager-active");
				$(".ite9").addClass("pager-active");
			}
			if(parseInt($(".item-list2").css("margin-left")) == -296) {
				$(".item-list2").css("margin-left", "0");
				$(".ite9").removeClass("pager-active");
				$(".ite8").addClass("pager-active");
			}
		})
		//如果在第三页
		$(".ite8").click(function() {
			if(parseInt($(".item-list2").css("margin-left")) == -296){
				$(".item-list2").css("margin-left", "0");
				$(".ite9").removeClass("pager-active");
				$(".ite8").addClass("pager-active");
			}
			if(parseInt($(".item-list2").css("margin-left")) == -592){
				$(".item-list2").css("margin-left", "0");
				$(".ite10").removeClass("pager-active");
				$(".ite8").addClass("pager-active");
			}
			if(parseInt($(".item-list2").css("margin-left")) == -888){
				$(".item-list2").css("margin-left", "0");
				$(".ite11").removeClass("pager-active");
				$(".ite8").addClass("pager-active");
			}
		})
		$(".ite9").click(function() {
			if(parseInt($(".item-list2").css("margin-left")) == 0){
				$(".item-list2").css("margin-left", "-296px");
				$(".ite8").removeClass("pager-active");
				$(".ite9").addClass("pager-active");
			}
			if(parseInt($(".item-list2").css("margin-left")) == -592){
				$(".item-list2").css("margin-left", "-296px");
				$(".ite10").removeClass("pager-active");
				$(".ite9").addClass("pager-active");
			}
			if(parseInt($(".item-list2").css("margin-left")) == -888){
				$(".item-list2").css("margin-left", "-296px");
				$(".ite11").removeClass("pager-active");
				$(".ite9").addClass("pager-active");
			}
		})
		$(".ite10").click(function() {
			if(parseInt($(".item-list2").css("margin-left")) == 0){
				$(".item-list2").css("margin-left", "-592px");
				$(".ite8").removeClass("pager-active");
				$(".ite10").addClass("pager-active");
			}
			if(parseInt($(".item-list2").css("margin-left")) == -296){
				$(".item-list2").css("margin-left", "-592px");
				$(".ite9").removeClass("pager-active");
				$(".ite10").addClass("pager-active");
			}
			if(parseInt($(".item-list2").css("margin-left")) == -888){
				$(".item-list2").css("margin-left", "-592px");
				$(".ite11").removeClass("pager-active");
				$(".ite10").addClass("pager-active");
			}
		})
		$(".ite11").click(function() {
			if(parseInt($(".item-list2").css("margin-left")) == 0){
				$(".item-list2").css("margin-left", "-888px");
				$(".ite8").removeClass("pager-active");
				$(".ite11").addClass("pager-active");
			}
			if(parseInt($(".item-list2").css("margin-left")) == -296){
				$(".item-list2").css("margin-left", "-888px");
				$(".ite9").removeClass("pager-active");
				$(".ite11").addClass("pager-active");
			}
			if(parseInt($(".item-list2").css("margin-left")) == -592){
				$(".item-list2").css("margin-left", "-888px");
				$(".ite10").removeClass("pager-active");
				$("ite11").addClass("pager-active");
			}
		})
		
		//fourth
		$(".control-right3").click(function() {
			if(parseInt($(".item-list3").css("margin-left")) == 0) {
				$(".item-list3").css("margin-left", "-296px");
				$(".ite12").removeClass("pager-active");
				$(".ite13").addClass("pager-active");

			}
			if(parseInt($(".item-list3").css("margin-left")) == -296) {
				$(".item-list3").css("margin-left", "-592px");
				$(".ite13").removeClass("pager-active");
				$(".ite14").addClass("pager-active");
			}
			//if(parseInt($(".item-list3").css("margin-left")) == -592) {
			//	$(".item-list3").css("margin-left", "-888px");
			//	$(".ite14").removeClass("pager-active");
			//	$(".ite15").addClass("pager-active");
			//}
		})
		$(".control-left3").click(function() {
			//if(parseInt($(".item-list3").css("margin-left")) == -888) {
			//	$(".item-list3").css("margin-left", "-592px");
			//	$(".ite15").removeClass("pager-active");
			//	$(".ite14").addClass("pager-active");
			//}
			if(parseInt($(".item-list3").css("margin-left")) == -592) {
				$(".item-list3").css("margin-left", "-296px");
				$(".ite14").removeClass("pager-active");
				$(".ite13").addClass("pager-active");
			}
			if(parseInt($(".item-list3").css("margin-left")) == -296) {
				$(".item-list3").css("margin-left", "0");
				$(".ite13").removeClass("pager-active");
				$(".ite12").addClass("pager-active");
			}
		})
		//如果在第三页
		$(".ite12").click(function() {
			if(parseInt($(".item-list3").css("margin-left")) == -296){
				$(".item-list3").css("margin-left", "0");
				$(".ite13").removeClass("pager-active");
				$(".ite12").addClass("pager-active");
			}
			if(parseInt($(".item-list3").css("margin-left")) == -592){
				$(".item-list3").css("margin-left", "0");
				$(".ite14").removeClass("pager-active");
				$(".ite12").addClass("pager-active");
			}
			if(parseInt($(".item-list3").css("margin-left")) == -888){
				$(".item-list3").css("margin-left", "0");
				$(".ite15").removeClass("pager-active");
				$(".ite12").addClass("pager-active");
			}
		})
		$(".ite13").click(function() {
			if(parseInt($(".item-list3").css("margin-left")) == 0){
				$(".item-list3").css("margin-left", "-296px");
				$(".ite12").removeClass("pager-active");
				$(".ite13").addClass("pager-active");
			}
			if(parseInt($(".item-list3").css("margin-left")) == -592){
				$(".item-list3").css("margin-left", "-296px");
				$(".ite14").removeClass("pager-active");
				$(".ite13").addClass("pager-active");
			}
			if(parseInt($(".item-list3").css("margin-left")) == -888){
				$(".item-list3").css("margin-left", "-296px");
				$(".ite15").removeClass("pager-active");
				$(".ite13").addClass("pager-active");
			}
		})
		$(".ite14").click(function() {
			if(parseInt($(".item-list3").css("margin-left")) == 0){
				$(".item-list3").css("margin-left", "-592px");
				$(".ite12").removeClass("pager-active");
				$(".ite14").addClass("pager-active");
			}
			if(parseInt($(".item-list3").css("margin-left")) == -296){
				$(".item-list3").css("margin-left", "-592px");
				$(".ite13").removeClass("pager-active");
				$(".ite14").addClass("pager-active");
			}
			if(parseInt($(".item-list3").css("margin-left")) == -888){
				$(".item-list3").css("margin-left", "-592px");
				$(".ite15").removeClass("pager-active");
				$(".ite14").addClass("pager-active");
			}
		})
		$(".ite15").click(function() {
			if(parseInt($(".item-list3").css("margin-left")) == 0){
				$(".item-list3").css("margin-left", "-888px");
				$(".ite12").removeClass("pager-active");
				$(".ite15").addClass("pager-active");
			}
			if(parseInt($(".item-list3").css("margin-left")) == -296){
				$(".item-list3").css("margin-left", "-888px");
				$(".ite13").removeClass("pager-active");
				$(".ite15").addClass("pager-active");
			}
			if(parseInt($(".item-list3").css("margin-left")) == -592){
				$(".item-list3").css("margin-left", "-888px");
				$(".ite14").removeClass("pager-active");
				$("ite15").addClass("pager-active");
			}
		})
	});