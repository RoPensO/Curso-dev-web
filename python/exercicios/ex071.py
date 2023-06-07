print('+~' *20)
print('{:^40}'.format('CAIXA 24 HORAS'))
print('+~' *20)

valor = int(input('Digite o valor a ser sacado: R$'))
total = valor
total_cedula = 0
cedula = 50

while True:
    if total >= cedula:
        total -= cedula
        total_cedula += 1
    else:
        if total_cedula > 0:
            print(f'Total de {total_cedula} cédulas de R${cedula}')
        if cedula == 50:
            cedula = 20
        elif cedula == 20:
            cedula = 10
        elif cedula == 10:
            cedula = 1
        total_cedula = 0
        
        if total == 0:
            break
print('+~' *20)
print('{:^40}'.format('Tenha um bom dia'))
print('{:^40}'.format('Não esqueça de retirar seu dinheiro'))
print('+~' *20)
