from random import randint
from time import sleep
n = randint(1,5)
print('\nEstou pensando em um número entre 0 e 5, você consegue adivinhar qual é?')
num = int(input('Qual seu palpite? '))
print('Processando...')
sleep(2)

if n == num:
    print('Uau, você acertou, eu estava pensando no {} mesmo, parabéns!'.format(n))
else:
    print('Você errou, eu estava pensando no {}, tente novamente'.format(n))