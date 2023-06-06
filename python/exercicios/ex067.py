while True:
    num = int(input('Digite o número que você gostaria de ver a tabuada(digite 0 para finalizar): '))
    if num <= 0:
        break
    print('-'*35)
    print(f'TABUADA DO {num}')
    print('-'*35)
    for c in range(1, 11):
        print(f'{num} x {c} = {num*c}')
    print('-'*35)
    
print('*** Fim do programa ***')