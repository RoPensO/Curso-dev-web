import pygame
pygame.mixer.init()
pygame.init()

pygame.mixer.music.load('7-rings.mp3')
pygame.mixer.music.play()
pygame.event.wait()
