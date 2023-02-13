# 12

# print(3+3)

# 18

# print("Мне 34 годиков")
# print(123+456*7/8)
# print(''.join(reversed("Время программировать")))

# 19

# if(1%2): # True or False
#     print("true 1")
# # for counter in range(10):
# for counter in range(2,12,3): # MY
#     # if counter % 2 == 0 :
#     # if (counter % 2 == 0) :
#     # if (counter % 2) == 0 :
#     if ((counter % 2) == 0) :
#         print(counter)
#         print("even (четное)")
#         print("")
#     else:
#         print(counter)
#         print("odd (нечетное))")
#         print("")


# 22

# print("Hello, world")
# # name = input('How are you?')
# name = "Tony"
# print(' Hello one, ', name)


# greeting = "Hello, "
# message = greeting + name
# print(message)
# print("lenght of string: " + str((len(message))), len(message))  # 2 varieties

# a = 10
# b = 4
# print(a < b)  # false это

# # 27

# fruits = ["orange", "apple", "pear"]
# boy_names = ['Alex', "Bob", "Henry II"]
# # https://www.verywellfamily.com/top-1000-baby-girl-names-2757832
# girl_names = ["Olivia", "Emma", "Charlotte",
#               "Amelia", "Ava", "Sophia", "Isabella", "Mia"]
# print(boy_names[0])

# страница 29

# # boolean
# true = True
# false = False
# trueToo = not(False)
# print(trueToo)
# age = 10
# print(age)
# if age == 10:
#     print('Hello world')
# == equals
# != not equals
# < less, than
# > more, than
# is_dark = input('I's time to sleeppp? yes / no )')
# is_dark = 'yes'
# if is_dark == 'yes':
#     print('good  niby bybb yb! zz/zZzz/Z/zzz. ')
# and
# age = 21
# hasDriverLicense = True
# if age >= 21 and (hasDriverLicense):
#     print("you may keep drive away")

# 32

# for item in range (1,10,2):
#     print(item)
# question = 0
# answer = "yes"
# while answer == "yes":
#     question = question +1
#     answer = input("Do you want any question more? (yes/yes)")

# def check_answer(answerIn, answer):
#     global score
#     isNotAnswered = True
#     attempt = 0
#     while isNotAnswered and attempt < 3:
#         if answerIn.upper() == answer.upper():
#             print("it's right... god...")
#             score = score + 3 - attempt
#             isNotAnswered = False
#         else:
#             if attempt < 2:
#                 answerIn = input("You don't know.. try again...")
#             attempt = attempt + 1
#     if attempt == 3:
#         print("Almost...See here... answer is ", answer)


# score = 0
# english_words = ("Cat", "Dog")
# russian_words = ("Кошка", "Собака")
# print("Test your English")

# answerIn = input("Translate to Russian " + english_words[0] + ": ")
# check_answer(answerIn, russian_words[0])

# print("Your score: ", score)

# 45

# maxString = max("d", "s", "a")
# maxNumber = max(2, 6, 1)

# print(maxString)
# print(maxNumber)

# min()

# upper lower

# replace

# message = "Hello world"
# newMessage = message.replace("o", "O")  # replaceAll
# print(newMessage)

# # reverse
# alphabet = ["a", "b", "c"]
# alphabet.reverse()
# print(alphabet)


# https://defpython.ru/kak_v_python_poluczit_tekusczuu_datu_i_vremya
# import datetime
# nowTime = datetime.datetime.now()

# print (nowTime.strftime("%d-%m-%Y %H:%M"))
# print (nowTime.isoformat())

# function
# def show_real_time():
#     print("joke")


# show_real_time()

# import webbrowser
# import math
# import string
# import random

# lists = ("A", "b", "C", "d", "E")
# print(random.choice(lists))
# print(random. randrange(42, 43))
# print(string.punctuation)
# symbol = random.choice(string.punctuation) + " "
# print('Random symbol: %s' % symbol)


# print("dfs" + str(42))

# print(math.pi)
# print(math.sqrt(64))

# # 60 degrees = 1.04 radians
# print(math.radians(60))

# # Sine of 2 radians
# print(math.sin(2))

# # Cosine of 0.5 radians
# print(math.cos(0.5))

# # Tangent of 0.23 radians
# print(math.tan(0.23))

# # 1 * 2 * 3 * 4 = 24
# print(math.factorial(4))


# # lists of modules
# # statistics
# # random
# # socket
# # datetime
# # webbrowser

# webbrowser. open('google.com')

# game виселица...

# import random
# lives = 10
# words = ["apple", "juice", "horse", "dirty"]
# secret_word = random.choice(words)
# clue = list('?????')
# heart_symbol = u'\u2764'
# guessed_word_correctly = False


# def update_clue(guessed_letter, secret_word, clue):
#     index = 0
#     while index < len(secret_word):
#         if guessed_letter == secret_word[index]:
#             clue[index] = guessed_letter
#         index = index+1


# while lives > 0:
#     print(clue)
#     print('Осталось жизней:'+heart_symbol*lives)
#     guess = input('Угадайте букву или слово целиком:')
#     if guess == secret_word:
#         guessed_word_correctly = True
#         break

#     if guess in secret_word:
#         update_clue(guess, secret_word, clue)
#     else:
#         lives = lives - 1
#         if lives:
#             print('Wrong.You lose one live')
#         else:
#             print('Wrong.You lose last live')
# if guessed_word_correctly:
#     print(' Победа! Было загадано слово ' + secret_word)
# else:
#     print(' Проигрыш! Было загадано слово ' + secret_word)
