from random import randint

num = randint(0,10), randint(0,10), randint(0,10), randint(0,10), randint(0,10)

print(f'foram sorteados os números: ', end='')
for n in num:
    print(f'{n} ' , end='')
    
print(f'\ndentre eles o menor foi o {sorted(num)[0]}, e o maior foi o {sorted(num)[-1]}.')

# outra maneira de resolver é
print(f'\ndentre eles o menor foi o {min(num)}, e o maior foi o {max(num)}.')