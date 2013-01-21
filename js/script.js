jQuery(document).ready(function(){

setTimeout(function(){
	$('pre, code:not(pre code)').addClass('prettyprint');
	prettyPrint();
}, 1000);

$(function(){
    window.onscroll=function(){
        if(document.body.scrollTop>70 || document.documentElement.scrollTop>70){
            $(".container nav").addClass('fixed');
        }
        else{
            $(".container nav").removeClass('fixed');
        }
    }
});




});