<template>
    <div>
        <app-stock-card
                v-for="(stockvalue, stockname) in getStockPrices"
                :stock-name="stockname"
                :stock-price="stockvalue"
        >
        </app-stock-card>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import StockCard from "./StockCard.vue";

    export default {
        name: "Stocks",
        computed: {
            ...mapGetters([
                'getStockPrices'
            ])
        },
        components:{
            appStockCard: StockCard
        }
    }
</script>

<style scoped>
</style>
