var mobile = ($(window).width() > 1053) ? false : true;
var svgFriendly = ($(window).width() > 720) ? true : false;
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isDev = true;

window.onclick = function(event) {
	var modalsHTML = document.getElementsByClassName('projectDetail');
	var blurProjects = document.getElementsByClassName('blurProjects')[0];
	var blurPage = document.getElementsByClassName('blurPage')[0];
	var modals =  [].slice.call(modalsHTML);
	modals.forEach(function(modal) {
		if (event.target==blurProjects && modal.classList.contains("fadeInUp")) {
			id = modal.id.split('proj')[1];
			closeProjectDetail(id);
		}
	});
	if(event.target==blurPage) {
		toggleNav();
	}
} 

$( document ).ready(function() {
	$(".navIcon").toggleClass("change");
	
	if(!isIE && svgFriendly && !isDev) {
		console.log("ok");
		setTimeout(function() {
			$(".black").animate({opacity:0});
			$("#titleDiv").animate({opacity:1});
			$("#titleDesc").animate({opacity:1});
		}, 2000);
		
		setTimeout(function() {
			$(".logoHome").animate({opacity:1});
			$(".black").css("display", "none");
		}, 4000); /* because transition time of .black == 2s*/
		
		setTimeout(function() {
			$(".bg").css("display", "none");
			/* $(".logoHome").css("display", "none"); */
		}, 5300);
	} else {
		/* $(".bg").css("display", "none");
		$(".logoHome").css("display", "none"); */
		$("#titleDiv").animate({opacity:1});
		$("#titleDesc").animate({opacity:1});
		$(".black").animate({opacity:0});
		setTimeout(function() {
			$(".black").css("display", "none");
		}, 2000); /* because transition time of .black == 2s*/
	}
	
	
	// à mettre dans la page about
	var valueScrolled = $(document).scrollTop();
	var block1length = $("#about_block_1").css("height");
	var block2length = $("#about_block_2").css("height");
	var totalLength = block1length + block2length;
	var aboutPageLength = $("#aboutPage").css("height");
	
    var typed3 = new Typed('#typed', {
		strings: ['Computer Scientist', 'Software engineer', 'Web developer'],
		typeSpeed: 30,
		backSpeed: 10,
		backDelay: 1500,
		cursorChar: '_',
		smartBackspace: false,
		loop: true
	  });
});

var toggleNav = function() {
	console.log("oui oui");
    if($(".navIcon").hasClass("change")) {
		$("#desktopNav").animate({"right":"-250px"});
		$(".blurPage").animate({opacity:0}, 150, function() {
			$(".blurPage").css("display", "none");
		});
	} else {
		$("#desktopNav").animate({"right":"0px"});
		$(".blurPage").css("display", "block");
		$(".blurPage").animate({opacity:0.5}, 150);
	}
	$(".navIcon").toggleClass("change");
}

var scrollToBottom = function() {
	console.log("scrolling");
	var block1length = $("#about_block_1").css("height");
	$("#aboutPage").scrollTo(block1length, 500);
}

var scrollBackTop = function() {
	var block2length = $("#about_block_2").css("height");
	$("#aboutPage").scrollTo("-"+block2length, 500);
}

var callGoHome = function() {
	if($("#aboutPage").css("display") == "block") {
		fromAboutToHome();
	} else if($("#projectPage").css("display") == "block") {
		fromProjToHome();
	}
	toggleNav();
}

var callGoAbout = function() {
	if($("#homePage").css("display") == "block") {
		fromHomeToRight();
	} else if($("#projectPage").css("display") == "block") {
		fromProjToAbout();
	}
	toggleNav();
}

var callGoProjects = function() {
	if($("#aboutPage").css("display") == "block") {
		fromAboutToProjects();
	} else if($("#homePage").css("display") == "block") {
		fromHomeToLeft();
	}
	toggleNav();
}

var projectsAppearFromRight = function() {
  if(mobile==true) {
	var elements = document.querySelectorAll(".containerPortfolioMobile .projSnip");
	var elementsChangeOpacity = document.querySelectorAll(".containerPortfolio .projSnip");
  } else {
	var elements = document.querySelectorAll(".containerPortfolio .projSnip");
	var elementsChangeOpacity = document.querySelectorAll(".containerPortfolioMobile .projSnip");
  }
  

  for (var i = 0; i < elements.length; i++) {
     load(elements[i], i);   
  }
  
   for (var i = 0; i < elementsChangeOpacity.length; i++) {
     load(elementsChangeOpacity[i], i);   
  }

  function load(elem, i) {
    setTimeout(function() {
        elem.classList.add("fadeInRight");
        elem.classList.add("animated");
    },100 * i);
  }
}

var projectsAppearFromLeft = function() {
  if(mobile==true) {
	var elements = document.querySelectorAll(".containerPortfolioMobile .projSnip");
	var elementsChangeOpacity = document.querySelectorAll(".containerPortfolio .projSnip");
  } else {
	var elements = document.querySelectorAll(".containerPortfolio .projSnip");
	var elementsChangeOpacity = document.querySelectorAll(".containerPortfolioMobile .projSnip");
  }

  for (var i = 0; i < elements.length; i++) {
     load(elements[i], i);   
  }
  
  for (var i = 0; i < elementsChangeOpacity.length; i++) {
     load(elementsChangeOpacity[i], i);   
  }

  function load(elem, i) {
    setTimeout(function() {
        elem.classList.add("fadeInLeft");
        elem.classList.add("animated");
    },100 * i);
  }
}

var projectsDisappearToRight = function() {
		
  if(mobile==true) {
	var elements = document.querySelectorAll(".containerPortfolioMobile .projSnip");
	var elementsChangeOpacity = document.querySelectorAll(".containerPortfolio .projSnip");
  } else {
	var elements = document.querySelectorAll(".containerPortfolio .projSnip");
	var elementsChangeOpacity = document.querySelectorAll(".containerPortfolioMobile .projSnip");
  }

  for (var i = 0; i < elements.length; i++) {
     load(elements[i], i);   
  }
  
  for (var i = 0; i < elementsChangeOpacity.length; i++) {
     load(elementsChangeOpacity[i], i);   
  }
  
  setTimeout(function() {
	for (var i = 0; i < elements.length; i++) {
		elements[i].classList.remove("fadeOutRight");
		elements[i].classList.remove("animated");
	}
  }, 400*(elements.length)); /* because each animation lasts for 400ms */
  
  setTimeout(function() {
	for (var i = 0; i < elementsChangeOpacity.length; i++) {
		elementsChangeOpacity[i].classList.remove("fadeOutRight");
		elementsChangeOpacity[i].classList.remove("animated");
	}
  }, 400*(elementsChangeOpacity.length)); /* because each animation lasts for 400ms */

  function load(elem, i) {
    setTimeout(function() {
        elem.classList.remove("fadeOutLeft");
        elem.classList.remove("fadeInLeft");
        elem.classList.remove("fadeInRight");
        elem.classList.add("fadeOutRight");
    },100 * i);
  }
}

var projectsDisappearToLeft = function() {

  if(mobile==true) {
	var elements = document.querySelectorAll(".containerPortfolioMobile .projSnip");
	var elementsChangeOpacity = document.querySelectorAll(".containerPortfolio .projSnip");
  } else {
	var elements = document.querySelectorAll(".containerPortfolio .projSnip");
	var elementsChangeOpacity = document.querySelectorAll(".containerPortfolioMobile .projSnip");
  }


  for (var i = 0; i < elements.length; i++) {
     load(elements[i], i);   
  }

  for (var i = 0; i < elementsChangeOpacity.length; i++) {
     load(elementsChangeOpacity[i], i);   
  }
  
  setTimeout(function() {
	for (var i = 0; i < elements.length; i++) {
		elements[i].classList.remove("fadeOutLeft");
		elements[i].classList.remove("animated");
	}
  }, 400*(elements.length)); /* because each animation lasts for 400ms */
  
  setTimeout(function() {
	for (var i = 0; i < elementsChangeOpacity.length; i++) {
		elementsChangeOpacity[i].classList.remove("fadeOutLeft");
		elementsChangeOpacity[i].classList.remove("animated");
	}
  }, 400*(elementsChangeOpacity.length)); /* because each animation lasts for 400ms */

  function load(elem, i) {
    setTimeout(function() {
        elem.classList.remove("fadeOutRight");
        elem.classList.remove("fadeInLeft");
        elem.classList.remove("fadeInRight");
        elem.classList.add("fadeOutLeft");
    },100 * i);
  }
}

var fromHomeToRight = function() {
	$(".page").animate({ scrollTop: 0 }, 'slow');
	/* ERASING HOME */
	$("#titleDiv").removeClass("animated fadeInRight fadeInLeft");
	$("#titleDesc").removeClass("animated fadeInRight fadeInLeft");
	$("#imgAccueil").removeClass("animated fadeInRight fadeInLeft");
	$(".footer").removeClass("animated fadeInRight fadeInLeft");
	
	$("#titleDiv").addClass("animated fadeOutLeft");
	$("#titleDesc").addClass("animated fadeOutLeft");
	$("#imgAccueil").addClass("animated fadeOutLeft");
	$(".footer").addClass("animated fadeOutLeft");
	
	$(".hiddenArrow").css("display", "block");
	
	$('#homeNav').animate({opacity:0});

	setTimeout(function() {
		$("#aboutPage").css("display", "block");
		
		/* ABOUT APPEARS */
		$(".descTitle").removeClass("animated fadeOutRight fadeOutLeft");
		$(".description").removeClass("animated fadeOutRight fadeOutLeft");
		$("#avatar").removeClass("animated fadeOutRight fadeOutLeft");
		$("#avatarSmall").removeClass("animated fadeOutRight fadeOutLeft");
		$("#firstCol").removeClass("animated fadeOutRight fadeOutLeft");
		$("#secCol").removeClass("animated fadeOutRight fadeOutLeft");
		$("#whoAmI").removeClass("animated fadeOutRight fadeOutLeft");
		$(".footerAbout").removeClass("animated fadeOutRight fadeOutLeft");
		$(".timeline").removeClass("animated fadeOutRight fadeOutLeft");
		$("#switchGoBot").removeClass("animated fadeOutRight fadeOutLeft");
		$("#switchBackTop").removeClass("animated fadeOutRight fadeOutLeft");
		
		$(".descTitle").addClass("animated fadeInRight");
		$(".description").addClass("animated fadeInRight");
		$("#avatar").addClass("animated fadeInRight");
		$("#avatarSmall").addClass("animated fadeInRight");
		$("#firstCol").addClass("animated fadeInRight");
		$("#secCol").addClass("animated fadeInRight");
		$("#whoAmI").addClass("animated fadeInRight");
		$(".footerAbout").addClass("animated fadeInRight");
		$(".timeline").addClass("animated fadeInRight");
		$("#switchGoBot").addClass("animated fadeInRight");
		$("#switchBackTop").addClass("animated fadeInRight");
		
			
		$('#aboutNav').animate({opacity:1});
		
		setTimeout(function() {
			$("#homePage").css("display", "none");
			$(".hiddenArrow").css("display", "none");
		}, 1300);
	}, 800);	
}

var fromHomeToLeft = function() {
	$(".page").animate({ scrollTop: 0 }, 'slow');
	/* ERASING HOME */
	$("#titleDiv").removeClass("animated fadeInRight fadeInLeft");
	$("#titleDesc").removeClass("animated fadeInRight fadeInLeft");
	$("#imgAccueil").removeClass("animated fadeInRight fadeInLeft");
	$(".footer").removeClass("animated fadeInRight fadeInLeft");
	
	$("#titleDiv").addClass("animated fadeOutRight");
	$("#titleDesc").addClass("animated fadeOutRight");
	$("#imgAccueil").addClass("animated fadeOutRight");
	$(".footer").addClass("animated fadeOutRight");
	
	$(".hiddenArrow").css("display", "block");
	
	$('#homeNav').animate({opacity:0});
	setTimeout(function() {
		$("#projectPage").css("display", "block");
		
		/* PROJECTS APPEAR */
		$("#portfolio").removeClass("animated fadeOutRight fadeOutLeft");
		
		$("#portfolio").addClass("animated fadeInLeft");
		projectsAppearFromLeft();
		
		$('#projNav').animate({opacity:1});
		
		setTimeout(function() {
			$("#homePage").css("display", "none");
			$(".hiddenArrow").css("display", "none");
		}, 1300);
		
	}, 800);
}

var fromAboutToHome = function() {
	$(".page").animate({ scrollTop: 0 }, 'slow');
	/* ERASING ABOUT */
	$(".descTitle").removeClass("animated fadeInRight fadeInLeft");
	$(".description").removeClass("animated fadeInRight fadeInLeft");
	$("#avatar").removeClass("animated fadeInRight fadeInLeft");
	$("#avatarSmall").removeClass("animated fadeInRight fadeInLeft");
	$("#firstCol").removeClass("animated fadeInRight fadeInLeft");
	$("#secCol").removeClass("animated fadeInRight fadeInLeft");
	$("#whoAmI").removeClass("animated fadeInRight fadeInLeft");
	$(".footerAbout").removeClass("animated fadeInRight fadeInLeft");
	$(".timeline").removeClass("animated fadeInRight fadeInLeft");
	$("#switchGoBot").removeClass("animated fadeInRight fadeInLeft");
	$("#switchBackTop").removeClass("animated fadeInRight fadeInLeft");
	
	$(".descTitle").addClass("animated fadeOutRight");
	$(".description").addClass("animated fadeOutRight");
	$("#avatar").addClass("animated fadeOutRight");
	$("#avatarSmall").addClass("animated fadeOutRight");
	$("#firstCol").addClass("animated fadeOutRight");
	$("#secCol").addClass("animated fadeOutRight");
	$("#whoAmI").addClass("animated fadeOutRight");
	$(".footerAbout").addClass("animated fadeOutRight");
	$(".timeline").addClass("animated fadeOutRight");
	$("#switchGoBot").addClass("animated fadeOutRight");
	$("#switchBackTop").addClass("animated fadeOutRight");
	
	$(".hiddenArrow").css("display", "block");
	
	$('#aboutNav').animate({opacity:0});
	
	setTimeout(function() {
		$("#homePage").css("display", "block");
		
		/* HOME APPEARS */
		$("#titleDiv").removeClass("animated fadeOutLeft fadeOutRight");
		$("#titleDesc").removeClass("animated fadeOutLeft fadeOutRight");
		$("#imgAccueil").removeClass("animated fadeOutLeft fadeOutRight");
		$(".footer").removeClass("animated fadeOutLeft fadeOutRight");
		
		$("#titleDiv").addClass("animated fadeInLeft");
		$("#titleDesc").addClass("animated fadeInLeft");
		$("#imgAccueil").addClass("animated fadeInLeft");
		$(".footer").addClass("animated fadeInLeft");
		
		$('#homeNav').animate({opacity:1});
		
		setTimeout(function() {
			$("#aboutPage").css("display", "none");
			$(".hiddenArrow").css("display", "none");
		}, 1300);
	}, 800);
}

var fromAboutToProjects = function() {
	$(".page").animate({ scrollTop: 0 }, 'slow');
	/* ERASING ABOUT */
	$(".descTitle").removeClass("animated fadeInRight fadeInLeft");
	$(".description").removeClass("animated fadeInRight fadeInLeft");
	$("#avatar").removeClass("animated fadeInRight fadeInLeft");
	$("#avatarSmall").removeClass("animated fadeInRight fadeInLeft");
	$("#firstCol").removeClass("animated fadeInRight fadeInLeft");
	$("#secCol").removeClass("animated fadeInRight fadeInLeft");
	$("#whoAmI").removeClass("animated fadeInRight fadeInLeft");
	$(".footerAbout").removeClass("animated fadeInRight fadeInLeft");
	$(".timeline").removeClass("animated fadeInRight fadeInLeft");
	$("#switchGoBot").removeClass("animated fadeInRight fadeInLeft");
	$("#switchBackTop").removeClass("animated fadeInRight fadeInLeft");
	
	$(".descTitle").addClass("animated fadeOutLeft");
	$(".description").addClass("animated fadeOutLeft");
	$("#avatar").addClass("animated fadeOutLeft");
	$("#avatarSmall").addClass("animated fadeOutLeft");
	$("#firstCol").addClass("animated fadeOutLeft");
	$("#secCol").addClass("animated fadeOutLeft");
	$("#whoAmI").addClass("animated fadeOutLeft");
	$(".footerAbout").addClass("animated fadeOutLeft");
	$(".timeline").addClass("animated fadeOutLeft");
	$("#switchGoBot").addClass("animated fadeOutLeft");
	$("#switchBackTop").addClass("animated fadeOutLeft");
	
	$(".hiddenArrow").css("display", "block");
	
	$('#aboutNav').animate({opacity: 0});
	
	setTimeout(function() {
		$("#projectPage").css("display", "block");
		
		/* PROJECTS APPEARS */
		$("#portfolio").removeClass("animated fadeOutRight fadeOutLeft");
		
		$("#portfolio").addClass("animated fadeInRight");
		projectsAppearFromRight();
		
		$('#projNav').animate({opacity: 1});
		
		setTimeout(function() {
			$("#aboutPage").css("display", "none");
			$(".hiddenArrow").css("display", "none");
		}, 1300);
	}, 800);
}

var fromProjToAbout = function() {
	$(".page").animate({ scrollTop: 0 }, 'slow');
	/* ERASING PROJ */
	$("#portfolio").removeClass("animated fadeInLeft fadeInRight");
	$("#portfolio").addClass("animated fadeOutRight");
	projectsDisappearToRight();
	
	$(".hiddenArrow").css("display", "block");
	
	$('#projNav').animate({opacity:0});
	
	setTimeout(function() {
		$("#aboutPage").css("display", "block");
		
		/* ABOUT APPEARS */
		$(".descTitle").removeClass("animated fadeOutRight fadeOutLeft");
		$(".description").removeClass("animated fadeOutRight fadeOutLeft");
		$("#avatar").removeClass("animated fadeOutRight fadeOutLeft");
		$("#avatarSmall").removeClass("animated fadeOutRight fadeOutLeft");
		$("#firstCol").removeClass("animated fadeOutRight fadeOutLeft");
		$("#secCol").removeClass("animated fadeOutRight fadeOutLeft");
		$("#whoAmI").removeClass("animated fadeOutRight fadeOutLeft");
		$(".footerAbout").removeClass("animated fadeOutRight fadeOutLeft");
		$(".timeline").removeClass("animated fadeOutRight fadeOutLeft");
		$("#switchGoBot").removeClass("animated fadeOutRight fadeOutLeft");
		$("#switchBackTop").removeClass("animated fadeOutRight fadeOutLeft");
		
		$(".descTitle").addClass("animated fadeInLeft");
		$(".description").addClass("animated fadeInLeft");
		$("#avatar").addClass("animated fadeInLeft");
		$("#avatarSmall").addClass("animated fadeInLeft");
		$("#firstCol").addClass("animated fadeInLeft");
		$("#secCol").addClass("animated fadeInLeft");
		$("#whoAmI").addClass("animated fadeInLeft");
		$(".footerAbout").addClass("animated fadeInLeft");
		$(".timeline").addClass("animated fadeInLeft");
		$("#switchGoBot").addClass("animated fadeInLeft");
		$("#switchBackTop").addClass("animated fadeInLeft");
		
		$('#aboutNav').animate({opacity:1});
		
		setTimeout(function() {
			$("#projectPage").css("display", "none");
			$(".hiddenArrow").css("display", "none");
		}, 1300);
	}, 800);
}

var fromProjToHome = function() {
	$(".page").animate({ scrollTop: 0 }, 'slow');
	/* ERASING PROJ */
	$("#portfolio").removeClass("animated fadeInLeft fadeInRight");
	$("#portfolio").addClass("animated fadeOutLeft");
	projectsDisappearToLeft();
	
	
	
	$(".hiddenArrow").css("display", "block");
	
	$('#projNav').animate({opacity:0});
	
	setTimeout(function() {
		$("#homePage").css("display", "block");
		
		/* HOME APPEARS */
		$("#titleDiv").removeClass("animated fadeOutLeft fadeOutRight");
		$("#titleDesc").removeClass("animated fadeOutLeft fadeOutRight");
		$("#imgAccueil").removeClass("animated fadeOutLeft fadeOutRight");
		$(".footer").removeClass("animated fadeOutLeft fadeOutRight");
		
		$("#titleDiv").addClass("animated fadeInRight");
		$("#titleDesc").addClass("animated fadeInRight");
		$("#imgAccueil").addClass("animated fadeInRight");
		$(".footer").addClass("animated fadeInRight");
		
		$('#homeNav').animate({opacity:1});
		
		setTimeout(function() {
			$("#projectPage").css("display", "none");
			$(".hiddenArrow").css("display", "none");
		}, 1300);
	}, 800);	
}

var openProjectDetail = function(number) {
	$("#proj"+number).animate({ scrollTop: 0 }, 'slow');
	/* PROJ DETAILS APPEAR */
	$(".blurProjects").css("display", "block");
	$("#proj"+number).css("display", "block");
	
	$(".blurProjects").removeClass("animated fadeOut");
	$("#proj"+number).removeClass("animated fadeOutDown");
	
	$(".blurProjects").addClass("animated fadeIn");
	$("#proj"+number).addClass("animated fadeInUp");
}

var closeProjectDetail = function(number) {
	/* PROJ DETAILS DISAPPEAR */
	$(".blurProjects").removeClass("animated fadeIn");
	$("#proj"+number).removeClass("animated fadeInUp");
	
	$(".blurProjects").addClass("animated fadeOut");
	$("#proj"+number).addClass("animated fadeOutDown");
	
	setTimeout(function() {
		$(".blurProjects").css("display", "none");
		$("#proj"+number).css("display", "none");
	}, 800);
}