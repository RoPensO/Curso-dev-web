from time import sleep

n1 = int(input('Primeiro valor: '))
n2 = int(input('Segundo Valor: '))
opcao = 0

while opcao != 5:
    print('-=' * 20)
    print('''O que você gostaria de fazer?
    [1] Somar
    [2] Multiplicar
    [3] Maior Número
    [4] Novos Números
    [5] Sair do Programa''')
    opcao = int(input('Digite uma opção: '))
    
    if opcao == 1:
        soma = n1 + n2
        print('A soma dos números {} e {} é igual a {}'.format(n1, n2, soma))
    elif opcao == 2:
        mult = n1 * n2
        print('A multiplicação dos números {} e {} é igual a {}'.format(n1, n2, mult))
    elif opcao == 3:
        if n1 < n2:
            maior = n2
        else:
            maior = n1
        print('O maior número entre {} e {} é o {}'.format(n1, n2, maior))
    elif opcao == 4:
        print('Escolhe seus novos números')
        n1 = int(input('Primeiro Número: '))
        n2 = int(input('Segundo Número: '))
    elif opcao == 5:
        print('Saindo...')
    else:
        print('Comando inválido!\nTente novamente')
    sleep(2)
print('===Fim do programa===')
