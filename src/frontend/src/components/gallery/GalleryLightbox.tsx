import { useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryImage } from '../../data/gallery';

interface GalleryLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const currentImage = images[currentIndex];

  const handlePrevious = () => {
    onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl border-amber-900/30 bg-zinc-950 p-0">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-50 text-amber-400 hover:bg-amber-900/20 hover:text-amber-300"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>

          <div className="relative flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-40 text-amber-400 hover:bg-amber-900/20 hover:text-amber-300"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-h-[85vh] w-full object-contain"
            />

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-40 text-amber-400 hover:bg-amber-900/20 hover:text-amber-300"
              onClick={handleNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          <div className="border-t border-amber-900/30 bg-zinc-950 p-6 text-center">
            <p className="text-xl font-semibold text-amber-400">{currentImage.caption}</p>
            <p className="mt-2 text-sm text-amber-100/60">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
