import { Pagination } from "Home/types/PaginationTypes";

export interface FetchOrdersPayload {
  page?: number;
  pageSize?: number;
}

export interface Customer {
  _id: string;
  name: string;
  email: string;
}

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
}

export interface Order {
  _id: string;
  customer: Customer;
  items: OrderItem[];
  price: number;
  createdAt: string;
}

export interface OrderState {
  orderList: Order[];
  loading: boolean;
  error: string | null;
  pagination: Pagination;
}

export interface OrderResponse {
  result: Order[];
  pagination: Pagination;
}
