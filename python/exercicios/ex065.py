media = contador = soma = maior = menor = 0
continuar = 's'
while continuar in 'Ss':
    num = int(input('Digite um número: '))
    if contador == 1:
        maior = menor = num
    else:
        if num > maior:
            maior = num
        if num < menor:
            menor = num
    soma += num
    contador += 1
    continuar = str(input('Deseja continuar? [S/N] ')).lower().strip() [0] 
media = soma / contador
print('ACABOU, você digitou {} números e a média foi {}'.format(contador, media))
print('O maior número digitado foi {} e o menor foi {}'.format(maior, menor))
