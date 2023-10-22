import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Paper, getPaperInterFace} from './paper.model';

@Injectable()
export class PaperService {
  constructor(
    @InjectModel('Paper') private readonly paperModal: Model<Paper>,
  ) {}
  async insertPaper(params: getPaperInterFace) {
    const newPaper = new this.paperModal(params);
    try {
      const result = await newPaper.save();
      console.log('result', result);
      return {code: 1, message: 'sucess'};
    } catch (err) {
      return {code: 0, message: 'insert fail'};
    }
  }
  async getPaper(query: getPaperInterFace) {
    try {
      const regexField1 = new RegExp(query.title, 'i'); // 对应字段1的正则
      const regexField2 = new RegExp(query.authors, 'i'); // 对应字段2的正则
      const regexField3 = new RegExp(query.SE, 'i'); // 对应字段1的正则
      const filterArray = [];

      if (query.id) filterArray.push({_id: {$eq: query.id}});
      if (query.approval) filterArray.push({approval: {$eq: query.approval}});
      if (query.title) filterArray.push({title: {$regex: regexField1}});
      if (query.authors) filterArray.push({authors: {$regex: regexField2}});
      if (query.SE) filterArray.push({SE: {$regex: regexField3}});
      if (query.startYear && query.endYear) {
        filterArray.push({
          yearOfPublication: {
            $gte: Number(query.startYear),
            $lte: Number(query.endYear),
          },
        });
      } else if (query.startYear) {
        filterArray.push({
          yearOfPublication: {$gte: Number(query.startYear)},
        });
      } else if (query.endYear) {
        filterArray.push({
          yearOfPublication: {$lte: Number(query.endYear)},
        });
      }

      let filterObj: any = {};
      if (!query?.role) {
        filterObj = {
          approval: 3,
        };
      } else if (query?.role == 0) {
        filterObj = {
          approval: {$lte: 1},
        };
      } else if (query?.role == 1) {
        filterObj = {
          approval: {$lte: 2},
        };
      } else if (query?.role == 2) {
        filterObj = {
          approval: {$gt: 0},
        };
      } else if (query?.role == 3) {
        filterObj = {};
      }
      let filter = {};
      if (filterArray.length > 0) {
        filter = {
          $or: filterArray,
          approval: filterObj?.approval,
        };
      } else if (!!filterObj?.approval) {
        filter = {
          approval: filterObj?.approval,
        };
      } else {
        filter = {};
      }

      console.log('filter', filter, filterArray);

      const sortBy: any = query.sortBy;
      const order = query.order;

      let result;
      if (sortBy && order) {
        const sortOrder = query.order === 'ascend' ? 1 : -1;
        result = await this.paperModal.find(filter).sort({[sortBy]: sortOrder});
      } else {
        result = await this.paperModal.find(filter);
      }
      console.log('result', result);
      return {code: 1, message: 'sucess', data: [...result]};
    } catch (err) {
      console.log(err);
      return {code: 0, message: 'getPaper fail'};
    }
  }
  async deletePaper(param: {id: string}) {
    const {id} = param;
    const result = await this.paperModal.deleteOne({
      _id: id,
    });
    console.log('resultDelete', result);
    return {code: 1, message: 'sucess'};
  }

  async editPaper(params: any) {
    const {
      id,
      title,
      authors,
      journalName,
      yearOfPublication,
      volume,
      number,
      pages,
      DOI,
      approval,
      SE,
      rate,
    } = params;
    try {
      const editForm: any = {
        title,
        authors,
        journalName,
        yearOfPublication,
        volume,
        number,
        pages,
        DOI,
        approval,
        SE,
      };
      if (rate) {
        let ratePersonNum, rateTotal;
        // 根据id查出数据，然后进行修改
        const result: any = await this.paperModal.find({_id: id});
        console.log('result', result);
        const resultData = result[0];
        console.log('resultData', resultData);
        if (resultData.ratePersonNum) {
          ratePersonNum = resultData.ratePersonNum + 1;
        } else {
          ratePersonNum = 1;
        }
        if (resultData.rateTotal) {
          rateTotal = resultData.rateTotal + rate;
        } else {
          rateTotal = rate;
        }
        console.log('result', resultData);
        editForm.ratePersonNum = ratePersonNum;
        editForm.rateTotal = rateTotal;
      }
      console.log('editPaper', id, SE);
      const result2 = await this.paperModal.updateOne(
        {
          _id: id,
        },
        editForm,
      );
      console.log('result2edit', result2);
      return {code: 1, message: 'edit sucess'};
    } catch (err) {
      return {code: 0, message: 'edit failed'};
    }
  }
}
