programa

{

	funcao inicio() {
	  
		inteiro contador = 1
		inteiro idade
		inteiro idade_total = 0
	
	  
		enquanto(contador <= 3) {
	   		escreva("Informe a idade da "+contador+"ª pessoa: ")   
			leia(idade)
	
	   		idade_total = idade_total + idade
	
	   		contador = contador + 1
	  	}
	
	  	escreva("A soma das idades é: "+idade_total)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 20; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */