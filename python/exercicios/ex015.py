dias = int(input('Quantos dias o carro foi alugado: '))
km = float(input('Quantos Km o carro rodou: '))

total = (dias * 60) + (km * 0.15)

print('O valor total é igual a R${:.2f}'.format(total))