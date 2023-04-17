num = int(input('Digite um número para saber seu fatorial: '))
fat = 1
i = 2

while i <= num:
    fat = fat * i
    i += 1
print('O fatorial de {} é igual a {}'.format(num, fat))
