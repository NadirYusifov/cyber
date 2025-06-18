export const productGet = app.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        message: 'Ok'
    });
});