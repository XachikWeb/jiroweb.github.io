//  ===================== button  for tables clicks ===================== 

$(document).ready(function () {
    var taabes_all = $('.table-click');
    $(taabes_all).each(function () {
        var this_data_table = $(this).attr('data-table');
        var this_oun_table = $('#' + this_data_table);
        $(this_oun_table).css({ display: 'none' })
        if ($(this).hasClass('active-players-comand')) {
            $(this_oun_table).css({ display: 'block' })

        }
    })


    $('.table-click').on('click', function () {
        var parent_cnt = $(this).parent();
        var table_btn = $(parent_cnt).find('.table-click');
        var this_data_table = $(this).attr('data-table');
        var this_oun_table = $('#' + this_data_table);
        $(table_btn).each(function () {
            if ($(this).hasClass('active-players-comand')) {
                $(this).removeClass('active-players-comand')
            }
            var all_tables_attr = $(this).attr('data-table');
            var this_table = $('#' + all_tables_attr);
            $(this_table).css({ display: 'none' });
        })
        if (!$(this).hasClass('active-players-comand')) {
            $(this).addClass('active-players-comand')
        }
        $(this_oun_table).css({ display: 'block' })

    })

})

// =====================  scroll menu ===================== 
$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 75) {
            $('.left-menu-container').css({ position: 'fixed', top: '0', height: 'calc(100% - 0px)' })
            console.log($(window).scrollTop())
            var position = $('footer').offset();
            if ($(window).scrollTop() > (position.top - $(window).innerHeight()+35)) {
                $('.left-menu-container').css({ position: 'fixed', top: '0px', height: 'calc(100% - 75px)' })
            } 
        } else {
           
            $('.left-menu-container').css({ position: 'absolute', top: '75px', height: 'calc(100% - 75px)' })
        }

    })
    if ($(window).scrollTop() >= 75) {
        $('.left-menu-container').css({ position: 'fixed', top: '0', height: 'calc(100% - 0px)' })
        var position = $('footer').offset();
            if ($(window).scrollTop() > (position.top - $(window).innerHeight()+35) ) {
                $('.left-menu-container').css({ position: 'fixed', top: '0px', height: 'calc(100% - 75px)' })
            } 

    } else {
        $('.left-menu-container').css({ position: 'absolute', top: '75px', height: 'calc(100% - 75px)' })
    }
})


//  modals
// =================== modal maney cardss ===================
$('.btn-modal').on('click', function () {
    var attr = $(this).attr('data-val');
    var modal = $('#' + attr);
    modal.removeClass('out')
    $('body').css({ overflow: 'hidden ' })
    modal.fadeIn()

})

$('.close').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')

    setTimeout(function () {
        prt.fadeOut();
    }, 100)
    $('body').css({ overflow: 'visible ' })
})

$(window).on('click', function (event) {
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content')

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()

            }, 100)
            $('body').css({ overflow: 'visible ' })
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()

            }, 100)
            $('body').css({ overflow: 'visible ' })
        }
    })
})

// menu lagea hide and show
$(document).ready(function () {
    $('.menu-sub').on('click', function () {
        $('.submenu-league').slideToggle("slow");
        var prt_li = $(this).parents('li');
        $(prt_li).toggleClass('togle-lague')
    })
    $('.menu-close').on('click', function () {
        $('.submenu-league').slideUp("slow");
        var prt_li = $(this).parents('li');
        $(prt_li).css({ borderBottom: '1px solid rgba(255, 255, 255, 0.2)', paddingBottom: '25px' })
        if ($(prt_li).hasClass('togle-lague')) {
            $(prt_li).removeClass('togle-lague')
        }


    })
})

//  upload img 

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function () {
    readURL(this);
});

// paymen
$(document).ready(function () {
    $('.open-notification').css({ display: 'block' })
    $('.close-notification').css({ display: 'none' })
    $('.paymen-btn').on('click', function (e) {
        $('.notification-payments-block').fadeToggle(function () {
            $(this).focus();

        })
        e.stopPropagation();
        if ($('.notification-payments-table').hasClass('height-auto-notific')) {
            $('.notification-payments-table').removeClass('height-auto-notific')
        }
        var this_prt = $(this).parents('.esparea-profile');
        var taple_tr = $(this_prt).find('.notification-payments-table table tbody tr');

        if ($(this).attr('data-flag') === 'false') {
            $(taple_tr).each(function () {
                if (!$(this).hasClass('shown')) {
                    $(this).addClass('d-none')
                }
            })
            $(this).attr('data-flag', 'true')
            $('.open-notification').css({ display: 'block' })
            $('.close-notification').css({ display: 'none' })

        } else {
            $(this).attr('data-flag', 'false')
        }
        $('.notification-all').attr('data-flag', 'false');


    })
})
$(document).ready(function () {
    $('.notification-payments-block').on('click', function (e) {
        e.stopPropagation();

    })
})
$(document).ready(function () {

    $('.notification-all').on('click', function () {
        $('.notification-payments-table').toggleClass('height-auto-notific')
        var flag = $(this).attr('data-flag');
        var this_prt = $(this).parents('.notification-payments-block');
        var taple_tr = $(this_prt).find('.notification-payments-table table tbody tr');
        if (flag === 'true') {
            $(this).attr('data-flag', 'false');
            $(taple_tr).each(function () {
                if (!$(this).hasClass('shown')) {
                    $(this).addClass('d-none')
                }
            })
            $('.open-notification').css({ display: 'block' })
            $('.close-notification').css({ display: 'none' })
        } else {
            $(taple_tr).each(function () {
                if (!$(this).hasClass('shown')) {
                    $(this).removeClass('d-none')

                }
            })
            $(this).attr('data-flag', 'true');
            $('.open-notification').css({ display: 'none' })
            $('.close-notification').css({ display: 'block' })


        }
    })

})


$(document).on('click', function () {

    var notification_menu = $('.notification-payments-block')
    $(notification_menu).fadeOut();

    var taple_tr = $('.notification-payments-table table tbody tr');
    $(taple_tr).each(function () {
        if (!$(this).hasClass('shown')) {
            $(this).addClass('d-none')
        }
    })
    $('.open-notification').css({ display: 'block' })
    $('.close-notification').css({ display: 'none' })
})


