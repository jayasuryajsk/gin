'use client'

import { usePathname } from 'next/navigation'

export function OffsetSpacer() {
  const pathname = usePathname()
  if (pathname === '/') return null
  return <div className="h-16"></div>
} 