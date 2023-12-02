@RestResource(URLMapping = '/newmerchandise/*')
global class CreateMerchUsingWeb {
	@httpPost
    global static void insertMerch(List<Merchandise__c> rec){
        insert rec;
    }
}