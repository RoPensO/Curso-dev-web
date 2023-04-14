maior = 0
menor = 0

for p in range(1, 6):
    peso = float(input('Peso o da {} pessoa '.format(p)))
    if p == 1:
        maior = peso
        menor = peso
    else:
        if peso > maior:
            maior = peso
        if peso < menor:
            menor = peso
print('O marior peso lido foi de {}kg, e o menor foi {}kg'.format(maior, menor))
    