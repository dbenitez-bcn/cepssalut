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

    // TODO: Add test
    async delete(id: string): Promise<boolean> {
        await this.database.collection('areas').doc(id).delete();
        return true;
    }

    // TODO: Add test
    async create(title: string, description: string, image: string, mailTo: string): Promise<Area> {
        const data = {
            title,
            description,
            mail_to: mailTo,
            image
        };
        const areaDocument = await this.database.collection('areas').add(data)
        return this.toArea(areaDocument.id, data);
    }

    // TODO: Add test
    async update(id: string, title: string, description: string, image: string, mailTo: string): Promise<Area> {
        const data = {
            title,
            description,
            mail_to: mailTo,
            image
        };
        await this.database.collection('areas').doc(id).set(data);
        return this.toArea(id, data);
    }

    private toArea(id: string, area: any): Area {
        return new Area(id, area["title"], area["description"], area["image"], area["mail_to"]);
    }

}