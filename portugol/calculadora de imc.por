programa
{
	
	funcao inicio()
	{
		real peso
		real altura
		real imc

		escreva("\nCalculadora de Índice de Massa Corpórea(IMC)\n\n")

		escreva("\nEscreva o seu peso atual: ")
		leia(peso)

		escreva("\nAgora informe a sua altura: ")
		leia(altura)

		imc = peso / (altura * altura)

		escreva("\nSeu IMC é: "+imc+" ")

		se (imc > 0 e imc < 17) {
			escreva("Muito abaixo do peso")
		}
		senao se (imc >= 17 e imc < 18.5) {
			escreva("Abaixo do peso")
		}
		senao se (imc >= 18.5 e imc < 25) {
			escreva("Peso normal")
		}
		senao se (imc >= 25 e imc < 30) {
			escreva("Acima do peso")
		}
		senao se (imc >= 30 e imc < 35) {
			escreva("Obesidade grau 1")
		}
		senao se (imc >= 35 e imc < 41) {
			escreva("Obesidade grau 2")
		}
		senao {
			escreva("Obesidade grau 3")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 318; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */