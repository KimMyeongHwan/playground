'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function MaisonPopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-[800px] h-[900px]">
        {/* ✕ 닫기 버튼 (검정색) */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-black text-3xl font-light z-10 hover:scale-110 transition"
        >
          ✕
        </button>

        {/* 포스터 이미지 전체 */}
        <Image
          src="/images/maison2025-poster.png"
          alt="2025 메종오브제 모집 포스터"
          width={800}
          height={900}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
