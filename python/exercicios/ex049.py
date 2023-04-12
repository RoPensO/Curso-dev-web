num = int(input('Digite um número para ver sua tabuada: '))

print('\nTabuada do {}'.format(num))
print('- ' * 10)
for c in range(1,11):
    print('{:2} x {:2} = {:2}'.format(num, c, num*c))
print('- ' * 10)
