function factory(data){

    let newData = {
        name: data.companyName,
        symbol: data.symbol,
        latestPrice: data.latestPrice,
        latestTime: data.latestTime,
        raw: data
    }

    return newData;
}

module.exports = factory;