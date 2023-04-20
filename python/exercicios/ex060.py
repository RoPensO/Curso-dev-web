# com módulo

# from math import factorial
# numero = int(input('Digite um número para saber o seu fatorial: '))
# fat = factorial(numero)
# print('O fatorial de {} é igual á {}'.format(numero, fat))


# sem módulo e com while
# num = int(input('Digite um número e descubra seu fatorial: '))
# contador = num
# fatorial = 1
# print('Calculando o {}! = '.format(num), end='')
# while contador > 0:
#     print('{}'.format(contador), end='')
#     print(' x ' if contador > 1 else ' = ', end='')
#     fatorial *= contador
#     contador -= 1
# print('{}'.format(fatorial))


# sem módulo e com for
num = int(input('Digite um número e descubra seu fatorial: '))
contador = num
fatorial = 1
print('Calculando o {}! = '.format(num), end='')
for contador in range(num, 0, -1):
    print('{}'.format(contador), end='')
    print(' x ' if contador > 1 else ' = ', end='')
    fatorial *= contador
    contador -= 1
print('{}'.format(fatorial))
