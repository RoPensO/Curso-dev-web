soma = 0
cont = 0
for c in range(1, 501, 2):
    if c % 3 == 0:
        soma += c
        cont += 1
print('O valor da soma dos {} múltiplos de 3, entre 1 a 500 é igual a {}'.format(cont, soma))
