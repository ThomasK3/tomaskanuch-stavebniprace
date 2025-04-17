'use client';
// components/CopyText.tsx
import { useState } from 'react';

interface CopyTextProps {
  text: string;
  label?: string;
  className?: string;
}

export default function CopyText({ text, label, className = "" }: CopyTextProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    
    // Reset copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative inline-block">
      <span 
        className={`cursor-pointer hover:text-[#1AC8ED] transition duration-300 ${className}`}
        onClick={handleCopy}
      >
        {text}
      </span>
      {copied && (
        <div className="absolute left-0 -top-8 bg-[#1AC8ED] text-white text-xs py-1 px-2 rounded whitespace-nowrap z-10">
          {label || "Text zkopírován!"}
          <div className="absolute left-3 top-full w-2 h-2 bg-[#1AC8ED] transform rotate-45"></div>
        </div>
      )}
    </div>
  );
}