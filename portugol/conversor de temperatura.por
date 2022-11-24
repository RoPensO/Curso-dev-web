programa
{
	
	funcao inicio()
	{
		real celsius
		real fahrenheit
		inteiro opcao

		escreva("Conversor de Temperatura: \nEscolha a opção para qual você quer converter\n\n")

		escreva("1) celsius para fahrenheit\n")
		escreva("2) fahrenheit para celsius\n")
		leia(opcao)

		escolha(opcao)	{
			caso 1:
				escreva("\nDigite o valor em celsius que você gostaria de converter\n")
				leia(celsius)
				
				fahrenheit = (celsius * 1.8) + 32

				escreva("\n "+celsius+" ºC esquivalem a "+fahrenheit+" ºF")
				pare
				
			caso 2:
				escreva("\nDigite o valor em fahrenheit que você gostaria de converter\n")
				leia(fahrenheit)

				celsius = (fahrenheit - 32) / 1.8

				escreva("\n "+fahrenheit+" ºF equivale a "+celsius+" ºC")
				pare

			caso contrario: 
				escreva("Opção inválida")
				pare
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 813; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */