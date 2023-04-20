print('Sequência Fibonacci')
seq = int(input('Digite quantos números da sequencia você quer ver: '))
fib = 0
penultimo = 0
ultimo = 1
contador = 3
print('{} -> {} -> '.format(penultimo, ultimo), end='')
while contador <= seq:
    fib = ultimo + penultimo
    penultimo = ultimo
    ultimo = fib
    print('{}'.format(fib), end=' -> ')
    contador += 1
print('FIM')
