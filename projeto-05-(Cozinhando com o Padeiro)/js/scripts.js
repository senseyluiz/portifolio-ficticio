$(function(){
    //Aqui vai todo no script.

    $('nav.mobile').click(function(){
        //O que vai acontecer quando clicar na nav.mobile
        var listaMenu= $('nav.mobile ul');
        //Abrir menu através de fadeIn()
        /*
        
        }*/
        //<i class="far fa-window-close"></i>

        //Abrir menu de cima para baixo
        
        if(listaMenu.is(':hidden') == true){
            var icone = $('.botao-menu-mobile i');
            icone.removeClass('fa-bars');
            icone.addClass('fa-window-close');
            listaMenu.slideToggle();
        }
        else{
            var icone = $('.botao-menu-mobile i');
            icone.removeClass('fa-window-close');
            icone.addClass('fa-bars');
            listaMenu.slideToggle();
        }
    })
})