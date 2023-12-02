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