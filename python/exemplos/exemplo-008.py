nome = str(input('Qual seu nome '))
if nome == 'Rodolfo':
    print('Que nome bonito!')
elif nome == 'Pedro' or nome == 'Maria' or nome == 'João': #ELIF é a estrutura ELSE IF do python
    print('Seu nome é bem popular no Brasil')
else:
    print('Não é um nome tão comum assim')

print('Olá {}, tenha um ótimo final de semana!'.format(nome))
