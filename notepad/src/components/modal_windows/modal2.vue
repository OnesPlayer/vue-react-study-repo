<script>
    export default {
        props: ['modal', 'texts_arr'],
        emits: ['change'],
        data() {
            return {
            }
        },
        methods: {
            handler: function(index) {
                this.$emit('change', index)
            },
        }
    }
</script>

<template>
  <div v-if="modal" class="modal2">
        <label>Выберите файл:</label>
        <ul>
            <li v-for="{id, text, name}, index in texts_arr" :key="id">
                <span @click="handler(index)">{{ name }}</span>
            </li>
        </ul>
    </div>
</template>

<style>
    .modal2 {
        display: flex;
        flex-direction: column;
        gap: 16px;
        position: fixed;
        z-index: 999;
        top: 30%;
        left: 45%;
        max-width: 300px;
        width: 100%;
        max-height: 600px;
        border: 1px solid #000;
        border-radius: 8px;
        margin-left: -150px;
        padding: 12px;
        background-color: #00457E;
    }
    span {
        cursor: pointer;
    }
    label {
        font-size: 20px;
        font-weight: 500;
    }
</style>