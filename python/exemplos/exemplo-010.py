# r = 's'
# while r == 's':
#     n = int(input('Digite um número: '))
#     r = str(input('Deseja continuar? [S/N] '))
# print('FIM')

n = 1

par = impar = 0

while n != 0:
    n = int(input('Digite um valor: '))
    if n != 0:
        if n % 2 == 0:
            par += 1
        else:
            impar += 1
print('\nVocê digitou {} números pares e {} ímpares'.format(par, impar))
