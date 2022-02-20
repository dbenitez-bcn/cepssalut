import Area from "~/domain/Area";
import InMemoryAreaRepository from "~/services/InMemoryAreaRepository"

describe("InMemoryAreaRepository", () => {

    const database =  new Map<string, object>([
        ["area-1", {
            "title": "Title area 1",
            "description": "Description area 1",
            "image": "image/path/area1.png"
        }],
        ["area-2", {
            "title": "Title area 2",
            "description": "Description area 2",
            "image": "image/path/area2.png"
        }]
    ]);

    const sut = new InMemoryAreaRepository(database);
    it("should return all areas", () => {
        const got = sut.getAll();

        expect(got).toHaveLength(2);
        expect(got[0]).toStrictEqual(new Area("area-1", "Title area 1", "Description area 1", "image/path/area1.png"));
        expect(got[1]).toStrictEqual(new Area("area-2", "Title area 2", "Description area 2", "image/path/area2.png"));
    })

    it("Should return the area for the given id", () => {
        const got = sut.getById("area-1");

        expect(got).toStrictEqual(new Area("area-1", "Title area 1", "Description area 1", "image/path/area1.png"));
    })
})