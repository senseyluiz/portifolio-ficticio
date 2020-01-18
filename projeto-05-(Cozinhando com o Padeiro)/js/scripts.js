$(function(){
    //Aqui vai todo no script.

    $('nav.mobile').click(function(){
        //O que vai acontecer quando clicar na nav.mobile
        var listaMenu= $('nav.mobile ul');
        //Abrir menu atravé de fadeIn()
        /*
        if(listaMenu.is(':hidden') == true){
            listaMenu.fadeIn();
        }
        else{
            listaMenu.fadeOut();
        }*/

        //Abrir menu de cima para baixo
        listaMenu.slideToggle();
    })
})