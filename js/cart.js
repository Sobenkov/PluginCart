$(function() {
    $(document).ready(function() {

        //set initial state.
        //$('#textbox1').val(this.checked);

        $('.item-select__input').change(function() {
            if(this.checked) {

                let ProdQuantityVal = $(this).closest('.item').find('.qty').val();
                let ProdSku = $(this).closest('.item').data('sku');
                let ProdId = $(this).closest('.item').data('product');

                let serProd = "sku_id=" + ProdSku + "&" +"product_id="+ ProdId + "&" + "quantity="+ ProdQuantityVal;
                console.log(serProd);


                    $.post('/postponedbasket/cartreservadd/?html=1', serProd, function(response) {
                        if (response.status == 'ok') {
                            location.reload();
                            console.log(response);
                        }

                    //     f.find('.adding2cart').hide();
                    //     console.log(f.serialize());
                    //     if (response.status == 'ok') {
                    //         console.log(1111);
                    //         if ($('.cart-summary-page').length == 1) {
                    //             window.location.reload();
                    //         }
                    //
                    //         var cart_total = $(".cart_total");
                    //         var cart_count = $(".cart_count");
                    //         cart_total.closest('#cart').removeClass('empty');
                    //
                    //         // mobile cart
                    //         var mob_cart_wrap = $('.mobCart .js-cart');
                    //         $('.mobCart .js-cart-count').attr('data-cart_count',response.data.count);
                    //         if (response.data.count > 0 && !mob_cart_wrap.hasClass('full')) {
                    //             mob_cart_wrap.addClass('full');
                    //         } else if (!response.data.count) {
                    //             mob_cart_wrap.removeClass('full');
                    //         }
                    //
                    //         $('.remodal').trigger("added_to_basket");
                    //
                    //         if (MatchMedia("only screen and (max-width: 767px)")) {
                    //             f.find('span.added2cart').show();
                    //             cart_total.html(response.data.total);
                    //             cart_count.html(response.data.count);
                    //
                    //             $('#cart-content').append($('<div class="cart-just-added"></div>').html(f.find('span.added2cart').text()));
                    //             if ($('#cart').hasClass('fixed')) {
                    //                 $('.cart-to-checkout').hide();
                    //             }
                    //
                    //             ftHighlight('#ft_cart');
                    //         }
                    //         else {
                    //             // flying cart
                    //             var origin = f.closest('.product_page').find('.product-core-image');
                    //             var block = $('<div class="fly_wrap"></div>').append(origin[0].outerHTML);
                    //             $('#ft_cart a').removeClass('empty');
                    //             var ftCart = $('#ft_cart');
                    //             var cart = $('#cart');
                    //             var cartAnim = 0;
                    //
                    //             if (ftCart.length) {
                    //                 cartAnim = {
                    //                     top: ftCart.offset().top,
                    //                     left: ftCart.offset().left,
                    //                     width: ftCart.width(),
                    //                     height: ftCart.width(),
                    //                     opacity: 0.4,
                    //                     speed: 2000
                    //                 };
                    //             }
                    //             else if (cart.length) {
                    //                 cartAnim = {
                    //                     top: cart.offset().top + 24,
                    //                     left: cart.offset().left + 24,
                    //                     width: 10,
                    //                     height: 10,
                    //                     opacity: 0.4,
                    //                     speed: 2000
                    //                 };
                    //             }
                    //
                    //             if (cartAnim) {
                    //                 block.css({
                    //                     'z-index': 101,
                    //                     background: '#fff',
                    //                     top: origin.offset().top,
                    //                     left: origin.offset().left,
                    //                     width: origin.width() + 'px',
                    //                     height: origin.height() + 'px',
                    //                     position: 'absolute',
                    //                     overflow: 'hidden'
                    //                 })
                    //                     .appendTo('body').css({
                    //                     'border': '1px solid #eee'
                    //                 })
                    //                     .supremate({
                    //                         top: cartAnim.top,
                    //                         left: cartAnim.left,
                    //                         width: cartAnim.width,
                    //                         height: cartAnim.height,
                    //                         opacity: cartAnim.opacity,
                    //                     }, cartAnim.speed, 'linear', function() {
                    //                         $(this).remove();
                    //                         cart_total.html(response.data.total);
                    //                         cart_count.html(response.data.count);
                    //                         ftHighlight('#ft_cart');
                    //                     });
                    //             }
                    //         }
                    //
                    //         if (response.data.error) {
                    //             alert(response.data.error);
                    //         }
                    //     }
                    //     else if (response.status == 'fail') {
                    //         alert(response.errors);
                    //     }
                    // }, "json");
                    //
                    // return false;
                });


            }
            else {

                var items = document.getElementById('items').querySelectorAll(".item input[type='checkbox']");
                //console.log(items);

                items.forEach(
                    function (item) {
                        var row = item.closest('.item');

                        //var row = $(this).closest('.item');
                       // console.log($(row).data('id'));

                        $.post('/postponedbasket/cartreserv/', {
                            html: 1,
                            id: $(row).data('id')
                        }, function(response) {
                           console.log(response);
                            //row.remove();
                            //updateCart(response.data);
                        }, "json");
                        return false;
                    }
                    //item => item.closest('.item').remove()
                );



                // document.cookie = 'id=44444';
                // document.cookie = 'name=товар';
                // document.cookie = 'quantity=2';
                //var arr1 = new Map();

// создание ассоциативного массива и добавление в него 3 пары "ключ-значение"
//                 var arr = new Map([
//                     ['id', 44444],
//                     ['name', 'имя'],
//                     ['quantity', 2]
//                 ],
//                     [
//                         ['id', 5555],
//                         ['name', 'имя2'],
//                         ['quantity', 4]
//                     ],
//                 );
//                 var myAry = {
//                     'id':44444,
//                     'name':'имя',
//                     'quantity':2
//                 };
//                 $.cookie('name', JSON.stringify([...arr]));
//                 console.log(JSON.parse($.cookie('name')));


            }
            //$('#textbox1').val(this.checked);
        });
    });

    $(".select-panel__btn-del").click(function() {

           // console.log(document.getElementById(appendBox).querySelectorAll(".item input[type='checkbox']:checked"));
            var items = document.getElementById('items').querySelectorAll(".item input[type='checkbox']:checked");
            //
        //
            // //var row = item => item.closest('.item');
            // $.post('delete/', {
            //     html: 1,
            //
            // }, function(response) {
            //     if (response.data.count === 0) {
            //         location.reload();
            //     }
            //         items.forEach(
            //             item => item.closest('.item').remove()
            //     );
            //     updateCart(response.data);
            // }, "json");

                items.forEach(
                    function (item) {
                        var row = item.closest('.item');

        //var row = $(this).closest('.item');
        console.log($(row).data('id'));
        $.post('delete/', {
            html: 1,
            id: $(row).data('id')
        }, function(response) {
            if (response.data.count === 0) {
                location.reload();
            }
            row.remove();
            updateCart(response.data);
        }, "json");
        return false;
                    }
                    //item => item.closest('.item').remove()
                );


    });

    function updateCart(data) {
        console.log(data);
        $(".cart-total").html(data.total);

        $(".discount-total").html(data.discount);
        $(".cart_total").html(data.total).closest('#cart').removeClass('empty');
        $(".cart_count").html(data.count);

        var intDataTotal = parseInt(data.total.replace(/\D+/g,""));
        var intDataDiscount = parseInt(data.discount.replace(/\D+/g,""));
        var general_total = intDataTotal - intDataDiscount;
        console.log(general_total);
        $(".general-total").html(general_total);

        // mobile cart
        var mob_cart_wrap = $('.mobCart .js-cart');
        $('.mobCart .js-cart-count').attr('data-cart_count',data.count);
        if (data.count > 0 && !mob_cart_wrap.hasClass('full')) {
            mob_cart_wrap.addClass('full');
        } else if (!data.count) {
            mob_cart_wrap.removeClass('full');
        }

        if (data.discount_numeric) {
            $(".cart-discount").closest('.item').show();
        }
        $(".cart-discount").html('&minus;' + data.discount);
        $(".coupon_discount").html('&minus;' + data.discount_coupon);

        if (data.add_affiliate_bonus) {
            $(".affiliate").show().html('<i class="fa fa-thumbs-o-up like"></i> ' + data.add_affiliate_bonus);
        }
        else {
            $(".affiliate").hide();
        }
    }

    // $(".cart a.delete").click(function() {
    //     var row = $(this).closest('.item');
    //     $.post('delete/', {
    //         html: 1,
    //         id: row.data('id')
    //     }, function(response) {
    //         console.log(response);
    //         // if (response.data.count === 0) {
    //         //     location.reload();
    //         // }
    //
    //         //row.remove();
    //         updateCart(response.data);
    //     }, "json");
    //     return false;
    // });
    $(".cart a.delete").click(function() {
        var row = $(this).closest('.item');
        $.post('delete/', {
            html: 1,
            id: row.data('id')
        }, function(response) {
            console.log(response);
            // if (response.data.count === 0) {
            //     location.reload();
            // }

            //row.remove();
            updateCart(response.data);
        }, "json");
        return false;
    });

    $(".btn_clear_cart").click(function() {
        for (var i = 0; i < inCart.length; i++) {
            $.post('delete/', {
                html: 1,
                id: inCart[i]
            }, function(response) {
                if (response.data.count === 0) {
                    location.reload();
                }
            }, "json");
        }
    });

    function cartQty(el) {
        var that = $(el);
        var row = that.closest('.item');
        if (that.val()) {
            $.post('save/', {
                html: 1,
                id: row.data('id'),
                quantity: that.val()
            }, function(response) {
                row.find('.item-price__total > span').html(response.data.item_total);


                if (response.data.q) {
                    that.val(response.data.q);
                }
                if (response.data.error) {
                    alert(response.data.error);
                }
                else {
                    that.removeClass('error');
                }
                updateCart(response.data);
                // Товары-комплекты (https://www.webasyst.ru/store/plugin/shop/itemsets/)
                if (typeof $.itemsetsFrontend !== 'undefined') {
                    $.itemsetsFrontend.quantityChange(that);
                }
            }, "json");
        }
    }

    $(".cart input.qty").change(function() {
        cartQty(this);
    });

    $(".cart .services input:checkbox").change(function() {
        var obj = $('select[name="service_variant[' + $(this).closest('.item').data('id') + '][' + $(this).val() + ']"]');
        if (obj.length) {
            if ($(this).is(':checked')) {
                obj.removeAttr('disabled');
            }
            else {
                obj.attr('disabled', 'disabled');
            }
        }

        var div = $(this).closest('div');
        var row = $(this).closest('.item');
        if ($(this).is(':checked')) {
            var parent_id = row.data('id');
            var data = {
                html: 1,
                parent_id: parent_id,
                service_id: $(this).val()
            };
            var variants = $('select[name="service_variant[' + parent_id + '][' + $(this).val() + ']"]');
            if (variants.length) {
                data.service_variant_id = variants.val();
            }
            $.post('add/', data, function(response) {
                div.data('id', response.data.id);
                row.find('.item-total > span').html(response.data.item_total);
                updateCart(response.data);
            }, "json");
        }
        else {
            $.post('delete/', {
                html: 1,
                id: div.data('id')
            }, function(response) {
                div.data('id', null);
                row.find('.item-total > span').html(response.data.item_total);
                updateCart(response.data);
            }, "json");
        }
    });

    $(".cart .services select").change(function() {
        var row = $(this).closest('.item');
        $.post('save/', {
            html: 1,
            id: $(this).closest('div').data('id'),
            'service_variant_id': $(this).val()
        }, function(response) {
            row.find('.item-total > span').html(response.data.item_total);
            updateCart(response.data);
        }, "json");
    });

    $("#cancel-affiliate").click(function() {
        $(this).closest('form').append('<input type="hidden" name="use_affiliate" value="0">').submit();
        return false;
    });

    $("#use-coupon").click(function() {
        $('#discount-row:hidden').slideToggle(200);
        $('#discount-row').addClass('highlighted');
        $('#apply-coupon-code:hidden').show();
        $('#apply-coupon-code input[type="text"]').focus();
        return false;
    });

});
