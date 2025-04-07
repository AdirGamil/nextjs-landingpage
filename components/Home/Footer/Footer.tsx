'use client'

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5]  text-[#6B7280] text-sm py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        © {new Date().getFullYear()} <span className="font-semibold text-red-700">Adir Gamil</span>. All rights reserved.
      </div>
    </footer>
  )
}
