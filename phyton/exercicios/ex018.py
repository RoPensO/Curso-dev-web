from math import tan, sin, cos, radians

ang = float(input("digite o angulo: "))

cos = cos(radians(ang))
sen = sin(radians(ang))
tan = tan(radians(ang))

print('No angulo de {:.1f}°, o seu seno é {:.2f}, seu coseno é {:.2f} e sua tangente é {:.2f}'.format(ang, sen, cos, tan))
