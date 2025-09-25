import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Business Code - Tu Visión en Código",
  description:
    "Desarrollamos sitios web y plataformas digitales para escuelas que desean proyectar una imagen profesional, captar más alumnos y mejorar su gestión.",
  keywords: "desarrollo web, academias, escuelas, plataformas educativas, sitios web profesionales",
  authors: [{ name: "Business Code" }],
  openGraph: {
    title: "Business Code - Tu Visión en Código",
    description:
      "Desarrollamos sitios web y plataformas digitales para escuelas que desean proyectar una imagen profesional",
    type: "website",
    locale: "es_PE",
  },
    generator: 'v0.dev',
    icons: {
    icon: "/1.png", // asegúrate de tener esta imagen dentro de /public
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
