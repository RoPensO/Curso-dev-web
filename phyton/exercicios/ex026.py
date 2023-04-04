frase = str(input('Digite uma frase: ')).lower().strip()
print('Nessa frase a letra "a" aparece {} vezes.'.format(frase.count('a')))
print('O primeiro "a" aparece na posição {}'.format(frase.find('a')+1))
print('O último "a" aparece na posição {}'.format(frase.rfind('a')+1))
