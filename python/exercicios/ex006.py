numero = int(input('Escolha um número '))

dobro = numero * 2
triplo = numero * 3
raiz = numero ** (1/2)

print('O número escolhido foi {}\nO dobro dele é: {} \nO triplo dele é: {}'
      '\nE sua raiz quadrada é: {:.1f}'.format(numero, dobro, triplo, raiz))
