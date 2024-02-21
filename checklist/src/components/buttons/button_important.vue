<script>
    export default {
        props: ['index'],
        emits: ['imp'],
        data() {
            return {
                btn_text: 'Важное',
                btn_text2: 'Неважное',
                flag: true
            }
        },
        methods: {
            important: function(index) {
                this.$emit('imp', index)
                this.flag = !this.flag
            }
        }
    }
</script>

<template>
    <button class="imp" @click="important(index)">{{ flag ? btn_text : btn_text2 }}</button>
</template>

<style>
    .imp {
        font-size: 10px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        border: 1px solid #f4dada;
        outline: none;
        background-color: #c4ab38;
        width: 70px;
        height: 26px;
        border-radius: 6px;
    }
</style>