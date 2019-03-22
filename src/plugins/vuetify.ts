import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#3f51b5',
    secondary: '#607d8b',
    accent: '#00bcd4',
    error: '#e91e63',
    warning: '#ff9800',
    info: '#009688',
    success: '#2196f3'
    }
});
