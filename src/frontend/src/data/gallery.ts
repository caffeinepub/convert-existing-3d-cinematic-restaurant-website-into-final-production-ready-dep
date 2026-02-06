export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/assets/generated/gallery-dish-1.dim_1600x1067.png',
    alt: 'Signature dish presentation',
    caption: 'Signature Dish',
  },
  {
    id: '2',
    src: '/assets/generated/gallery-dish-2.dim_1600x1067.png',
    alt: 'Gourmet plating',
    caption: 'Culinary Artistry',
  },
  {
    id: '3',
    src: '/assets/generated/gallery-interior-1.dim_1600x1067.png',
    alt: 'Restaurant interior ambiance',
    caption: 'Intimate Atmosphere',
  },
  {
    id: '4',
    src: '/assets/generated/gallery-interior-2.dim_1600x1067.png',
    alt: 'Dining room setting',
    caption: 'Elegant Dining',
  },
];
