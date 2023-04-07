from datetime import date
ano_atual = date.today().year

ano_nascimento = int(input('Digite o ano de nascimento do atléta: '))

idade = ano_atual - ano_nascimento

print('Este atéta tem {} anos'.format(idade))

if idade <= 9:
    print('Classificação: Mirim.')
elif idade <= 14:
    print('Classificação: Infantil.')
elif idade <= 19:
    print('Classificação: Júnior.')
elif idade <= 25:
    print('Classificação: Sênior.')
else:
    print('Classificação: Master.')

