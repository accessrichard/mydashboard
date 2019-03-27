import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { IRootState } from '@/types';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  modules: {}
};

export default new Vuex.Store<IRootState>(store);
