import { Route, RouteProps } from "../../../domain/route.entity";
import { RouteSchema } from "./route.schema";
import { DataSource } from 'typeorm'
import { RouteTypeOrmRepository } from "./route-typorm.repository";

describe('RouteTypeOrmRepository Test', () => {
   it('should insert a new route', async () =>{

        const dataSource = new DataSource({
            type:'sqlite',
            database:':memory:',
            synchronize: true,
            logging: false,
            entities: [RouteSchema]
        })

        await dataSource.initialize()

        const ormRepo = dataSource.getRepository(Route)
        const repository = new RouteTypeOrmRepository(ormRepo)
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: { lat: 1, lng: 2 },
            endPosition: { lat: 1, lng: 2 },
        }
        const route = new Route(routeProps)
        await repository.insert(route)

        const routeFound = await ormRepo.findOneBy({id: route.id})

        expect(routeFound.toJSON()).toStrictEqual(route.toJSON())
   })
});
