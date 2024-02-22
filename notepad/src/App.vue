<script>
    import list from './components/list.vue'
    import txtarea from './components/textarea.vue'

    export default {
        data() {
            return {
                texts: [],
            }
        },
        methods: {

        },
        components: {
            list,
            txtarea
        }
    }
</script>

<template>
    <div class="upper_div">
        <div class="main_div">
            <h1>NotePad+</h1>
            <txtarea :texts_arr="texts" />
        </div>
        <div class="list_div">
            <list :texts_arr="texts" />
        </div>
    </div>
    <footer>
        <p>Сохранить файл - ctrl+enter</p>
        <p>Выбрать файл - shift+enter</p>
    </footer>
</template>

<style>
    body {
        background-color: #02315E;
    }
    .upper_div {
        margin: 0;
        font-size: 16px;
        font-weight: 400;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        max-width: 1220px;
        width: 100%;
        margin: 60px auto 0 auto;
        justify-content: space-between;
    }
    h1 {
        color: #806491;
        font-size: 60px;
        margin-top: 0;
    }
    .main_div {
        max-width: 800px;
        width: 100%;
    }
    .list_div {
        display: flex;
        align-items: top;
        max-width: 280px;
        width: 100%;
        border: 1.5px solid #B9848C;
        border-radius: 8px;
        padding: 8px;
    }
    footer {
        color: #B9848C;
        max-width: 1220px;
        width: 100%;
        margin: 20px auto 10px auto;
        font-weight: 500;
        font-size: 18px;
        font-family: 'Montserrat', sans-serif;
    }

</style>