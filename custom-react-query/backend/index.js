import express from 'express'

const app = express()

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'table',
            price: 200,
            image: ''
        },
        {
            id: 2,
            name: 'chair',
            price: 100,
            image: ''
        },
        {
            id: 3,
            name: 'glass',
            price: 50,
            image: ''
        }
    ]

    if (req.query.search) {
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts)
        return;
    }

    setTimeout(() => {
        res.send(products)
    }, 2000)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server runnning on port ${port}`);
})
