import Area from './Area';

export default interface AreaRepository {
    getAll(): Area[],
    getById(id: String): Area,
}