"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Monitor, Users, MapPin, MessageCircle, BookOpen, Code, Server, Mail, Clock, CheckCircle, ArrowRight, Phone, Instagram, Facebook, Linkedin, Menu, X, ChefHat, Plane, ShoppingBag, GraduationCap, Award, Target, Lightbulb } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTemarioOpen, setIsTemarioOpen] = useState(false)
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/2.png" alt="Business Code Logo" width={200} height={60} className="h-12 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Servicios
              </a>
              <a href="#planes" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Planes
              </a>
              <a href="#tecnologia" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Tecnología
              </a>
              <a href="#portafolio" className="text-gray-300 hover:text-cyan-400 transition-colors">
  Portafolio
</a>
              <a href="#contacto" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Contacto
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#inicio" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Inicio
                </a>
                <a href="#servicios" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Servicios
                </a>
                <a href="#planes" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Planes
                </a>
                <a href="#tecnologia" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Tecnología
                </a>
                <a href="#contacto" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Contacto
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section - Inicio */}
      <section id="inicio" className="hero-bg py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Sitios Web Profesionales para
              <span className="gradient-text"> Empresas </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Desarrollamos sitios web y plataformas digitales para empresas ,academias e instituciones  que desean proyectar una imagen
              profesional, captar más clientes o alumnos para mejorar su gestión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="cyan-gradient hover:opacity-90 text-black font-semibold px-8 py-3"
                onClick={() =>
                  window.open(
                    "https://wa.me/919467620?text=Hola, me interesa conocer más sobre sus servicios para mi academia",
                    "_blank",
                  )
                }
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactar por WhatsApp
              </Button>
              <Button
  variant="outline"
  size="lg"
  className="px-8 py-3 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
  onClick={() => document.getElementById("portafolio")?.scrollIntoView({ behavior: "smooth" })}
>
  Ver Portafolio
  <ArrowRight className="w-5 h-5 ml-2" />
</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Nuestros Servicios</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Soluciones completas para modernizar la presencia digital de tu empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gray-800 border-gray-700 hover:border-cyan-400 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 cyan-gradient rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-black" />
                </div>
                <CardTitle className="text-2xl text-white">Diseño Web Personalizado</CardTitle>
                <CardDescription className="text-gray-400">
                  Sin plantillas genéricas, cada sitio es único
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Adaptado a celulares y PCs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Registro online para clases de prueba/citas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Galería de fotos, videos y testimonios</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Mapa de ubicación y botón de contacto</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-cyan-400 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Plataforma para Clientes</CardTitle>
                <CardDescription className="text-gray-400">Área privada opcional para clientes o el personal </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Estado de pagos y registro de clientes o alumnos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Control de asistencia</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Acceso a recursos virtuales</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Panel de administración completo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Planes y Precios</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a las necesidades de tu empresa ,academia o institucion 
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-700 hover:border-cyan-400 transition-all hover:shadow-lg">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-green-600 text-white">Básico</Badge>
                <CardTitle className="text-2xl text-white">Plan Básico</CardTitle>
                <div className="text-3xl font-bold text-cyan-400">Desde S/550-800</div>
                <CardDescription className="text-gray-400">Perfecto para empezar</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Sitio de 1-3 páginas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Integración WhatsApp</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Hosting gratuito</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Diseño responsive</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-2 border-cyan-400 hover:border-cyan-300 transition-all hover:shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="cyan-gradient text-black font-semibold">Más Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-cyan-600 text-black">Intermedio</Badge>
                <CardTitle className="text-2xl text-white">Plan Intermedio</CardTitle>
                <div className="text-3xl font-bold text-cyan-400">S/ 1000 - 1500</div>
                <CardDescription className="text-gray-400">Ideal para academias o empresas establecidas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Hasta 6 secciones</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Galería y testimonios</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Dominio propio</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Formularios de contacto</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 hover:border-purple-400 transition-all hover:shadow-lg">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-purple-600 text-white">Completo</Badge>
                <CardTitle className="text-2xl text-white">Plan Completo</CardTitle>
                <div className="text-3xl font-bold text-purple-400">S/ 2500 - 5000</div>
                <CardDescription className="text-gray-400">Solución integral</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Plataforma para clientes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Panel de administración</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Correos corporativos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Soporte prioritario</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tecnología */}
      <section id="tecnologia" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Tecnología Utilizada</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Utilizamos las mejores tecnologías para garantizar sitios web rápidos y seguros
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-orange-400" />
              </div>
              <h4 className="font-semibold text-white">HTML/CSS/JS</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="font-semibold text-white">Netlify</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="font-semibold text-white">Google Forms</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="font-semibold text-white">WhatsApp API</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-red-400" />
              </div>
              <h4 className="font-semibold text-white">Zoho Mail</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Tiempos de Entrega */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Tiempos de Entrega</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Trabajamos con plazos claros y cumplimos nuestros compromisos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-gray-900 border-gray-700 hover:border-green-400 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-400" />
                </div>
                <CardTitle className="text-xl text-white">Web Básica</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-400 mb-2">5-7 días</div>
                <p className="text-gray-400">Días hábiles</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-900 border-gray-700 hover:border-cyan-400 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-cyan-400" />
                </div>
                <CardTitle className="text-xl text-white">Web Intermedia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-400 mb-2">7-10 días</div>
                <p className="text-gray-400">Días hábiles</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-900 border-gray-700 hover:border-purple-400 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-400" />
                </div>
                <CardTitle className="text-xl text-white">Web + Plataforma</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-400 mb-2">10-15 días</div>
                <p className="text-gray-400">Días hábiles</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Proceso de Trabajo</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Un proceso claro y transparente para garantizar los mejores resultados
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 cyan-gradient text-black rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Reunión Inicial</h4>
                  <p className="text-gray-300">
                    Conversamos sobre tus necesidades, objetivos y visión para tu academia.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 cyan-gradient text-black rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Diseño Base</h4>
                  <p className="text-gray-300">Creamos el diseño inicial basado en tus requerimientos y marca.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 cyan-gradient text-black rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Ajustes</h4>
                  <p className="text-gray-300">
                    Realizamos las modificaciones necesarias hasta que estés completamente satisfecho.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 cyan-gradient text-black rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Entrega Final</h4>
                  <p className="text-gray-300">Tu sitio web queda listo y publicado, con capacitación incluida.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  5
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Desarrollo de Plataforma (Opcional)</h4>
                  <p className="text-gray-300">
                    Si elegiste el plan completo, desarrollamos tu plataforma personalizada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Portafolio */}
     {/* Portafolio */}
<section id="portafolio" className="py-20 px-4 bg-black">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <h3 className="text-4xl font-bold text-white mb-4">Nuestro Portafolio</h3>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Conoce algunos de los proyectos modelos que hemos desarrollado para diferentes tipos de negocios
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="bg-gray-900 border-gray-700 hover:border-cyan-400 transition-all hover:shadow-xl group">
        <div className="relative overflow-hidden rounded-t-lg">
          <div className="w-full h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <div className="text-center text-white">
              <ChefHat className="w-16 h-16 mx-auto mb-2 opacity-80" />
              <h4 className="text-xl font-bold">La Mesa Dorada</h4>
              <p className="text-sm opacity-90">Restaurante Gourmet</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Link href="/restaurante">
              <Button className="cyan-gradient text-black font-semibold">
                Ver Proyecto
              </Button>
            </Link>
          </div>
        </div>
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold text-white mb-2">Restaurante La Mesa Dorada</h4>
          <p className="text-gray-400 mb-4">
            Sitio web elegante con menú digital, sistema de reservas online y galería de platos gourmet.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-cyan-600 text-black">Menú Digital</Badge>
            <Badge className="bg-purple-600 text-white">Reservas</Badge>
            <Badge className="bg-green-600 text-white">Galería</Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-700 hover:border-cyan-400 transition-all hover:shadow-xl group">
        <div className="relative overflow-hidden rounded-t-lg">
          <div className="w-full h-48 bg-gradient-to-br from-green-500 to-yellow-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <div className="text-center text-white">
              <Users className="w-16 h-16 mx-auto mb-2 opacity-80" />
              <h4 className="text-xl font-bold">Ginga Brasil</h4>
              <p className="text-sm opacity-90">Academia de Capoeira</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Link href="/capoeira">
              <Button className="cyan-gradient text-black font-semibold">
                Ver Proyecto
              </Button>
            </Link>
          </div>
        </div>
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold text-white mb-2">Academia de Capoeira Ginga Brasil</h4>
          <p className="text-gray-400 mb-4">
            Plataforma completa con horarios de clases, videos de entrenamientos y sistema de pagos mensual.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-cyan-600 text-black">Horarios</Badge>
            <Badge className="bg-orange-600 text-white">Videos</Badge>
            <Badge className="bg-green-600 text-white">Pagos</Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-700 hover:border-cyan-400 transition-all hover:shadow-xl group">
        <div className="relative overflow-hidden rounded-t-lg">
          <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <div className="text-center text-white">
              <Plane className="w-16 h-16 mx-auto mb-2 opacity-80" />
              <h4 className="text-xl font-bold">Destinos Mágicos</h4>
              <p className="text-sm opacity-90">Agencia de Viajes</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Link href="/viajes">
              <Button className="cyan-gradient text-black font-semibold">
                Ver Proyecto
              </Button>
            </Link>
          </div>
        </div>
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold text-white mb-2">Agencia de Viajes Destinos Mágicos</h4>
          <p className="text-gray-400 mb-4">
            Sitio web con catálogo de destinos, cotizador automático y sistema de reservas de paquetes turísticos.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-cyan-600 text-black">Catálogo</Badge>
            <Badge className="bg-blue-600 text-white">Cotizador</Badge>
            <Badge className="bg-purple-600 text-white">Reservas</Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-700 hover:border-cyan-400 transition-all hover:shadow-xl group">
        <div className="relative overflow-hidden rounded-t-lg">
          <div className="w-full h-48 bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <div className="text-center text-white">
              <ShoppingBag className="w-16 h-16 mx-auto mb-2 opacity-80" />
              <h4 className="text-xl font-bold">Fashion Style</h4>
              <p className="text-sm opacity-90">Tienda de Ropa</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Link href="/tienda">
              <Button className="cyan-gradient text-black font-semibold">
                Ver Proyecto
              </Button>
            </Link>
          </div>
        </div>
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold text-white mb-2">Tienda de Ropa Fashion Style</h4>
          <p className="text-gray-400 mb-4">
            E-commerce completo con carrito de compras, pasarela de pagos y sistema de inventario en tiempo real.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-cyan-600 text-black">E-commerce</Badge>
            <Badge className="bg-green-600 text-white">Pagos Online</Badge>
            <Badge className="bg-red-600 text-white">Inventario</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
    <div className="text-center mt-12">
      <Button
        className="cyan-gradient hover:opacity-90 text-black font-semibold px-8 py-3"
        onClick={() =>
          window.open(
            "https://wa.me/919467620?text=Hola, me gustaría ver más proyectos de su portafolio",
            "_blank",
          )
        }
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        Ver Más Proyectos
      </Button>
    </div>
  </div>
</section>
{/* Programa Educativo */}
<section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="container mx-auto relative z-10">
    <div className="text-center mb-16">
      <div className="mb-8">
        <div className="text-center mb-8">
  <h1 className="text-4xl font-bold text-white mb-2">BUSINESS <span className="text-cyan-400">CODE-LEARNING</span></h1>
  <p className="text-cyan-300 text-lg">&gt;TU VISIÓN EN CÓDIGO</p>
</div>
      </div>
      <h3 className="text-4xl font-bold text-white mb-4">Programa Educativo</h3>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Capacitamos a usuarios estudiantes y empresarios en el mundo digital para que puedan gestionar 
        y potenciar su presencia online de manera efectiva
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <Card className="bg-black/50 border-gray-700 hover:border-cyan-400 transition-all hover:shadow-xl backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="w-16 h-16 cyan-gradient rounded-full flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-8 h-8 text-black" />
          </div>
          <CardTitle className="text-xl text-white">Introducción al Mundo Digital</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-sm">Alfabetización digital para estudiantes</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-sm">Seguridad básica en internet</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-sm">Buen uso de redes sociales</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-black/50 border-gray-700 hover:border-purple-400 transition-all hover:shadow-xl backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-xl text-white">Pensamiento Computacional</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-sm">Lógica de programación</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-sm">Lenguaje Python desde cero</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-sm">Resolución de problemas</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-black/50 border-gray-700 hover:border-green-400 transition-all hover:shadow-xl backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Code className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-xl text-white">Creación de Proyectos Digitales</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-sm">Crea tu primera página web</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-sm">Uso responsable de herramientas online</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-sm">Gestión de contenidos educativos</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-black/50 border-gray-700 hover:border-orange-400 transition-all hover:shadow-xl backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-xl text-white">Ciberseguridad para Jóvenes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-sm">Cómo proteger tu información</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-sm">Detectar riesgos en internet</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-sm">Talleres interactivos y simulaciones</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>

    <div className="text-center">
      <div className="max-w-3xl mx-auto mb-8">
        <h4 className="text-2xl font-bold text-white mb-4">¿Por qué aprender con Business Code - Learning?</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 cyan-gradient rounded-lg flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-black" />
            </div>
            <h5 className="font-semibold text-white mb-2">Certificación Escolar interna </h5>
            <p className="text-gray-400 text-sm">Certificado digital para estudiantes y colegios.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h5 className="font-semibold text-white mb-2">Acompañamiento Docente</h5>
            <p className="text-gray-400 text-sm">Apoyo a profesor y escuela con materiales y seguimiento.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h5 className="font-semibold text-white mb-2">100% Práctico y Digital</h5>
            <p className="text-gray-400 text-sm">Clases interactivas, talleres y proyectos reales.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="cyan-gradient hover:opacity-90 text-black font-semibold px-8 py-3"
          onClick={() =>
            window.open(
              "https://wa.me/919467620?text=Hola, me interesa conocer más sobre el Programa Educativo",
              "_blank",
            )
          }
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Más Información
        </Button>
       <Button
  variant="outline"
  size="lg"
  className="px-8 py-3 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
  onClick={() => setIsTemarioOpen(true)} // <-- Agregar esta línea
>
  <BookOpen className="w-5 h-5 mr-2" />
  Ver Temario Completo
</Button>
      </div>
    </div>
  </div>
</section>
{/* Modal Temario */}
{isTemarioOpen && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
    <div className="bg-gray-900 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6 border-b border-gray-700 flex justify-between items-center">
        <h3 className="text-2xl font-bold text-white">Temario General – Programa Educativo Business Code</h3>
        <button onClick={() => setIsTemarioOpen(false)} className="text-gray-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="p-6 space-y-8">
        {/* Etapa 1 */}
        <div className="border-l-4 border-cyan-400 pl-6">
          <h4 className="text-xl font-semibold text-cyan-400 mb-2">Etapa 1 – Charla Gratuita</h4>
          <p className="text-white font-medium mb-2">
            Introducción a la programación y la ciberseguridad en la vida diaria
          </p>
          <p className="text-gray-400 mb-4">Duración: 1.5 – 2 horas</p>
          <div className="space-y-2 text-gray-300">
            <p>• ¿Qué es la programación y por qué todos deberían entenderla?</p>
            <p>• Ciberseguridad en el día a día: fraudes, hackeos y estafas reales</p>
            <p>• Cómo protegerte en redes sociales, banca y navegación diaria</p>
            <p>• Presentación de la ruta educativa: cómo avanzar desde cero</p>
            <p>• Espacio interactivo de preguntas y testimonios</p>
          </div>
        </div>

        {/* Etapa 2 */}
        <div className="border-l-4 border-purple-400 pl-6">
          <h4 className="text-xl font-semibold text-purple-400 mb-2">Etapa 2 – Taller Inicial</h4>
          <p className="text-white font-medium mb-2">
            Lógica de programación + primeros pasos en seguridad digital
          </p>
          <p className="text-gray-400 mb-4">Duración: 2 – 3 horas</p>
          <div className="space-y-2 text-gray-300">
            <p>• Pensamiento lógico y resolución de problemas</p>
            <p>• Introducción a la programación: pseudocódigo, condicionales y variables</p>
            <p>• Primeros comandos en Python</p>
            <p>• ¿Qué es una contraseña segura? Buenas prácticas</p>
            <p>• Seguridad digital en el uso diario: correos, redes y dispositivos</p>
            <p>• Herramientas gratuitas recomendadas para protección digital</p>
          </div>
        </div>

        {/* Etapa 3 */}
        <div className="border-l-4 border-green-400 pl-6">
          <h4 className="text-xl font-semibold text-green-400 mb-2">Etapa 3 – Curso Básico</h4>
          <p className="text-white font-medium mb-2">Programación con Python + Fundamentos de Ciberseguridad</p>
          <p className="text-gray-400 mb-4">Duración: 4 semanas (2 clases por semana, 2 horas c/u)</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-white mb-3">Programación (Python):</h5>
              <div className="space-y-2 text-gray-300">
                <p>• Sintaxis básica, variables y tipos de datos</p>
                <p>• Estructuras de control: if, for, while</p>
                <p>• Funciones y manejo de errores</p>
                <p>• Entrada/salida de datos y archivos</p>
                <p>• Proyectos prácticos: calculadora, generador de contraseñas, gestor de tareas</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3">Ciberseguridad:</h5>
              <div className="space-y-2 text-gray-300">
                <p>• Principios CIA: Confidencialidad, Integridad y Disponibilidad</p>
                <p>• Tipos de amenazas: malware, phishing, ransomware</p>
                <p>• Antivirus y firewalls: uso correcto</p>
                <p>• Seguridad en contraseñas y verificación en dos pasos</p>
                <p>• Herramientas básicas: gestores de contraseñas, navegadores seguros</p>
              </div>
            </div>
          </div>
        </div>

        {/* Etapa 4 */}
        <div className="border-l-4 border-orange-400 pl-6">
          <h4 className="text-xl font-semibold text-orange-400 mb-2">Etapa 4 – Curso Avanzado</h4>
          <p className="text-white font-medium mb-2">
            Automatización con Python + Hacking Ético básico + Proyectos
          </p>
          <p className="text-gray-400 mb-4">Duración: 8 semanas (2 clases por semana, 2–3 horas c/u)</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-white mb-3">Automatización:</h5>
              <div className="space-y-2 text-gray-300">
                <p>• Web scraping con BeautifulSoup o Selenium</p>
                <p>• Automatización de tareas repetitivas (correo, archivos, etc.)</p>
                <p>• Uso de APIs y creación de scripts</p>
              </div>
              <h5 className="font-semibold text-white mb-3 mt-4">Proyectos Finales:</h5>
              <div className="space-y-2 text-gray-300">
                <p>• Script útil de automatización</p>
                <p>• Análisis de vulnerabilidades en entorno simulado</p>
                <p>• Presentación de informe técnico</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3">Ciberseguridad Avanzada:</h5>
              <div className="space-y-2 text-gray-300">
                <p>• Pentesting básico: reconocimiento, escaneo, explotación</p>
                <p>• Herramientas: Nmap, Wireshark, Metasploit (introductorio)</p>
                <p>• Seguridad en redes WiFi y sistemas operativos</p>
                <p>• Laboratorios virtuales y simulación de ataques (CTF)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Etapa 5 */}
        <div className="border-l-4 border-red-400 pl-6">
          <h4 className="text-xl font-semibold text-red-400 mb-2">Etapa 5 – Servicios Empresariales</h4>
          <p className="text-white font-medium mb-2">Charlas, capacitación a equipos y consultoría</p>
          <p className="text-gray-400 mb-4">Modalidad: Virtual o presencial – adaptable a cada cliente</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h5 className="font-semibold text-white mb-3">Charlas Corporativas:</h5>
              <div className="space-y-2 text-gray-300">
                <p>• Ciberseguridad para usuarios no técnicos</p>
                <p>• Prevención de fraudes digitales</p>
                <p>• Seguridad en dispositivos móviles y entornos remotos</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3">Capacitación a Equipos:</h5>
              <div className="space-y-2 text-gray-300">
                <p>• Formación técnica básica para equipos IT</p>
                <p>• Buenas prácticas en manejo de datos</p>
                <p>• Simulación de ataques (phishing, ingeniería social)</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3">Consultoría en Seguridad Digital:</h5>
              <div className="space-y-2 text-gray-300">
                <p>• Diagnóstico de vulnerabilidades</p>
                <p>• Revisión de políticas de seguridad</p>
                <p>• Implementación de mejoras y cumplimiento legal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Paquetes Escolares */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
            <GraduationCap className="w-6 h-6 mr-2" />
            Paquetes Escolares (4 semanas – 1 sesión semanal de 1h 40min)
          </h4>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">Paquete 1 – Ciberseguridad Escolar</h5>
              <p className="text-gray-400 text-sm mb-3">Público: 1° a 3° de secundaria</p>
              <div className="space-y-1 text-gray-300 text-sm">
                <p>• Internet y redes sociales sin riesgo</p>
                <p>• Contraseñas seguras y verificación en dos pasos</p>
                <p>• Ciberbullying y privacidad digital</p>
                <p>• Simulacro de ataque (phishing o engaños)</p>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">Paquete 2 – Programación desde Cero</h5>
              <p className="text-gray-400 text-sm mb-3">Público: 3° a 5° de secundaria</p>
              <div className="space-y-1 text-gray-300 text-sm">
                <p>• ¿Qué es programar? Lógica básica y pseudocódigo</p>
                <p>• Variables y estructuras condicionales en Python</p>
                <p>• Bucles y entrada/salida de datos</p>
                <p>• Mini proyecto práctico: calculadora, generador o juego básico</p>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">Paquete 3 – Ciberseguridad Aplicada</h5>
              <p className="text-gray-400 text-sm mb-3">Público: 4° y 5° de secundaria</p>
              <div className="space-y-1 text-gray-300 text-sm">
                <p>• Amenazas reales: phishing, malware, ingeniería social</p>
                <p>• Huella digital y reputación online</p>
                <p>• Herramientas de protección: VPN, antivirus, gestores de contraseñas</p>
                <p>• Simulación de ataque ético (CTF básico)</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-4">
            <h5 className="font-semibold text-white mb-2">Bono Extra – Sesión para Docentes</h5>
            <p className="text-gray-100 text-sm mb-3">
              Capacitación en seguridad digital para el personal educativo (1h 40min)
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-gray-100 text-sm">
              <div>
                <p>• Prevención de riesgos digitales en el aula</p>
                <p>• Gestión segura de plataformas educativas</p>
              </div>
              <div>
                <p>• Buenas prácticas en correos, redes y contraseñas</p>
                <p>• Herramientas de ciberseguridad para docentes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 border-t border-gray-700 bg-gray-800 rounded-b-lg">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="cyan-gradient hover:opacity-90 text-black font-semibold px-8 py-3"
            onClick={() => {
              setIsTemarioOpen(false)
              window.open(
                "https://wa.me/919467620?text=Hola, me interesa inscribirme al Programa Educativo completo",
                "_blank",
              )
            }}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Inscribirme Ahora
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
            onClick={() => setIsTemarioOpen(false)}
          >
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  </div>
)}
<section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="relative container mx-auto">
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-white">¿Quieres crecer junto a Business Code?</h2>
        <p className="text-xl text-cyan-100 max-w-4xl mx-auto leading-relaxed">
          Estamos iniciando un camino de innovacion en tecnologia , educacion y emprendimiento
          digital.
          Si te apasiona programar,diseñar,enseñar o crear nuevas ideas,este es e momento 
          perfecto para unirte como colaborador/a y aportar tu talento.
          Comparte con nosotros tu experiencia o interes,y construyamos juntos esta comunidad.
        </p>
      </div>

      <div className="pt-8">
        <Button
          size="lg"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg"
          onClick={() => window.open("https://tally.so/r/3yQr00", "_blank")}
        >
          Quiero colaborar
        </Button>
      </div>
    </div>
  </div>
</section>
       {/* Footer */}
      <footer id="contacto" className="bg-black text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <Image src="/logo.png" alt="Business Code Logo" width={200} height={60} className="h-12 w-auto" />
              </div>
              <p className="text-gray-400 mb-4">
                Desarrollamos sitios web profesionales para negocios que buscan crecer y modernizarse.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4 text-cyan-400">Servicios</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Diseño Web Personalizado</li>
                <li>Plataformas para Clientes</li>
                <li>Hosting y Dominios</li>
                <li>Mantenimiento Web</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4 text-cyan-400">Contacto</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +51 919 467 620
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                 info.businesscode@zohomail.com
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Lima, Perú
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4 text-cyan-400">Síguenos</h5>
<div className="flex space-x-4">
  <a
    href="https://www.instagram.com/businesscode_25?igsh=Y2JuN3owYWs3Mnlh" 
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
  >
    <Instagram className="w-5 h-5 text-white" />
  </a>
</div>

              <Button
                className="mt-4 cyan-gradient hover:opacity-90 text-black font-semibold w-full"
                onClick={() =>
                  window.open(
                    "https://wa.me/919467620?text=Hola, me interesa conocer más sobre sus servicios",
                    "_blank",
                  )
                }
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Business Code. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
