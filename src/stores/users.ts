import { defineStore } from 'pinia'

interface User {
  id: string
  name: string
  email: string
  address: {
    city: string
  }
}
type StoreDataType = {
  users: User[]
  isLoading: boolean
  error: string
  searchedData: User[]
  user: Object
}
export const useUserStore = defineStore('main', {
  state: () =>
    ({
      users: [],
      isLoading: false,
      error: '',
      searchedData: [],
      user: {}
    }) as StoreDataType,
  actions: {
    async getUsers(url: string) {
      try {
        this.isLoading = true
        this.error = ''
        const result = await fetch(url)
        const data = await result.json()
        this.isLoading = false
        if (!result.ok) {
          throw new Error('Something went wrong')
        }
        if (data) {
          this.users = data
          this.searchedData = data
        }
      } catch (error: any) {
        this.isLoading = false
        this.error = error.message
      }
    },
    async getUser(url: string) {
      try {
        this.isLoading = true
        this.error = ''
        const result = await fetch(url)
        const data = await result.json()
        this.isLoading = false
        if (!result.ok) {
          throw new Error('Something went wrong')
        }
        if (data) {
          this.user = data[0]
        }
      } catch (error: any) {
        this.isLoading = false
        this.error = error.message
      }
    },
    searchUser(query: string) {
      this.searchedData = query
        ? this.users.filter((user: User) => {
            return (
              user.name.toLowerCase().includes(query) ||
              user.email.toLowerCase().includes(query) ||
              user.address.city.toLowerCase().includes(query)
            )
          })
        : this.users
    }
  }
})
