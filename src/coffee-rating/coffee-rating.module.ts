import { Module } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { CoffeeRatingController } from './coffee-rating.controller';
import { CoffeesModule } from 'src/coffees/coffees.module';

@Module({
  imports: [CoffeesModule],
  providers: [CoffeeRatingService],
  controllers: [CoffeeRatingController],
})
export class CoffeeRatingModule {}
