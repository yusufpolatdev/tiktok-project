<template>
  <div class="title mt-3">
    Settings
  </div>
<div class="settings ">
  <div class="settings-item">
    <div class="settings-icon">
      <i class="fas fa-comment-dots"></i>
    </div>
    <div class="settings-info">
      <p> Terms of Use </p>
      <span> Terms and Conditions</span>
    </div>
    <div class="settings-item-details">
      <i class="fas fa-chevron-right"></i>

    </div>

  </div>
  <div class="settings-item">
    <div class="settings-icon">
      <i class="fas fa-user-friends"></i>

    </div>
    <div class="settings-info">
      <p> Rate Us </p>
      <span> Write a review</span>
    </div>
    <div class="settings-item-details">
      <i class="fas fa-chevron-right"></i>

    </div>

  </div>
  <div class="settings-item">
    <div class="settings-icon">
      <i class="fas fa-lock"></i>


    </div>
    <div class="settings-info">
      <p> Privacy </p>
      <span> Privacy Policy </span>
    </div>
    <div class="settings-item-details">
      <i class="fas fa-chevron-right"></i>

    </div>

  </div>
  <div class="settings-item">
    <div class="settings-icon">
      <i class="fas fa-question-circle"></i>



    </div>
    <div class="settings-info">
      <p>Help</p>
      <span> Help center,contact us </span>
    </div>
    <div class="settings-item-details">
      <i class="fas fa-chevron-right"></i>

    </div>

  </div>

</div>

  <Nav></Nav>
</template>

<script>
import Nav from "../components/Nav.vue";

export default {
  name: "SettingsPage",
  components: {Nav}
}
</script>

<style scoped>
.settings-item:last-child {
  border-bottom: none;
}
.settings-icon {
  display: flex;
  justify-content: center;
  align-items: center;
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

.settings {
  color: white;
  margin-left: 25px;
  height: 592px;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.settings-info {
  display: flex;
  flex-direction: column;
width: 350px;
  margin-left: 20px;
}

.settings-item {
  display: flex;
  border-bottom: 1px solid #E4EBEC;
  width: 410px;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-bottom: 20px;

}

.settings-info span {
  color: #A4B5C5;
  font-size: 13px;
}
.settings-info p {
  font-size: 16px;
  margin-bottom: 0px!important;
}
.settings-item-details {
  display: flex;
  align-items: center;
}
.settings-item-details i {
  color: #B5C4DB;
}
</style>