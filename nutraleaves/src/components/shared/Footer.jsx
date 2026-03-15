import { Globe, MessageCircleMore, Share2,} from 'lucide-react'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white px-4 lg:px-40 py-16">
        <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="flex flex-col gap-6 col-span-1 md:col-span-2">
                    <h2 className="text-2xl font-black tracking-tight text-white">Nutraleaves</h2>
                    <p className="text-white/60 max-w-sm leading-relaxed">
                        Pioneering the future of longevity through the concentrated power of microgreens. Pure, organic, and backed by science.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-lg mb-2">Navigation</h4>
                    <a className="text-white/60 hover:text-emerald-500 transition-colors text-sm" href="#">Home</a>
                    <a className="text-white/60 hover:text-emerald-500 transition-colors text-sm" href="#about">About Us</a>
                    <a className="text-white/60 hover:text-emerald-500 transition-colors text-sm" href="#microgreens">Microgreens</a>
                </div>
                <div className="flex gap-4">
                    <a className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors" href="#">
                        <Globe className="w-5 h-5" />
                    </a>
                    <a className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors" href="#">
                        <Share2 className="w-5 h-5" />
                    </a>
                    <a className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors" href="#">
                        <MessageCircleMore className="w-5 h-5" />
                    </a>
                </div>
            </div>
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
                <p>© 2024 Nutraleaves. All rights reserved.</p>
            </div>
        </div>
    </footer>

  )
}
export default Footer
