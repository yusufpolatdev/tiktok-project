<template>
  <div class="top container">
    <div class="title-container title">
      Get Premium
    </div>
    <div class="arrow" @click="store.goBack()">
      <i class="fas fa-times"></i>
    </div>
  </div>
  <div class="premium">
    <h4> Yearly Premium </h4>
    <h1> 19.99/year </h1>
    <div class="outer-button">
      <div class="inner-button">
        <button class="button-1">Monthly    </button>
        <button class="button-2"> <span>Yearly </span></button>
      </div>
    </div>
  </div>
  <div class="premium-details ms-5">
    <div class="button-container">
      <div class="button-circle">
        <i class="fa fa-medal fa-flip-horizontal"></i>
      </div>
      <div class="premium-detail">
        <span> Get access to all premium features </span>
      </div>
    </div>
    <div class="button-container">
      <div class="button-circle">
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="premium-detail">
        <span> Unlimited Downloads </span>
      </div>
    </div>
    <div class="button-container">
      <div class="button-circle">
        <i class="fas fa-play"></i>
      </div>
      <div class="premium-detail">
        <span> No Ads </span>
      </div>
    </div>


  </div>

  <div class="start-trial d-flex justify-content-center ">
    <button class="my-button mt-5">Start 3-day free trial </button>

  </div>
</template>

<script>
import { useUserStore } from "../store/main";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = useUserStore();
    const { users } = storeToRefs(store);
    return { users, store };
  },
};
</script>

<style scoped>
.my-button {
  width: 370px;
  height: 70px;
  background-color: white;
  color: black;
  border-radius: 15px;
  border: none;
  font-size: 24px;

}

.title {
  font-style: normal;
  font-size:24px;
  line-height: 100%;
  display: flex;
  justify-content: center;
  height: 70px;
  align-items: center;
  color: white;
}

.button-container {
display: flex;
  color: white;
  margin-bottom: 20px;
  align-items: center;

}

.button-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  margin-right: 10px;
}

.button-circle i {
  font-size: 14px;
  color: #333;
}

.premium {
  display: flex;
  flex-direction: column;
align-items: center;
  color: white;
}
.outer-button {
  display: inline-block;
  position: relative;
  width: 250px;
  height: 80px;
  margin: 20px;

}

.inner-button {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}

.button-1 {
  position: relative;
  z-index: 2;
  display: block;
  width: 100%;
  height: 60px;
  margin-bottom: -10px;
  border-radius: 34px;
  border: none;
  background-color: rgba(255, 255, 255, 0.11);
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;

}

.button-2 {
  position: relative;
  z-index: 1;
  display: block;
  width: 60%;
  height: 60px;
  border-radius: 34px;
  background-color: white;

  color: #333;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;

  transform: translateX(-30%);
}




  .top {
  display: flex;
  align-items: center;
  color: white;
  height: 100px;
}

.arrow {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.arrow i {
  font-size: 14px;
  color: #333;
}



.title-container {
  flex: 1;
  text-align: center;
}
</style>