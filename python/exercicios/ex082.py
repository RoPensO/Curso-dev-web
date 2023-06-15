lista_pares = []
lista_impares = []
lista_completa = []

while True:
    numero = int(input('Digite um número: '))
    
    if numero % 2 == 0:
        lista_pares.append(numero)
        lista_completa.append(numero)
    else:
        lista_impares.append(numero)
        lista_completa.append(numero)
    
    add_num = str(input('Deseja adicionar mais números? [S/N] ')).strip().upper()[0]
    if add_num in 'N':
        break

print(f'Todos os números que você digitou foram: {lista_completa}')
print(f'dentre eles os pares foram: {lista_pares}')
print(f'e os ímpares foram: {lista_impares}')