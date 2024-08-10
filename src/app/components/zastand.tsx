
import { create } from "zustand";

interface StoreState {
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
  imageDataUrl: string | null;
  setImageDataUrl: (url: string | null) => void;
  res: Record<string, any>; // Change this line
  setRes: (res: Record<string, any>) => void; // Change this line
}

const store = create<StoreState>((set) => ({
  selectedFile: null,
  setSelectedFile: (file) => set({ selectedFile: file }),
  imageDataUrl: null,
  setImageDataUrl: (url) => set({ imageDataUrl: url }),
  res: {}, // Initialize as an empty object
  setRes: (res) => set({ res }),
}));

export default store;