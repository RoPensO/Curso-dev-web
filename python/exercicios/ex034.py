salario = int(input('Digite o seu salário para saber seu aumento: '))

if salario >= 1250:
    aumento = salario * 10 / 100
else:
    aumento = salario * 15 / 100

salario_final = salario + aumento

print('Seu salário atual é de R${:.2f}, e você teve um aumento de R${:.2f}, seu novo salário é R${:.2f}'
      .format(salario, aumento, salario_final))
