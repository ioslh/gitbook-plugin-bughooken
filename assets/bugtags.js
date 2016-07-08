require(['gitbook', 'jquery'],function( gitbook, $){
    var CONFIG = {};

    function initUser(){
        if( !CONFIG.userApi ){
            return true;
        }
        var userId = getCookie('user_id');
        if (userId) {
            $.ajax({
                url: CONFIG.userApi + userId,
                xhrFields: { withCredentials: true },
                dataType:'jsonp',
                jsonp:'_callback',
                success:function(req){
                    if(typeof req === 'string'){
                        req = JSON.parse(req);
                    }
                    if (req.ret === 0) {
                        renderUser(req.data);
                    }
                }
            })
        }
    }

    function renderUser( data ){
        var $header = $('header .global-nav ul')
        $header.find('li.register,li.log').hide()
        var html = '<a href="' + CONFIG.siteHost + '" target="_blank">'
            + '<img src="' + data.avatar + '">' + data.nickname
            + '</a>'
        $header.find('li.user').html( html ).show()
    }


    function resetContainerHeight(){
        var gH = $(window).height()
        var $bookBody = $('.body-wrapper .book')
        $bookBody.css( 'height', gH - 50 )
    }

    gitbook.events.on('start',function(e, config){
        CONFIG = config.bughooken || {}
        initUser();
    })

    gitbook.events.on('page.change',function(){
        resetContainerHeight()
    })
})
