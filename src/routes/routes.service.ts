import { Injectable } from '@nestjs/common';
import { CreateRouteUseCase } from '../@core/application/create-route.use-case';
import { ListAllRoutesUseCase } from '../@core/application/list-all-routes.use-case';
import { CreateRouteDto } from './dto/create-route.dto';

@Injectable()
export class RoutesService {

  constructor(
    private createUseCase: CreateRouteUseCase,
    private listAllUseCase: ListAllRoutesUseCase,

  ){}

  async create(createRouteDto: CreateRouteDto) {
    return await this.createUseCase.execute(createRouteDto);
  }

  async findAll() {
    return await this.listAllUseCase.execute();
  }
}
