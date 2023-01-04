import sys
a = [1, 2]
b = [1, 2, 3, 4]
c = [1, 2, 3, 4, "5"]
d = [1, 2, 3, 4, 33, 44, 56, 79]

print(sys.getsizeof(a))
print(sys.getsizeof(b))
print(sys.getsizeof(c))
print(sys.getsizeof(d))
# метод Update добавляет элементы во множество
e = {3,4,5}
e.update([1,2,3])
print(e)