n = soma = 0

while True:
    numero = int(input('Digite um número (999 para parar): '))
    if numero == 999:
        break
    soma += numero
    n += 1

print(f'você digitou {n} números, a soma total deles é igual à {soma}')
    