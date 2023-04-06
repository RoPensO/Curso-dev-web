tempo = int(input('Quantos anos tem o seu carro? '))

if tempo <= 3:
    print('Ainda ta novinho')
else:
    print('Ta veio ein!?')
print('--FIM--')
#if comun

print('carro novo' if tempo <= 3 else 'carro veio') #if ternario
print('--Fim--')