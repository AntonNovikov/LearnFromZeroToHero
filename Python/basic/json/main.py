import json;
import os
print(os.chdir("C:\project\LearnFromZeroToHero\Python\/basic\json"))
with open("data.json") as file:
    data = json.load(file)
    # print(file)
print(data)
