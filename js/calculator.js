$('#original').keyup(function () {
    var value = $(this).val();
    var charge = 0;
    if (value < 100) {
        charge = 0.035;
    } else if (value >= 100 && value < 1000) {
        charge = 0.025;
    } else if (value >= 1000 && value < 1500) {
        charge = 0.02;
       } else if (value >= 1500 && value < 3500) {
        charge = 0.015;
    } else if (value >= 3500 && value <5000) {
        charge = 0.01;
    }
    else if (value >= 5000 && value <10000) {
        charge = 0.005;
    }
    $('#tax').val((value * charge).toFixed(2));
}).change() ;