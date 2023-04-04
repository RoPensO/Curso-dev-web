frase = '  Curso em Vídeo Python  '

print(frase[9])  # imprime o índice do caracter da frase
print(frase[6:8])  # imprime o range excluindo o indice final
print(frase[:9])  # imprime do inicio (vazio) até o caracter escolhido
print(frase[9:])  # imprime do indice escohido até o final da frase da string
print(frase[5::2])  # imprime do caracter escolhido até o fim(por isso está ":" e vazio, pulando de 2 em 2)

print(len(frase))  # len = length/ mostra o tamanho do frase
print(frase.count('o'))  # cont = conta a quantidade de vezes que aparece o que está entre aspas
print(frase.count('o', 0, 13))  # imprime o count dentro do range
print(frase.find('deo'))  # find = encontra o que está entre aspas e mostra o índice de onde começa o que foi pedido
print(frase.find('android'))  # find retorna -1 caso não ache na string
print('curso' in frase)  # in = busca a palavra dentro da string e retorna true ou false

print(frase.replace('Python', 'Android'))  # replace = troca a primeira infomação pela segunda
print(frase.upper())  # upper = transforma tudo em maiúscula
print((frase.lower()))  # lower = transforma tudo em minúscula
print(frase.capitalize())  # capitalize = transforma somente o primeiro caracter da frase em maiusculo
print(frase.title())  # title = transforma todas as primeiras letras das palavras em maiúsculas

print(frase.strip())  # strip = remove todos os espaços "inuteis" do inicio e do fim da frase toda
print(frase.rstrip())  # rtrip = remove só os espaços da direita
print(frase.lstrip())  # lstrip = remove só os espaços da esquerda

print(frase.split())  # split = divide a frase em palavras e faz com que crie um outro array
# com cada palavra como uma frase
print('-'.join(frase))  # join = junta e adiciona nos espaços de separação das strings pelo que está entre parênteses

print('''Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem 
Ipsum.''')  # usar 3 vezes as " serve para imprimir tudo do jeito que tiver, com as quebras de linhas e etc
