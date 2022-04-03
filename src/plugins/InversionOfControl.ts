import { Plugin, Context } from '@nuxt/types';
import AreaRepository from '~/domain/AreaRepository';
import FirebaseAreaRepository from '~/services/FirebaseAreaRepository';

declare module 'vue/types/vue' {
  interface Vue {
    $areas: AreaRepository
  }
}
const areas: Plugin = (context: Context, inject) => {
  inject('areas', new FirebaseAreaRepository(context.$fire.firestore));
}

export default areas;
