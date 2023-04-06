velocidade = int(input('Digite a velocidade atual do seu carro: '))

if velocidade <= 80:
    print('Está dentro do limite permitido pela via, tenha uma boa viagem!')
else:
    multa = (velocidade - 80) * 7
    print('Você foi multado em {:.2f}'.format(multa))
