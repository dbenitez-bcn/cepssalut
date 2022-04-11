import Area from './Area';

export default interface AreaRepository {
    getAll(): Promise<Area[]>,
    getById(id: string): Promise<Area>,
    create(title: string, description: string, image: string, mailTo: string): Promise<Area>,
    update(id: string, title: string, description: string, image: string, mailTo: string): Promise<Area>,
    delete(id: string): Promise<boolean>,
}