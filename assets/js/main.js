$('.owl-header').owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    dots: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: false,
            loop: false,
            dots: true
        }
    }
});
$('.owl-articles').owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    dots: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: true,
            dots: false
        }
    }
});
$(function () {
    $("#datepicker").datepicker();
});
$(function () {
    $("#datepicker-2").datepicker();
});

$("#governorates").change(function(){
    var governorateId = $("#governorates").val();
    alert(governorateId);
    $.ajax({
        url:'https://cors-anywhere.herokuapp.com/http://ipda3-tech.com/blood-bank/api/v1/cities?governorate_id='+governorateId,
        type: 'get',
        data:{},
        success: function(data){
            alert("success");
        },
        error: function(){
            alert("error");
        }
    });
});

