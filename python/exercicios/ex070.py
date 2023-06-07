# C) qual é o nome do produto mais barato.

total = mais_de_mil = menor_preco = cont = 0
produto_menor_preco = ' '

while True:
    produto = str(input('Digite o produto: ')).lower()
    preco = float(input('Preço do produto: '))
    cont +=1
    # valor total da compra
    total += preco
    # verificar se tem produto com valor maior de 1000 reais
    if preco >= 1000:
        mais_de_mil += 1 
    # verificação de menor preco
    if cont == 1 or preco < preco:
        menor_preco = preco
        produto_menor_preco = produto
    # adicionar mais produtos ou parar
    continuar = ' '
    while continuar not in 'sn':
        continuar = str(input('Deseja adicionar mais produtos?[S/N] ')).strip().lower()[0]
    if continuar == 'n':
        break

print(f'o total gasto foi de R${total:.2f}, sendo que {mais_de_mil} produtos foram mais de 1000 reais e produto com o menor valor foi {produto_menor_preco} custou R${menor_preco:.2f} ')
print('fim do programa')