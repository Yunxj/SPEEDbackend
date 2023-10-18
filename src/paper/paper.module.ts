import {Module} from '@nestjs/common';
import {PaperController} from './paper.controller';
import {PaperService} from './paper.service';
import {MongooseModule} from '@nestjs/mongoose';
import {PaperSchema} from './paper.model';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Paper', schema: PaperSchema}])],
  controllers: [PaperController],
  providers: [PaperService],
})
export class PaperModule {}
