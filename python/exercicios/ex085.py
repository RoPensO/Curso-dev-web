numeros = [[],[]]
valor = 0

for c in range(1,8):
    valor = int(input(f'Digite o {c}º número: '))
    if valor % 2 == 0:
        numeros[0].append(valor)
    else:
        numeros[1].append(valor)
        
print(f'Sendo os pares: {sorted(numeros[0])} e os ímpares {sorted(numeros[1])}')
