
$().ready(function(){
    $('.table tr').hover(function(){
        $(this).addClass('table-hover');
    }, function(){
        $(this).removeClass('table-hover');
    });
    $('.btn').hover(function(){
        $(this).addClass('btn-hover');
    }, function(){
        $(this).removeClass('btn-hover');
    });
    $('.btn-white').hover(function(){
        $(this).addClass('btn-white-hover');
    }, function(){
        $(this).removeClass('btn-white-hover');
    });
    $('.table-striped tr:odd').addClass('table-striped-odd');
});
$(function(){
    if (window.PIE) {
        $('.btn').each(function(){
            PIE.attach(this);
        });
    }
});