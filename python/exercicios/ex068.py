from random import randint

vitoria = 0
while True:
    usuario = int(input('Digite um valor: '))
    pc = randint(1, 11)
    total = usuario + pc
    parimpar = ' '
    while parimpar not in 'pi':
        parimpar = str(input('Par ou Ímpar? [P/I] ')).strip().lower()[0]
    print(f'Você jogou {usuario} e o pc jogou {pc}, o total foi {total}', end=' ')
    print('deu PAR' if total % 2 == 0 else 'deu Ímpar')
    if parimpar == 'p':
        if total % 2 == 0:
            print('você venceu!')
            vitoria += 1
        else:
            print('você perdeu!')
            break
    elif parimpar == 'i':
        if total % 2 == 1:
            print('você venceu!')
            vitoria += 1
        else:
            print('você perdeu!')
            break
    print('vamos jogar de novo...')
print(f'Você venceu {vitoria} vez(es).')
