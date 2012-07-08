$().ready(function(){
    $('.table tr').hover(function(){
        $(this).addClass('table-hover');
    }, function(){
        $(this).removeClass('table-hover');
    });
    $('.table-striped tr:odd').addClass('table-striped-odd');
});