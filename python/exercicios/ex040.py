n1 = float(input('Digite sua primeira nota: '))
n2 = float(input('Digite sua segunda nota: '))
n3 = float(input('Digite sua terceira nota: '))
n4 = float(input('Digite sua quarta nota: '))

media = (n1 + n2 + n3 + n4) / 4

if media >= 7:
    print('Sua média foi {:.1f}, você foi aprovado'.format(media))
elif media >= 5 and media <= 6.9:
    print('Sua média foi {:.1f}, você está em recuperação'.format(media))
else:
    print('Sua média foi {:.1f}, você foi reprovado'.format(media))
