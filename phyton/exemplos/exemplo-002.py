n1 = int(input('Digite um número'))
n2 = int(input('Digite outro'))

s = n1 + n2
m = n1 * n2
d = n1 / n2

print('A soma de {} + {} é igual a {}'.format(n1, n2, s), end=' >>> ')
print('A divisão de {} e {} é: {:.0f} \nE o produto de {} e {} é igual á {}'.format(n1, n2, d, n1, n2, m))