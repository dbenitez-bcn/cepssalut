import FirebaseAreaRepository from "~/services/FirebaseAreaRepository"
import firebase from 'firebase/compat'
import Area from "~/domain/Area";

describe("FirebaseAreaRepository", () => {
    const firestore = jest.fn() as any as firebase.firestore.Firestore;
    const sut = new FirebaseAreaRepository(firestore);

    afterEach(() => {
        jest.clearAllMocks;
        jest.clearAllTimers;
    })
    it("should return all areas", async () => {
        willFindAreas();

        const got = await sut.getAll();

        expect(got).toHaveLength(2);
        expect(got[0]).toStrictEqual(new Area("area-1", "Title area 1", "Description area 1", "image/path/area1.png", "mail"));
        expect(got[1]).toStrictEqual(new Area("area-2", "Title area 2", "Description area 2", "image/path/area2.png", "mail"));
        expect(firestore.collection).toBeCalledWith("areas")
    })

    it("Should return the area for the given id", async () => {
        willFindArea("area");

        const got = await sut.getById("area");

        expect(got).toStrictEqual(new Area("area", "Title area", "Description area", "image/path/area.png", "mail"));
        expect(firestore.collection).toBeCalledWith("areas")
    })

    it("should delete the area for the given id", async () => {
        const deleteFn = jest.fn();
        const doc = jest.fn().mockReturnValue({
            delete: deleteFn
        });
        firestore.collection = jest.fn().mockReturnValue({
            doc
        });

        const got = await sut.delete("123");

        expect(got).toBe(true);
        expect(firestore.collection).toBeCalledWith("areas");
        expect(deleteFn).toBeCalled();
        expect(doc).toBeCalledWith("123");
    });

    it("should update an area with the given data", async () => {
        const set = jest.fn();
        const doc = jest.fn().mockReturnValue({
            set
        });
        firestore.collection = jest.fn().mockReturnValue({
            doc
        });

        const got = await sut.update("123", "title", "description", "image", "mailTo");

        expect(got).toStrictEqual(new Area("123", "title", "description", "image", "mailTo"));
        expect(firestore.collection).toBeCalledWith("areas");
        expect(set).toBeCalledWith({
            title: "title",
            description: "description",
            mail_to: "mailTo",
            image: "image"
        });
        expect(doc).toBeCalledWith("123");
    })

    it("should create an area with the given data", async () => {
        const add = jest.fn().mockResolvedValue({
            id: "123"
        });
        firestore.collection = jest.fn().mockReturnValue({
            add
        });

        const got = await sut.create("title", "description", "image", "mailTo");

        expect(got).toStrictEqual(new Area("123", "title", "description", "image", "mailTo"));
        expect(firestore.collection).toBeCalledWith("areas");
        expect(add).toBeCalledWith({
            title: "title",
            description: "description",
            mail_to: "mailTo",
            image: "image"
        });
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
                                "image": "image/path/area1.png",
                                "mail_to": "mail"
                            }
                        )
                    },
                    {
                        id: "area-2",
                        data: jest.fn().mockReturnValue({
                            "title": "Title area 2",
                            "description": "Description area 2",
                            "image": "image/path/area2.png",
                            "mail_to": "mail"
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
                            "image": "image/path/area.png",
                            "mail_to": "mail"
                        }
                    )
                })
            })
        })
    }
})

