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

def check_answer(answerIn, answer):
    global score
    isNotAnswered = True
    attempt = 0
    while isNotAnswered and attempt < 3:
        if answerIn.upper() == answer.upper():
            print("it's right... god...")
            score = score + 3 - attempt
            isNotAnswered = False
        else:
            if attempt < 2:
                answerIn = input("You don't know.. try again...")
            attempt = attempt + 1
    if attempt == 3:
        print("Almost...See here... answer is ", answer)


score = 0
english_words = ("Cat", "Dog")
russian_words = ("Кошка", "Собака")
print("Test your English")

answerIn = input("Translate to Russian " + english_words[0] + ": ")
check_answer(answerIn, russian_words[0])

print("Your score: ", score)

# 45
