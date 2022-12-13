import { Module } from '@nestjs/common';
import { RoutesController } from './routes.controller';
import { RouteInMemoryRepository } from '../@core/infra/db/route-in-memory.repository';
import { CreateRouteUseCase } from '../@core/application/create-route.use-case';
import { RouteRepositoryInterface } from '../@core/domain/route.repository';
import { ListAllRoutesUseCase } from '../@core/application/list-all-routes.use-case';

@Module({
  controllers: [RoutesController],
  providers: [
    {
      provide: RouteInMemoryRepository,
      useClass: RouteInMemoryRepository
    },
    {
      provide: CreateRouteUseCase,
      useFactory: (routeRepo: RouteRepositoryInterface) =>{
        return new CreateRouteUseCase(routeRepo)
      },
      inject: [RouteInMemoryRepository]
    },
    {
      provide: ListAllRoutesUseCase,
      useFactory: (routeRepo: RouteRepositoryInterface) =>{
        return new ListAllRoutesUseCase(routeRepo)
      },
      inject: [RouteInMemoryRepository]
    },

  ]
})
export class RoutesModule {}
