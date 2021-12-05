export class PersonalData {

    extra = {}
    constructor(public firstname: string,
        public lastname: string,
        public birthdate: Date,
        public personalDate: Date,
        {...kwargs} = {}) {

            if (kwargs){
                this.extra=Object.entries(kwargs)
            }
         }



}