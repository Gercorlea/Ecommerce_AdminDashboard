type CollectionType = {
  _id: string;
  title: string;
  description: string;
  image: string;
  products: ProductType[];
};

type ProductType = {
  _id: string;
  title: string;
  description: string;
  media: [string];
  category: string;
  collections: [collectionType];
  tags: [string];
  sizes: [string];
  colors: [string];
  price: number;
  expense: number;
  createdAt: Date;
  updatedAt: Date;
};

type OrderProductType = {
  product: string;
  color: string;
  size: string;
  quantity: number;
};

type OrderType = {
  _id: string;
  customerClerkId: string;
  products: OrderProductType[];
  shippingAddress: {
    street1: string;
    street2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  shippingRate: string;
  totalAmount: number;
  createdAt: Date;
};

type OrderColumnType = {
  _id: string;
  customer: string;
  products: number;
  totalAmount: number;
  createdAt: string;
};

type OrderItemType = {
  product: ProductType;
  color: string;
  size: string;
  quantity: number;
};

type CustomerType = {
  clerkId: string;
  name: string;
  email: string;
};
