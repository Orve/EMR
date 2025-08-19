import { create } from 'zustand'

export const useReviewStore = create((set) => ({
  reviews: [],
  addReview: (review) => set((state) => ({ reviews: [...state.reviews, review] })),
}))
