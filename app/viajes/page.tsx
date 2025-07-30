"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, Users, Calendar, Star, MessageCircle, ArrowLeft } from 'lucide-react'
import Link from "next/link"

export default function ViajesPage() {
  const destinos = [
    {
      nombre: "Machu Picchu Clásico",
      duracion: "3 días / 2 noches",
      precio: "S/ 850",
      descripcion: "Descubre la ciudadela inca más famosa del mundo",
      categoria: "Aventura",
    },
    {
      nombre: "Iquitos - Amazonía",
      duracion: "4 días / 3 noches",
      precio: "S/ 1,200",
      descripcion: "Explora la selva amazónica y su biodiversidad",
      categoria: "Naturaleza",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-blue-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-blue-800">Destinos Mágicos</h1>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100 bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Descubre el Perú con Nosotros</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Vive experiencias únicas en los destinos más increíbles del Perú con nuestros tours especializados
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3"
                onClick={() =>
                  window.open(
                    "https://wa.me/51999999999?text=Hola, me interesa conocer sus paquetes turísticos",
                    "_blank",
                  )
                }
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Cotizar Viaje
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Destinos Populares */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-blue-800 mb-4">Destinos Populares</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {destinos.map((destino, index) => (
              <Card key={index} className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-blue-800">{destino.nombre}</CardTitle>
                      <p className="text-gray-600">{destino.duracion}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{destino.precio}</div>
                      <Badge className="bg-blue-600 text-white mt-1">{destino.categoria}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{destino.descripcion}</p>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() =>
                      window.open(
                        `https://wa.me/51999999999?text=Hola, me interesa el paquete ${destino.nombre}`,
                        "_blank",
                      )
                    }
                  >
                    Reservar Ahora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Plane className="w-8 h-8" />
            <h4 className="text-2xl font-bold">Destinos Mágicos</h4>
          </div>
          <p className="text-blue-200 mb-6">Tu aventura comienza aquí</p>
        </div>
      </footer>
    </div>
  )
}