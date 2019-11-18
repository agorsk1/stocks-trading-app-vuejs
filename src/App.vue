<template>
    <div class="container">
        <br>
        <app-header></app-header>
        <br>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import Header from './components/header/Header.vue'
    import Home from './components/Home.vue'
    import Portfolio from './components/portfolio/Portfolio.vue'
    import Stocks from './components/stocks/Stocks.vue'

    export default {
        components: {
            appHeader: Header,
            appHome: Home,
            appPortfolio: Portfolio,
            appStocks: Stocks
        }
    }
</script>

<style scoped>

    .slide-enter {
        opacity: 0;
        /*transform: translateY(20px);*/
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
