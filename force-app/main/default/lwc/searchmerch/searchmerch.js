import { LightningElement} from 'lwc';
import getMerchandise from '@salesforce/apex/SearchMerchandise.getMerchandise';

export default class Searchmerch extends LightningElement {
    accName;
    accPhone;

    handleOnChangeaccName(event){
        this.accName = event.target.value;
    }
    handleOnChangeaccPhone(event){
        this.accPhone = event.target.value;
    }
    clearData(){
        this.accName = '';
        this.accPhone = '';
        this.dispatchEvent(new CustomEvent('cleardata',null))
    }
    
    initiateSearch(event){
        alert('Yes sir, I am ready to search name! = '+this.accName);

        alert('Yes sir, I am ready to search! = '+this.accPhone);
        
        if(!this.accPhone){
            this.accPhone = '0';
        }

    
        getMerchandise({searchTerm:this.accName,s:this.accPhone}).then(results=>{
            this.dispatchEvent(new CustomEvent('getaccountdata',{detail:results}));
        }).catch(error=>{
            console.log(error);
        })
    }
 
}