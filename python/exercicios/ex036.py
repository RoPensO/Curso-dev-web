valor_casa = float(input('Qual o valor da casa a ser financiada? '))
salario = float(input('Salário do comprador? '))
tempo = int(input('Quantos anos de financiamento? '))

parcela = valor_casa / (tempo * 12)
minimo = salario * 30 / 100

print('A parcela de um imóvel de R${:.2f} em {} anos fica R${:.2f}'.format(valor_casa, tempo, parcela))

if parcela <= minimo:
    print('Parabéns, seu financiamento foi APROVADO!')
else:
    print('Infelizmente seu financiamento não foi aprovado.')