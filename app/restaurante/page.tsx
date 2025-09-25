"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChefHat, MessageCircle, ArrowLeft, Star } from "lucide-react";

// Tipo para los platos
interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: string;
}

// Tipo para los pedidos
type PedidoItem = MenuItem;

/**
 * Modal simple (sin dependencias externas)
 */
function Modal({
  open,
  onClose,
  title,
  children,
  actions,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Contenedor */}
      <div
        role="dialog"
        aria-modal="true"
        className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-6 z-10"
      >
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <div>{children}</div>
        <div className="mt-6 flex justify-end space-x-2">{actions}</div>
      </div>
    </div>
  );
}

export default function RestaurantePage() {
  // Menú (los precios siempre en número)
  const menuItems: MenuItem[] = [
    {
      name: "Lomo Saltado Premium",
      description: "Jugoso lomo de res salteado con papas fritas y arroz",
      price: 32,
      category: "Platos Principales",
    },
    {
      name: "Ceviche Clásico",
      description: "Pescado fresco marinado en limón con cebolla morada y cancha",
      price: 28,
      category: "Entradas",
    },
    {
      name: "Ají de Gallina",
      description: "Clásico plato peruano de pollo deshilachado en crema amarilla",
      price: 25,
      category: "Platos Principales",
    },
  ];

  // Estados tipados
  const [pedido, setPedido] = useState<PedidoItem[]>([]);
  const [modo, setModo] = useState<"Presencial" | "Delivery">("Presencial");
  const [mesa, setMesa] = useState<string>("");
  const [direccion, setDireccion] = useState<string>("");
  const [calificacion, setCalificacion] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // Agregar al pedido
  const agregarPedido = (item: MenuItem) => {
    setPedido((prev) => [...prev, item]);
  };

  // Eliminar del pedido
  const eliminarItem = (index: number) => {
    setPedido((prev) => prev.filter((_, i) => i !== index));
  };

  // Total
  const total = pedido.reduce((acc, item) => acc + item.price, 0);

  // Confirmar pedido
  const confirmarPedido = () => {
    if (pedido.length === 0) {
      alert("Por favor agrega al menos un plato al pedido antes de confirmar.");
      return;
    }
    if (modo === "Presencial" && !mesa) {
      alert("Por favor ingresa tu número de mesa antes de confirmar.");
      return;
    }
    if (modo === "Delivery" && !direccion) {
      alert("Por favor ingresa tu dirección para el delivery.");
      return;
    }
    setModalOpen(true);
  };

  // Enviar a WhatsApp
  const enviarWhatsApp = () => {
    const detalle = pedido
      .map((p) => `- ${p.name} - S/ ${p.price.toFixed(2)}`)
      .join("\n");
    const extraInfo =
      modo === "Presencial" ? `Mesa: ${mesa}` : `Dirección: ${direccion}`;
    const mensaje = `Hola, quiero hacer el siguiente pedido:%0A%0AModo: ${modo}%0A${extraInfo}%0A%0APlatos:%0A${detalle}%0A%0ATotal: S/ ${total.toFixed(
      2
    )}`;
    const phone = "51999999999"; // Número de WhatsApp
    const url = `https://wa.me/${phone}?text=${mensaje}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-orange-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-red-500 rounded-lg flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-orange-800">
              La Mesa Dorada
            </h1>
          </div>
          <Link href="/">
            <Button
              variant="outline"
              className="border-orange-300 text-orange-700 hover:bg-orange-100"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-500 text-white text-center">
        <h2 className="text-5xl font-bold mb-6">Sabores Auténticos del Perú</h2>
        <p className="text-xl mb-6">
          Disfruta de la mejor gastronomía peruana en un ambiente acogedor
        </p>
        <Button
          size="lg"
          className="bg-white text-orange-600 hover:bg-orange-50"
          onClick={() =>
            window.open(
              "https://wa.me/51999999999?text=Hola, me gustaría reservar",
              "_blank"
            )
          }
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Reservar por WhatsApp
        </Button>
      </section>

      {/* Selección de modo */}
      <section className="py-6 px-4 bg-orange-100">
        <div className="container mx-auto">
          <h3 className="text-xl font-semibold text-orange-800 mb-2">
            Selecciona el modo:
          </h3>
          <div className="flex gap-4">
            <Button
              variant={modo === "Presencial" ? "default" : "outline"}
              className="bg-orange-600 text-white hover:bg-orange-700"
              onClick={() => setModo("Presencial")}
            >
              Presencial
            </Button>
            <Button
              variant={modo === "Delivery" ? "default" : "outline"}
              className="bg-orange-600 text-white hover:bg-orange-700"
              onClick={() => setModo("Delivery")}
            >
              Delivery
            </Button>
          </div>

          {modo === "Presencial" && (
            <div className="mt-4">
              <label className="block text-sm text-gray-600 mb-2">
                Número de Mesa
              </label>
              <input
                type="number"
                className="border p-2 rounded-md w-40"
                value={mesa}
                onChange={(e) => setMesa(e.target.value)}
              />
            </div>
          )}

          {modo === "Delivery" && (
            <div className="mt-4">
              <label className="block text-sm text-gray-600 mb-2">
                Dirección de entrega
              </label>
              <input
                type="text"
                placeholder="Ej: Av. Principal 123, Lima"
                className="border p-2 rounded-md w-full max-w-lg"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
          )}
        </div>
      </section>

      {/* Menú */}
      <section className="py-12 px-4 bg-orange-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-orange-800 mb-8 text-center">
            Menú
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <Card
                key={index}
                className="border-orange-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-orange-800">
                      {item.name}
                    </h4>
                    <Badge className="bg-orange-600 text-white">
                      S/ {item.price.toFixed(2)}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <Badge
                    variant="outline"
                    className="border-orange-300 text-orange-700 mb-4"
                  >
                    {item.category}
                  </Badge>
                  <Button
                    size="sm"
                    className="bg-orange-600 text-white hover:bg-orange-700"
                    onClick={() => agregarPedido(item)}
                  >
                    Agregar al pedido
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pedido */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-orange-800 mb-6">Tu Pedido</h3>

          {pedido.length === 0 ? (
            <p className="text-gray-500">Aún no has agregado platos.</p>
          ) : (
            <div className="space-y-4">
              {pedido.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between border-b pb-2 items-center"
                >
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-500">
                      {item.description}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div>S/ {item.price.toFixed(2)}</div>
                    <button
                      className="text-sm text-red-600 underline"
                      onClick={() => eliminarItem(idx)}
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total:</span>
                <span>S/ {total.toFixed(2)}</span>
              </div>

              <div className="flex gap-3 mt-4">
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={confirmarPedido}
                >
                  Confirmar Pedido
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Modal de confirmación */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Pedido registrado"
        actions={
          <>
            <Button onClick={() => setModalOpen(false)}>Cerrar</Button>
            <Button className="bg-green-600 text-white" onClick={enviarWhatsApp}>
              Enviar a WhatsApp
            </Button>
          </>
        }
      >
        <div className="space-y-3">
          <p>
            <strong>Modo:</strong> {modo}
          </p>
          {modo === "Presencial" ? (
            <p>
              <strong>Mesa:</strong> {mesa}
            </p>
          ) : (
            <p>
              <strong>Dirección:</strong> {direccion}
            </p>
          )}

          <ul className="list-disc pl-6">
            {pedido.map((p, i) => (
              <li key={i}>
                {p.name} - S/ {p.price.toFixed(2)}
              </li>
            ))}
          </ul>

          <p className="font-bold">Total: S/ {total.toFixed(2)}</p>
          <p className="text-sm text-gray-600">
            ✅ Tu pedido fue registrado. Presiona "Enviar a WhatsApp" para
            compartirlo.
          </p>
        </div>
      </Modal>

      {/* Calificación */}
      <section className="py-12 px-4 bg-orange-50 text-center">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          Califica tu experiencia
        </h3>
        <div className="flex justify-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-8 h-8 cursor-pointer ${
                calificacion >= star ? "text-yellow-500" : "text-gray-400"
              }`}
              onClick={() => setCalificacion(star)}
            />
          ))}
        </div>
        <p className="mt-2 text-gray-600">
          {calificacion > 0
            ? `Tu calificación: ${calificacion} estrellas`
            : "Haz clic en una estrella"}
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-orange-800 text-white py-8 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <ChefHat className="w-8 h-8" />
          <h4 className="text-2xl font-bold">La Mesa Dorada</h4>
        </div>
        <p className="text-orange-200 mb-2">
          Sabores auténticos del Perú en cada plato
        </p>
        <p className="text-xs text-orange-300">
           Esta página es un prototipo de demostración y no corresponde a un
          restaurante real.
        </p>
      </footer>
    </div>
  );
}
