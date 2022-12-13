import { Route } from "../../../../@core/domain/route.entity";
import { Repository } from "typeorm";
import { RouteRepositoryInterface } from "../../../../@core/domain/route.repository";


export class RouteTypeOrmRepository implements RouteRepositoryInterface {
    constructor(
        private ormRepo: Repository<Route>
    ){}

    async insert(route: Route): Promise<void>{
        await this.ormRepo.save(route)
    }

    findAll(): Promise<Route[]>{
        return this.ormRepo.find()
    }
}