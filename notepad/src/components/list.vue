<script>
    import btn_delete from './btn_delete.vue'

    export default {
        props: ['texts_arr'],
        data() {
            return {

            }
        },
        methods: {
            teleport: function(index, id) {
                
            }
        },
        components: {
            btn_delete
        }
    }
</script>

<template>
    <ul>
        <li v-for="{id, text, name}, index in texts_arr" :key="id">
            <span>
                {{ name }}
            </span>
            <btn_delete :index="index" :arr="texts_arr"/>
        </li>
    </ul>
</template>

<style>
    ul {
        display: flex;
        flex-direction: column;
        padding: 0;
        width: 100%;
        gap: 10px;
    }
    li {
        display: flex;
        width: 100%;
        font-weight: 500;
        justify-content: space-between;
        align-items: center;
        color: #B9848C;
    }
    span {
        max-width: 200px;
    }
</style>