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
      this.isLoading = true
      this.error = ''
      try {
        const result = await fetch(url)
        if (!result.ok) {
          throw new Error('Something went wrong')
        }

        const data = await result.json()
        if (data) {
          this.users = data
          this.searchedData = data
        }
      } catch (error: any) {
        this.error = error.message
      } finally {
        this.isLoading = false
      }
    },
    async getUser(url: string) {
      this.isLoading = true
      this.error = ''
      try {
        const result = await fetch(url)
        if (!result.ok) {
          throw new Error('Something went wrong')
        }

        const data = await result.json()
        if (data) {
          this.user = data[0]
        }
      } catch (error: any) {
        this.error = error.message
      } finally {
        this.isLoading = false
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
