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
    isReviewed: false
};

export const initialMetaData = {
    title: null,
    slug: null,
    description: null,
    index: "nofollow,noindex",
};

export const initialProductForm = {
    general: {
        name: null,
        description: null,
        category: null,
        badges: [],
        status: null,
        details: "<p>Product Details</p>",
        isReviewed: false
    },
    variations: [{
        sizes: [],
        colors: ["#607D8B"],
        stock: null,
        price: null,
        discountedPrice: null,
        uuid: Date.now()
    }],
    metaData: {
        title: null,
        slug: null,
        description: null,
        index: "nofollow,noindex",
    },
    shipping: {
        weight: 20,
        dimensions: null,
    }
}
