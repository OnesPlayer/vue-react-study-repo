<script>
  import list from './components/list.vue'
  import inp from './components/inp.vue'

  export default {
    data() {
      return {
        tasks: [],
        flags: []
      }
    },
    methods: {
      add_task: function(str) {
        let obj_task = {
          id: this.tasks.length + 1,
          task_text: str,
          isDone: false,
          isImportant: false
        }
        this.tasks.push(obj_task)
        this.flags.push(false)
      }
    },
    components: {
      list,
      inp
    }
}
</script>

<template>
  <div class="main">
    <div class="inp_div">
    <inp @send_text="add_task" />
  </div>
  <div class="list_div">
    <list :arr="tasks" :flags="flags" />
  </div>
  </div>
</template>

<style>
  body {
    background-color: #4b5252;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 16px;
  }
  .main {
    max-width: 600px;
    width: 100%;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
  }

  .inp_div {
    display: flex;
    max-width: 300px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .list_div {
    max-width: 500px;
    width: 100%;
  }
</style>