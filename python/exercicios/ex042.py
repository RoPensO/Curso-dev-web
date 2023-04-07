lado1 = float(input('Digite o tamanho de um lado do triângulo '))
lado2 = float(input('Digite o tamanho de outro lado do triângulo '))
lado3 = float(input('Digite o tamanho do terceiro lado do triângulo '))

if lado1 < lado2 + lado3 and lado2 < lado1 + lado3 and lado3 < lado1 + lado2:
    print('Com essas medidas conseguimos montar um triângulo, e ele será')
    
    if lado1 == lado2 == lado3:
        print('EQUILÁTERO: pois todos os lados iguais')
    elif lado1 != lado2 != lado3 != lado1:
        print('ESCALENO: pois todos os lados diferentes')
    else:
        print('ISÓSCELES: pois apenas 2 lados são iguais')
        
else:
    print('Com essas não se forma um triângulo')