import { Plugin, Context } from '@nuxt/types';
import AreaRepository from '~/domain/AreaRepository';
import FirebaseAreaRepository from '~/services/FirebaseAreaRepository';
import MailSender from '~/services/MailSender';

declare module 'vue/types/vue' {
  interface Vue {
    $areas: AreaRepository,
    $mails: MailSender
  }
}
const ioc: Plugin = (context: Context, inject) => {
  inject('areas', new FirebaseAreaRepository(context.$fire.firestore));
  inject('mails', new MailSender(context.$fire.firestore));
}

export default ioc;
