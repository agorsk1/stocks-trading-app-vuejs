<template>
    <div class="form-inline my-2 my-lg-0">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <button id ='endday' class="nav-link" @click="endDay">End Day</button>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Save & Load
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <button class="dropdown-item" @click="saveDay">Save</button>
                    <button class="dropdown-item" @click="loadDay">Load</button>
                </div>
            </li>
            <li class="nav-item">
                        <span class="navbar-text" style="font-weight: bold;">
                            Funds: {{ getFunds + " $"}}
                        </span>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "HeaderOptions",
        computed: {
            ...mapGetters([
                'getFunds',
                'getStockPrices',
                'getStockBought'
            ])
        },
        methods:{
            ...mapActions([
                'endDay',
                'loadDay'
            ]),
            saveDay() {
                const data = {
                    funds: this.getFunds,
                    stocksPrices: this.getStockPrices,
                    stocksBought: this.getStockBought
                };
                this.$http.put('data.json', data);
            },
        }
    }
</script>

<style scoped>
 #endday{
     border: none;
     background: transparent;
     outline:none;
 }
    #endday:focus {
        outline:none;
    }
</style>
