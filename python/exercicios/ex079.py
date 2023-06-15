lista = []

while True:
    novo_numero = int(input('Digite um número: '))
    if novo_numero not in lista:
        lista.append(novo_numero)
        print('Número adicionado com sucesso, ', end='')
    else:
        print('Número ja adicionado...')
        
    continuar = str(input('Deseja continuar? [S/N] ')).lower().strip()[0]
    if continuar == 'n':
        break 
        
print(f'Os números digitados foi: {sorted(lista)}')
