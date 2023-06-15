numeros = []

maior = menor = 0

for cont in range(0, 5):
    numeros.append(int(input(f'Digite o {cont+1}° número: ')))
    if cont == 0:
        maior = menor = numeros[cont]
    else:
        if numeros[cont] > maior:
            maior = numeros[cont]
        if numeros[cont] < menor:
            menor = numeros[cont]
            
print('-=' * 30)
print(f'Os números digitados foram: {numeros}')

print(f'O menor número digitado foi {menor}, nas posições: ', end='')
for indice, valor in enumerate(numeros):
    if valor == menor:
        print(f'{indice+1}', end='.. ')
print()

print(f'O maior número digitado foi {maior}, nas posições: ', end='')
for indice, valor in enumerate(numeros):
    if valor == maior:
        print(f'{indice+1}', end='.. ')
