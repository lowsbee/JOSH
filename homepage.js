var hpmepage = (function(){
    var message = $('.message');
        rightNav = $('.rightNav li');
        cirle = $('.rightNav li div');
        cirleImg = $('.rightNav li div img');
        imgPlay = $('.rightImg ul');
        smartImg = $('.smartImg .img li');
        smart = $('.smart');
        // number = 0;
    init();
    function init(){
        change(0);
    }
    var timer = setInterval(function(){play();},3000)
        function play(){
            // number ++;
            imgLeft = parseInt(imgPlay.position().left);
            if(imgLeft < -600){
                imgPlay.css({'left': '0'});
            }
            imgPlay.css({'left':'-=300'},500);
        }
    function bindEvent(){
        rightNav.on('click',function(){
            num = $(this).index();
            color = $(this).css('backgroundColor');
            display = $(message[num]).css('display');
            if(display == ("none")){
                change(num);
            }
        })
    }
    function change(index){
        $(message[index]).show(500).siblings().hide(500);
        $(rightNav[index]).css({'backgroundColor':'#fff'}).siblings().css({'backgroundColor':'rgb(59, 89, 152)'});
        $(rightNav[index]).siblings().find('.inco').css({'backgroundColor':'#fff'});
        $(cirleImg[index]).css({'left':'-40px'});
        $(cirle[index]).css({'backgroundColor':'rgb(59, 89, 152)'});
        $(rightNav[index]).siblings().find('img').css({'left':'0'});
    }
    bindEvent();
})();
