<script>
    export default {
        props: ['arr', 'index'],
        methods: {
            delete_text: function(index) {
                this.arr.splice(index, 1)
            }
        }
    }
</script>

<template>
    <button class="del" @click="delete_text(index)">Удалить</button>
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