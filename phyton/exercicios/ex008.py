metros = float(input('Digite o tamanho em métros: '))

cm = metros * 100
mm = metros * 1000

print('O tamanho em métros é igual á {:.0f}, que equivale a {:.2f} '
      'centímetros que é a mesma coisa que {:.2f} milímetros'.format(metros, cm, mm))