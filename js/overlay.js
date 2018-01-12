var overlay = (function ($) {
    var root = $('html');
    var backdrop = $('<div/>').hide().addClass('overlay');
    backdrop.css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,220,0.5)'
    });

    function create() {
        backdrop.appendTo('body').fadeIn();
        root.css('overflow', 'hidden');
    }

    function destroy() {
        backdrop.fadeOut(function () {
            backdrop.remove();
            root.css('overflow', 'auto');
        });
        backdrop.off('click');
    }

    function click(func) {
        var args = Array.prototype.slice.call(arguments, 1);
        var callback = function () {
            if (typeof func === 'function') {
                func.call(backdrop, args);
            } else {
                destroy();
            }
        };
        backdrop.off('click').on('click', callback);
    }

    function css(options) {
        backdrop.css(options || {});
    }

    return {
        show: create,
        close: destroy,
        click: click,
        css: css
    };

})(jQuery);
