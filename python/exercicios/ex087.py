matriz = [[0,0, 0],[0,0,0],[0,0,0]]
spar = scol = maior = 0
for linha in range(0,3):
    for coluna in range(0,3):
        matriz[linha] [coluna] = int(input(f'Digite um valor para a posição [{linha},{coluna}]: '))        
print('~*' * 30)
for linha in range(0,3):
    for coluna in range(0,3):
        print(f'[{matriz[linha][coluna]:^5}]', end='')
        if matriz[linha][coluna] % 2 == 0:
            spar += matriz[linha][coluna]
    print()
print('~*' * 30)
print(f'a soma dos números pares é igual a: {spar}')
for linha in range(0,3):
    scol += matriz[linha][2]
print(f'a soma da segunda coluna é igual a: {scol}')
for coluna in range(0,3):
    if coluna == 0:
        maior = matriz[1][coluna]
    elif matriz[1][coluna] > maior:
        maior = matriz[1][coluna]
print(f'o maior valor da segunda linha é igual a: {maior}')
