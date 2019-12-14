$(function(){
	//Aqui vai todo nosso código de javascript.
	$('nav.mobile').click(function(){
		//O que vai acontecer quando clicarmos na nav.mobile
		var listamenu = $('nav.mobile ul');
		//Abrir através de fadIn
		/*
		if (listamenu.is(':hidden') == true){
			listamenu.fadeIn();
		}

		else{
			listamenu.fadeOut();
		}
		*/

		//Abrir ou fecha o menu

		if (listamenu.is(':hidden') == true) {
			//var icone = $('botao-menu-mobile i'); ou
			var icone = $('.botao-menu-mobile').find('i');
			icone.removeClass('fas fa-bars');
			icone.addClass('fas fa-window-close')
			listamenu.slideToggle();
		}

		else{
			var icone = $('.botao-menu-mobile').find('i');
			icone.removeClass('fas fa-window-close');
			icone.addClass('fas fa-bars');
			listamenu.slideToggle();
		}

		
	})

})