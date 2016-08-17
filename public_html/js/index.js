$(document).ready(function(){
    $('#flip-container-1').height($('#item_1').width()); 
});

$(window).on('resize', function(){
    $('.flip-container').height($('#item_1').width());
});