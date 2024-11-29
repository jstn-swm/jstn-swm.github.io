$(document).ready(function() {
    let commonEmailDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com", "aol.com", "live.com", "protonmail.com", "zoho.com", "yandex.com", "mail.com", "gmx.com"];
    $('#popup').css({'width':`${window.innerWidth/3}px`, 'height':`${window.innerHeight/3}px`, 'top': `50%`,'left':`calc(50% - ${window.innerWidth/3/2}px)`});
    $('#confirmationBtn').hover(function() {
        $('#confirmationBtn').css({'box-shadow':'0 0 0 1px'});
    }, function() {
        $('#confirmationBtn').css({'box-shadow':'none'});
    });
    $('#confirmationBtn').click(function() {
        $('#popup').css({'display':'none'});
    });
    $('#contactMe').submit(function(e) {
        if(!validation()) {
            e.preventDefault();
        }
    });
    function validation() {
        if($('#Name').val() == "") {
            alertCustom('Name Cannot be Empty');
            return false;
        }
        if($('#Email').val() == "") {
            alertCustom('Email Cannot be Empty');
            return false;
        }
        if(!commonEmailDomains.some(domain => $('#Email').val().endsWith(domain))) {
            alertCustom('Email MUST be existing and a Common Domain');
            return false;
        }
        if($('#Message').val() == "") {
            alertCustom('Message Cannot be Empty');
            return false;
        }
        return true;
    }
    function alertCustom(message){
        $('#popup p').html(`Error: ${message}`);
        $('#popup').css({'display': 'flex'});
    }
});