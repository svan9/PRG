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
    # if i not in ("main.scss", "main.py", "start.bat"):
    if os.path.isfile(os.path.abspath(i)):
        print("git add " + i)
        os.system("git add " + i)
    else:
        for l in os.listdir(os.path.abspath(i)):
            print("git add " + i+"\\"+l)
            os.system("git add " + i+"\\"+l)
            

os.system(f"git commit -m \""+str(random.random()).split(".")[-1][::-1]+"\"")
os.system(f"git pull")
os.system(f"git push")

