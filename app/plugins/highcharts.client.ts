import Highcharts from 'highcharts';
import HighChartsVue from 'highcharts-vue';
import 'highcharts/highcharts-more';

//! This plugin used to register highchart vue client lib into nuxt plugin
//@https://www.highcharts.com/demo/highcharts/column-stacked-percent

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(HighChartsVue, {
    highcharts: Highcharts,
  });
});
