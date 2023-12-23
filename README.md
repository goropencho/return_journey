# Express TypeScript Server

This project is a sample Express server implemented in TypeScript with a modular folder structure. It includes routes, unit tests using Jest, middleware for logging requests, validators for request body validation, and utility functions for route execution.

## Project Structure

```
.
├── src
├── routes
│   └── products.ts
├── test
│   └── products.test.ts
├── utils
│   └── logger.ts
├── validations
│   └── products.ts
└── views
    └── products.ts
├── .gitignore
├── package.json
├── tsconfig.json
├── nodemon.json
├── jest.config.js
└── server.ts
```

## Folders Description

1. **routes**: Contains route handlers for different resources. In this example, there is a `products` file with handlers for CRUD operations (POST, GET, PUT, DELETE).

2. **test**: Houses unit tests for the routes using Jest. The `products.test.ts` file corresponds to the tests for the `products` routes.

3. **utils**: Contains utility functions and middleware. In this case, it includes the `LogRequest` middleware, which logs every incoming request to the server.

4. **validations**: Holds validator functions for request body validation. For example, `createProductValidator.ts` and `updateProductValidator.ts` validate the request body for the `createProduct` and `updateProduct` APIs, respectively.

5. **views**: Contains functions to be used by the routes for execution. It includes `createProduct.ts`, `getProductById.ts`, `getProducts.ts`, `updateProduct.ts`, and `deleteProduct.ts`, which represent the functions corresponding to the CRUD operations.

## Getting Started

1. Clone the repository: `git clone https://github.com/goropencho/return_journey.git`
2. Navigate to the project directory: `cd return_journey`
3. Install dependencies: `npm install`
4. Run the server: `npm start`

## Running Tests

Execute unit tests using Jest:

```bash
npm test
```

## Additional Notes

- Customize the views and validators based on your specific application requirements.
- Extend the routes and add new folders as needed for additional features.

Feel free to reach out if you have any questions or need further assistance!