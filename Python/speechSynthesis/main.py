# pip install gTTS
# pip install playsound

from gtts import *
from playsound import playsound

text_val = "Welcome to the New World"
language = "en"


obj = gTTS(text=text_val, lang=language, slow=False)

obj.save("test.mp3")
playsound("test.mp3")


