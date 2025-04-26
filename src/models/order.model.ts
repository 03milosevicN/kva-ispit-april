export interface OrderModel {
  id: number;
  movieId: number | undefined;
  count: number;
  pricePerItem: number;
  status: 'ordered' | 'paid' | 'canceled';
  rating: null | boolean;
}
