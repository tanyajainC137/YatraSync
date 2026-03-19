"use client";

import { Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#0F0F0F] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#FFD100] to-amber-500">
              <svg
                className="h-5 w-5 text-[#0F0F0F]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">YatraSync</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Contact
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Careers
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-all hover:border-[#FFD100] hover:text-[#FFD100]"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-all hover:border-[#FFD100] hover:text-[#FFD100]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-all hover:border-[#FFD100] hover:text-[#FFD100]"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2025 YatraSync Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Made with ❤️ in Bangalore for Bangalore
          </p>
        </div>
      </div>
    </footer>
  );
}
