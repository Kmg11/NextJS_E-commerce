# E-commerce

## Live Preview

- Link: https://simple-ecommerce-app.vercel.app/

## How to Run App

### Development mode

    - npm install
    - npm run dev
    - Open: http://{your_local_ip}:{port}/
    - Example: http://192.168.1.4:3000/ || http://localhost:3000/

### Production Mode

    - npm install
    - npm run build
    - npm start
    - Open: http://{your_local_ip}:{port}
    - Example: http://192.168.1.4:3000

## Documentation

- Rules

  - All paths is absolute reference to src folder [ handled by jsconfig.json file ]

    - Don't use "../components"
    - Use "components"

  - All main folders like [ components, containers, store ]

    - have index.js file to collect all exports from them to simplify imports

  - All folders that not have direct component start with small letter

    - like [ components, containers, store ]

  - All components folders start with capital letter

    - like [ HomePage, Navbar ]

  - All exports is named export to avoid default export problems

- File Structure

  - [ pages ] Contain all app pages

  - [ components ] Contain all components that used by many pages [ Product, Navbar, ... ]

  - [ containers ]: Contain pages and there components [ HomePage, CartPage ]

  - [ constants ]: Contain all constants [ ROUTES, API_URL, ... ]

  - [ context ]: Contain all context [ ProductProvider, ... ]

  - [ hooks ]: Contain all hooks that used by many components [ useAxios, ... ]

  - [ store ]: Contain all redux logic [ cart ]

  - [ styles ]: Contain all styles that used by many components [ theme, gridSystem, ... ]

  - [ utils ]: Contain all utils
