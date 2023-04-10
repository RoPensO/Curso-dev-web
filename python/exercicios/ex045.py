from random import randint
from time import sleep

print('{:=^30}'.format('Jokempô'))
print('\nTente me ganhar no jokempô')

itens = ('Pedra', 'Papel', 'Tesoura')
computador = randint(0,2)
jogador = int(input('Escolha:\n[0] Pedra\n[1] Papel\n[2] Tesoura\n'))

sleep(1)
print('JO')
sleep(1)
print('KEM')
sleep(1)
print('PO!!!')

if computador == 0: # computador
    if jogador == 0: # jogador
        print('EMPATE')
    elif jogador == 1: # jogador
        print('JOGADOR GANHOU')
    elif jogador == 2: # jogador
        print('JOGADOR PERDEU')
    else:
        print('JOGADA INVÁLIDA')
elif computador == 1: # computador
    if jogador == 0: # jogador
        print('JOGADOR PERDEU')
    elif jogador == 1: # jogador
        print('EMPATE')
    elif jogador == 2: # jogador
        print('JOGADOR GANHOU')
    else:
        print('JOGADA INVÁLIDA')
elif computador == 2: # computador
    if jogador == 0: # jogador
        print('JOGADOR GANHOU')
    elif jogador == 1: # jogador
        print('JOGADOR PERDEU')
    elif jogador == 2: # jogador
        print('EMPATE')
    else:
        print('JOGADA INVÁLIDA')

print('Jogador escolheu {} e o computador escolheu {}'.format(itens[jogador], itens[computador]))
