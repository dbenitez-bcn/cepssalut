import Area from './Area';

export default interface AreaRepository {
    getAll(): Promise<Area[]>,
    getById(id: String): Promise<Area>,
}