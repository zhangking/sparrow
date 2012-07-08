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
    $('.table-striped tr:odd').addClass('table-striped-odd');
});