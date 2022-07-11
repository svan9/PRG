import os, json, random
from pathlib import Path

list_txt = open(os.path.abspath("./source/list.json"), "w+")


image = os.listdir(os.path.abspath("./source/image/"))
video = os.listdir(os.path.abspath("./source/video/"))
gif = os.listdir(os.path.abspath("./source/gif/"))

json_inner = {
    "images": image,
    "videos": video,
    "gifs": gif
}
json.dump(json_inner, list_txt)

os.system("cd C:/Users/ivans/OneDrive/Документы/GitHub/PRG")
for i in os.listdir(os.path.abspath("C:/Users/ivans/OneDrive/Документы/GitHub/PRG")):
    os.system("git add " + i)

os.system(f"git commit -m \""+str(random.random()).split(".")[-1][::-1]+"\"")
os.system(f"git push")
