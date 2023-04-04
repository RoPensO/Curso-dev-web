preco = float(input('Digite o preço do produto: '))

novo_preco = preco - (preco * 5 / 100)

print('O preço o produto era R${:.2f}, mas com o desconto aplicado de 5% '
      'fica um total de R${:.2f}'.format(preco, novo_preco))