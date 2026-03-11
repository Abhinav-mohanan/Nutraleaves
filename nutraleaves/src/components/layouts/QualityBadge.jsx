import React from 'react'

const QualityBadge = ({icon:Icon,title,subtitle}) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center p-6 bg-stone-50 rounded-xl border border-emerald-200">
        <div className="size-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
            <Icon className="w-8 h-8" />
        </div>
        <div>
            <p className="font-black text-slate-900">{title}</p>
            <p className="text-xs text-emerald-700">{subtitle}</p>
        </div>
    </div>
    );
}

export default QualityBadge