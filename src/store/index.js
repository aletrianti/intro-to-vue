import Vue from 'vue';
import Vuex from 'vuex';
import myModule from './modules/myModule';

Vue.use(Vuex);

export default () => {
    let modules = {
        myModule,
    };

    return new Vuex.Store({
        modules
    });
};