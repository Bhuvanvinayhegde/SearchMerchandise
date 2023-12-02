public class SearchMerchandiseStock {
    @AuraEnabled(cacheable=true)
    public static Merchandise__c searchMerchandise(String name, Integer stock) {
        String query = 'SELECT Name, Merchandise_Stock__c, Merchandise_Desc__c FROM Merchandise__c WHERE ';
        if (name != null && name != '') {
            query += 'Name LIKE \'%' + name + '%\' AND ';
        }
        if (stock != null) {
            query += 'Merchandise_Stock__c = ' + stock + ' AND ';
        }

        List<Merchandise__c> result = Database.query(query);
        return result.isEmpty() ? null : result[0];
    }
}