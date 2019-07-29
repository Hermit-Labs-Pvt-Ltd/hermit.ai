$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $(".head-link .navbar-fixed-top").addClass("navbar-shadow");
        } else {
            $(".head-link .navbar-fixed-top").removeClass("navbar-shadow");
        }
    });

       /*

    $(".popup").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        var $popupIframe = $('#media-popup');
        $popupIframe.html('');
        $(".page").removeClass("show-popup");
        $('.page').css({
            height: $('.home-video').height() + 'px'
        });
    });
    */

    $(".popup > iframe").on("click", function(e) {
        e.stopPropagation();
    });
});
var toast_div = '';
function toast(content, duration=2000, type='default') {
    var toast_el = $('#toast');
    if(content== '') {
        return;
    }
    var toast = $('<div class="toast_content">'+content+'</div>').appendTo('#toast');
    toast_el.removeAttr('style');
    toast_el.show();
    setTimeout(function () {
        toast.animate({
            opacity:'0'
        },500, function() {
            toast.remove();
        });
    }, duration);
    clearTimeout(toast_div);
    toast_div = setTimeout(function () {
                    toast_el.animate({
                        opacity:'0'
                    },500, function() {
                        toast_el.hide();
                    });
                }, duration);
}
$('#contact-submit-btn').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    var first_name = document.getElementById("first-name").value;
    var ph_no = document.getElementById("phone").value;

    var company_name = document.getElementById("company-name").value;
    var company_url = document.getElementById("company-link").value;
    var e_mail = document.getElementById("email-address").value;
    var message = document.getElementById("message").value;

    if (!first_name) {
        document.getElementById("first-name").focus();
        toast("Please fill the name field");
        return false;
    }
    if (!company_name) {
        document.getElementById("company-name").focus();
        toast("Please fill the company name field");
        return false;
    }
    if (!e_mail) {
        document.getElementById("email-address").focus();
        toast("Please fill the email field");
        return false;
    }else{
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(reg.test(e_mail) == false){
            toast('Please enter valid Email Address');
            return false; 
        }
    }
    if (!ph_no) {
        document.getElementById("phone").focus();
        toast("Please fill the phone number field");
        return false;
    }
    if (!company_url) {
        document.getElementById("company-link").focus();
        toast("Please fill the company url field");
        return false;
    }
    if (!message) {
        document.getElementById("message").focus();
        toast("Please fill the message field");
        return false;
    }

    data = {
        first_name: first_name,
        subj: "Partner",
        ph_no: ph_no,
        company_name: company_name,
        company_url: company_url,
        e_mail: e_mail,
        message: message
    };

    $.ajax({
        url: "/careers/feedback_submit/",
        type: "POST",
        data: data,
        success: function(response) {
            response = response == "True";
            if(response){
                toast("Form has been successfully submitted.");
                location.reload();
            } else {
                toast('There was a problem. Please try again');
            }
        },
        error: function(response) {
            toast('There was a problem. Please try again');
        }
    });
});

$('#complaint-submit-btn').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    var e_mail = $('#email-address').val();
    var full_name = $('#full-name').val();
    var phone_no = $('#phone').val();
    var additional_info = $('#additional-info').val();

    if(!e_mail) {
        document.getElementById('email-address').focus();
        toast('Please fill the email field.');
        return false;
    }
    if(!full_name) {
        document.getElementById('full-name').focus();
        toast('Please fill the name field.');
        return false;
    }
    if(!additional_info) {
        document.getElementById('additional-info').focus();
        toast('Please fill the complaint field.');
        return false;
    }
    if(!phone_no) {
        phone_no = null;
    }
    
    data = {
        full_name: full_name,
        e_mail: e_mail,
        phone_no: phone_no,
        additional_info: additional_info,
    }

    $.ajax({
        url: '/careers/complaints_form/',
        type: "POST",
        data: data,
        success: function(response) {
            response = response == "True";
            if(response){
                toast('Your complaint has been successfully registered. Our team will be looking into your concerns and getting back to you shortly.');
                location.reload();
            } else {
               toast('There was a problem. Please try again'); 
            }
        },
        error: function(response) {
            toast('There was a problem. Please try again');
        }
    });
});
