<script>
    import modal_window from './modal_windows/modal.vue'
    import modal_window2 from './modal_windows/modal2.vue'

    export default {
        props: ['texts_arr', 'new_text'],
        data() {
            return {
                text: '',
                modal: false,
                modal2: false,
                text2: ''
            }
        },
        methods: {
            display_modal: function(text) {
                this.modal = !this.modal
                this.text2 = text
            },
            display_modal2: function() {
                if (this.texts_arr.length < 1) {
                    alert('Сначала добавьте файлы!')
                }
                else {
                    this.modal2 = !this.modal2
                }
            },
            added: function(name) {
                let n = false
                for (let j of this.texts_arr) {
                    if (j.name == name) {
                        n = true
                    }
                }
                if (!n) {
                    this.modal = !this.modal
                    let obj = {
                        id: this.texts_arr.length + 1,
                        text: this.text2,
                        name: name
                    }
                    this.text2 = ''
                    this.texts_arr.push(obj)
                    this.text = ''
                }
                else {
                    alert('Файл с таким именем уже существует')
                }
                
            },
            change: function(index) {
                console.log(this.texts_arr[0])
                this.text = this.texts_arr[index]['text']
                this.modal2 = !this.modal2
            }
        },
        components: {
            modal_window,
            modal_window2
        },
    }
</script>

<template>
    <textarea cols="85" rows="25" @keyup.ctrl.enter="display_modal(text)" @keyup.shift.enter="display_modal2" v-model="text"></textarea>
    <modal_window @added="added" :modal="modal" />
    <modal_window2 @change="change" :texts_arr="texts_arr" :modal="modal2" />
</template>

<style>
    textarea {
        resize: none;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 600;
        outline: none;
        border: 1px solid #00457E;
        border-radius: 8px;
        padding: 12px;
        background-color: #2F70AF;
        color: #000;
    }
</style>