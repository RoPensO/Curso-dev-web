lista = []

while True:
    numeros = int(input('Digite um número: '))
    lista.append(numeros)

    adicionar = str(input('Deseja adicionar mais valores? [S/N] ')).strip().upper()[0]
    if adicionar == 'N':
        break
    
lista.sort(reverse=True)
print(f'a lista em tem um total de {len(lista)} elementos que em ordem decrescente fica {lista}')

if 5 in lista:
    print('o 5 está na lista')
else:
    print('o 5 não está na lista')