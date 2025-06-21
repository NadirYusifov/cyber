export const productPost = (req, res) => {
    const data = req.body
    res.status(201).send({
        status: 201,
        message: 'Product created successfully',
        data: data
    })
}