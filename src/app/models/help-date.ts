import { HelperFunctions } from "./helper-functions"

export class HelpDate {
    
    private _day = 0
    private _month = 0
    private _year = 0

    private _dayDigits: number[] = []
    private _monthDigits: number[] = []
    private _yearDigits: number[] = []

    private funcs = new HelperFunctions()

    constructor(public date:Date = new Date()){
        console.log(this.date);
        
        this._day = this.date.getDate();
        this._month = this.date.getMonth() + 1;
        this._year = this.date.getFullYear();

        this._dayDigits = this.funcs.toDigits(this.day)
        this._monthDigits = this.funcs.toDigits(this.month)
        this._yearDigits = this.funcs.toDigits(this.year)
    }

    get day(): number {return this._day} 
    get month(): number {return this._month} 
    get year(): number {return this._year} 
    get dayDigits(): number[] {return this._dayDigits} 
    get monthDigits(): number[] {return this._monthDigits} 
    get yearDigits(): number[] {return this._yearDigits} 

}