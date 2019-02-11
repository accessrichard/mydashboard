import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import layout from '@/store/layout';
import { RootState } from './IRootState';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    layout
  }
};

export default new Vuex.Store<RootState>(store);
