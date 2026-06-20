const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        image: "port1.png",
        description: "High-quality wireless headphones with noise cancellation and long battery life",
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 249.99,
        image: "port2.png",
        description: "Stylish smart watch with fitness tracking, heart rate monitoring, and customizable watch faces",
    },
    {
        id: 3,
        name: "Laptop Stand",
        price: 24.99,
        image: "port3.png",
        description: "Ergonomic laptop stand with adjustable height and angle for improved posture and comfort",
    },
    {
        id: 4,
        name: "Mechanical Keyboard",
        price: 123.99,
        image: "port4.png",
        description: "RGB backlit mechanical keyboard with Cherry MX switches for a satisfying typing experience",
    },
    {
        id: 5,
        name: "USB-C Hub",
        price: 34.99,
        image: "port5.png",
        description: "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader for expanded connectivity",
    },
    {
        id: 6,
        name: "Wireless Mouse",
        price: 78.99,
        image: "port6.png",
        description: "Ergonomic wireless mouse with adjustable DPI settings and long battery life for comfortable use",
    }
];

export function getProducts() {
    return products;
}

export function getProductById(id) {
    return products.find(p => p.id === Number(id));
}