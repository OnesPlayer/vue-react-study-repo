<script>
    export default {
        props: ['index'],
        emits: ['del'],
        data() {
            return {
                
            }
        },
        methods: {
            del_task: function(index) {
                this.$emit('del', index)
            }
        }
    }
</script>

<template>
    <button class="del" @click="del_task(this.index)">Удалить</button>
</template>

<style>
    .del {
        font-size: 10px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        border: 1px solid #f4dada;
        outline: none;
        background-color: #a23434;
        width: 70px;
        height: 26px;
        border-radius: 6px;
    }
</style>