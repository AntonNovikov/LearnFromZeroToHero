import time

def fun():
    for i in range(100000):
        print(i)

stat = time.time()
fun()
end = time.time()
total = end - stat
print("Программа выполнилась за ", "%.2f" % total)        