# C:\project\LearnFromZeroToHero\python\book>
# python bookk.py
# python python/book/bookk.py


import random
import tkinter
print("Let's learn")
# 4,7
# from turtle import *
# import random


# def page4():
#     print("Hello World!")


# 9
# print(2+2)  # 4
# print(2-2)  # 0
# print(2*2)  # 4
# print(2/2)  # 1.0
# # self
# print("a"*2)  # aa
# # print("a"+2) # error

# 10,11
# bananas = 5
# # bananas = 10 #
# bananasEaten = 2
# print(bananas-bananasEaten)  # 3 or 8(if revalue bananas in line 15 )
# exampleString = "I am a string"

# 12
# name = input("What is your name?")
# print(name)

# 13
# print("Create your character!")
# name = input("What is your character called?")
# age = input("How old is your character?")
# strengths = input("What are your character's strengths?")
# weaknesses = input("What are your character's weaknesses?")
# print("Your character's name is", name)
# print("Your character is", age, "years old")
# print("Strengths:", strengths)
# print("Weaknesses:", weaknesses)
# print(name, "says, `Thanks for creating me!`")

# 15
# age = input("How old is your character?")
# # ageNextYear = age + 1 # error
# ageNextYear = int(age) + 1
# print("You will be", ageNextYear, "next birthday.")

# 16
# age = 10
# print(age == 12)  # false
# print(age == 10)  # true
# == != < >  <= >=

# 17 ветвление программы
# user_reply = input("Do you like robots? (Type yes or no)")
# if user_reply == "yes":
#     print("Beep boop")
#     print("I love you 2")
# else:
#     print("Well, robots don't like you either.")

# elif переписать из отдельного файла когда он создатся

# 21

# 22
# from random import randint
# print(randint(1,4))

# 27
# exitChoice = "Nothing"
# while exitChoice != "EXIT":
#     print("You are in the GAME")
#     exitChoice = input("Press return to play again, or type Exit to leave.")

#28 ** степень
# aliens = 2
# password = "ALIENS"
# print("Bla bla bla")
# print("Bla bla bla")
# print("Bla bla bla")
# print()
# print("Bla bla bla")
# print("Bla bla bla")
# print("Bla bla bla")
# print()
# guess = input("Please enter the password: ").upper()
# while guess != password:
#     print()
#     print("Incorrect PASSWORD")
#     print()
#     aliens = aliens**2
#     print("There are", aliens, "aliens now on Earth. Try again!")
#     if aliens > 7_400_000_000:
#         break
#     print()
#     print("Password hint: the things that are attacking us.")
#     print()
#     guess = input("Please enter the password: ").upper()
# if aliens> 7_400_000_000:
#     print("Nooooo! The aliens have outnumbered us. All is lost.")
# else:
#     print("Hooray! We won the fight and the world is saved!")

# 30

# import random
# number = random.randint(1,20)
# guess = int(input("I'm thinking of a number from 1 to 20. What is it?"))
# while guess != number:
#     if guess < number:
#         print("Your number was too low...")
#         print("Need more")
#     else:
#         print("Your number was too high...")
#     guess = int(input("Please try again..."))
# print("Congratulations! Correct answer!")

# 32

# for x in range (0,10):
#     print(x)

# 34

# table = int(input("Please enter a times table: "))
# for x in range(0,13):
#     print(x, "x", table, "=", x*table)

# 35

# for x in range(1, 5):
#     print("Bleep")
#     for x in range(1, 5):
#         print("Bloop")
#     print("Bzzzt")

# 36

# spacelist = ["rocket", "planet", "asteroid", "alien"]
# print(spacelist[0])
# print(spacelist[2])
# spacelist[0] = "planet zarg"
# for item in spacelist:
#     print(item)

# del spacelist[0]
# print("rockes is DEAD")
# print(spacelist[0])

# spacelist.append("moon")
# print()
# print("concat")
# print()
# spacelist1 = ["rocket", "planet", "asteroid", "alien"]
# spacelist2 = ["space station", "star", "black hole"]
# spacelist = spacelist1 + spacelist2
# for item in spacelist:
#     print(item)


# 38

# woman = ["A scientist", "A queen", "A pirate", "A giant rabbit"]
# man = ["a police officer", "an artist", "your grandfather", "a killer robot"]
# place = ["on Pluto.", "at the supermarket.", "in a spooky, bat-filled cave."]
# sheWore = ["scuba diving gear.", "fairy wings.", "a paper bag."]
# heWore = ["a purple suit.", "a shark costume.", "a beach towel."]
# womanSays = ["Who are you?'", "How many beans make five?'", "'Why?'"]
# manSays = ["Beep boop!", "Don't eat frogs!", "What time do you call this?'"]
# consequence = ["world peace.", "chaos.",
#                "a giant foot squashed them.", "rainbows."]
# worldSaid = ["Errant nonsense!", "Cheese is trending now.'", "I'm melting!'"]

# while True:
#     print(random.choice(woman), "met", random.choice(man), random.choice(place))
#     print("She was wearing", random.choice(sheWore))
#     print("He was wearing", random.choice(heWore))
#     print("She said, ", random. choice(womanSays))
#     print("He said, ", random. choice(manSays))
#     print("The consequence was", random. choice(consequence))
#     print("The world said, ", random. choice(worldSaid))
#     print()
#     input("Press enter to play again.")
#     print()

# 40

# powers = {"The Pigeon": "flight",
#           "Brainzar": "mind reader", "Cyborg": "control machines"}
# print(powers["The Pigeon"])
# powers["Laser Girl"] = "shoots lasers"
# print(powers)
# del powers["The Pigeon"]
# print(powers)

# 41

# alienDictionary = {"we": "vorag", "come": "thang", "in": "zon", "peace": "argh", "hello": "kodar", "can": "znak", "i": "az", "borrow": "liftit",
#                    "some": "zum", "rocket": "upgoman", "fuel": "kakboom", "please": "selpin",
#                    "don't": "baaaaaaaaaaaarn", "shoot": "flabil", "welcome": "unkip",
#                    "our": "mandig", "new": "brang", "alien": "marangin", "overlords": "bap"}
# englishPhrase = input("Please enter an English word or phrase to translate: ")
# # englishPhrase = "HI there. We are alien. Welcome to hell. Earth is our now. It's new our planet."
# englishWords= englishPhrase.lower().split()

# alienWords = []
# for word in englishWords:
#     if word in alienDictionary:
#         alienWords.append(alienDictionary[word])
#     else:
#         alienWords.append(word)
# print("In alien, say: ", " ".join(alienWords))

# 42

# alphbet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"

# # stringToEncrypt = input("Please enter a message to encrypt: ").upper()
# encryptedPhrase = "O NUVK TU KTSE YVOKY GXK XKGJOTM ZNOY HUUQ, UX ZNKE'RR IXGIQUX IUJK"
# # encryptedPhrase = "DOG"
# stringToEncrypt = encryptedPhrase.upper()

# # shiftAmount = int(input("Please enter a whole number from 1-25 to be your key"))
# shiftAmount = 6
# shiftAmount = -1*shiftAmount # for encrypt
# encryptedString = ""
# for currentCharacter in stringToEncrypt:
#     position = alphbet.find(currentCharacter)
#     newPosition = position + shiftAmount
#     if currentCharacter in alphbet:
#         encryptedString = encryptedString + alphbet[newPosition]
#     else:
#         encryptedString = encryptedString + currentCharacter
# print(encryptedString)

# 46

# from turtle import *
# color("blue")
# shape("turtle")
# speed(10)
# pensize(4)

# # forward(50)
# # right(90)
# # forward(50)
# # right(90)
# # forward(50)
# # right(90)
# # forward(50)
# # right(90)
# angle =7  # 3- triangle 4- square 8 - octagon
# for x in range(angle):
#     forward(50)
#     right(360/angle)

# 48, 52(+randomed colour)

# shape("turtle")
# speed(0)
# pencolor("white")
# pensize(6)
# Screen().bgcolor("turquoise")
# colours = ["blue", "purple", "cyan", "white", "yellow", "green", "orange"]
# def vshape(size):
#     right(25)
#     forward(size)
#     backward(size)
#     left(50)
#     forward(size)
#     backward(size)
#     right(25)
# def snowflakeArm(size):
#     vCount = 4
#     for x in range(0, vCount):
#         color(random.choice(colours))
#         forward(size)
#         vshape(size)
#     backward(vCount*size)
# def snowflake(size):
#     rayCount = 18
#     color(random.choice(colours))
#     for x in range(0, rayCount):
#         snowflakeArm(size)
#         right(360/rayCount)
# for i in range(0, 10):  # number of snowflakes
#     size = random.randint(5, 30)
#     x = random.randint(-400, 400)
#     y = random.randint(-400, 400)
#     penup()
#     goto(x, y)
#     pendown()
#     snowflake(size)
# snowflake(size)

# 54 dont work in VSCode

# window = tkinter.Tk()
# button = tkinter.Button(window, text="Do not press this button.", width=40)
# button.pack(padx=10, pady=10)
# clickCount = 0


# def onClick(event):
#     global clickCount
#     clickCount = clickCount + 1
#     if clickCount == 1:
#         button.configure(text="Seriously? Do. Not. Press. It.")
#     elif clickCount == 2:
#         button.configure(text="Gah! Next time, no more button.")
#     else:
#         button.pack_forget()


# button.bind("<ButtonRelease-1>", onClick)
# window.mainloop()

# 56

# window = tkinter.Tk()
# canvas = tkinter.Canvas(window, width=750, height=500, bg="white")
# canvas.pack()
# lastX, lastY = 0, 0
# colour = "black"
# def store_position(event):
#     global lastX, lastY
#     lastX = event.x
#     lastY = event.y
# def on_click(event):
#     store_position(event)
# def on_drag(event):
#     canvas.create_line(lastX, lastY, event.x, event.y, fill=colour, width=3)
#     store_position(event)
# canvas.bind("<Button-1>", on_click)
# canvas.bind("<B1-Motion>", on_drag)
# red_id = canvas.create_rectangle(10, 10, 30, 30, fill="red")
# blue_id = canvas.create_rectangle(10, 35, 30, 55, fill="blue")
# black_id = canvas.create_rectangle(10, 60, 30, 80, fill="black")
# white_id = canvas.create_rectangle(10, 85, 30, 105, fill="white")
# def set_colour_red(event):
#     global colour
#     colour = "red"
# def set_colour_blue(event):
#     global colour
#     colour = "blue"
# def set_colour_black(event):
#     global colour
#     colour = "black"
# def set_colour_white(event):
#     global colour
#     colour = "white"
# canvas.tag_bind(red_id, "<Button-1>", set_colour_red)
# canvas.tag_bind(blue_id, "<Button-1>", set_colour_blue)
# canvas.tag_bind(black_id, "<Button-1>", set_colour_black)
# canvas.tag_bind(white_id, "<Button-1>", set_colour_white)
# window.mainloop()

# 60

# gameOver = False
# score = 0
# squaresToClear = 0
# bombfield = []
# fieldSize = 10
# textByDefault = "     "
# def play_bombdodger():
#     create_bombfield(bombfield)
#     window = tkinter.Tk()
#     layout_window(window)
#     window.mainloop()
# def create_bombfield(bombfield):
#     global squaresToClear
#     for row in range(0, fieldSize):
#         rowList = []
#         for column in range(0, fieldSize):
#             if random.randint(1, 100) < 20:
#                 rowList.append(1)
#             else:
#                 rowList.append(0)
#                 squaresToClear = squaresToClear + 1
#         bombfield.append(rowList)
#     # printfield(bombfield)
# def printfield(bombfield):
#     for rowList in bombfield:
#         print(rowList)
# def layout_window(window):
#     for rowNumber, rowList in enumerate(bombfield):
#         for columnNumber, colunEntry in enumerate(rowList):
#             global textByDefault
#             if random.randint(1, 100) < 25:
#                 square = tkinter.Label(
#                     window, text=textByDefault, bg="darkgreen")
#             elif random.randint(1, 100) > 75:
#                 square = tkinter.Label(
#                     window, text=textByDefault, bg="seagreen")
#             else:
#                 square = tkinter.Label(window, text=textByDefault, bg="green")
#             square.grid(row=rowNumber, column=columnNumber)
#             square.bind("<Button-1>", on_click)
# def on_click(event):
#     global score
#     global gameOver
#     global squaresToClear
#     global textByDefault
#     square = event.widget
#     row = int(square.grid_info()["row"])
#     column = int(square.grid_info()["column"])
#     currenText = square.cget("text")
#     if gameOver == False:
#         if bombfield[row][column] == 1:
#             gameOver = True
#             square.config(bg="red")
#             print("Game Over! You hit a bomb!")
#             print("Your score was:", score)
#         elif currenText == textByDefault:
#             square.config(bg="brown")
#             totalBombs = 0
#             if row < 9:
#                 if bombfield[row+1][column] == 1:
#                     totalBombs = totalBombs + 1
#             if row > 0:
#                 if bombfield[row-1][column] == 1:
#                     totalBombs = totalBombs + 1
#             if column > 0:
#                 if bombfield[row][column-1] == 1:
#                     totalBombs = totalBombs + 1
#             if column < 9:
#                 if bombfield[row][column+1] == 1:
#                     totalBombs = totalBombs + 1
#             if row > 0 and column > 0:
#                 if bombfield[row-1][column-1] == 1:
#                     totalBombs = totalBombs + 1
#             if row < 9 and column > 0:
#                 if bombfield[row+1][column-1] == 1:
#                     totalBombs = totalBombs + 1
#             if row > 0 and column < 9:
#                 if bombfield[row-1][column+1] == 1:
#                     totalBombs = totalBombs + 1
#             if row < 9 and column < 9:
#                 if bombfield[row+1][column+1] == 1:
#                     totalBombs = totalBombs + 1
#             square.config(text=" " + str(totalBombs) + " ")
#             squaresToClear = squaresToClear - 1
#             score = score + 1
#             if squaresToClear == 0:
#                 gameOver = True
#                 print("Well done! You found all the safe squares!")
#                 print("Your score was:", score)
# play_bombdodger()
