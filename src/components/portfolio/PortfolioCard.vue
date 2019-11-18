<template>
    <div class="col-sm-6">
        <div class="card text-white bg-muted">
            <div class="card-header">{{ stockName }}: <span>Price({{ getStockPrice(stockName) + "$ | Bought: "+ stockAmount }})</span></div>
            <div class="card-body">
                <p></p>
                <div class="input-group mb-3">
                    <input type="number"
                           class="form-control"
                           placeholder="Enter the number of shares"
                           aria-label="Recipient's username"
                           aria-describedby="button-addon2"
                           v-model="numberOfStocks">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary"
                                type="button"
                                id="button-addon2"
                                @click="sellStocks({amount: numberOfStocks, name: stockName})"
                                >Sell</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "PortfolioCard.vue",
        props: {
            stockName: String,
            stockAmount: Number,
        },
        data(){
            return{ numberOfStocks: 0}
        },
        computed: {
            ...mapGetters([
                'getStockPrice'
            ])
        },
        methods:{
          ...mapActions([
              'sellStocks'
          ])
        },
    }
</script>

<style scoped>
    .col-sm-6{
        display: inline-block;
        padding: 20px;
    }
    .card-header{
        color: #333333;
    }
    p{
        color: #333333;
    }
    span{
        font-size:12px;
    }
</style>
