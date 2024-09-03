const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();
const port = 5000;

app.use(cors()); 
app.use(bodyParser.json()); 

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'API for user registration, authentication, and product retrieval',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./server.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Example product data
const products = [
    { image: "/product.jpg", title: "Product 1", price: 120, discountedPrice: 100 },
    { image: "/product.jpg", title: "Product 2", price: 200 },
    { image: "/product.jpg", title: "Product 3", price: 150, discountedPrice: 130 },
    { image: "/product.jpg", title: "Product 4", price: 180 },
    { image: "/product.jpg", title: "Product 5", price: 300, discountedPrice: 250 },
    { image: "/product.jpg", title: "Product 6", price: 350 },
    { image: "/product.jpg", title: "Product 7", price: 350 },
    { image: "/product.jpg", title: "Product 8", price: 350 }
];

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         image:
 *           type: string
 *           description: URL of the product image
 *         title:
 *           type: string
 *           description: Title of the product
 *         price:
 *           type: number
 *           format: float
 *           description: Price of the product
 *         discountedPrice:
 *           type: number
 *           format: float
 *           description: Discounted price of the product, if applicable
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of products
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
app.get('/products', (req, res) => {
    res.status(200).json(products);
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Registration:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - password
 *         - confirmPassword
 *       properties:
 *         firstName:
 *           type: string
 *           description: First name of the user
 *         lastName:
 *           type: string
 *           description: Last name of the user
 *         email:
 *           type: string
 *           format: email
 *           description: Email of the user
 *         password:
 *           type: string
 *           description: User password
 *         confirmPassword:
 *           type: string
 *           description: Confirm password to ensure it matches the password
 */

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Registration'
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Validation error or missing fields
 */
app.post('/signup', (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({ 
      message: 'Password must be at least 6 characters long, contain at least one number and one special character.' 
    });
  }

  console.log(`User signed up with email: ${email}, firstName: ${firstName}, lastName: ${lastName}`);

  res.status(201).json({ message: 'User registered successfully' });
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: Email of the user
 *         password:
 *           type: string
 *           description: User password
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Authenticate a user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Missing fields or invalid credentials
 *       401:
 *         description: Unauthorized
 */
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  if (email === 'user@example.com' && password === 'password123!') {
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
