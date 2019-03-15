import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import layout from '@/store/modules/LayoutModule';
import { IRootState } from '@/types';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  modules: {
    layout
  }
};

export default new Vuex.Store<IRootState>(store);
