lado1 = float(input('Digite o tamanho de um lado do triângulo '))
lado2 = float(input('Digite o tamanho de outro lado do triângulo '))
lado3 = float(input('Digite o tamanho do terceiro lado do triângulo '))

if lado1 < lado2 + lado3 and lado2 < lado1 + lado3 and lado3 < lado1 + lado2:
    print('Da pra monta um triângulo')
else:
    print('Não da pra monta um triângulo')