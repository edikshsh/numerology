import { SubCategory } from "../models/subCategory";

export interface FormulaInterface{
    name: string ;
    parent: SubCategory;
    calculate({...params}):any;

}