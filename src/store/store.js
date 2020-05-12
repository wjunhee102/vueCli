import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todoList : []
    },
    getters: {
        getList: state => {
            return state.todoList
        },
        selectList: state => type => {
            return state.todoList.filter( ele => ele.done === type)
        }
    },
    mutations: {
        addTodo(state, payload) {
            return state.todoList.push(payload);
        },
        removeTodo(state, payload) {
            const newList = state.todoList.filter( ele => ele.idx !== payload);
            const oo = state.todoList = newList.map((ele, idx) => {
                return Object.assign({}, ele, {
                    idx : idx
                })
            });
            console.log(oo);
            return state.todoList = oo
        },
        changeTodo(state, payload) {
            let todo = state.todoList;
            return todo[payload].done = !todo[payload].done
        }
    }
});

export default store;