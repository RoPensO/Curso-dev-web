from random import randint

lista = []
jogos = []
print('-='*3, 'Palpites mega-sena', '=-'*3)
quanto_jogos = int(input('Quer que sorteie quantos jogos? '))

tot = 1
while tot <= quanto_jogos:
    cont = 0
    while True:
        num = randint(1,60)
        if num not in lista:
            lista.append(num)
            cont += 1
        if cont >= 6:
            break
    
    lista.sort()
    jogos.append(lista[:])
    lista.clear()
    tot += 1
print()
print(f'Sorteando seus {tot-1} palpites')
print()
for i, l in enumerate(jogos):
    print(f'Palpite n°{i+1}: {l}')
