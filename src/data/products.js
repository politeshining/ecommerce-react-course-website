const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        image: "port1.png",
        description: "Premium wireless headphones with noise cancellation",
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 249.99,
        image: "port2.png",
        description: "Feature-rich smartwatch with fitness tracking, healthcare features",
    },
    {
        id: 3,
        name: "Laptop Stand",
        price: 24.99,
        image: "port3.png",
        description: "Precise laptop stand, durable, and longlasting, efficient ",
    },
    {
        id: 4,
        name: "Mechanical Keyboard",
        price: 123.99,
        image: "port4.png",
        description: "RGB backlit mechanincal keyboard with Cherry",
    },
    {
        id: 5,
        name: "USB-C Hub",
        price: 34.99,
        image: "port5.png",
        description: "Multi-port USB-C hub with HDMI, USB 3.0, and SD card slot ",
    },
    {
        id: 6,
        name: "Wireless Mouse",
        price: 78.99,
        image: "port6.png",
        description: "Ergonomic wireless mous with precision tracking",
    }
];

export function getProducts() {
    return products;
}