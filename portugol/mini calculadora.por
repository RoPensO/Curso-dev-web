programa
{
	
	funcao inicio()
	{
		//declaração de variáveis
		real numero1
		real numero2
		caracter operacao

		//entrada de dados 	do usuário
		escreva("Mini calculadora\n\n")

		escreva("Digite o primeiro número\n")
		leia(numero1)

		escreva("Digite a operação que deseja fazer\n")

		escreva("+ - soma\n")
		escreva("- - subtração\n")
		escreva("* - multiplicação\n")
		escreva("/ - divisão\n")

		leia(operacao)

		escreva("Digite o segundo número\n")
		leia(numero2)

		//Executa a operação e impressão dos dados
		escreva("RESULTADO: "+numero1+" "+operacao+" "+numero2+" = ")

		se(operacao == '+') {
			escreva(numero1 + numero2)
		}
		senao se(operacao == '-') {
			escreva(numero1 - numero2)
		}
		senao se(operacao == '*') {
			escreva(numero1 * numero2)
		}
		senao se(operacao == '/') {
			se(numero2 >0) {
				escreva(numero1 / numero2)
			}
			senao {
				escreva("Não é possível dividir por zero, use outro valor para fazer uma conta válida")
			}
		}
		senao {
			escreva("Operação inválida")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1020; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */