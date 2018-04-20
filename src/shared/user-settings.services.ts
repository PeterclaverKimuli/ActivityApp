import {Injectable} from '@angular/core'
import {Storage} from '@ionic/storage'

@Injectable()
export class UserSettings{

    pass = []

    constructor(private storage: Storage){}

    newUser(value:{email:string, password:string, password1:string}){
        let values = {password:value.password, password1:value.password1}
        this.storage.set(value.email, values)
    }

    oldUser(email){
        return this.storage.get(email).then(
            (values) => {
                this.pass.push(values.password)
                return this.pass[0]
            }
        )
    }
}