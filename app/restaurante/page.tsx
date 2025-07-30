"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Mail, Star, ChefHat, Utensils, MessageCircle, ArrowLeft } from 'lucide-react'
import Link from "next/link"

export default function RestaurantePage() {
  const menuItems = [
    {
      name: "Lomo Saltado Premium",
      description: "Jugoso lomo de res salteado con papas fritas y arroz",
      price: "S/ 32",
      category: "Platos Principales",
    },
    {
      name: "Ceviche de Pescado",
      description: "Pescado fresco marinado en limón con camote y cancha",
      price: "S/ 28",
      category: "Entradas",
    },
    {
      name: "Ají de Gallina",
      description: "Pollo deshilachado en crema de ají amarillo",
      price: "S/ 26",
      category: "Platos Principales",
    },
    {
      name: "Pisco Sour",
      description: "Cóctel tradicional peruano con pisco y limón",
      price: "S/ 18",
      category: "Bebidas",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-orange-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-red-500 rounded-lg flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-orange-800">La Mesa Dorada</h1>
            </div>
            <Link href="/">
              <Button
                variant="outline"
                className="border-orange-300 text-orange-700 hover:bg-orange-100 bg-transparent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-500 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Sabores Auténticos del Perú</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Disfruta de la mejor gastronomía peruana en un ambiente acogedor y elegante
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3"
                onClick={() =>
                  window.open(
                    "https://wa.me/51999999999?text=Hola, me gustaría hacer una reserva en La Mesa Dorada",
                    "_blank",
                  )
                }
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Reservar Mesa
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Menú Destacado */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-orange-800 mb-4">Menú Destacado</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-orange-800">{item.name}</h4>
                    <Badge className="bg-orange-600 text-white">{item.price}</Badge>
                  </div>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <Badge variant="outline" className="border-orange-300 text-orange-700">
                    {item.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ChefHat className="w-8 h-8" />
            <h4 className="text-2xl font-bold">La Mesa Dorada</h4>
          </div>
          <p className="text-orange-200 mb-6">Sabores auténticos del Perú en cada plato</p>
        </div>
      </footer>
    </div>
  )
}