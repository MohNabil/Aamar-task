<template>
  <div>
    <div v-if="!store.isLoading">
      <div>
        <div class="back-btn" @click="store.error = ''">
          <router-link to="/">Back to Users</router-link>
        </div>
        <div v-if="!store.error && store.user" class="user-details">
          <p>Name: {{ store?.user?.name }}</p>
          <p>Email: {{ store?.user?.email }}</p>
          <p>Phone: {{ store?.user?.phone }}</p>
          <p>Website: {{ store?.user?.website }}</p>
          <p>Company: {{ store?.user?.company?.name }}</p>
          <span>City: {{ store?.user?.address?.city }}</span>
          <span> ,Street: {{ store?.user?.address?.street }}</span>
          <span> ,Suite: {{ store?.user?.address?.suite }}</span>
          <span> ,Zipcode: {{ store?.user?.address?.zipcode }}</span>
        </div>
        <div v-else>There was an error fetching the user data</div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/users.ts'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const store = useUserStore()
const route = useRoute()
onMounted(() => {
  return store.getUser(`https://jsonplaceholder.typicode.com/users?id=${route.params.id}`)
})
</script>

<style lang="scss" scoped>
.user-details {
  border: 1px solid gray;
  padding: 1rem;
  p {
    margin: 1rem 0;
  }
}
.back-btn {
}
</style>
