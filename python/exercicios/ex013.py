salario = float(input('Digite seu salário: '))

novo_salario = salario + (salario * 15 /100)

print('Seu salário antigo era R${:.2f}, porêm você recebeu um aumento de 15%, '
      'agora ele é de R${:.2f}'.format(salario, novo_salario))
