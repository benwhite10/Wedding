$(document).ready(function(){
    $('.flip-container').height($('#item_1').width());
});

$(window).on('resize', function(){
    $('.flip-container').height($('#item_1').width());
});