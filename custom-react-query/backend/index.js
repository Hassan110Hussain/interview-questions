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
        }
    ]
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server runnning on port ${port}`);
})
