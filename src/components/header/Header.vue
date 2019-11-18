<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" :to="{name:'home'}">Stock Trader</router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link
                        tag='li'
                        :to="{ name: 'portfolio' }"
                        class="nav-item"
                        active-class="active active-bold"><a class="nav-link">Portfolio</a></router-link>
                <router-link
                        tag='li'
                        :to="{ name: 'stocks' }"
                        class="nav-item"
                        active-class="active active-bold"><a class="nav-link">Stocks</a></router-link>
            </ul>
            <app-header-options></app-header-options>
        </div>
    </nav>
</template>

<script>
    import HeaderOptions from "./HeaderOptions.vue";
    export default {
        name: "Header",
        components: {
            appHeaderOptions: HeaderOptions
        }
    }
</script>

<style scoped>
    .active-bold {
        font-weight: bolder;
    }
</style>
