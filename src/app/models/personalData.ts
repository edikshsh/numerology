import { HelpDate } from "./help-date";
import { HelperFunctions } from "./helper-functions"

export class PersonalData {

    extra = {}
    public birthDate:HelpDate
    // public personalDate:HelpDate

    private funcs = new HelperFunctions();

    constructor(public firstname: string,
        public lastname: string,
        birthdate: Date = new Date(),
        // personalDate: Date = new Date(),
        { ...kwargs } = {}) {

            this.birthDate = new HelpDate(birthdate)
            // this.personalDate = new HelpDate(personalDate)

        if (kwargs) {
            this.extra = Object.entries(kwargs)
        }
    }
}