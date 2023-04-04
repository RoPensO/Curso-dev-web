# com import
import math
cad = float(input('Qual o tamanho do cateto adjacente? '))
cao = float(input('Qual o tamanho do cateto oposto? '))

hip = math.hypot(cad, cao)

print('O valor da hipotenusa é {:.2f}'.format(hip))



# Vanilla
# cad = float(input('Qual o tamanho do cateto adjacente? '))
# cao = float(input('Qual o tamanho do outor cateto oposto? '))

# hip = (cad ** 2 + cao ** 2) ** (1/2)

# print('A hipotenusa vai medir {:.2f}'.format(hip))
