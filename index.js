import { fetchData } from "./api/index.js";

const contentImg = document.getElementById("content-img");
const contetnInfo = document.getElementById("content-info");
const textInput = document.getElementById("text-input");
const btnGenerate = document.getElementById("btn-generate");
const contentCard = document.getElementById("content-card");

async function getProfile() {
  const text = textInput.value;
  const profile = await fetchData(text);
  return profile;
}

async function showCard() {
  const profile = await getProfile();

  if (!!profile.id) {
    contentCard.classList.remove("inactive");
    try {
      let view_img = `
      <img src="${profile.avatar_url}"/>
      `;
      let view_card = `
      <p>${profile.name}</p>
      <p>@${profile.login}</p>
      <div class="content-info__networks">
        <ul>
          <a href=""
            ><iconify-icon
              icon="bxl:whatsapp"
              style="color: black"
            ></iconify-icon
          ></a>
          <a href=""
            ><iconify-icon
              icon="bxl:facebook"
              style="color: black"
            ></iconify-icon
          ></a>
          <a href=""
            ><iconify-icon
              icon="akar-icons:instagram-fill"
              style="color: black"
            ></iconify-icon
          ></a>
          <a href=""
            ><iconify-icon
              icon="akar-icons:twitter-fill"
              style="color: black"
            ></iconify-icon
          ></a>
          <a href=""
            ><iconify-icon
              icon="fontisto:world-o"
              style="color: black"
            ></iconify-icon
          ></a>
        </ul>
      </div>
  
      <p class="content-info__description">
        ${profile.company}
      </p>
      <p>${profile.bio}</p>
  
      `;
      contentImg.innerHTML = view_img;
      contetnInfo.innerHTML = view_card;
      textInput.value = "";
    } catch (error) {
      console.log(error);
    }
  } else {
    window.alert("Usuario no encontrado");
  }
}

btnGenerate.addEventListener("click", showCard);
