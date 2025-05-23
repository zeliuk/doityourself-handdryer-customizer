let w = $(window).width();
let currentLang = $('html').attr('lang');


$(window).on('load', function() {


    $('.dropzone').html5imageupload();

    $('.btn-custom-img').click(function() {
        //$('.toolshelef_0').removeClass('show');
        //$('.dropzone').show();
        $('#thumb').click();
    });


    $('.toolshelef.btn-doityourself').click(function() {
        este = $(this);
        button = este.attr('tools-btn');

        $(button).click();
    });

    $('.toolshelef.btn-doityourself').on('touchstart mousedown', function() {
        este = $(this);
        button = este.attr('tools-btn');

        $(button).mousedown();
    });

    $('.toolshelef.btn-doityourself').on('touchend mouseup mouseleave', function() {
        este = $(this);
        button = este.attr('tools-btn');

        $(button).mouseup();
    });


    const dropcustom = document.querySelector('.dropcustom');
    if (dropcustom) {
        const observer = new MutationObserver(function(mutationsList) {
            $('.dropcustom').trigger('customDomChange');
        });

        observer.observe(dropcustom, {
            childList: true,
            subtree: true
        });
    }

    $('.dropcustom').bind("customDomChange", function() {
        if (!$('.dropzone div').hasClass('tools')) {
            $('.toolshelef_0').removeClass('show');
            $('.toolshelef_a').addClass('show');
        }
    });

    $('[tools-btn=".btn-ok"]').click(function() {
        $('.toolshelef_a').removeClass('show');
        $('.toolshelef_b').addClass('show');
    });

    $('[tools-btn=".btn-edit"]').click(function() {
        $('.toolshelef_a').addClass('show');
        $('.toolshelef_b').removeClass('show');
    });

    $('[tools-btn=".btn-del"]').click(function() {
        $('.toolshelef_a').removeClass('show');
        $('.toolshelef_b').removeClass('show');
        $('.dropzone').removeClass('show');
        $('.toolshelef_0').addClass('show');
        //$('.dropzone').hide();
    });

    setExtColor(4);
});


$('.sample-images div').click(function() {
    var data_type = $("#doityourself").data('type');

    imgurl = $(this).data('background');
    $('[tools-btn=".btn-del"]').click();

    $('.cropWrapper').remove();
    $('.tools').remove();

    $('.dropcustom').empty();

    if (data_type == 'dom' || data_type == 'eos') {
        $('.dropcustom').html('<div class="dropzone" data-ghost="false" data-smaller="true" data-canvas-image-only="true" data-originalsize="true" data-ajax="false" data-resize="true" style="width: 183px; height: 315px;" data-image="doityourself/doityourself-medisafe.png" data-editstart="true" data-dimensionsonly="true"><input type="file" id="thumb" name="thumb" style="position: absolute;"></div>');
    } else {
        $('.dropcustom').html('<div class="dropzone" data-ghost="false" data-smaller="true" data-canvas-image-only="true" data-originalsize="true" data-ajax="false" data-resize="true" style="width: 183px; height: 180px;" data-image="doityourself/doityourself-medisafe.png" data-editstart="true" data-dimensionsonly="true"><input type="file" id="thumb" name="thumb" style="position: absolute;"></div>');
    }

    $('.dropzone').attr('data-image', imgurl);
    $('.dropzone').html5imageupload();

    $('.toolshelef_0').removeClass('show');


});



/* Do it yourself */
function wc_hex_is_light(r, g, b) {
    const c_r = r;
    const c_g = g;
    const c_b = b;

    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;

    return brightness > 200;
}

const setIntColor = (r, g, b) => {

    var randomColor;

    if (g == null) {
        var bigint = parseInt(r, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;

        randomColor = r + ',' + g + ',' + b;
    } else {
        randomColor = r + ',' + g + ',' + b;
    }

    $('.diy_ext').css('background-color', "rgb(" + randomColor + ")");

    if (wc_hex_is_light(r, g, b)) {
        jQuery('.diy_ext').addClass('diy_dark');
    } else {
        jQuery('.diy_ext').removeClass('diy_dark');
    }


    $('.doityourself').attr('color', RGB2Color(r, g, b));

}

const setBottomColor = (r, g, b) => {
    var data_type = $("#doityourself").data('type');

    if (data_type == 'dom') {

        var randomColor;


        if (g == null) {
            var bigint = parseInt(r, 16);
            var r = (bigint >> 16) & 255;
            var g = (bigint >> 8) & 255;
            var b = bigint & 255;

            randomColor = r + ',' + g + ',' + b;
        } else {
            randomColor = r + ',' + g + ',' + b;
        }

        $('.diy_bottom').css('background-color', "rgb(" + randomColor + ")");

        if (wc_hex_is_light(r, g, b)) {
            jQuery('.diy_bottom').addClass('diy_dark');
        } else {
            jQuery('.diy_bottom').removeClass('diy_dark');
        }
    }

    $('.doityourself').attr('colorbottom', RGB2Color(r, g, b));
}

const setExtColor = (color) => {
    var data_type = $("#doityourself").data('type');

    $(".color-palette-interior .color").removeClass('selected');
    $(".color-palette-interior .color:nth-child(" + color + ")").addClass('selected');

    if (data_type != 'eos') {
        $('.diy_int').css('background-image', "url(doityourself/" + data_type + "/int" + color + ".png)");
    } else {
        $('.diy_bottom').css('background-image', "url(doityourself/" + data_type + "/int" + color + ".png)");
    }

    $('#doityourself').attr('colorintone', color);
}


function RGB2Color(r, g, b) {
    return this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
}

function byte2Hex(n) {
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
}



$(".color-palette-interior .color").click(function() {
    $(".color-palette-interior .color").removeClass('selected');
    $(this).addClass('selected');
    console.log($(this).attr('color'));
    setExtColor($(this).attr('color'));
});

$(".color-palette-exterior .color").click(function() {

    $(".color-palette-exterior .color").removeClass('selected');

    var color = $(this).attr('color');
    $(this).addClass('selected');
    $("#color-picker").spectrum("set", color);
    setIntColor(color);
});

var apply = 'APPLY';


$('#color-picker').spectrum({
    type: "flat",
    locale: 'en',
    showPalette: false,
    showInput: true,
    showAlpha: false,
    allowEmpty: false,
    chooseText: apply,
    move: function(tinycolor) {
        $(".color-palette-exterior .color").removeClass('selected');
        setIntColor(tinycolor._r, tinycolor._g, tinycolor._b);
    },
    show: function(tinycolor) {},
    hide: function(tinycolor) {},
    destroy: function(tinycolor) {
        console.log('del');
    },
    beforeShow: function(tinycolor) {},
});

$('#color-picker-2').spectrum({
    type: "flat",
    locale: 'en',
    showPalette: false,
    showInput: true,
    showAlpha: false,
    allowEmpty: false,
    chooseText: apply,
    move: function(tinycolor) {
        setBottomColor(tinycolor._r, tinycolor._g, tinycolor._b);
    },
    show: function(tinycolor) {},
    hide: function(tinycolor) {},
    destroy: function(tinycolor) {
        console.log('del');
    },
    beforeShow: function(tinycolor) {},
});


$(".exterior-gm div").click(function() {
    $(".exterior-gm div").removeClass('exterior-selected');

    $(this).addClass('exterior-selected');

    if ($(this).hasClass('exterior-matte')) {
        $('#genColorExt').addClass('matte');
    } else {
        $('#genColorExt').removeClass('matte');
    }
});



$("#downloadImage").on('click', function() {
    alert('IT\'S A DEMO!');
});

function removeImage(image) {
    $.ajax({
        type: 'POST',
        url: 'https://ffuuss.com/wp-content/themes/ffuuss/screenshotremove.php',
        data: {
            image: image
        },
        success: function(response) {

        }
    });
}


function GetUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);

    var sURLVariables = sPageURL.split('&');

    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] == sParam)

        {
            return sParameterName[1];
        }
    }
}


$('.dropzone').ready(function() {

    if ($('body').hasClass('doityourselfscreenshot')) {

        var prod = $('.product-block-customdesign-doityourself');
        var doit = $('.doityourself');
        var diy = $('.diy');

        prod = prod.html(doit);

        $('body').html(prod);

        var ffuusstype = GetUrlParameter('ffuusstype');
        var colorintone = GetUrlParameter('colorintone');
        var img = GetUrlParameter('img');
        var left = GetUrlParameter('left');
        var top = GetUrlParameter('top');
        var width = GetUrlParameter('width');
        var height = GetUrlParameter('height');


        $('#doityourself').attr('data-type', ffuusstype);

        setExtColor(colorintone);

        if (img != 'undefined') {
            $('.dropzone').append('<img src="https://ffuuss.com/wp-content/themes/ffuuss/images/' + img + '.png" style="left:' + left + '; top:' + top + '; width:' + width + '; height:' + height + ';">');
        }
    }
});