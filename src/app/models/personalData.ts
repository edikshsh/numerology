export class PersonalData {

    extra = {}
    constructor(public firstname: string,
        public lastname: string,
        public birthdate: Date = new Date(),
        public personalDate: Date = new Date(),
        {...kwargs} = {}) {

            if (kwargs){
                this.extra=Object.entries(kwargs)
            }
         }

         



}