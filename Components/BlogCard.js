"use client";

import Link from "next/link";

const BlogCard = ({ image, title, description, link, isAr = true }) => {
  return (
    <div className={`group relative flex flex-col bg-gradient-to-b from-[#0A1138] to-[#050A30] rounded-[1.5rem] overflow-hidden border border-white/5 hover:border-blue-500/50 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 h-full ${isAr ? 'text-right' : 'text-left'}`} dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* "New" Badge - Flipped position */}
      <div className={`absolute top-4 ${isAr ? 'left-4' : 'right-4'} z-30`}>
        <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 tracking-wider">
          NEW
        </span>
      </div>

      {/* Image Container - More Compact */}
      <div className="relative p-4 pb-0 flex justify-center items-center bg-[#020024]/30">
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-inner bg-[#020024]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Content Container - Compact padding */}
      <div className="p-6 pt-4 flex flex-col flex-grow gap-3">
        <h3 className="text-lg md:text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors duration-300 line-clamp-2 min-h-[3rem] whitespace-pre-line">
          {title}
        </h3>
        <p className="text-blue-100/50 text-sm leading-relaxed line-clamp-2 font-medium">
          {description}
        </p>
        
        <div className="mt-auto pt-4 flex items-center justify-end">
            <Link 
                href={link} 
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300 w-full"
            >
                {isAr ? 'عرض المقال' : 'View Post'}
            </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
