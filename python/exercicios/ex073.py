tabela = 'Botafogo', 'Palmeiras', 'Atlético-MG', 'Grêmio', 'Flamengo', 'Fluminense', 'Athletico-PR', 'São Paulo', 'Fortaleza', 'Cruzeiro', 'Bragantino', 'Santos', 'Internacional', 'Cuiabá', 'Bahia', 'Corinthians', 'Goiás', 'América-MG', 'Vasco', 'Coritiba'

for cont in range(0, 5):
    print(f'{cont+1}° colocado: {tabela[cont]}')

print('\nOs últimos colocados são:')
for cont in range(-4, 0):
    print(f'* {tabela[cont]}')
    
print(f'\nA tabela em ordem alfabética é: {sorted(tabela)}')

print(f'\nO Athletico-PR está na {tabela.index("Athletico-PR")+1}ª posição da tabela')
