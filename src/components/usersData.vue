<template>
  <div v-if="!store.isLoading">
    <div v-if="store.searchedData.length > 0">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in store.searchedData" :key="user.id">
            <td>
              <router-link :to="{ name: 'UserDetails', params: { id: user.id } }">
                {{ user.name }}
              </router-link>
            </td>
            <td>
              <router-link :to="{ name: 'UserDetails', params: { id: user.id } }">
                {{ user.email }}
              </router-link>
            </td>
            <td>
              <router-link :to="{ name: 'UserDetails', params: { id: user.id } }">
                {{ user.address.city }}
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>No match</p>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '../stores/users.ts'
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'

const store = useUserStore()
onMounted(() => {
  return store.getUsers('https://jsonplaceholder.typicode.com/users')
})
</script>

<style lang="scss" scoped>
a {
  font-size: 1.2rem;
}
table {
  border-collapse: collapse;
  min-width: 100%;
  @media screen and (max-width: 600px) {
    overflow-x: auto;
    display: block;
  }
}

th,
td {
  border: 1px solid gray;
  padding: 10px;
  @media screen and (max-width: 600px) {
    white-space: nowrap;
  }
}
</style>
