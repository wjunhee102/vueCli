<template>
  <div id="app" class="bg-wh sh">
    <div class="container">
      <div class="action">
        <input type="text" v-model="value" @keydown.enter="addTodo"/>
      </div>
      <div class="todoList">
        <Todo :value="false" />
        <Todo :value="true" />
        <!-- <template v-for="item in getList">
          <div v-bind:key="item.idx">
            {{item.todo}}
          </div>
        </template> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Todo from './components/Todo.vue'

export default {
  name: 'app',
  data() {
    return {
      value: '',
      type: false,
      todoList: []
    };
  },
  computed: {
    ...mapGetters({
      getList : 'getList'
    })
  },
  methods: {
    ...mapMutations({
      addList : 'addTodo'
    }),
    addTodo() {
      this.addList({
        todo : this.value,
        idx : this.getList.length,
        done : false
      }),
      this.value = '';
    }
  },
  components: {
    Todo
  }
}
</script>

<style>
  #app {
    width:80%;
    height: 70vh;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
  }
  .bg-wh {
    background-color: #fff;
  }
  .sh {
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
  }
  .todoList {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80%;
    position: relative;
  }
  button {
    display: block;
    width: 100%;
    text-align: center;
    height: 60px;
  }
  .box {
    width: 40% ;
    height: 100%;
    text-align: center;
  }
  .on {
    position: absolute;
  }
  span {
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    line-height: 40px;
    background:#ccc;
    cursor: pointer;
  }
  .btn {
    position: relative;
    display: block;
    width: 100%;
    text-align: center;
    height: 60px;
  }
</style>
