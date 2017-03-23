$(document).ready(function(){
    $('.flip-container').height($('#item_1').width());
// Date must be in ISO format ('YYYY-MM-DDTHH:mm:ss.sssZ')
        setCountdownTimerFor('2017-07-29T13:00:00Z');
});

$(window).on('resize', function(){
    $('.flip-container').height($('#item_1').width());
});
