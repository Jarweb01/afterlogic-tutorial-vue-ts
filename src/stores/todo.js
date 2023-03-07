import { defineStore } from 'pinia'
import { getAllTodos } from '@/services/api/ApiService'

export const useTodoStore = defineStore('todo', {
  state: () => {
    return {}
  },
  actions: {
    async getTodos(limit, skip) {
      const { todos } = await getAllTodos(limit, skip).then((res) => res.data)
      // this.todos = todos
    }
  }
})
