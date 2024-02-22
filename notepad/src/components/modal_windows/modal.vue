<script>
    export default {
        props: ['modal'],
        emits: ['added'],
        data() {
            return {
                text_name: ''
            }
        },
        methods: {
            handler: function(name) {
                this.$emit('added', name)
                this.text_name = ''
            },
        }
    }
</script>

<template>
  <div v-if="modal" class="modal">
        <label>Введите название файла</label>
        <input type="text" v-model="text_name" @keyup.enter="handler(text_name)">
    </div>
</template>

<style>
    .modal {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        position: fixed;
        z-index: 999;
        top: 30%;
        left: 45%;
        max-width: 300px;
        width: 100%;
        height: 200px;
        border: 1px solid #000;
        border-radius: 8px;
        margin-left: -150px;
        padding: 12px;
        background-color: #00457E;
    }
    label {
        font-size: 20px;
        font-weight: 500;
    }
    input {
        outline: none;
        padding: 6px 10px;
        font-size: 20px;
    }
</style>