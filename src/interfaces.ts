export interface IProduct {
  id: number;
  slug: string;
  category: string;
  imageUrl: string;
  description: string;
  isFavorite: boolean;
  isRated: boolean;
  totalRating: number;
  rating: number;
  price: string;
}
