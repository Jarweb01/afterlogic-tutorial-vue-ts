import { defineStore } from 'pinia'
import { getAllTodos } from '@/services/api/ApiService'
import type { ITodo } from '@/services/api/types'

type RootState = {
    todos: ITodo[];
};

export const useTodoStore = defineStore('todo', {
  state: (): RootState => {
    return {
      todos: []
    }
  },
  actions: {
    async getTodos(limit: number, skip: number) {
      const { todos } = await getAllTodos(limit, skip).then((res) => res.data)
    //   this.todos = todos
    }
  }
})
