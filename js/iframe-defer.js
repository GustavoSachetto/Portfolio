$(document).ready(function(){
    setTimeout(() => {
        if ($('.defer-iframe').length) {
            $('.defer-iframe').each( function() {
                var $iframe = $('<iframe width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
                
                $iframe.attr($(this).data());
                
                $(this).append($iframe);
            });
        }
    }, 200);
});