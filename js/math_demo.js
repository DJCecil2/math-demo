(function ($) {

    var validateForm = function() {
        if($.isNaN($('input[name=variable_one]').val()) || $.isNaN($('input[name=variable_two]').val()) || $('[name=operator]').val() === '') {
            return false;
        } else if($('[name=operator]').val() === '/' && $('input[name=variable_two]').val() === '0') {
            return false;
        }

        return true;
    };

    $(document).ready(function() {
        if ($('.messages').length) {
            $('.messages').velocity('transition.fadeIn', {
                duration: 400,
                begin: function() {
                    $('.messages ul li').css('opacity', '0');
                    $('.messages ul li').velocity('transition.slideLeftIn', {
                        delay: 200,
                        duration: 300,
                        stagger: 100
                    });
                },
            });
        }

        $('#math-demo-do-math-form input[type="submit"]').click(function(e) {
            e.preventDefault();

            var form = $('#math-demo-do-math-form');

            if(validateForm()) {
                form.velocity('transition.slideDownOut', {
                    duration: 300,
                    complete: function(element) {
                        $('<div class="transition"><h1><span>Let\'s</span> <span>Do</span> <span>Math</span></h1>').insertBefore($(element));
                        $('.transition h1 span').velocity('transition.shrinkIn', {
                            duration: 300,
                            stagger: 500,
                            drag: true,
                            complete: function() {
                                form.submit();
                                $('.transition').append('<p class="soft">Hell Yeah...</p>');
                                $('.transition p.soft').css('opacity', 0).velocity('transition.slideRightIn', {
                                    delay: 300
                                });
                            }
                        });
                    }
                });
            } else {
                form.submit();
            }
        });
    });
}(jQuery));