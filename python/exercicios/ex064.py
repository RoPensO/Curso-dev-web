contador = total = 0
num = int(input('Digite um número [999 para parar]: '))

while num != 999:
    total += num
    contador += 1
    num = int(input('Digite um número [999 para parar]: '))
print('você digitou {} numeros com a soma total de {}'.format(contador, total))
print('FIM DO PROGRAMA')
