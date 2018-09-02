(function($) {

  'use strict';

  var App = {

    /**
     * Init
     */
    init: function() {
        App.feature();
        App.setSmoothScroll();
        //App.form_validate();
        //App.loadMore();
        App.comment_post();
        App.uploadImage();
        App.flashMessage();
        App.searchTagsAndAccount();
        App.directMessagePost();
    },

    /**
     * Feature
     */
    feature: function() {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            autoplay: 5000,
            paginationClickable: true,
            loop: true,
            autoplayDisableOnInteraction: false,
            slidesPerView: 'auto',
            centeredSlides: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 6,
             breakpoints: {
                768: {
                    slidesPerGroup: 1,
                    centeredSlides: false,
                    spaceBetween: 0
                }
            }
        });

        var swiper = new Swiper('.ad-swiper', {
            slidesPerView: 'auto',
            slidesPerGroup: 3,
            centeredSlides: false,
            spaceBetween: 20,
            autoplay: 5000,
            loop: true,
            autoplayDisableOnInteraction: false,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            breakpoints: {
	            768: {
                    slidesPerView: 1,
		            slidesPerGroup: 1,
                    centeredSlides: true,
                    spaceBetween: 10
	            }
            }
        });

        if($(".swiper-container .swiper-slide").length == 3) {
            $('.swiper-wrapper').addClass( "disabled" );
            $('.swiper-pagination').addClass( "disabled" );
        }
        //Image list slider
        var galleryTop = new Swiper('.gallery-top', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 10,
            autoHeight: true,
            effect: 'fade'
        });
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            slidesPerView: 'auto',
            touchRatio: 0.2,
            slideToClickedSlide: true,
            centeredSlides: true
        });
        galleryTop.params.control = galleryThumbs;
        galleryThumbs.params.control = galleryTop;

        // Mobile menu
        var controller = new slidebars();
        controller.init();

        $( '.js-toggle-left-slidebar' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.toggle( 'slidebar-1' );
             $('.js-toggle-left-slidebar').toggleClass('close-btn');
        });
        $( '.js-toggle-right-slidebar' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.toggle( 'slidebar-2' );
            $('html').addClass('menu-right-open');
        });
        // Close any
        $( controller.events ).on( 'opened', function () {
            $( '[canvas="container"]' ).addClass( 'js-close-any-slidebar' );
            $('html').addClass('menu-open');
            $('body').find('#wrapper').css('max-height', $(window).height());
        });

        $( controller.events ).on( 'closed', function () {
            $( '[canvas="container"]' ).removeClass( 'js-close-any-slidebar' );
            $('.js-toggle-left-slidebar').removeClass('close-btn');
            $('html').removeClass('menu-open menu-right-open');
            $('body').find('#wrapper').css('max-height', 'inherit');
        });

        $( 'body' ).on( 'click', '.js-close-any-slidebar', function ( event ) {
            event.stopPropagation();
            controller.close();
            $('body').find('#wrapper').css('max-height', 'inherit');
        });
        //$("#select-cat").selectbox();
        $("#select-cat").each(function() {
            var sb = new SelectBox({
                selectbox: $(this),
                changeCallback: select_box_callback,
            });
        });
        // $( "#tabs" ).tabs();

        var availableTags = [
              "kidsstyle",
              "kidsootd",
              "kidfashion",
              "kidroom",
              "kids ファッション",
              "kid model++",
              "kid hair"
            ];
        $( "#searchTags" ).autocomplete({
            source: availableTags,
            open : function(){
                var position = $(".ui-autocomplete").position(), top = position.top;

                $(".ui-autocomplete").css({top: top - 3 + "px"});
            }
        });
        var icons = {
            header: "ui-icon-plus",
            activeHeader: "ui-icon-minus"
        };
        $( "#accordion" ).accordion({
            collapsible: true,
            icons: icons,
            heightStyle: "content"
        });

        $('.follow-list-box').each(function(){
            if (!$('.follow-list-box').hasClass('is-list-box-simple')) {
                var txtL = $(this).find('>p').html();
                if(typeof txtL !== 'undefined' && txtL.replace(/ /g,'').length > 40) {
                    $(this).find('>p').html(txtL.substr(0, 40) + "...");
                }
            }
        });

		$('.top-slider').find('.text span').each(function() {
			var _slide_text = $(this).text();
			$(this).html(_slide_text.substr( 0, 35));
		})
        if($(window).width() < 769) {
            $('.main-menu .nav').each(function(){
                var _l = $(this).find('a.active').offset().left,
                    _w = $(window).width(),
                    _menu_w = $(this).find('a.active').outerWidth();
                $(this).scrollLeft(_l - _w/2 + _menu_w/2);
            })
        }
        $('#wrapper').on('touchmove', function(e){
            if($('.scroll-disable').has($(e.target)).length) e.preventDefault();
        });
        $('body').on('shown.bs.modal', function(){
            $(this).addClass('scroll-disable');
        });
        $('body').on('hidden.bs.modal', function(){
            $(this).removeClass('scroll-disable');
        });
        $('.slide-modal').on('shown.bs.modal', function () {
            var width = $(window).width();
            if(width < 768){
                $(this).modal('hide');
            }
        });
        // $('#message_content').flexText();
        if ($(window).width() < 769) {
            $('#message_content').on('blur', function(){
                $(this).parents('.enter-message').removeClass('focus');
            }).on('focus', function(){
                $(this).parents('.enter-message').addClass('focus');
            })
        }
	},

    setSmoothScroll: function(){
        var anchors = $('a[href^="#"]');

        $(window).on('load', function(){
            anchors.each(function(){
                var hash = this.hash;
                var hashOffset;

                $(this).on('click', function(e){

                    e.preventDefault();
                    hashOffset = (hash === '')? {top:0,left:0} : $(hash).offset();
                    // モバイル
                    if($.isMobile){
                      $('body').animate({ scrollTop: hashOffset.top }, 400, 'swing');

                    // モバイル以外
                    } else {
                      $('html, body').animate({ scrollTop: hashOffset.top, scrollLeft: hashOffset.left }, 700, 'swing');
                    }
                });
            });
        });
    },

    loadMore: function() {
        $("#prod-list").loadJson({
            url: 'assets/_dmy_json/mamagirl_top.json',
            loadBtn: '#loadMore',
            getData: function(elem, data) {
                $.each(data, function(index, value) {
                    var prod_info = value.content;
                    var prod_content = value.userContent;
                    var user = value.user;
                    var imgClass = (prod_content['photo_url']) ? '' : ' no-img';
                    var imgUrl = (prod_content['photo_url']) ? '<div class="img"><img src="'+ prod_content['photo_url'] +'" alt=""></div>' : '';
                    var comments = (prod_info['content_comment_count']) ? '<li class="entry-comments"><a href="#"><i class="icon-tello icon-commenting"><b>comment</b></i><span>'+ prod_info['content_comment_count'] +'</span></a></li>' : '';
                    var html = '<li class="product animated fadeIn cat-id-'+ prod_info['category_id'] + imgClass + '">' +
                                    '<a href="'+ prod_info['url'] +'">' +
                                        '<h3 class="cat-name">' + prod_info['category_name']+ '</h3>' +
                                        imgUrl +
                                        '<div class="content">' +
                                            '<p class="text">' + prod_content['body'] + '</p>' +
                                        '</div>' +
                                    '</a>' +
                                    '<ul class="entry-meta">' +
                                        '<li class="entry-author"><a href="#"><img src="'+ user['photo_url']+'"><span>'+ user['user_name']+'</span></a></li>' +
                                        '<li class="entry-likes"><a href="#"><i class="icon-tello icon-heart"></i><span>'+ prod_info['content_like_count'] +'</span></a></li>' +
                                        //comments +
                                    '</ul>' +
                                '</li>';
                    $(elem).append(html);
                });
            }
        });
    },

    form_validate: function() {

        $.validator.addMethod("valid_email", function(value, element) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return this.optional(element) || re.test(value);
        }, jQuery.validator.messages.valid_email);

        $('.login-form, .signup-mail-form').each(function(){
            $(this).validate({
                onkeyup: false,
                rules:{
                    email: {
                        required: true,
                        valid_email: true
                    },
                    password: {
                        required: true,
                        minlength: 6
                    }
                },
                submitHandler: function (form) {
                    form.submit();
                }
            });
        });
        $('.signup-form').each(function(){
            $(this).validate({
                onkeyup: false,
                rules:{
                    email: {
                        required: true,
                        valid_email: true
                    }
                },
                submitHandler: function (form) {
                    form.submit();
                }
            });
        });

        jQuery.extend(jQuery.validator.messages, {
            required: "この項目は必須です",
            email: "有効なメールアドレスを入力してください",
            valid_email: "有効なメールアドレスを入力してください",
            equalTo: "Please enter the same value again.",
            maxlength: jQuery.validator.format("{0}文字以上は入力出来ません"),
            minlength: jQuery.validator.format("少なくとも{0}文字を入力してください。"),
        });
    },

    comment_post: function(){
        $.fn.setCursorPosition = function (el) {
            el = $(el)[0];

            // Trigger input to adjust size
            $(el).trigger('button');

            // Scroll to bottom
            $(el).scrollTop(el.scrollHeight);

            // Move cursor to end
            if (typeof window.getSelection != 'undefined' && typeof document.createRange != 'undefined') {
                var range = document.createRange();
                range.selectNodeContents(el);
                range.collapse(false);
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            } else if (typeof document.body.createTextRange != 'undefined') {
                var textRange = document.body.createTextRange();
                textRange.moveToElementText(el);
                textRange.collapse(false);
                textRange.select();
            }

            // Focus
            el.focus();
        };
        $('#comments').on('change keyup paste input click', function (e) {
             e.stopPropagation();
            var _error = true;

            $('#comments_value').val($(this).html());

            if ($(this).outerHeight() > this.scrollHeight){
                $(this).height(1)
            }
            while ($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))){
                $(this).height($(this).outerHeight() + 1)
            }
            if($(this).html().replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'').length > 1000) {
                $(this).siblings('.error_msg').html('1000文字以上は入力出来ません');
                _error = false;
            } else if($(this).html().length == ""){
                $(this).siblings('.error_msg').html('コメントを入力して下さい');
                _error = false;
            }else {
                $(this).siblings('.error_msg').html('');
            }
            return _error;
        });
        $('.cmt-form').each(function(){
            var _cmt_form = $(this);
            $(this).on('click', '.cmt-btn', function(e){
                if (_cmt_form.hasClass('disabled')) {
                    return false;
                }

                var cmt_text = $('#comments').html();
                if(cmt_text.length == "") {
                    $(this).siblings('.error_msg').html('コメントを入力して下さい');
                    e.preventDefault();
                } else if($(this).html().replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'').length > 1000) {
                    $(this).siblings('.error_msg').html('1000文字以上は入力出来ません');
                    e.preventDefault();
                } else {
                    if ($('.reply-to').val()) {
                        $('#body').val($('.reply-to').val() + $('#comments').text());
                    } else {
                        $('#body').val($('#comments').text());
                    }

                    if ($(this).hasClass('is-smp-app')) {
                        var contentId = $('#content_id').val() + "",
                            body = $('#body').val() + "";
                        var method = "javascript:navigator.WebAppManager.addComment('" + contentId +"','"+ body +"','addCommentResult');";
                        location.href = method ;
                        return false;
                    } else {
                      _cmt_form.submit();
                      _cmt_form.addClass('disabled');
                    }
                }
            })
            $('.entry-cmts a[href="#cmtBox"]').on('click', function(e){
                e.stopPropagation();
                $('.comment-box').addClass('cmt-open');
                $('.comment-box').find('#comments').html('').focus().outerHeight('45px');

            })
            $('.follows-me a[href="#cmtBox"]').on('click', function(e){
                e.stopPropagation();
                $('.comment-box').addClass('cmt-open');
                $('.comment-box').find('#comments').html('').focus().outerHeight('45px');

            })
            $('.user-comment a[href="#cmtBox"]').each(function(){
                var _cmt_area = $(this).parents('.comments-area'),
                    _cmt_box = _cmt_area.find('.comment-box'),
                    user_name = '<input type="button" class="reply-to" value=' + $(this).parents('.user-comment').find('.name').text() + 'さん＞' + '>';

                $(this).on('click', function(e) {
                    e.stopPropagation();
                    var cmt_textarea = _cmt_box.find('#comments');
                    _cmt_box.addClass('cmt-open');
                    cmt_textarea.html(user_name).outerHeight('45px');
                    cmt_textarea.setCursorPosition(cmt_textarea);
                })

            });
        })
    },

    uploadImage: function(){
        $("#uploadFile").on("change", function(){

            var files = !!this.files ? this.files : [];
            if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

            if (/^image/.test( files[0].type)){ // only image file
                var reader = new FileReader(); // instance of the FileReader
                reader.readAsDataURL(files[0]); // read the local file

                reader.onloadend = function(){ // set image data as background of div
                    $("#imagePreview").css("background-image", "url("+this.result+")");
                }
            }
        });
        $('.post-form').each(function(){
            $(this).validate({
                onfocusout: false,
                rules:{
                    comment: {
                        required: true,
                        maxlength: 400
                    }
                },
                errorPlacement: function (error, element) {
                    element.siblings('.error_msg').html(error.text());
                },
                submitHandler: function (form) {
                    form.submit();
                },
                invalidHandler: function (event, validator) {
                    $('.is-submit').removeClass('disabled');
                }
            });
        });
    },

    flashMessage: function() {
      if ($('.is-flash-message')) {
        setTimeout(function() {
          $('.is-flash-message').slideUp('slow', function () {
            $(this).remove();
          });
        }, 3000);
      }
    },

    searchTagsAndAccount: function() {
        if ($('input#searchTags') && $('#tabs > .tab-link')){
            $(document).on('change', 'input#searchTags', function(){
                var search_input_keyowrds = $(this).val();
                $('#tabs > .tab-link').find('li').each(function(){
                    if( search_input_keyowrds ){
                        search_input_keyowrds = search_input_keyowrds.replace(/^\s+|\s+$/g, '');
                        if($(this).find('a.tab-link-a-hash')){
                            $(this).find('a.tab-link-a-hash').attr('href', '/search/hash?keyword=' + search_input_keyowrds);
                        }
                        if($(this).find('a.tab-link-a-user')){
                            $(this).find('a.tab-link-a-user').attr('href', '/search/user?keyword=' + search_input_keyowrds);
                        }
                    }else{
                        if($(this).find('a.tab-link-a-hash')){
                            $(this).find('a.tab-link-a-hash').attr('href', '/search/hash');
                        }
                        if($(this).find('a.tab-link-a-user')){
                            $(this).find('a.tab-link-a-user').attr('href', '/search/user');
                        }
                    }
                });
            });
        }
    },

    directMessagePost: function() {
        $.fn.setCursorPosition = function (el) {
            el = $(el)[0];

            // Trigger input to adjust size
            $(el).trigger('button');

            // Scroll to bottom
            $(el).scrollTop(el.scrollHeight);

            // Move cursor to end
            if (typeof window.getSelection != 'undefined' && typeof document.createRange != 'undefined') {
                var range = document.createRange();
                range.selectNodeContents(el);
                range.collapse(false);
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            } else if (typeof document.body.createTextRange != 'undefined') {
                var textRange = document.body.createTextRange();
                textRange.moveToElementText(el);
                textRange.collapse(false);
                textRange.select();
            }

            // Focus
            el.focus();
        };
        $('#direct_messages').on('change keyup paste input click', function (e) {
             e.stopPropagation();
            var _error = true;

            $('#direct_message_value').val($(this).html());

            if ($(this).outerHeight() > this.scrollHeight){
                $(this).height(1)
            }
            while ($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))){
                $(this).height($(this).outerHeight() + 1)
            }
            if($(this).html().length > 100) {
                $(this).siblings('.error_msg').html('100文字以上は入力出来ません');
                _error = false;
            } else if($(this).html().length == ""){
                $(this).siblings('.error_msg').html('メッセージを入力して下さい');
                _error = false;
            }else {
                $(this).siblings('.error_msg').html('');
            }
            return _error;
        });
        $('.dmsg-form').each(function(){
            var _dmsg_form = $(this);
            $(this).on('click', '.dmsg-btn', function(e){
                if (_dmsg_form.hasClass('disabled')) {
                    return false;
                }
                var dmsg_text = $('#direct_messages').val();
                if(dmsg_text.length == "") {
                    $(this).siblings('.error_msg').html('メッセージを入力して下さい');
                    e.preventDefault();
                } else if(dmsg_text.length > 100){
                    $(this).siblings('.error_msg').html('100文字以上は入力出来ません');
                    e.preventDefault();
                } else {
                    $('#message').val($('#direct_messages').val());

                    if ($(this).hasClass('is-smp-app')) {
                        var direct_thread_id = $('#direct_thread_id').val() + "",
                            message = $('#message').val() + "";
                        var method = "javascript:navigator.WebAppManager.addDirectMessage('" + direct_thread_id +"','"+ message +"','addDirectMessageResult');";
                        location.href = method ;
                        return false;
                    } else {
                      _dmsg_form.submit();
                      _dmsg_form.addClass('disabled');
                    }
                }
            })
            $('.entry-dmsgs a[href="#dmsgBox"]').on('click', function(e){
                e.stopPropagation();
                $('.direct-message-box').addClass('cmt-open');
                $('.direct-message-box').find('#direct_messages').html('').focus().outerHeight('45px');

            })
            $('.follows-me a[href="#dmsgBox"]').on('click', function(e){
                e.stopPropagation();
                $('.direct-message-box').addClass('cmt-open');
                $('.direct-message-box').find('#direct_messages').html('').focus().outerHeight('45px');

            })
            /*
            $('.user-comment a[href="#cmtBox"]').each(function(){
                var _cmt_area = $(this).parents('.comments-area'),
                    _cmt_box = _cmt_area.find('.comment-box'),
                    user_name = '<input type="button" class="reply-to" value=' + $(this).parents('.user-comment').find('.name').text() + 'さん＞' + '>';

                $(this).on('click', function(e) {
                    e.stopPropagation();
                    var cmt_textarea = _cmt_box.find('#comments');
                    _cmt_box.addClass('cmt-open');
                    cmt_textarea.html(user_name).outerHeight('45px');
                    cmt_textarea.setCursorPosition(cmt_textarea);
                })
            });
            */
        })
    }

  };

  $(function() {
    App.init();
  });

})(jQuery);

function select_box_callback(val) {
    // this callback is dummy
}
