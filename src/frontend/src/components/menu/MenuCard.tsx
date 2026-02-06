import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { MenuItem } from '../../data/menu';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group relative overflow-hidden border-amber-900/30 bg-gradient-to-br from-zinc-900 to-zinc-950 transition-all duration-500 hover:scale-105 hover:border-amber-600/50 hover:shadow-2xl hover:shadow-amber-900/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-amber-600/10 via-transparent to-orange-600/10 opacity-0 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : ''
        }`}
      />

      <CardHeader className="relative">
        <div className="mb-2 flex items-start justify-between">
          <CardTitle className="text-2xl font-bold text-amber-400 transition-colors duration-300 group-hover:text-amber-300">
            {item.name}
          </CardTitle>
          {item.featured && (
            <Badge className="bg-amber-600 text-white hover:bg-amber-700">
              Featured
            </Badge>
          )}
        </div>
        <p className="text-sm text-amber-100/60">{item.category}</p>
      </CardHeader>

      <CardContent className="relative">
        <p className="mb-4 text-amber-100/80 transition-colors duration-300 group-hover:text-amber-100">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-amber-500">{item.price}</span>
          <div
            className={`h-1 w-16 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 transition-all duration-500 ${
              isHovered ? 'w-24' : ''
            }`}
          />
        </div>
      </CardContent>
    </Card>
  );
}
