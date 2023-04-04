num = int(input('Digite um número qualquer com 4 dígitos: '))
m = num // 1000 % 10
c = num // 100 % 10
d = num // 10 % 10
u = num // 1 % 10

print('O número é composto de:'
      '\nMilhar: {}'
      '\nCentena: {}'
      '\nDezena: {}'
      '\nUnidade: {}'.format(m, c, d, u))
