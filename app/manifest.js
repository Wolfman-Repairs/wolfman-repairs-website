// import type { MetadataRoute } from 'next'

// export default function manifest(): MetadataRoute.Manifest {
//   return {
export default function manifest() {
  return {
    name: 'Wolfman Repairs',
    short_name: 'Wolfman Repairs',
    description: 'Reviving Retro, One Console at a Time!!',
    id: '/',
    start_url: '/',
    display: 'standalone',
    background_color: '#14532d',
    //background_color: '#171717',
    // theme_color: '#14532d',
    theme_color: '#171717',
    icons: [
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: '/icons/logo-2500x1100.png',
        sizes: '2500x1100',
        type: 'image/png',
        form_factor: 'wide',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        form_factor: 'narrow',
      }
    ]
  }
}