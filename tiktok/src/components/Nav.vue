<template>
  <div class="nav">
    <nav class="mt-3">
      <ul>
        <router-link to="/">
        <li  class="home" @click="activeMenu = 'home'">
          <i :class="{ active: activeMenu === 'home' }" class="fas fa-home"></i>
          <p :class="{ active: activeMenu === 'home' }" > Home </p>
        </li>
        </router-link>
        <router-link to="/premium">
        <li   class="search" @click="activeMenu = 'search'">
          <i :class="{ active: activeMenu === 'search' }" class="fas fa-user-friends"></i>
          <p :class="{ active: activeMenu === 'search' }" > Search </p>
        </li>
        </router-link>
        <router-link to="/hashtags">
        <li  class="hashtags" @click="activeMenu = 'hashtags'">
          <i :class="{ active: activeMenu === 'hashtags' }"  class="fas fa-paperclip"></i>
          <p :class="{ active: activeMenu === 'hashtags' }" >  Hashtags </p>
        </li>
        </router-link>
        <router-link to="/settings">
        <li  class="settings" @click="activeMenu = 'settings'">
          <i :class="{ active: activeMenu === 'settings' }" class="fas fa-user-circle"></i>
          <p :class="{ active: activeMenu === 'settings' }" > Settings </p>

        </li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: 'home'
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.nav {
  background-color: #2C3643;
  display: flex;
  width: 468px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  position: sticky;
  bottom: 0;
  height: 100px;
  align-items: center;
}

.active {
  color: #FF4D67;
}

i {
  color: #6A798A;
  font-size: 24px;
  margin-bottom: 5px;
}

.nav ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 438px;
}

.nav li {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav li:last-child {
  margin-right: 0;
}

p {
  color: #6A798A;
  font-size: 14px;
  margin: 0;
  text-align: center;
}

</style>
