print('Quantos litros de tinta preciso?\n')

altura = float(input('Digite a altura da parede: '))
largura = float(input('Digite a largura da parede: '))

area = altura * largura

tinta = area / 2

print('A área total de sua parede é igual à {}m², sabendo que cada litro de tinta pinta 2m²,'
      'então você precisa de aproximadamente de {}L de tinta para pintar sua parede toda'.format(area, tinta))
