import {Injectable} from '@angular/core'
import {Storage} from '@ionic/storage'

@Injectable()
export class UserSettings{

    pass = []
    keys = []
    activities: any[] = []
    constructor(private storage: Storage){}

    newUser(value:{email:string, password:string, password1:string}){
        let items = {password:value.password, password1:value.password1}
        return this.storage.keys().then((values) =>{
            if(this.inArray(value.email, values)===true){
                return false
            }
            else{
                this.storage.set(value.email, items)
            }
        } )
    }

    inArray(target, array){
       for(var i = 0; i<array.length; i++){
           if(array[i] === target){
               return true
           }
       } 
       return false
    }

    oldUser(email){
        return this.storage.keys().then((values) =>{
            if(this.inArray(email, values)===true){
                return this.storage.get(email).then(
                    (value) => {
                        this.pass.push(value.password)
                        return this.pass[0]
                    }
                )
            }
        } )
    }

    addActivity(activity){
        this.activities.push()
    }

    getActivity(){
        return this.activities.slice();
    }
}

