from random import randint
pc = randint(1, 10)
tentativas = 0
acertou = 0

print('Estou pensando em um número entre 1 e 10, tente acertar.')
    
while not acertou:
    palpite = int(input('Qual seu palpite? '))
    tentativas += 1
    if palpite == pc:
        acertou = True
        print('Parabéns, você acertou, eu estava pensando no {}'.format(pc))
    elif palpite < pc:
        print('Você errou, o número é MAIOR que este')
    else:
        print('Você errou, o número é MENOR que este')
print('Você acertou em {} tentativas'.format(tentativas))
