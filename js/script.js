jQuery(document).ready(function(){

    var pp = function(t){
        setTimeout(function(){
            $('pre, code:not(pre code)').addClass('prettyprint');
            prettyPrint();
        }, t);
    }
    pp(1000);
    
    $('#paneSetting').change(function(){
        if($(this).val() == 'previewPane'){
            pp(1000);
        }
    });
    
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