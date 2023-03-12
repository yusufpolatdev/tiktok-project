import {defineStore} from "pinia";
import axios from "axios";
import {ref} from "vue";

export const useUserStore = defineStore('user', {

    state: () => ({

        users: ref([])

    }),

    actions: {
      fetchUser() {
          axios.get('https://randomuser.me/api/?results=10')
              .then(response => {
                  this.users = response.data.results
                  console.log(this.users)
              })
              .catch(error => {
                  console.log(error);
              });
      },
        goBack() {
            window.history.back();
        }

    },





})

