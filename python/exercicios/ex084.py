temp = []
pessoas = []

mais_pesado = mais_leve = 0

while True:
    temp.append(str(input('Nome: ')))
    temp.append(float(input('Peso: ')))
    
    if len(pessoas) == 0:
        mais_leve = mais_pesado = temp[1]
    else:
        if temp[1] > mais_pesado:
            mais_pesado = temp[1]
        if temp[1] < mais_leve:
            mais_leve = temp[1]
    
    pessoas.append(temp[:])
    temp.clear()
    
    add_mais = str(input('continuar? [s/n] '))
    if add_mais in 'Nn':
        break

print(f'Ao todo foram cadastradas {len(pessoas)} pessoas')
print(f'O maior peso registrado foi {mais_pesado} de: ', end='')
for p in pessoas:
    if p[1] == mais_pesado:
        print(f'[{p[0]}] ', end='')
print(f'\ne o maior peso registrado foi {mais_leve} de: ', end='')
for p in pessoas:
    if p[1] == mais_leve:
        print(f'[{p[0]}] ', end='')