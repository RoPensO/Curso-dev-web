programa
{

 funcao inicio()
 {
  inteiro contador = 1
  inteiro quantidade_produtos
  real valor_produto = 0.0
  real valor_total = 0.0

  escreva("\nSistema de caixa \n")
  escreva("\nInforme o número de produtos: ")
  leia(quantidade_produtos)

  enquanto(contador <= quantidade_produtos)
  {
   escreva("Informe o valor do produto "+contador+": ")
   leia(valor_produto)

   valor_total = valor_total + valor_produto

   contador = contador + 1
  }

  escreva("\n\nValor total: "+valor_total)
 }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 111; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */