<template>
  <div id="app">
    <div class="container">
      <h1>Todo list{{aaa}}</h1>
      <input type="text" class="form-control mb-5" v-model="userInput" @keydown.enter="addTodo">

      <div class="list-group mb-5">
        <template v-for="todo in nonCompletedTodo">
          <Todo
            v-bind:key="todo.id"
            :value="todo.value"
            @component-click="clickTodo(todo)"
          />
        </template>
      </div>

      <div class="text-right">
        <button type="button" class="btn" :class="{'btn-primary': type === false, 'btn-secondary': type !== false}" @click="changeType(false)">미완료</button>
        <button type="button" class="btn" :class="{'btn-primary': type === true, 'btn-secondary': type !== true}" @click="changeType(true)">완료</button>
        <button type="button" class="btn" :class="{'btn-primary': type === 'all', 'btn-secondary': type !== 'all'}" @click="changeType('all')">전체</button>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from './components/Todo';
import {mapState} from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      userInput: '',
      type: false,
      todoList: []
    };
  },
  computed: {
    nonCompletedTodo() {
      return this.todoList.filter(todo => this.type === 'all' || todo.done === this.type);
    },
    ...mapState({
      aaa: state => state.count
    })
  },
  methods: {
    addTodo() {
      this.todoList.push({
        value: this.userInput,
        done: false
      });
      this.userInput = '';
    },
    changeType(type) {
      this.type = type;
    },
    clickTodo(todo) {
      todo.done = !todo.done;
    }
  },
  components: {
    Todo
  },
  mounted() {
    this.$store.commit('increment')
    console.log(this.$store.state.count)
  }
}
</script>

<style>

</style>
