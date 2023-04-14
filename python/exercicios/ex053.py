frase = str(input('Digite uma frase e veja se ela é um palindromo: ')).strip().upper()
palavras = frase.split()
junto = ''.join(palavras)
inverso = ''

#sem o uso da estrutura de repetição podemos usar
# inverso = junto[::-1]

for letra in range(len(junto) - 1, -1, -1):
    inverso += junto[letra]
print('O inverso de {} é {}'.format(junto, inverso))
if inverso == junto:
    print('Portanto temos um palindromo!')
else:
    print('Portanto não é um palindromo')
