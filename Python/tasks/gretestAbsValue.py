# https://pythonist.ru/naibolshee-absolyutnoe-znachenie/?utm_source=telegram&utm_medium=pythonist

# def major_sum(lst):
#     pos, neg, zero = 0, 0, 0
#     for n in lst:
#         if n > 0:
#             pos += n
#         elif n < 0:
#             neg += n
#         else:
#             zero += 1
#     return max(pos, neg, zero, key=abs)

def major_sum(lst):
    pos = sum([i for i in lst if i > 0])
    neg = sum([i for i in lst if i < 0])
    zero = lst.count(0)
    if abs(neg) > pos and abs(neg) > zero:
        return neg
    else:
        return max(pos, zero)

print(
major_sum([1, 2, 3, 4, 0, 0, -3, -2]), #➞ 10,
major_sum([-4, -8, -12, -3, 4, 7, 1, 3, 0, 0, 0, 0]), #➞ - 27
major_sum([0, 0, 0, 0, 0, 1, 2, -3]) #➞ 5
# Потому что -3 < 1+2 < 5
# (5 - количество нулей)
)