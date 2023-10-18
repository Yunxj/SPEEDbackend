import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Delete,
  Put,
} from '@nestjs/common';
import {PaperService} from './paper.service';
import {getPaperInterFace} from './paper.model';

@Controller('paper')
export class PaperController {
  constructor(private readonly paperService: PaperService) {}
  // 添加
  @Post('/add')
  index3(@Body() params: getPaperInterFace) {
    return this.paperService.insertPaper(params);
  }
  // 查询
  @Get('/list')
  index2(@Query() query: getPaperInterFace) {
    console.log('query list', query);
    return this.paperService.getPaper(query);
  }
  // 删除
  @Delete('/delete/:id')
  index1(@Param() param: {id: string}) {
    return this.paperService.deletePaper(param);
  }
  // 编辑
  @Put('/edit')
  index6(
    @Body()
    params: {
      id: string;
      title: string;
      authors: string;
      journalName: string;
      yearOfPublication: number;
      volume: string;
      number: string;
      pages: string;
      DOI: string;
      approval: number;
      SE: string;
    },
  ) {
    return this.paperService.editPaper(params);
  }
}
