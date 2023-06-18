# Crie um programa que leia nome e duas notas de vários alunos e guarde tudo em uma lista composta.
# No final, mostre um boletim contendo a média de cada um e permita que o usuário possa mostrar as notas de cada aluno individualmente.

turma = []
aluno = []

while True:
    aluno.append(str(input('Nome do aluno: ')))
    aluno.append(float(input('1ª nota: ')))
    aluno.append(float(input('2ª nota: ')))
    
    turma.append(aluno[:])
    aluno.clear()
    novo_aluno = str(input('Adicionar outro aluno? [s/n] '))
    if novo_aluno in 'nN':
        break
print(turma[0][0])
