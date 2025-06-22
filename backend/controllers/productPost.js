import { cyberProductModels } from "../models/cyberProductModels.js"

export const productPost = (req, res) => {
    const data = req.body
    cyberProductModels.create(data).then((result) => {
        try {
            if (data && data.name && data.description && data.price) {
                res.status(201).send({
                    status: 201,
                    message: 'Product created successfully',
                    data: result
                })
            } else {
                res.status(400).send({
                    status: 400,
                    message: 'This have product',
                });
            };
        } catch (error) {
            console.log('Error creating product', error.message);
        };
    });
};