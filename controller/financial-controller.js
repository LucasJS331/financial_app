const finantialFactory = require("../factory/finantial-factory");
const db = require("../db/connection");
const financial_service = require("../service/financial-service");
const axios = require("axios");

class FinancialController{
    async Index(req,res){
        res.render("index", {
            error: ""
        });
    }
   async Search(req,res){
        let {search} = req.body;
        try {
            let result = await axios.get(`https://sandbox.iexapis.com/stable/stock/${search}/quote?token=${process.env.API_TOKEN}`)
            let formatedData = finantialFactory(result.data);
            let check =  await financial_service.checkRequest(formatedData.symbol);

            if(check){

                res.render("dataView",{
                    name: formatedData.name,
                    symbol: formatedData.symbol,
                    latestPrice: formatedData.latestPrice,
                    latestTime: formatedData.latestTime,
                    raw: formatedData.raw
                })

            await financial_service.saveRequest(formatedData.symbol);
            return;
            }
            else{
                res.render("index", {error: "essa requisição ja foi feita!"})
            }
    } catch (error) {
        res.render("index", {
            error: "a organização não foi encontrada."
        })        
    }
    }

   async View(req,res){
        let {search} = req.params;
        try {
            let result = await axios.get(`https://sandbox.iexapis.com/stable/stock/${search}/quote?token=${process.env.API_TOKEN}`)
            res.json(result.data);
        } catch (error) {
            res.render("index",{
                error: "organização não encontrada!"
            });
        }
    }
}

module.exports = new FinancialController();