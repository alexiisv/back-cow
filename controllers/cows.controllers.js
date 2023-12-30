const record = require("../models/record");
const Record = require("../models/record");

const recordsGet = async(req = request, res = response) => {



    const records = await Record.find( {} );

    res.json( records );
}

module.exports = {
    recordsGet
}