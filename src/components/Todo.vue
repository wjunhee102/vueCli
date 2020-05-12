<template>
  <div>
    <div class="active">
      <template v-for="item in list(value)">
        <div
          class="btn sh bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          v-bind:key="item.idx" 
          @click="change(item.idx)"
          >
          {{item.todo}}
          <span @click="remove(item.idx)">제거</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    props: ['value'],
    computed : {
      ...mapGetters({
        list : 'selectList'
      })
    },
    methods: {
      ...mapMutations({
        change : 'changeTodo',
        removeTodo : 'removeTodo'
      }),
      remove(idx) {
        this.removeTodo(idx);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
