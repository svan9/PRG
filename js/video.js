const video = document.querySelector("video-container"),
  image = document.querySelector("image-container");
var link = document.querySelector("link[rel='icon']");

window.onscroll = () => {
  if ((window.pageYOffset || document.documentElement.scrollTop) >= 100)
    document.querySelector(".nav-bar").classList.add("fixed");
  else document.querySelector(".nav-bar").classList.remove("fixed");
};

if (!getCookie("page")) setCookie("page", "image");

document.querySelector("label#" + getCookie("page")).classList.add("curret");
document.querySelectorAll("div.nav-bar > label").forEach((i) => {
  i.addEventListener("click", (e) => {
    if (getCookie("page") != e.target.id) {
      document.location.reload();
      setCookie("page", e.target.id);
    }
  });
  i.addEventListener("mouseover", (e) => {
    if (e.target != document.querySelector("label#" + getCookie("page"))) {
      document.querySelectorAll("div.nav-bar > label").forEach((i) => {
        i.classList.remove("curret");
      });
    }
    e.target.classList.add("curret");
  });
  i.addEventListener("mouseleave", (e) => {
    if (e.target != document.querySelector("label#" + getCookie("page"))) {
      e.target.classList.remove("curret");
    }
  });
});

document.querySelector("div.nav-bar").addEventListener("mouseleave", (e) => {
  setTimeout(() => {
    document
      .querySelector("label#" + getCookie("page"))
      .classList.add("curret");
  }, 0);
});

switch (getCookie("page")) {
  case "image":
    document.querySelector(".container").innerHTML =
      "<image-container></image-container>";
    break;
  case "video":
    document.querySelector(".container").innerHTML =
      "<video-container></video-container>";
    break;
  default:
    document.querySelector(".container").innerHTML = "";
    break;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
console.log(document.location);
>>>>>>> 6bb49d62eeaa962580d5dd7bcb50760565f79ac9
=======
console.log(document.location);
>>>>>>> 6bb49d62eeaa962580d5dd7bcb50760565f79ac9
=======
console.log(document.location);
>>>>>>> 6bb49d62eeaa962580d5dd7bcb50760565f79ac9
=======
console.log(document.location);
>>>>>>> 6bb49d62eeaa962580d5dd7bcb50760565f79ac9
=======
console.log(document.location);
>>>>>>> 6bb49d62eeaa962580d5dd7bcb50760565f79ac9
fetch(document.location.href+"/source/list.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (document.querySelector("image-container")) {
      for (let i in data.images) {
        document.querySelector(
          "image-container"
        ).innerHTML += `<div class="img"><label>${
          data.images[i].split(".")[0]
        }</label><img id="${data.images[i]}" src="source/image/${
          data.images[i]
        }"></img></div>`;
      }
    }
    if (document.querySelector("video-container")) {
      for (let i in data.videos) {
        let elem = document.querySelector("video-container");
        elem.innerHTML += `
      <div id="v${data.videos[i].split(".")[0]}">
        <label>${data.videos[i].split(".")[0]}</label>
        <video autoplay loop muted>
          <source src="source/video/${data.videos[i]}">
          </video>
      </div>`;
        elem
          .querySelector("#v" + data.videos[i].split(".")[0])
          .addEventListener("click", e => {
            console.log(e.target);
          });
      }
    }
  });
