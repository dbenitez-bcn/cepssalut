import FirebaseAreaRepository from "~/services/FirebaseAreaRepository"
import firebase from 'firebase/compat'
import Area from "~/domain/Area";

describe("FirebaseAreaRepository", () => {
    const firestore = jest.fn() as any as firebase.firestore.Firestore;
    const sut = new FirebaseAreaRepository(firestore);
    it("should return all areas", async () => {
        willFindAreas();

        const got = await sut.getAll();

        expect(got).toHaveLength(2);
        expect(got[0]).toStrictEqual(new Area("area-1", "Title area 1", "Description area 1", "image/path/area1.png"));
        expect(got[1]).toStrictEqual(new Area("area-2", "Title area 2", "Description area 2", "image/path/area2.png"));
        expect(firestore.collection).toBeCalledWith("areas")
    })

    it("Should return the area for the given id", async () => {
        willFindArea("area");

        const got = await sut.getById("area");

        expect(got).toStrictEqual(new Area("area", "Title area", "Description area", "image/path/area.png"));
        expect(firestore.collection).toBeCalledWith("areas")
    })

    const willFindAreas = () => {
        firestore.collection = jest.fn().mockReturnValue({
            get: jest.fn().mockResolvedValue({
                docs: [
                    {
                        id: "area-1",
                        data: jest.fn().mockReturnValue(
                            {
                                "title": "Title area 1",
                                "description": "Description area 1",
                                "image": "image/path/area1.png"
                            }
                        )
                    },
                    {
                        id: "area-2",
                        data: jest.fn().mockReturnValue({
                            "title": "Title area 2",
                            "description": "Description area 2",
                            "image": "image/path/area2.png"
                        })
                    }
                ]
            })
        })
    }

    const willFindArea = (id: string) => {
        firestore.collection = jest.fn().mockReturnValue({
            doc: jest.fn().mockReturnValue({
                get: jest.fn().mockResolvedValue({
                    id: id,
                    data: jest.fn().mockReturnValue(
                        {
                            "title": "Title area",
                            "description": "Description area",
                            "image": "image/path/area.png"
                        }
                    )
                })
            })
        })
    }
})

