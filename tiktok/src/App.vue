
<script>
  import { useUserStore } from "./store/main";
  import { storeToRefs } from "pinia";

  import Nav from "./components/Nav.vue";
  export default {
    components: {Nav},

    setup() {
      const store = useUserStore();
      const {users} = storeToRefs(store)
      return {users, store};
    },
    async mounted() {
      await this.store.fetchUser();
    }
  }

</script>

<template>
<router-view> </router-view>

</template>

<style scoped>

</style>
