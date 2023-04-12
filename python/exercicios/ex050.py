soma = 0
for c in range(1,7):
    num = int(input('Digite {}º um número: '.format(c)))
    if num % 2 == 0:
        soma += num
print('A soma dos números pares que você digitou é {}.'.format(soma))
