preco_produto = float(input('Digite o preço do produto: R$'))

print('''\nForma de pagamento
[ 1 ] Dinheiro/PIX
[ 2 ] Cartão''')
opcao = int(input('\nSelecione a forma de pagamento: '))

if opcao == 1:
    desconto = preco_produto * 10 / 100
    novo_preco = preco_produto - desconto
    print('Com pagamento à vista você tem 10% de desconto')
    print('O produto custava R${:.2f} passa a ficar R${:.2f}'.format(preco_produto, novo_preco))
elif opcao == 2:
    print('No cartão você pode fazer a vista ou parcelado ')
    parcelas = int(input('Em quantas parcelas você gostaria de fazer? '))
    if parcelas == 1:
        desconto = preco_produto * 5 / 100
        novo_preco = preco_produto - desconto
        print('Com pagamento à vista você tem 5% de desconto')
        print('O produto custava R${:.2f} passa a ficar R${:.2f}'.format(preco_produto, novo_preco))
    elif parcelas == 2:
        valor_parcela = preco_produto / 2
        print('O valor da parcela fica R${:.2f}'.format(valor_parcela))
    elif parcelas >= 3:
        novo_preco = preco_produto + (preco_produto * 20 / 100)
        valor_parcela = novo_preco / parcelas
        print('O valor da parcela fica R${:.2f} em {} vezes'.format(valor_parcela, parcelas))
    else:
        print('Valor de parcelas inválido')
else:
    print('OPÇÃO INVÁLIDA!')
