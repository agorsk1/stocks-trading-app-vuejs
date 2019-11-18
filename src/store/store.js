import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const store = new Vuex.Store({
    state: {
        funds: 10000,
        stocksPrices: {
            BMW: 100,
            Google: 75,
            Apple: 350,
            Facebook: 45
        },
        stocksBought: {
            BMW: 0,
            Google: 0,
            Apple: 0,
            Facebook: 0
        },
    },
    getters: {
        getFunds: state => {
            return state.funds
        },
        getStockPrices: state => {
            return state.stocksPrices
        },
        getStockBought: state => {
            return state.stocksBought
        },
        getStockPrice: (state) => (stockName) => {
            return state.stocksPrices[stockName]
        }
    },
    mutations: {
        buyStocks: (state, data) => {
            let quantity = Number(data.amount);
            if (quantity < 0 || !Number.isInteger(quantity)) {
                console.log(quantity);
                alert('You entered invalid quantity!');
                return ;
            }
            if (quantity * state.stocksPrices[data.name] <= state.funds) {
                state.funds -= (quantity * state.stocksPrices[data.name]);
                state.stocksBought[data.name] += quantity
            } else {
                alert('You cannot afford the deal!')
            }
        },
        sellStocks: (state, data) => {
            let quantity = Number(data.amount);
            if (quantity < 0 || !Number.isInteger(quantity)) {
                alert('You entered invalid quantity!');
                return ;
            }

            if (quantity <= state.stocksBought[data.name]) {
                state.funds += (quantity * state.stocksPrices[data.name]);
                state.stocksBought[data.name] -= quantity
            } else {
                alert('You cannot sell more stocks than you own!')
            }
        },
        loadDay: (state, data) => {

            state.funds = data.funds;
            state.stocksBought = data.stocksBought;
            state.stocksPrices = data.stocksPrices
        },
        endDay: state => {
            const keys = Object.keys(state.stocksPrices);
            for (const key of keys) {
                state.stocksPrices[key] += getRndInteger(-25,25);
                if (state.stocksPrices[key] <= 0){
                    state.stocksPrices[key] = 1
                }
            }
        }
    },
    actions: {
        buyStocks: ({ commit }, data)  => {
            commit('buyStocks', data);
        },
        sellStocks: ({ commit }, data)  => {
            commit('sellStocks', data);
        },
        endDay: ({commit}) => {
            commit('endDay')
        },
        loadDay: ({commit}) => {
            Vue.http.get('data.json')
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data) {
                        const funds = data.funds;
                        const stocksBought = data.stocksBought;
                        const stocksPrices = data.stocksPrices;

                        const newState = {
                            funds,
                            stocksPrices,
                            stocksBought
                        };
                        commit('loadDay', newState);
                    }
                })
        },
    }
});
