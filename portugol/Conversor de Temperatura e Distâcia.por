programa
{
	
	funcao inicio()
	{
		inteiro conversor

		faca {
			escreva("\n**Conversor de Temperaturas e Distâncias**\n\n")

		escreva("Escolha qual tipo de conversão quer fazer\n")

		escreva("1 - Temperatura\n")
		escreva("2 - Distância\n")
		escreva("3 - Sair do programa\n\n")
		leia(conversor)

			escolha(conversor) {
				caso 1:
	
					inteiro conversor_temperatura
					real celsius
					real Fahrenheit
				
					escreva("\nVocê gostaria de converter:\n")
	
					escreva("1 - Celsius para Fahrenheit\n")
					escreva("2 - Fahrenheit para Celsius\n")
					leia(conversor_temperatura)
	
					escolha(conversor_temperatura) {
						caso 1:
							escreva("\nDigite a temperatura em celsius: ")
							leia(celsius)
	
							Fahrenheit = (celsius * 1.8) + 32
	
							escreva("\nO valor de "+celsius+"°C em Fahrenheit é igual a "+Fahrenheit+"°F\n")
							pare
	
						caso 2:
							escreva("\nDigite a temperatura em Fahrenheit: ")
							leia(Fahrenheit)
	
							celsius = (Fahrenheit - 32) / 1.8
					
							escreva("\nO valor de "+Fahrenheit+"°F em Fahrenheit é igual a "+celsius+"°C\n")
							pare
						
						caso contrario:
							escreva("\nOpção inválida")
							pare
						}
						pare
				caso 2:
	
					inteiro conversor_distancia
					real km
					real milhas
	
					escreva("\nVocê gostaria de converter:\n")
	
					escreva("1 - Quilômetros em Milhas\n")
					escreva("2 - Milhas em Quilômetros\n")
					leia(conversor_distancia)
	
					escolha(conversor_distancia) {
						caso 1: 
							escreva("\nDigite a distância em Quilômetros: ")
							leia(km)
	
							milhas = km / 1.6
							escreva("\nA distância de "+km+" Km em Milhas é de aproximadamente "+milhas+" milhas\n")
							pare
	
						caso 2: 
							escreva("\nDigite a distância em Milhas: ")
							leia(milhas)
	
							km = milhas * 1.6
							escreva("\nA distância de "+milhas+" Milhas em Quilômetros é de aproximadamente "+km+" Km\n")
							pare

						caso contrario:
							escreva("\nOpção inválida")
							pare
					}
					pare
				
				
				}
		}
		enquanto(conversor != 3)
		escreva("\nPrograma Finalizado!")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 2046; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */