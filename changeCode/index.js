var m = 0,
    n = 0,
    input;
var resultArray = new Array();
var flag = true;
$('#b_1').on('click', function () {
    m = 2;
    $('#b_4').addClass('disabled');
    $('#b_2').addClass('disabled');
    $('#b_3').addClass('disabled');
    this.attr('disabled', 'disabled')
});
$('#b_2').on('click', function () {
    m = 10;
    $('#b_1').addClass('disabled');
    $('#b_3').addClass('disabled');
    $('#b_5').addClass('disabled');
    this.attr('disabled', 'disabled')
});
$('#b_3').on('click', function () {
    m = 16;
    $('#b_1').addClass('disabled');
    $('#b_2').addClass('disabled');
    $('#b_6').addClass('disabled');
    this.attr('disabled', 'disabled')
});
$('#b_4').on('click', function () {
    n = 2;
    $('#b_1').addClass('disabled');
    $('#b_5').addClass('disabled');
    $('#b_6').addClass('disabled');
    this.attr('disabled', 'disabled')
});
$('#b_5').on('click', function () {
    n = 10;
    $('#b_2').addClass('disabled');
    $('#b_4').addClass('disabled');
    $('#b_6').addClass('disabled');
    this.attr('disabled', 'disabled')
});
$('#b_6').on('click', function () {
    n = 16;
    $('#b_3').addClass('disabled');
    $('#b_4').addClass('disabled');
    $('#b_5').addClass('disabled');
    this.attr('disabled', 'disabled')
});
$('#submit').on('click', function () {
    if (m === 0 || n === 0) {
        if (m === 0 && n === 0) {
            Tip('请选择要转换的进制');
        } else {
            Tip('请选择另一个进制');
        }
    } else {
        input = $('#input').val();
        resultArray = change(m, n, input);
        if(flag){
            $('#result').val(resultArray.join(''));
        }else{
            $('#result').val(resultArray.join('-',''));
        }
        
    }
});
$('#reset').on('click', function () {
    if ($('#input').val() === '' || $('#result').val() === '') {
        if (($('#input').val() === '') && ($('#result').val() === '')) {
            Tip('您未填写内容');
        }
    }else{
        $('#input').val('');
        $('#result').val('');
    }
})

function change(x, y, n) {
    var result = new Array(),
        twoAry = new Array(),
        sixAry = new Array();
    var a, b, c, l, num = 0;
    var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g'];
    if(parseInt(n) < 0){
        n = parseInt(n) * (-1);
        flag = false;
    }
    if (x === 10 && y === 2) {
        while (n) {
            a = n % y;
            result.push(a);
            n = Math.floor(parseInt(n / y));
        }
        result.reverse();
    } else if (x === 2 && y === 10) {
        b = n + '';
        twoAry = b.split('');
        l = twoAry.length;
        for (var i = 0; i < l; i++) {
            if (parseInt(twoAry[i]) > 1) {
                return false;
            } else {
                num = num + (parseInt(twoAry[i]) * Math.pow(2, l - (i + 1)));
            }
        }
        result.push(num);

    } else if (x === 10 && y === 16) {
        while (n) {
            c = n % y;
            result.push(list[c]);
            n = Math.floor(parseInt(n / y));
        }
        result.reverse();
    } else if (x === 16 && y === 10) {
        d = n.toString();
        sixAry = d.split('');
        l = sixAry.length;
        for(var i = 0; i < l; i++){
            for(var j = 0; j < 16; j++){
                if(sixAry[i] == list[j]){
                    sixAry[i] = j;
                }
            }
        }
        for (var k = 0; k < l; k++) {
            num = num + (parseInt(sixAry[k]) * Math.pow(16, l - (k + 1)));
        }
        result.push(num);
    } else if (x === 2 && y === 16) {

        a = n + '';
        twoAry = a.split('');
        l = twoAry.length;
        for (var i = 0; i < l; i++) {
            if (parseInt(twoAry[i]) > 1) {
                return false;
            } else {
                num = num + (parseInt(twoAry[i]) * Math.pow(2, l - (i + 1)));
            }
        }
        while (num) {
            b = num % y;
            result.push(list[b]);
            num = Math.floor(parseInt(num / 16));
        }
        result.reverse();
    } else if (x === 16 && y === 2) {
        c = n.toString();
        sixAry = c.split('');
        l = sixAry.length;
        for(var i = 0; i < l; i++){
            for(var j = 0; j < 16; j++){
                if(sixAry[i] == list[j]){
                    sixAry[i] = j;
                }
            }
        }
        for (var k = 0; k < l; k++) {
            num = num + (parseInt(sixAry[k]) * Math.pow(16, l - (k + 1)));
        }
        while (num) {
            d = num % y;
            result.push(d);
            num = Math.floor(parseInt(num / 2));
        }
        result.reverse();        
    }
    return result;
}

function Tip(content) {
    $('#tip').text(content).fadeIn(500);
    setTimeout(function () {
        $('#tip').fadeOut(500);
    }, 1500);
}
