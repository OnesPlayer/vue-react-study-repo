<script>
export default {
    emits: ['send_city'],
    data() {
        return {
            city: '',
            error: this.isError
        }
    },
    methods: {
        set_city: function(city) {
            this.$emit('send_city', city)
        }
    },
}
</script>

<template>
    <input type="text" v-model="city" placeholder="Введите город:" @keydown.enter="set_city(city)">
</template>

<style scoped>
    input {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 20px;
        outline: none;
        padding: 8px;
        border: 2px solid #ffffff;
        color: #ffffff;
        background: none;
        text-align: end;
    }
    ::placeholder {
        color: #ffffff;
    }
</style>