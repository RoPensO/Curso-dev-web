programa
{
	
	funcao inicio()
	{
	inteiro calculo

	escreva("Sistema de calculo de Bhaskara\n\n")

	escreva("O que deseja fazer?\n\n")
	escreva("1 - Calcular área de um triângulo\n")	
	escreva("2 - Calcular delta usando a fórmula de Bhaskara\n")

	leia(calculo)

	se(calculo == 1) {
		real base
		real altura
		real area

		escreva("\nInforme a base do trinângulo (cm): ")
		leia(base)

		escreva("\nInforme a altura do triângulo (cm): ")
		leia(altura)

		se(base > 0 e altura > 0) {
			area = (base * altura) / 2
			escreva("\nA área do triângulo é: "+area+" cm²")
		}
		senao {
			escreva("\nA base e/ou altura tem que ser maior que 0")
		}
	}

	senao se(calculo == 2) {
			real a
			real b
			real c
			real delta

			escreva("\nInforme o valor de a: ")
			leia(a)
			
			escreva("\nInforme o valor de b: ")
			leia(b)
			
			escreva("\nInforme o valor de c: ")
			leia(c)

			delta = (b * b) - (4*a*c)
			escreva("\n∆ = "+delta+" \n")
		}
	senao {
		escreva("\nOpção inválida")
	}
	}
		
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 881; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */