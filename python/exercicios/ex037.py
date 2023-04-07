print('=-' * 15)
print('Conversor de base numérica')
print('=-' * 15)

num = int(input('\nDigite um número inteiro: '))

print('''\nEscolha o tipo de conversão:
[ 1 ] Binário
[ 2 ] Octal
[ 3 ] Hexadecima''')

opcao = int(input('Escolha uma opção: '))

if opcao == 1:
    print('{} convertido em Binário é igual a {}'.format(num, bin(num) [2:]))
elif opcao == 2:
    print('{} convertido em Octal é igual a {}'.format(num, oct(num) [2:]))
elif opcao == 3:
    print('{} convertido em Hexadecimal é igual a {}'.format(num, hex(num) [2:]))
else:
    print('Opção inválida')
