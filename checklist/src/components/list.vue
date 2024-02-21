<script>
    import btn_delete from './buttons/button_delete.vue'
    import btn_imp from './buttons/button_important.vue'

    export default {
        props: ['arr', 'flags'],
        data() {
            return {
                newText: '',
            }
        },
        methods: {
            delete_task: function(index) {
                this.arr.splice(index, 1)
            },
            change: function(index) {
                this.flags[index] = true
                this.newText = this.arr[index].task_text
                this.arr[index].task_text = ''
            },
            complete_change: function(index) {
                this.arr[index].task_text = this.newText
                this.newText = ''
                this.flags[index] = false
            },
            done: function(index) {
                this.arr[index].isDone = !this.arr[index].isDone
            },
            important: function(index) {
                this.arr[index].isImportant = !this.arr[index].isImportant
            }
        },
        components: {
            btn_delete,
            btn_imp
        },
        computed: {
            
        }
    }
</script>

<template>
    <ul>
        <li v-for="{task_text, isDone, isImportant}, index in arr" :class="{done_li: isDone, important_li: isImportant}">
            <input type="text" v-if="flags[index]" v-model="newText" :index="index" @keyup.enter="complete_change(index)">
            <span :class="{done: isDone, important: isImportant}" @click="done(index)" @click.meta="change(index)">{{ task_text }}</span>
            <div class="btns_div">
                <btn_imp :class="{not_important: isImportant}" :index="index" @imp="important" />
                <btn_delete :index="index" @del="delete_task" />
            </div>
        </li>
    </ul>
</template>

<style>
    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0;
    }
    .btns_div {
        display: flex;
        gap: 6px;
        align-items: center;
        max-width: 140px;
    }
    li {
        display: flex;
        padding: 5px;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        border: 2px solid #dfd4d4;
        border-radius: 8px;
        font-weight: 500;
        color: #f4dada;
    }
    span {
        cursor: pointer;
    }
    .done {
        text-decoration: solid line-through #000 1.5px;
    }
    .done_li {
        border: 2px solid #6de66d !important;
    }
    .not_important {
        background-color: #885c30;
    }
    .important {
        font-size: 18px;
        font-weight: 600;
    }
    .important_li {
        border: 2px solid #c4ab38;
        background-color: #c4ab38;
    }
</style>