from datetime import date
ano_atual = date.today().year

ano_nascimento = int(input('Digite seu ano de nascimento: '))

idade = ano_atual - ano_nascimento

if idade == 18:
    print('Você deve se alistar esse ano')
elif idade <= 17:
    print('Ainda faltam {} anos para se alistar'.format(18 - idade))
else:
    print('Você ja passou {} anos da data do seu alistamento'.format(idade - 18))
    