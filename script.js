$('document').ready(function(){
    $('#calc').on('click', function() {
        let val1 = $('#val1').val();
        let val2 = $('#val2').val();
        let sign = $('#sign').val();
        if (sign == '+') {
            $('label').html(Number(val1) + Number(val2))
        } else if (sign == '-') {
            $('label').html(Number(val1) - Number(val2))
        } else if (sign == '*') {
            $('label').html(Number(val1) * Number(val2))
        } else if (sign == '/') {
            $('label').html(Number(val1) / Number(val2)) }
    })

    $('#clear').on('click', function() {
        $('#val1').val('');
        $('#val2').val('');
        $('#sign').val('');
    })
})