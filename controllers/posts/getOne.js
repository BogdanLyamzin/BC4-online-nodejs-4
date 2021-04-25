// /posts/1
const getOne = (req, res, next) => {
    const {id} = req.params;
    /*
    req.params
    {
        id: 1
    }
    */
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
};

module.exports = getOne;