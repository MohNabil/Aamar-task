<template>
  <div class="users">
    <search-input></search-input>
    <div v-if="!store.error">
      <users-data></users-data>
    </div>
    <div v-else>
      <p>There was an error fetching the users data</p>
    </div>
  </div>
</template>

<script setup>
import SearchInput from '@/components/searchInput.vue'
import UsersData from '@/components/usersData.vue'
import { useUserStore } from '../stores/users.ts'

const store = useUserStore()
</script>

<style lang="scss" scoped>
.link {
  margin: 10px 10px;
}
a {
  text-decoration: none;
}
.users {
  width: 40rem;
  @media (max-width: 768px) {
    width: 20rem;
  }
  height: 100vh;
  margin: 1rem 0;
}
</style>
