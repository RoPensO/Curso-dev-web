inicial = int(input('Digite o primeiro termo: '))
razao = int(input('Digite a razão: '))
termo = inicial
contador = 1

while contador <= 10:
    print('{} -> '.format(termo), end='')
    termo += razao
    contador += 1
print('FIM')
