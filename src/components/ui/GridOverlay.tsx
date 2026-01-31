export default function GridOverlay() {
   return (
      <div className="absolute inset-0 z-20 pointer-events-none">
         {/* Horizontal Lines */}
         <div className="absolute top-1/3 left-0 w-full h-px bg-primary/20" />
         <div className="absolute top-2/3 left-0 w-full h-px bg-primary/20" />

         {/* Vertical Lines */}
         <div className="absolute top-0 left-1/4 w-px h-full bg-primary/20 hidden md:block" />
         <div className="absolute top-0 left-2/4 w-px h-full bg-primary/20" />
         <div className="absolute top-0 left-3/4 w-px h-full bg-primary/20 hidden md:block" />

         {/* Crosshairs */}
         <div className="absolute top-1/3 left-1/4 w-3 h-3 border-t border-l border-primary/40 -translate-x-px -translate-y-px hidden md:block" />
         <div className="absolute top-2/3 left-3/4 w-3 h-3 border-b border-r border-primary/40 -translate-x-px -translate-y-px hidden md:block" />
      </div>
   );
}
