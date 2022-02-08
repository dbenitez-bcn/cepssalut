import Vue from 'vue';
import areasDatabase from '~/assets/datasources/AreasDatabase';
import AreaRepository from '~/domain/AreaRepository';
import InMemoryAreaRepository from '~/services/InMemoryAreaRepository';

declare module 'vue/types/vue' {
  interface Vue {
    $areas: AreaRepository
  }
}

Vue.prototype.$areas = new InMemoryAreaRepository(areasDatabase);
