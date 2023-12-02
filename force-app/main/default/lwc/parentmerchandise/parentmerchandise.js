import { LightningElement } from 'lwc';
 
export default class parentmerchandise extends LightningElement {
    searchDetail=[];
    handleClear () {
        this.searchDetail = [];
    }
    handleaccount(event){
        this.searchDetail=[];
        alert('See the magic, I Called from Child');
        alert(event.detail);
        try{
            event.detail.forEach(x => {
                var accData = {
                    id:x.Id,
                    Name:x.Name,
                    Merchandise_Stock__c:x.Merchandise_Stock__c,
                    Merchandise_Desc__c:x.Merchandise_Desc__c
                }
                this.searchDetail.push(accData);
            });
        }
        catch(e){
            console.log(e);
        }
    }
}