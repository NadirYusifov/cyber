export const productGetId = (req, res) => {
    const {id} = req.params;
    res.status(200).send({
        status: 200,
        message: 'This is the puduct id',
        id: id
    })
}