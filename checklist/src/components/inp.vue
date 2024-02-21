<script>
    export default {
        emits: ['send_text'],
        data() {
            return {
                inpText: '',
            }
        },
        methods: {
            send: function(str) {
                if (str) {
                    this.$emit('send_text', str)
                    this.inpText = ''
                }
                else {
                    alert('Не оставляйте задачу пустой!')
                }
            }
        }
    }
</script>

<template>
    <input placeholder="Введите задачу: " type="text" v-model="inpText" @keyup.enter="send(inpText)">
    <button @click="send(inpText)" class="add">Добавить</button>
</template>

<style>
    input {
        outline: none;
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        width: 200px;
        height: 18px;
        border-radius: 4px;
        border: none;
        padding: 6px;
    }
    .add {
        font-size: 10px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        border: none;
        background-color: #51ac77;
        width: 70px;
        height: 26px;
        border-radius: 6px;
    }
</style>