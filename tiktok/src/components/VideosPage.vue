<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="user in users" :key="user.id">
        <img :src="user.picture.large" :alt="user.name.first" class="fullscreen-image">
        <div class="arrow">
     <i  class="fas fa-long-arrow-alt-left" @click="store.goBack()"></i>
        </div>

        <div class="actions">
          <div class="action">
            <i class="far fa-heart"></i>
            <span>100</span>
          </div>
          <div class="action">
            <i class="far fa-comment"></i>
            <span>50</span>
          </div>
          <div class="action">
            <i class="fas fa-map-marker"></i>
            <span>20</span>
          </div>
          <div class="action">
            <i class="fas fa-share"></i>
            <span>20</span>
          </div>

        </div>
        <div class="z">
          <div class="xd">
          <div class="video-profile-image">
            <img :src="user.picture.large" :alt="user.name.first">
          </div>
          <div class="user-info">
            <div class="video-name"><h3 class="user-name">{{ user.name.first }} {{ user.name.last }}</h3></div>
            <div class="video-user mb-2"> <span>@{{ user.login.username }}</span> </div>

          </div>

          </div>
          <div class="video-bio"><p>Lorem ipsum dolor sit amet</p></div>
        </div>
        <div class="video-buttons">
          <button class="download-button">
            <i class="fas fa-arrow-down"></i>
            Download HD
          </button>

          <button class="share-button">
            <i class="fas fa-arrow-up"></i>
            Share
          </button>


        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { useUserStore } from "../store/main";
import { storeToRefs } from "pinia";
import Swiper from 'swiper';


export default {
  setup() {
    const store = useUserStore();
    const { users } = storeToRefs(store);
    const swiper = new Swiper('.swiper-container', {
      direction: 'vertical', // dikey kaydırma için
      spaceBetween: 0, // slaytlar arasındaki boşluk
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      touchReleaseOnEdges: true // kullanıcının slaydın sonunda aşağı doğru çektiğinde hızlı bir şekilde bir sonraki slayda geçmesini sağlar
    });
    return { users, store, swiper };
  },



};
</script>

<style scoped>
.video-buttons {
  z-index: 1;
  display: flex;

  height: 700px;
  position: absolute;

  align-items: flex-end;
}
button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 10px;
  height: 50px;
  width: 200px;
}

/* Download butonu stilleri */
.download-button {
  background-color: #FF4D67;
}

.download-button i {
  margin-right: 10px;
}

/* Share butonu stilleri */
.share-button {
  background-color: #1E1E1E;
}

.share-button i {
  margin-right: 10px;
  transform: rotate(180deg);
}
.video-bio {
  color: white;
  margin-top:30px;
  margin-left: 14px;
}
.xd {
  display: flex;
width: 400px;
}
.video-profile-image img {
  width: 85%;
  height: auto;
  border-radius: 50%;
}
.user-info {
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 12px;
  justify-content: center;

}
.z {
  z-index: 1;
  display: flex;

height: 500px;
  position: absolute;

  flex-direction: column;
  justify-content: flex-end;

}

.arrow {
  z-index: 1;
  display: flex;

  height: 700px;
  position: absolute;
  justify-content: flex-start;
  width: 400px;
  align-items: flex-start;
  color: white;
}

.arrow i {
  font-size: 33px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fullscreen-image {
  width: 100vw;
  height: 100vh;
  object-fit: cover
}
.swiper-container {
  width: 100%;
  height: 100%;
  position: relative;
}



.actions {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1; /* Resmin üzerinde yer alması için z-index değeri ayarladık */
  margin-right: 20px;
}

.action {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
  color: white;
  font-size: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.action i {
  margin-right: 0.5rem;


}




</style>

;