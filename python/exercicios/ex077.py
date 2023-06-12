palavras = 'teste', 'ola', 'como', 'computador', 'jogos', 'controle', 'python'

for p in palavras:
    print(f'\na palavras {p.upper()} tem as vogais: ', end='')
    for l in p:
        if l.lower() in 'aeiou':
            print(l, end=' ')
