import * as mongoose from 'mongoose';

export const PaperSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    authors: {
      type: String,
      require: true,
    },
    journalName: String,
    yearOfPublication: Number,
    volume: String,
    number: String,
    pages: String,
    DOI: String,
    SE: String,
    ratePersonNum: Number,
    rateTotal: Number,
    approval: {
      // 0 待审核 1 审核通过 2 审核不通过
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export interface Paper {
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

}

export interface getPaperInterFace {
  order?: 'ascend' | 'descend';
  sortBy?: keyof Paper;
  id?: string;
  title?: string;
  authors?: string;
  SE?: string;
  journalName?: string;
  yearOfPublication?: number;
  volume?: string;
  number?: string;
  pages?: string;
  DOI?: string;
  approval?: number;
  startYear: number | string;
  endYear: number | string;
  role?: number | string;
}
