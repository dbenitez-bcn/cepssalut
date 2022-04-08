import firebase from 'firebase/compat'
export default class MailSender {
    constructor(
        private database: firebase.firestore.Firestore
    ) { }

    async sendMail(from: string, to: string, body: string) {
        await this.database.collection("mail").add({
            to,
            from,
            message: {
              subject: `Nova consulta de ${from}`,
              text: body,
            },
          })
    }
}