<template>
    <div class="jumbotron bg-light">
        <h1>Trade or View your Portfolio</h1>
        <p>You may Save & Load your Data</p>
        <p>Click on 'End Day' to begin a new Day!</p>
        <hr>
        <h4>Your Funds: {{ getFunds + " $" }}</h4>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    export default {
        name: "Home",
        computed: {
            ...mapGetters([
                'getFunds'
            ])
        }
    }
</script>

<style scoped>
</style>
