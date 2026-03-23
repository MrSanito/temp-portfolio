import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vishal (MrSanito) | Backend & AI/ML Engineer',
    short_name: 'MrSanito',
    description: 'Portfolio of Vishal (MrSanito), a Backend Engineer and AI/ML enthusiast. Explore projects like Quiz Master Turbo and SoloBuild.',
    start_url: '/',
    display: 'standalone',
    background_color: '#030303',
    theme_color: '#a855f7',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
