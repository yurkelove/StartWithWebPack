<template>

<section id="main">
        <div class="wrapper">
            <h1> Webpack message: {{ message }}</h1>
        </div>
    </section>

</template>

<script>
export default {
    data () {
        return {
            message: null,
        }
    },
    created () {
        //Обратимся в store
        this.message = this.$store.getters.getMessage
    }
}

</script>

<style lang="scss" scoped>
h1{
    color: green;
    margin:0 auto;
    text-align:center;
}
</style>