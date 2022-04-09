$(function() {

    $("#header").load("../includes/header.html");
    $("#footer1").load("../includes/footer.html");
});

function seachFormValidation() {
    var Search = document.getElementById("search").value;
    if (Search == "") {
        alert("Please fill out this field");
    }
}







$(document).ready(function() {
    $("#submit-res").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 1500);
        $('.resbox').fadeIn(1000);
    });
});

$(document).ready(function() {
    $(".closeResBox").click(function() {
        $('.resbox').fadeOut(1000);
    });
});


$(".options-button").click(function() {

    var index = $(".options-button").index(this);

    if (index == 0) {
        $('.box').eq(0).fadeIn(1000);
    } else if (index == 1) {
        $('.box').eq(1).fadeIn(1000);
    } else if (index == 2) {
        $('.box').eq(2).fadeIn(1000);
    } else if (index == 3) {
        $('.box').eq(3).fadeIn(1000);
    } else if (index == 4) {
        $('.box').eq(4).fadeIn(1000);
    } else if (index == 5) {
        $('.box').eq(5).fadeIn(1000);
    } else if (index == 6) {
        $('.box').eq(6).fadeIn(1000);
    } else if (index == 7) {
        $('.box').eq(7).fadeIn(1000);
    } else if (index == 8) {
        $('.box').eq(8).fadeIn(1000);
    } else if (index == 9) {
        $('.box').eq(9).fadeIn(1000);
    } else if (index == 10) {
        $('.box').eq(10).fadeIn(1000);
    } else if (index == 11) {
        $('.box').eq(11).fadeIn(1000);
    }

});

$(".box-close").click(function() {
    $('.box').fadeOut(1000);
});






$(document).ready(function() {
    $(".scroll-to-top").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 1500);
    });
});


$(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
        $(".scroll-to-top").fadeIn(800);
    } else {
        $(".scroll-to-top").fadeOut(800);
    }
});


$(document).ready(function() {
    $(".options2-inside").hover(function() {
        $(this).animate({ opacity: "1" }, "slow");
    }, function() {
        $(this).animate({ opacity: "0.9" }, "slow");
    });
});

$(document).ready(function() {
    $(".scroll-to-top").hover(function() {
        $(this).animate({ height: "60px", width: "60px" }, "slow");
        $(this).css("background-color", "pink");
        $(this).css("transition", "all 0.3s ease-in-out");
    }, function() {
        $(this).animate({ height: "50px", width: "50px" }, "slow");
        $(this).css("background-color", "purple");
    });
});



$(document).ready(function() {
    $(".next-to-sequence").hover(function() {
        $(this).animate({ height: "60px", width: "60px" }, "slow");
        $(this).css("background-color", "pink");
        $(this).css("transition", "all 0.3s ease-in-out");
    }, function() {
        $(this).animate({ height: "50px", width: "50px" }, "slow");
        $(this).css("background-color", "purple");
    });
});


$(window).scroll(function() {
    if ($(this).scrollTop() > 30) {
        $(".next-to-sequence").fadeIn(800);
    } else {
        $(".next-to-sequence").fadeOut(800);
    }
});


$(document).ready(function() {
    $(".before-to-sequence").hover(function() {
        $(this).animate({ height: "60px", width: "60px" }, "slow");
        $(this).css("background-color", "pink");
        $(this).css("transition", "all 0.3s ease-in-out");
    }, function() {
        $(this).animate({ height: "50px", width: "50px" }, "slow");
        $(this).css("background-color", "purple");
    });
});




$(document).ready(function() {
    $(".bookDEST").click(function() {
        $(".popupContainer").css("display", "block");
    });
});

$(document).ready(function() {
    $(".close-book-dest").click(function() {
        $('.popupContainer').fadeOut(800);
    });
});


function scrollWin() {
    window.scrollTo(0, 1200);
}










$(document).ready(function() {
    $('a[name="hover"]').hover(function() {
        $(this).css("background-color", "antiquewhite");
    }, function() {
        $(this).css("background-color", "floralwhite");

    });
    $("#circle").fadeOut(3000);
    $("#circle").fadeIn(3000);
    $("#circle2").fadeOut(3000);
    $("#circle2").fadeIn(3000);
    $("#circle3").fadeOut(6000);
    $("#circle3").fadeIn(5000);
    $("#circle4").fadeOut(6000);
    $("#circle4").fadeIn(5000);

});


$(document).ready(function() {
    $('img[name="images"]').hover(function() {
        $(this).css("opacity", "0.7");
    }, function() {
        $(this).css("opacity", "1");
    });

});