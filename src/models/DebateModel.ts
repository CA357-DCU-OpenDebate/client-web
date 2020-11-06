import {Expose, Transform, Type} from "class-transformer";

export class Analyse {
  @Expose()
  @Transform((value: Array<any>) => JSON.stringify(value), { toPlainOnly: true })
  @Transform(value => (typeof value === "string" ? JSON.parse(value) : null), {
    toClassOnly: true,
  })
  description: Array<any> | string | null = null;

  @Expose()
  @Transform((value: Array<any>) => JSON.stringify(value), { toPlainOnly: true })
  @Transform(value => (typeof value === "string" ? JSON.parse(value) : null), {
    toClassOnly: true,
  })
  conclusion: Array<any> | string | null = null;

  constructor(data: Partial<Analyse>) {
    Object.assign(this, data);
  }
}

export default class DebateModel {
  @Expose() id!: number;
  @Expose() ownerId!: number;
  @Expose() title!: string;

  @Type(() => Analyse)
  @Expose()
  analyse!: Analyse;

  @Expose() views!: number;
  @Expose() createdAt!: string;
  @Expose() updatedAt!: string;

  constructor(data: Partial<DebateModel>) {
    Object.assign(this, data);
  }
}
