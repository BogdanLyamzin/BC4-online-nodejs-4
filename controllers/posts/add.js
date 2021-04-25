
const add = (req, res, next) => {
    const {body} = req;
    /*
    body = {
        title: "New post",
        description: "New post description"
    }
    */
    res.json({
        status: "success",
        code: 200,
        data: {
            result
            /*
            {
                _id: "ghgdfg1",
                title: "New post",
                description: "New post description"
            }
            */
        }
    })
};

module.exports = add;