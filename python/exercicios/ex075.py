numeros = int(input('digite um número: ')), int(input('digite outro número: ')), int(input('digite mais um número: ')), int(input('digite um último número: '))

print(f'Você digitou os números: {numeros}')
print(f'\nO número 9 apareceu {numeros.count(9)} vezes')
if 3 in numeros:
    print(f'\nO número 3 apareceu a primeira vez na posição {numeros.index(3)+1}ª posição')
else:
    print('\nO número 3 não aparece em nenhuma posição')

print(f'\nDentre os números digitados os pares foram ', end='')
for par in numeros:
    if par % 2 == 0:
        print(f'{par}', end=' ')