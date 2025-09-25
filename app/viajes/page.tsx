"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plane, CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ViajesPage() {
  const [carrito, setCarrito] = useState<any[]>([])
  const [mostrarCheckout, setMostrarCheckout] = useState(false)
  const [reservaConfirmada, setReservaConfirmada] = useState(false)

  const [nombre, setNombre] = useState("")
  const [direccion, setDireccion] = useState("")
  const [telefono, setTelefono] = useState("")

  const [destinoBuscado, setDestinoBuscado] = useState("")
  const [tipoViaje, setTipoViaje] = useState<"Ida y Vuelta" | "Solo Ida">("Ida y Vuelta")
  const [fechaIda, setFechaIda] = useState("")
  const [fechaVuelta, setFechaVuelta] = useState("")

  const [errores, setErrores] = useState<{ [k: string]: string }>({})

  const paquetes = [
    { nombre: "Cancún 5 días", precio: 1200, descripcion: "Hotel + vuelo + tours", categoria: "Playas" },
    { nombre: "Machu Picchu y Cusco", precio: 900, descripcion: "Tour completo con guía", categoria: "Cultura" },
    { nombre: "Europa 10 días", precio: 2500, descripcion: "Varias ciudades + transporte", categoria: "Ciudades" },
    { nombre: "Nueva York 7 días", precio: 1800, descripcion: "Vuelo + hotel céntrico", categoria: "Ciudades" },
    { nombre: "Lima Tours 3 días", precio: 300, descripcion: "Capital y sitios arqueológicos", categoria: "Nacional" },
  ]

  // Filtrar paquetes si el usuario busca un destino
  const paquetesFiltrados = destinoBuscado
    ? paquetes.filter((p) =>
        p.nombre.toLowerCase().includes(destinoBuscado.toLowerCase())
      )
    : paquetes

  const paquetesLimitados = paquetesFiltrados.slice(0, 3)

  const total = carrito.reduce((acc, p) => acc + p.precio, 0)

  const validarFormulario = () => {
    const nuevos: { [k: string]: string } = {}
    if (nombre.trim().length < 3) nuevos.nombre = "Nombre muy corto"
    if (direccion.trim().length < 5) nuevos.direccion = "Dirección muy simple"
    if (!/^\d{9,12}$/.test(telefono)) nuevos.telefono = "Teléfono inválido (9-12 dígitos)"

    // también validar que fechas estén puestas
    if (!fechaIda) nuevos.fechaIda = "Seleccione fecha de ida"
    if (tipoViaje === "Ida y Vuelta" && !fechaVuelta) nuevos.fechaVuelta = "Seleccione fecha de vuelta"

    setErrores(nuevos)
    return Object.keys(nuevos).length === 0
  }

  const confirmarReserva = () => {
    if (!validarFormulario()) return
    setReservaConfirmada(true)
    setMostrarCheckout(false)
    setCarrito([])
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header / Menú */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Plane className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-800">Peru Travel Service</h1>
          </div>
          <nav className="flex gap-6 text-gray-700">
            <a href="#paquetes" className="hover:underline">Paquetes</a>
            <a href="#nosotros" className="hover:underline">Nosotros</a>
            <a href="#contacto" className="hover:underline">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero / Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Explora el mundo con nosotros</h2>
        <p className="mb-6">Los mejores paquetes turísticos, vuelos y experiencias</p>

        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Destino (ej: Cancún)"
            value={destinoBuscado}
            onChange={(e) => setDestinoBuscado(e.target.value)}
            className="px-3 py-2 rounded w-full text-gray-700"
          />
          <Button
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={() => {
              // simplemente refrescar la lista de paquetes
              // ejecuta filtro
            }}
          >
            Buscar
          </Button>
        </div>
      </section>

      {/* Sección de paquetes */}
      <section id="paquetes" className="container mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nuestros Paquetes</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paquetesLimitados.map((p, i) => (
            <Card key={i} className="hover:shadow-lg transition">
              <CardContent className="p-4">
                <h4 className="text-xl font-semibold mb-2">{p.nombre}</h4>
                <p className="text-gray-600 mb-3">{p.descripcion}</p>
                <div className="mb-4">
                  <span className="text-lg font-bold text-blue-600">${p.precio}</span>
                </div>
                <Button
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => setCarrito([...carrito, p])}
                >
                  Reservar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Checkout / Reserva de viaje */}
      {carrito.length > 0 && !reservaConfirmada && (
        <section id="checkout" className="container mx-auto px-4 py-12">
          {!mostrarCheckout ? (
            <div className="text-center">
              <Button
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                onClick={() => setMostrarCheckout(true)}
              >
                Completar Reserva ( ${total} )
              </Button>
            </div>
          ) : (
            <div className="bg-white p-6 rounded shadow max-w-xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Datos del viajero</h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                  />
                  {errores.nombre && <p className="text-red-600 text-sm">{errores.nombre}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Dirección"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                  />
                  {errores.direccion && <p className="text-red-600 text-sm">{errores.direccion}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                  />
                  {errores.telefono && <p className="text-red-600 text-sm">{errores.telefono}</p>}
                </div>

                <Button
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  onClick={confirmarReserva}
                >
                  Finalizar Reserva
                </Button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Mensaje final bonito */}
      {reservaConfirmada && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-xl mx-auto bg-green-50 border border-green-300 rounded shadow text-center p-8">
            <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-700 mb-2">¡Reserva exitosa!</h3>
            <p className="text-green-800 mb-4">
              Tu reserva ha sido registrada. Nos pondremos en contacto contigo pronto para coordinar detalles.
            </p>
            <Button
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              onClick={() => setReservaConfirmada(false)}
            >
              Seguir viendo paquetes
            </Button>
          </div>
        </section>
      )}

      {/* Sección Nosotros */}
      <section id="nosotros" className="bg-white py-12 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-bold mb-4">Quiénes somos</h3>
          <p className="text-gray-700">
            Somos una agencia con amplia experiencia en diseño de viajes personalizados. Nos enfocamos en darte experiencias únicas, con calidad y confianza.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-12 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2025 Peru Travel Service</p>
          <p className="text-sm text-blue-300">
            ⚠️ Este sitio es un prototipo de agencia de viajes. Los paquetes, precios y reservas son de ejemplo.
          </p>
        </div>
      </footer>
    </div>
  )
}
