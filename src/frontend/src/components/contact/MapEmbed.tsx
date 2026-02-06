export default function MapEmbed() {
  return (
    <div className="relative h-full min-h-[400px] overflow-hidden rounded-lg border border-amber-900/30 bg-zinc-950">
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=-122.42%2C37.77%2C-122.40%2C37.79&layer=mapnik&marker=37.78%2C-122.41"
        className="h-full w-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Restaurant Location"
      />
      <div className="absolute inset-0 pointer-events-none border-2 border-amber-600/20 rounded-lg" />
      
      {/* Fallback message if iframe is blocked */}
      <noscript>
        <div className="flex h-full items-center justify-center p-8 text-center">
          <p className="text-amber-100/80">
            Map embed is not available. Please enable JavaScript or visit us at 123 Culinary Boulevard, San Francisco, CA 94102
          </p>
        </div>
      </noscript>
    </div>
  );
}
