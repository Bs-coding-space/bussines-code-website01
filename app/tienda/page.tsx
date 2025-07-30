"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Star, MessageCircle, ArrowLeft, Heart } from 'lucide-react'
import Link from "next/link"

export default function TiendaPage() {
  const productos = [
    {
      nombre: "Vestido Elegante",
      precio: "S/ 120",
      precioAnterior: "S/ 150",
      descripcion: "Vestido de noche elegante, perfecto para ocasiones especiales",
      categoria: "Vestidos",
    },
    {
      nombre: "Blusa Casual",
      precio: "S/ 65",
      precioAnterior: "S/ 80",
      descripcion: "Blusa cómoda y versátil para el día a día",
      categoria: "Blusas",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-pink-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-500 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-pink-800">Fashion Style</h1>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-100 bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-600 to-purple-500 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Moda que Define tu Estilo</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Descubre las últimas tendencias en moda femenina con la mejor calidad y precios increíbles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-3"
                onClick={() =>
                  window.open(
                    "https://wa.me/51999999999?text=Hola, me interesa conocer sus productos de moda",
                    "_blank",
                  )
                }
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Comprar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-16 px-4 bg-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-pink-800 mb-4">Productos Destacados</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productos.map((producto, index) => (
              <Card key={index} className="border-pink-200 hover:shadow-lg transition-all group">
                <CardContent className="p-4">
                  <Badge className="bg-pink-100 text-pink-700 mb-2">{producto.categoria}</Badge>
                  <h4 className="text-lg font-semibold text-pink-800 mb-2">{producto.nombre}</h4>
                  <p className="text-gray-600 text-sm mb-3">{producto.descripcion}</p>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold text-pink-600">{producto.precio}</span>
                    <span className="text-sm text-gray-500 line-through">{producto.precioAnterior}</span>
                  </div>

                  <Button
                    className="w-full bg-pink-600 hover:bg-pink-700"
                    onClick={() =>
                      window.open(
                        `https://wa.me/51999999999?text=Hola, me interesa el producto: ${producto.nombre} - ${producto.precio}`,
                        "_blank",
                      )
                    }
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Comprar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ShoppingBag className="w-8 h-8" />
            <h4 className="text-2xl font-bold">Fashion Style</h4>
          </div>
          <p className="text-pink-200 mb-6">Tu estilo, nuestra pasión</p>
        </div>
      </footer>
    </div>
  )
}