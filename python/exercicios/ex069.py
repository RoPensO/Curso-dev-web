homem = mulher_menor = maior_idade = 0

print('==== CADASTRO DE PESSOAS ====')
print('=~'*15)
while True:
    
    sexo = ' '
    while sexo not in 'mf':
        sexo = str(input('Digite seu sexo: [M/F] ')).strip().lower()[0]
    idade = int(input('Digite sua idade: '))
    print('~ '*15)
    
    if sexo == 'm':
        homem += 1
    if sexo == 'f' and idade < 20:
        mulher_menor += 1
    if idade >= 18:
        maior_idade += 1
    
    continuar = ' '
    while continuar not in 'sn':
        continuar = str(input('Deseja continuar? [S/N] ')).strip().lower() [0]
    if continuar == 'n':
        break
    print('~ '*15)
    
print(f'O total de pessoas maiores de idade: {maior_idade}')
print(f'Temos {homem} homens cadastrados')
print(f'e temos {mulher_menor} mulheres menores de 20 anos')
    
print('Acabou')