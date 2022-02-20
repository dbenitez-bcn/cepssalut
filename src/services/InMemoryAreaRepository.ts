import Area from "~/domain/Area";
import AreaRepository from "../domain/AreaRepository";


export default class InMemoryAreaRepository implements AreaRepository {
    constructor(
        private database: Map<string, any>
    ) { }

    getAll(): Area[] {
        return Array.from(this.database.keys()).map(this.getById)
    }
    getById(id: string): Area {
        return this.toArea(id, this.database.get(id));
    }

    private toArea(id: string, area: any): Area {
        return new Area(id, area["title"], area["description"], area["image"]);
    }

}