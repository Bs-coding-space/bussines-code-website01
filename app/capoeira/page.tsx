"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Trophy, Heart, MessageCircle, ArrowLeft } from 'lucide-react'
import Link from "next/link"

export default function CapoeiraPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-green-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-yellow-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-green-800">Ginga Brasil</h1>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-100 bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-yellow-500 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Academia de Capoeira Ginga Brasil</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Aprende el arte marcial brasileño que combina lucha, danza, acrobacia y música
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50 px-8 py-3"
                onClick={() =>
                  window.open(
                    "https://wa.me/51999999999?text=Hola, me interesa tomar clases de capoeira en Ginga Brasil",
                    "_blank",
                  )
                }
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Clase de Prueba Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-green-800 mb-4">Beneficios de la Capoeira</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-green-800 mb-2">Condición Física</h4>
                <p className="text-gray-600 text-sm">Mejora tu resistencia, fuerza y flexibilidad</p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-green-800 mb-2">Socialización</h4>
                <p className="text-gray-600 text-sm">Conoce personas y forma parte de una comunidad</p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-green-800 mb-2">Autodefensa</h4>
                <p className="text-gray-600 text-sm">Aprende técnicas de defensa personal</p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-green-800 mb-2">Expresión Artística</h4>
                <p className="text-gray-600 text-sm">Desarrolla tu creatividad y expresión corporal</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Users className="w-8 h-8" />
            <h4 className="text-2xl font-bold">Ginga Brasil</h4>
          </div>
          <p className="text-green-200 mb-6">Axé! Ven y descubre el arte de la capoeira</p>
        </div>
      </footer>
    </div>
  )
}