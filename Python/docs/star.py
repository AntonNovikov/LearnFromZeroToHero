# https://docs.python.org/3/library/turtle.html#turtle.shape
from turtle import *
shape("turtle") # "arrow", "circle", "square", "triangle", "turtle", "classic".
color('red', 'yellow')
begin_fill()
speed(0)
while True:
    forward(200)
    left(170)
    position()
    if abs(pos()) < 1:
        break
end_fill()
done()


# http://itrobo.ru/programmirovanie/python/grafika-turtle-cherepashka-v-piton.html#:~:text=%D0%92%20%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D0%B5%20turtle%20%D0%B2%20%D0%9F%D0%B8%D1%82%D0%BE%D0%BD%D0%B5,turtle%22%2C%20%22classic%22.

# from turtle import *
# t = Turtle()
# t.screen.setup(1800, 800)
# t.write("itrobo.ru", "true", "right", font=("Arial", 8, 'normal', 'bold', 'italic', 'underline'))
# # t.screen.exitonclick()
# t.screen.mainloop()
