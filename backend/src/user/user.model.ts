import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    // 1版主，2数据分析师 3 超管
    role: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

export interface User {
  name: string;
  password: string;
  role: string;
}
