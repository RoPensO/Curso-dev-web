inicial = int(input('Digite o primeiro termo: '))
razao = int(input('Digite a razão: '))
decimo = inicial + (10 - 1) * razao

for c in range(inicial, decimo + razao, razao):
    print('{}'.format(c), end=' > ')
print('fim')
