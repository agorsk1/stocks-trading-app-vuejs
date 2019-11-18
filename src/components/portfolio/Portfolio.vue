<template>
    <div>
        <app-portfolio-card
                v-for="(stockAmount, stockName) in getStockBought"
                :stock-amount="stockAmount"
                :stock-name="stockName"
        ></app-portfolio-card>
    </div>
</template>

<script>
    import PortfolioCard from "./PortfolioCard.vue";
    import {mapGetters} from "vuex";
    export default {
        name: "Portfolio",
        computed:{
          ...mapGetters([
              'getStockBought'
          ])
        },
        components: {
            appPortfolioCard: PortfolioCard
        }
    }
</script>

<style scoped>
</style>
