<?php

	if(isset($_POST['email']) && !empty($_POST['email'])){

	    $nome = $_POST['nome'];
	    $email = $_POST['email'];
	    $telefone = $_POST['telefone'];
	    $mensagem = $_POST['mensagem'];

	    
	    $para = 'contato@webtall.com.br';//para onde será enviado o formulário de contato
	    $assunto = 'Contato webtall'; 
	    $corpo = 'Nome: '.$nome.'\n'.
	    		'Email: '.$email.'\n'.
	    		'Telefone: '.$telefone.'\n'.
	    		'Mensagem: '.$mensagem;

	    $header = "From:contato@webtall.com.br".'\r\n'.
	    		'Reply-To:'.$email.'\r\n'.
	    		'X=Mailer:PHP/'.phpversion();

	    if(mail($para, $assunto, $corpo, $header)){

	    	echo ('Email enviado com sucesso');

	    }else{

	    	echo ("Email não pode ser enviado");
	    }


	}
?>