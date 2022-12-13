import { DataSource } from 'typeorm'
import { RouteSchema } from './route.schema';
import { Route } from '../../../../@core/domain/route.entity';

describe('RouteSchema', () => {
    test('create', async () =>{
        const dataSource = new DataSource({
            type:'sqlite',
            database:':memory:',
            synchronize: true,
            logging: false,
            entities: [RouteSchema]
        })

        await dataSource.initialize()

        const route = Route.create({
            title: 'minha rota',
            startPosition: {lat: 1, lng: 2},
            endPosition: {lat: 1, lng: 2},
            points: [{lat: 1, lng: 2}],
        })

        const routeRepo = dataSource.getRepository(Route)
        await routeRepo.save(route)        
    })

});
