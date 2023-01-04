# https://pythonist.ru/test-na-znanie-strok-i-simvolnogo-tipa/?utm_source=telegram&utm_medium=pythonist

s = 'foo'
t = 'bar'
print('barf' in 2*(s+t))


# print(ord('foo')) # TypeError


# s[:0:-3] #
# s[-1:0:-3] #
# s[::-3]
# s[-1:0:3]

s = "foobar"
print(
    s[0] + s[-1],
    s[::-1][::-5],
    s[::-5],  # false
    s[::-1][-1] + s[len(s)-1],
    s[::5]
)

print(
    s[:] == s,
    s[:] is s,
    s[::-1][::-1] == s,
    s[::-1][::-1] is s
)

print(
    '$100 $200 $300'.count('$'),
    '$100 $200 $300'.count('$', 5, 10),  # start end
    '$100 $200 $300'.count('$', 5)
)

s = 'foo-bar-baz'
print(
  s.strip('-'),
  '-'.join(s.partition('-')),
  s.center(15),
  s.upper().lower(),
  s.upper(),
  '-'.join(s.split('-'))
)

# bytes(0, 0, 0, 0, 0) # false
bytes(5) 
bytes([0] * 5)
bytes('\x00\x00\x00\x00\x00', 'utf-8')

# print(list((b'abcde' + 'fghi')[3:6])) # TypeError