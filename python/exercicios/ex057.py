sexo = str(input('Digite seu sexo - use apenas M ou F: ')).upper().strip() [0]

while sexo not in 'MF':
    sexo = str(input('Dados inválidos, use apenas M ou F: ')).upper().strip() [0]
print('sexo {} registrado com sucesso'.format(sexo))