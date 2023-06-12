num_str = 'zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove', 'vinte'

novamente = ''
while True:
    num = ''
    while True:
        num = int(input('Digite um número entre 0 e 20: '))
        if 0 <= num <= 20:
            break
        print('opção inválida, tente novamente', end=' ')
    print(f'o número que você digitou foi {num_str[num]}')
    print('-=' * 10)
    novamente = str(input('Novamente? [S/N] ')).strip().upper()[0]
    print('-=' * 10)
    if novamente == 'N':
        break
print('obrigado e volte sempre')
