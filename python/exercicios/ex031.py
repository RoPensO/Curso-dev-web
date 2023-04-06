kms = int(input('Digite a distância em Km da sua viagem: '))

if kms <= 200:
    passagem = kms * 0.5
else:
    passagem = kms * 0.45

print('Para uma viagem de {} Km, o valor da passagem é R${:.2f}'.format(kms, passagem))
