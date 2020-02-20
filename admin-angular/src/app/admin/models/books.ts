import { Cates } from "./cates";

export class Books {
  public id: number;
  public title: string;
  public author: string;
  public publisher: string;
  public publicationDate: string;
  public isbn: string;
  public language: string;
  public numberOfPages: number;
  public format: string;
  public shippingWeight: number;
  public listPrice: number;
  public ourPrice: number;
  public active: boolean;
  public inStockNumber: number;
  public description: string;
  public cates: Cates;
}
