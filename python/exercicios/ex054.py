from datetime import date
ano_atual = date.today().year
maior = 0
menor = 0


for pessoa in range(1, 8):
    nascimento = int(input('Digite o ano de nascimento da {}º pessoa: '.format(pessoa)))
    idade = ano_atual - nascimento
    if idade < 18:
        menor += 1
    else:
        maior += 1
print('Temos o total de {} pessoas menores de idade e {} maiores'.format(menor, maior))
