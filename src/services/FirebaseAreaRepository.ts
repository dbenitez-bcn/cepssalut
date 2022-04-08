import firebase from 'firebase/compat'
import Area from "~/domain/Area";
import AreaRepository from "~/domain/AreaRepository";

export default class FirebaseAreaRepository implements AreaRepository {
    constructor(
        private database: firebase.firestore.Firestore
    ) { }

    getAll = async (): Promise<Area[]> => {
        const areasDoc = await this.database.collection('areas').get()
        return areasDoc.docs.map(document => this.toArea(document.id, document.data()))

    }

    getById = async (id: string): Promise<Area> => {
        const area = await this.database.collection('areas').doc(id).get();
        return this.toArea(area.id, area.data());
    }

    private toArea(id: string, area: any): Area {
        return new Area(id, area["title"], area["description"], area["image"], area["mail_to"]);
    }

}