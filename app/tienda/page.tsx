"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ShoppingBag, ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function TiendaPage() {
  const [categoriaSeleccionada] = useState("Todos")
  const [carrito, setCarrito] = useState<any[]>([])
  const [mostrarCheckout, setMostrarCheckout] = useState(false)
  const [pedidoConfirmado, setPedidoConfirmado] = useState(false)

  // Campos de formulario
  const [nombre, setNombre] = useState("")
  const [direccion, setDireccion] = useState("")
  const [telefono, setTelefono] = useState("")

  // Errores
  const [errores, setErrores] = useState<{ [key: string]: string }>({})

  const productos = [
    { nombre: "Vestido Elegante", precio: 120, precioAnterior: 150, descripcion: "Vestido de noche elegante, perfecto para ocasiones especiales", categoria: "Vestidos" },
    { nombre: "Blusa Casual", precio: 65, precioAnterior: 80, descripcion: "Blusa cómoda y versátil para el día a día", categoria: "Blusas" },
    { nombre: "Pantalón Jeans", precio: 90, precioAnterior: 110, descripcion: "Jeans clásicos y cómodos, un básico imprescindible", categoria: "Pantalones" },
    { nombre: "Chaqueta de Cuero", precio: 200, precioAnterior: 250, descripcion: "Chaqueta moderna y resistente para un look atrevido", categoria: "Chaquetas" },
    { nombre: "Top Deportivo", precio: 50, precioAnterior: 70, descripcion: "Top ideal para entrenamientos y uso diario", categoria: "Blusas" },
    { nombre: "Falda Verano", precio: 75, precioAnterior: 95, descripcion: "Falda fresca y ligera para los días soleados", categoria: "Vestidos" },
  ]

  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productos
      : productos.filter((p) => p.categoria === categoriaSeleccionada)

  const productosLimitados = productosFiltrados.slice(0, 3)
  const total = carrito.reduce((acc, item) => acc + item.precio, 0)

  const validarFormulario = () => {
    const nuevosErrores: { [key: string]: string } = {}

    if (nombre.trim().length < 3) {
      nuevosErrores.nombre = "El nombre debe tener al menos 3 caracteres."
    }

    if (direccion.trim().length < 5) {
      nuevosErrores.direccion = "La dirección debe ser más detallada (mínimo 5 caracteres)."
    }

    if (!/^\d{9,12}$/.test(telefono)) {
      nuevosErrores.telefono = "El teléfono debe contener solo números (9 a 12 dígitos)."
    }

    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

  const confirmarPedido = () => {
    if (!validarFormulario()) return

    setPedidoConfirmado(true)
    setCarrito([])
    setNombre("")
    setDireccion("")
    setTelefono("")
    setMostrarCheckout(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex flex-col">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-pink-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-500 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-pink-800">Fashion Style</h1>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-semibold text-pink-700">
              🛒 Carrito: {carrito.length} | Total: S/ {total}
            </span>
            <Link href="/">
              <Button
                variant="outline"
                className="border-pink-300 text-pink-700 hover:bg-pink-100 bg-transparent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Productos */}
      <div className="container mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-pink-800 mb-8 text-center">
          {categoriaSeleccionada === "Todos"
            ? "Productos Destacados"
            : categoriaSeleccionada}
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productosLimitados.map((producto, index) => (
            <Card
              key={index}
              className="border-pink-200 hover:shadow-lg transition-all"
            >
              <CardContent className="p-4">
                <Badge className="bg-pink-100 text-pink-700 mb-2">
                  {producto.categoria}
                </Badge>
                <h4 className="text-lg font-semibold text-pink-800 mb-2">
                  {producto.nombre}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {producto.descripcion}
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-pink-600">
                    S/ {producto.precio}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    S/ {producto.precioAnterior}
                  </span>
                </div>
                <Button
                  className="w-full bg-pink-600 hover:bg-pink-700"
                  onClick={() => setCarrito([...carrito, producto])}
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Comprar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Checkout */}
      {carrito.length > 0 && !pedidoConfirmado && (
        <div className="container mx-auto px-4 py-8">
          {!mostrarCheckout ? (
            <div className="text-center">
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={() => setMostrarCheckout(true)}
              >
                Confirmar Pedido
              </Button>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-xl shadow max-w-xl mx-auto">
              <h3 className="text-2xl font-bold text-pink-800 mb-4">
                Datos de Envío
              </h3>
              <div className="space-y-4">
                <div>
                  <Input
                    placeholder="Nombre completo"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                  {errores.nombre && (
                    <p className="text-red-600 text-sm mt-1">
                      {errores.nombre}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    placeholder="Dirección"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                  />
                  {errores.direccion && (
                    <p className="text-red-600 text-sm mt-1">
                      {errores.direccion}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                  {errores.telefono && (
                    <p className="text-red-600 text-sm mt-1">
                      {errores.telefono}
                    </p>
                  )}
                </div>
                <Button
                  className="w-full bg-pink-600 hover:bg-pink-700"
                  onClick={confirmarPedido}
                >
                  Finalizar Compra
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mensaje final bonito */}
      {pedidoConfirmado && (
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-xl mx-auto border-green-300 shadow-lg bg-green-50">
            <CardContent className="text-center p-8">
              <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                ¡Gracias por tu compra!
              </h3>
              <p className="text-green-800 mb-4">
                Hemos recibido tu pedido correctamente.  
                Nos contactaremos contigo pronto para coordinar la entrega 📦.
              </p>
              <Button
                className="bg-pink-600 hover:bg-pink-700"
                onClick={() => setPedidoConfirmado(false)}
              >
                Seguir Comprando
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-pink-800 text-white py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ShoppingBag className="w-8 h-8" />
            <h4 className="text-2xl font-bold">Fashion Style</h4>
          </div>
          <p className="text-pink-200 mb-4">Tu estilo, nuestra pasión</p>
          <p className="text-sm text-pink-300">
            ⚠️ Esta página es un prototipo de simulación de tienda online.  
            Los productos, precios y pedidos son de ejemplo.
          </p>
        </div>
      </footer>
    </div>
  )
}
