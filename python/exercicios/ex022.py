nome = str(input('Digite seu nome completo: ')).strip()
primeiro_nome = nome.split()

print(nome.upper())
print(nome.lower())
print('Seu nome tem {} letras'.format(len(nome.replace(' ', ''))))

#print('Seu nome tem o total de {} letras'.format(len(nome) - nome.count(' ')))
#    ^ outra maneira de tirar todos os espaços ^

print('Seu primeiro nome tem {} letras'.format(len(primeiro_nome[0])))

# print('Seu primeiro nome tem {} leras'.format(nome.find(' ')))
#    ^ outra maneira de saber o tamanho do primeiro nome, mostra o indice(0 não conta então é o tamanho do nome) ^
