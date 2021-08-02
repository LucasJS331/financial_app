const db = require("../db/connection");
class Financial{
   async saveRequest(symbol){
        await db.insert({symbol}).from("financial_request");
    }

    async checkRequest(requestSymbol){
        let result = await db.select("symbol").from("financial_request").where({symbol: requestSymbol});

        if(result.length > 0){
            return false;
        }

        else{
            return true;
        }
    }
}

module.exports = new Financial();