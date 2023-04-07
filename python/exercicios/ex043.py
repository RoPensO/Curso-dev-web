print('*--' * 20)
print('CALCULADORA DE IMC')
print('*--' * 20)
peso = float(input('Digite o seu peso (kg): '))
altura = float(input('Digite sua altura(m): '))

IMC = peso / (altura**2)

print('\nSeu IMC é igual à: {:.1f},'.format(IMC))

if IMC <= 18.5:
    print('Você está abaixo do peso')
elif IMC <= 25:
    print('Você está no peso ideal')
elif IMC <= 30:
    print('Você está com sobrepeso')
elif IMC <= 40:
    print('Você está obeso')
else:
    print('Você está com obesidade mórbida')

