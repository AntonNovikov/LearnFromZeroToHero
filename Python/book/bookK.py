# C:\project\LearnFromZeroToHero\python\book>
# python bookk.py
# python python/book/bookk.py


# 4,7
def page4():
    print("Hello World!")


# 9
print(2+2)  # 4
print(2-2)  # 0
print(2*2)  # 4
print(2/2)  # 1.0
# self
print("a"*2)  # aa
# print("a"+2) # error

# 10,11
bananas = 5
# bananas = 10 #
bananasEaten = 2
print(bananas-bananasEaten)  # 3 or 8(if revalue bananas in line 15 )
exampleString = "I am a string"

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
age = 10
print(age == 12)  # false
print(age == 10)  # true
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

spacelist = ["rocket", "planet", "asteroid", "alien"]
print(spacelist[0])
print(spacelist[2])
spacelist[0] = "planet zarg"
for item in spacelist:
    print(item)

del spacelist[0]
print("rockes is DEAD")
print(spacelist[0])

spacelist.append("moon")
print()
print("concat")
print()
spacelist1 = ["rocket", "planet", "asteroid", "alien"]
spacelist2 = ["space station", "star", "black hole"]
spacelist = spacelist1 + spacelist2
for item in spacelist:
    print(item)


# 38 