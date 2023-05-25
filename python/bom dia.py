import pyautogui
import time

# abrir navegador
time.sleep(2)
pyautogui.PAUSE = 1
pyautogui.press('win')
pyautogui.write('opera')
pyautogui.press('enter')

# pesquisa e copia da imagem
time.sleep(2)
pyautogui.write('bom dia')
pyautogui.press('enter')
time.sleep(5)
pyautogui.click(pyautogui.position(x=300, y=394))
pyautogui.rightClick(x=1119, y=461)
pyautogui.click(pyautogui.position(x=1044, y=322))

# envio no whatsapp do opera gx
time.sleep(2)
pyautogui.click(pyautogui.position(x=13, y=220))
time.sleep(5)
pyautogui.click(pyautogui.position(x=232, y=256))
pyautogui.hotkey('ctrl', 'v')
pyautogui.write('queriam mensagem automatizada de bom dia? TOMEM! kkkkkkkkkk')
# pyautogui.press('enter')
