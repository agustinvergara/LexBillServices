export interface Order {
    id: number;
    details: OrderDetail[];
  }
  
  export interface OrderDetail {
    id: number;
    productName: string;
    quantity: number;
    price: number;
  }
  