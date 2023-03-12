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

}

</script>

<template>
<div class="title mt-3"> Home </div>
  <div class="search-container">
    <input type="text" placeholder="Search...">
    <i class="fas fa-search"></i>
  </div>
  <div class="top-users container mt-2">

    <div class="top-users-title"> Top Users </div>
    <div class="users">
    <div class="top-user" v-for="user in users" :key="user.id">
      <router-link :to="`/${user.login.username}`">
      <div class="user">
        <img :src="user.picture.large" :alt="user.name.first">
        <div class="user-info mt-2">
          <h3 class="user-name">{{ user.name.first }} {{ user.name.last }}</h3>
          <span class="username">@{{ user.login.username }}</span>
        </div>
      </div>
      </router-link>
    </div>

  </div>
  </div>

<Nav></Nav>

</template>

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
.search-container {
  position: relative;
  display: flex;
  justify-content: center;
}


.search-container input[type="text"] {
  padding-left: 50px;
  border-radius: 20px;
  border: none;
  outline: none;
  font-size: 14px;
  width: 400px;
  height: 45px;
}

.search-container i {
  position: absolute;
  left: 50px;
  top: 15px;
  color: #A8BEC1;
  font-size: 16px;

}
.top-users-title {

  font-style: normal;
  font-size:24px;
  line-height: 100%;
  display: flex;
  justify-content: flex-start;
  height: 70px;
  align-items: center;
  color: white;
}


.users {
  display: flex;
  flex-wrap: wrap;
}
.top-user {
  margin-right: 30px;
  margin-left: 30px;
  width: 150px;
}

.user-name {
  font-size: 16px;
}

.username {
  color: #52697E;
  font-size: 14px;

}

img {
  height: 150px;
  width: 150px;
}
.user-info {
 text-align: center;
  margin-bottom: 20px;
  color: white;
}

a {
  text-decoration: none;
}

</style>
