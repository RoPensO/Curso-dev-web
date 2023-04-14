num = int(input('Digite um número e veja se ele é primo: '))
total = 0

for c in range(1, num + 1):
    if num % c == 0:
        print('\033[33m', end=' ')
        total += 1
    else:
        print('\033[31m', end=' ')
    print('{} '.format(c), end='')
    
print('\033[m\nO numero {}, foi divisivel {} vezes'.format(num, total))
if total == 2:
    print('Portanto ele é PRIMO')
else:
    print('Portanto ele NÃO É PRIMO')
    