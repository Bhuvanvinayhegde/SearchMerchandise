import { LightningElement ,api} from 'lwc';

const columns = [
    { label: 'Merchandise id', fieldName: 'id' },
    { label: 'Merchandise Name', fieldName: 'Name' },
    { label: 'Merchandise Stock', fieldName: 'Merchandise_Stock__c',type : 'Number' },
    { label: 'Merchandise Desc', fieldName: 'Merchandise_Desc__c',type : 'Currency' },
];

export default class Searchcmp extends LightningElement {
    columns = columns;
    @api searchresults=[];

    
}