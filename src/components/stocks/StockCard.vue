<template>
    <div class="col-sm-6">
        <div class="card text-white bg-light">
            <div class="card-header">{{ stockName }}: <span>Price({{ stockPrice + "$"}})</span></div>
            <div class="card-body">
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
                                @click="buyStocks({name: stockName, amount: numberOfStocks})">Buy</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "StockCard",
        props: {
            stockName: String,
            stockPrice: Number,
        },
        data(){
            return{ numberOfStocks: 0}
        },
        methods: {
            ...mapActions([
                'buyStocks'
            ]),
        }
    }
</script>

<style scoped>
    .col-sm-6{
        display: inline-block;
        padding: 20px;
    }
    span{
        font-size:12px;
    }
    .card-header{
        color: #333333;
    }
</style>
