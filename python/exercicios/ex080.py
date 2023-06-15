lista = []

for c in range(0, 5):
    numero = int(input('Digite um número: '))
    if c == 0 or numero > lista[-1]:
        lista.append(numero)
    else:
        posicao = 0
        while posicao < len(lista):
            if numero <= lista[posicao]:
                lista.insert(posicao, numero)
                break
            posicao += 1
print(f'a ordem dos valore digitados na lista foram {lista}')
