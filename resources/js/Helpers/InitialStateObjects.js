export const initialProductVariations = {
    sizes: [],
    colors: ["#607D8B"],
    stock: null,
    price: null,
    discountedPrice: null,
    uuid: Date.now()
};

export const initialGeneral = {
    name: null,
    description: null,
    category: null,
    badges: [],
    status: null,
    details: "<p>Product Details</p>",
    reviews: true
};

export const initialMetaData = {
    title: null,
    slug: null,
    description: null,
    index: "nofollow,noindex",
};

export const initialShipping = {
    weight: null,
    dimensions: null,
    minimumOrder: null,
    purchaseNote: null,
};
