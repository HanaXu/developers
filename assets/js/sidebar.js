(function($) {

    SidebarScroll = {
        init: function() {
            var tocElemID = '#doc-sidebar';
            var toc = $(tocElemID);

            var footer = $('footer');
            var bottom = Math.round($(document).height() - footer.offset().top) + 80;

            toc.affix({
                offset: {
                    top: toc.offset().top,
                    bottom: bottom
                }
            });

            // Ensure sidebar width is responsive and constant when scrolling
            $('#doc-sidebar').each(function () {
                $(this).before('<div class="affix-container" />');
            });

            var resizeFn = function() {
                toc.css('width', $('div.affix-container').width());
            };

            resizeFn();
            $(window).resize(resizeFn);

            /* activate scrollspy menu */
            var $body = $(document.body);
            var navHeight = toc.outerHeight(true) + 10;

            $body.scrollspy({
                target: tocElemID,
                offset: navHeight
            });

            /*  scrollspy Table of contents, adapted from https://www.bootply.com/100983 
                license: MIT
                author: bootply.com
             */
            /* smooth scrolling sections */
            $('a[href*=\\#]:not([href=\\#])').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - 50
                        }, 1000);
                        return false;
                    }
                }
            });
        }

    }

})(jQuery);