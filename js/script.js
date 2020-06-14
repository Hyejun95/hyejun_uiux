$(function () {
    portfolio.init();
})

const portfolio = {
    init: function () {
        portfolio.cursor();
        portfolio.sidebar();

    },

    cursor: function () {
        const cursor = $('.cursor');
        $(window).mousemove(function (e) {
            cursor.css({
                top: e.clientY - cursor.height() / 2,
                left: e.clientX - cursor.width() / 2,
            });
        });
        $('a')
            .mouseenter(function () {
                cursor.css({
                    transform: 'scale(1.5)',
                    opacity: 0.7,
                });
            })
            .mouseleave(function () {
                cursor.css({
                    transform: 'scale(1)',
                    opacity: 1,
                });
            });
    },

    sidebar: function () {
        $('.mobile_menu').on('click', function () {
            $('html').toggleClass('open_sidebar')
        })

    }
}