// /posts?dateFrom=2020-01-01&dateTo=2021-01-01
const getAll = (req, res, next) => {
    const {query} = req;
    /*
    {
        dateFrom: "2020-01-01",
        dateTo: "2021-01-01"
    }
    */
    res.json({
        status: "success",
        code: 200,
        data: {
            result: []
        }
    })
};

module.exports = getAll;