<template>
  <div class="top container">
    <div class="arrow" @click="store.goBack()">
      <i class="fas fa-long-arrow-alt-left"></i>
    </div>
    <div class="title-container title">
    Profile
    </div>
  </div>

  <div class=" user-detail-page container" v-if="selectedUser" >
    <div class="user-top">
    <div class="profile-image">
      <img :src="selectedUser.picture.large" :alt="selectedUser.name.first">
    </div>
      <div class="user-info">
    <div class="detail-name"><h3 class="user-name">{{ selectedUser.name.first }} {{ selectedUser.name.last }}</h3></div>
    <div class="detail-user mb-2"> <span>@{{ selectedUser.login.username }}</span> </div>
    <div class="detail-bio"><p>Lorem ipsum dolor sit amet</p></div>
      </div>
    </div>
    <div class="stats container mt-3">

      <div>
        <div class="stat-label">Posts</div>
        <div class="stat-number">750</div>

      </div>
      <div>
        <div class="stat-label">Followers</div>
        <div class="stat-number">2.5K</div>

      </div>
      <div>
        <div class="stat-label">Following</div>
        <div class="following-number">1.2K</div>

      </div>
    </div>
  </div>
  <div class="video container">
  <div class="example-video" v-for="user in users" :key="user.id">
    <img :src="user.picture.large" :alt="user.name.first">
    <div class="like-count">
      <i class="far fa-heart"></i>
      <span> 50k </span>
    </div>
    <div class="comment-icon">
      <i class="fas fa-comment"></i>
      <span> 3k </span>
    </div>
  </div>
  </div>
  <Nav></Nav>
</template>

<script>
import { useUserStore } from "../store/main";
import { storeToRefs } from "pinia";
import Nav from "../components/Nav.vue";
export default {
  components: {Nav},

  setup() {
    const store = useUserStore();
    const {users} = storeToRefs(store)
    return {users, store};
  },


  data() {
    return {
      selectedUser: null
    }
  },
  mounted() {
    const selectedId = this.$route.params.username
    this.selectedUser = this.users.find((item) => {
      if (item.login.username === selectedId) {
        return item
      }
    })
  }
}
</script>

<style scoped>
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
.stat-number {
  border-right: 1px solid #DCDEE0;

  padding-right: 70px;
}
.user-detail-page {
  border-bottom: 1px solid white;
  margin-bottom: 15px;
}





.comment-icon {
  position: absolute;
  bottom:10px;
  left: 10px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 14px;
}
.comment-icon i {
  font-size: 20px;
  margin-right: 8px;
}
.like-count {
  position: absolute;
bottom:10px;
  right: 10px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 14px;
}

.like-count i {
  font-size: 20px;
  margin-right: 8px;

}

.like-count span {
  margin-right: 10px;
}
.example-video {
margin-right: 10px;
  margin-bottom: 10px;
  position: relative;
}
.example-video img{
  width: 190px;
  height: 210px;
}
.video {
  display: flex;
  flex-wrap: wrap ;
  justify-content: center;
}
.user-top {
  display: flex;

}
.user-info {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  color: white;
margin-top: 20px;
}

.stat-label {
  color: #52697E;
}
.stat-number {
  color: white;
  font-size:24px
}
.top {
  display: flex;
  align-items: center;
  color: white;
  height: 100px;
}

.arrow {
  margin-left: 4px;
  height: 60px;
  display: flex;
  align-items: center;
}

.arrow i {
  font-size: 33px;
}



.title-container {
  flex: 1;
  text-align: center;
}

.profile-image {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 3px solid #e1306c;
  margin-bottom: 20px;
  padding: 5px;
  box-sizing: border-box;
  overflow: hidden;
}
.profile-image img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

.stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.stats div {

}
.stats .stat-number {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}
.following-number{
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
  color: white;
}
.stats .stat-label {
  font-size: 14px;
  color: #555;
}
</style>