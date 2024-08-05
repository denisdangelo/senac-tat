<!DOCTYPE html>
	<html lang="pt-BR">
	<head>
		<meta charset="UTF-8">
		<title>Olá Mundo!</title>
	</head>
	<body>

		<h1>Olá Mundo!</h1>
        Autor: Denis DAngelo<br>
        Editado por: Denis DAngelo<br>
		
		<?php
		echo "Meu primeiro doc.php"
		?>
		<h3>
        	<?php
			// Define o fuso horário para São Paulo, Brasil
			date_default_timezone_set('America/Sao_Paulo');

			// Obtém a data e hora atual no formato desejado
			$dataHoraAtual = date('d-m-y H:i:s');

			// Exibe a data e hora atual
			echo "Data e hora atual em São Paulo, Brasil: " . $dataHoraAtual;
			?>
		<br>
        	<?php
			echo "Atualize a página para rolar os dados"
			?>
        <br>    
        	<?php
			$dado = rand(1, 6);
			echo "Resultado do lançamento do dado: $dado";
			?>
        </h3>   
		<p>coloque o texto de link	<a href="coloque o link aqui">aqui</a></p>
   </body>
