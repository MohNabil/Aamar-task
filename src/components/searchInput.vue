<template>
  <div class="search">
    <label htmlFor="search">Search user:</label>
    <input type="text" id="search" v-model="query" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useUserStore } from '../stores/users.ts'

const store = useUserStore()
const query = ref('')
watch(query, (newQuery) => {
  store.searchUser(newQuery)
})
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  gap: 10px;
  margin: 1rem 0;
  input {
    flex: 1;
  }
}
</style>
