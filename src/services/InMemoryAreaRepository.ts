import Area from "~/domain/Area";
import AreaRepository from "../domain/AreaRepository";


export default class InMemoryAreaRepository implements AreaRepository {
    constructor(
        private database: Map<String, any>
    ) { }

    getAll(): Area[] {
        var list: Area[] = [];
        for (const area of this.database.values()) {
            list.push(new Area(area["title"], area["description"], area["image"]));
        }

        return list;
    }
    getById(id: String): Area {
        return this.toArea(this.database.get(id));
    }

    private toArea(area: any): Area {
        return new Area(area["title"], area["description"], area["image"]);
    }

}