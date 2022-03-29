import Area from "~/domain/Area";
import AreaRepository from "../domain/AreaRepository";


export default class InMemoryAreaRepository implements AreaRepository {
    constructor(
        private database: Map<string, any>
    ) { }

    getAll = async(): Promise<Area[]> => {
        const ids = Array.from(this.database.keys());
        const foo: Area[] = [];
        for(let i = 0; i < ids.length; i++) {
            const area = await this.getById(ids[i]);
            foo.push(area);
        }
        return foo;
    }

    getById = async (id: string): Promise<Area> => {
        return Promise.resolve(this.toArea(id, this.database.get(id)));
    }

    private toArea(id: string, area: any): Area {
        return new Area(id, area["title"], area["description"], area["image"]);
    }

}