"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CapoeiraProPage() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !email) {
      alert("Por favor completa tu nombre y correo.");
      return;
    }
    setEnviado(true);
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-green-700 text-white py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ginga Brasil</h1>
          <nav className="space-x-6">
            <a href="#inicio" className="hover:underline">
              Inicio
            </a>
            <a href="#nosotros" className="hover:underline">
              Sobre Nosotros
            </a>
            <a href="#registro" className="hover:underline">
              Registro
            </a>
            <a href="#historia" className="hover:underline">
              Historia
            </a>
          </nav>
        </div>
      </header>

      {/* Inicio */}
      <section
        id="inicio"
        className="flex-1 flex items-center justify-center text-center py-20 
                   bg-gradient-to-r from-green-500 via-yellow-400 to-green-600"
      >
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Bienvenido a Ginga Brasil
          </h2>
          <p className="text-lg text-white/90">
            Vive la energía de la capoeira: arte marcial, danza y cultura en un
            solo movimiento.
          </p>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section
        id="nosotros"
        className="py-20 bg-gradient-to-br from-yellow-100 via-green-200 to-yellow-300"
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-green-800 mb-6 drop-shadow">
            Sobre Nosotros
          </h3>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
            Somos una academia dedicada a difundir la capoeira en su esencia
            cultural y deportiva. Con entrenadores certificados y un ambiente
            inclusivo, promovemos la disciplina, la música y el compañerismo.
          </p>
        </div>
      </section>

      {/* Registro de clases */}
      <section id="registro" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-lg">
          <h3 className="text-3xl font-bold text-green-700 mb-6 text-center">
            Regístrate para una clase
          </h3>
          {enviado ? (
            <p className="text-green-700 text-center font-semibold">
              ¡Gracias por registrarte! Te contactaremos pronto.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-lg rounded-lg p-6 space-y-4"
            >
              <input
                type="text"
                placeholder="Nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <textarea
                placeholder="Mensaje (opcional)"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                rows={4}
              />
              <Button
                type="submit"
                className="w-full bg-green-700 text-white hover:bg-green-800"
              >
                Enviar
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Historia */}
      <section id="historia" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-green-700 mb-6">Historia</h3>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            La capoeira nació en Brasil como una expresión de libertad y
            resistencia cultural. Con el tiempo, se transformó en un arte
            marcial reconocido mundialmente, transmitiendo valores de respeto,
            música y movimiento.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-6 text-center">
        <p className="text-green-200">
          © {new Date().getFullYear()} Ginga Brasil — Este sitio es un modelo de
          prototipo web.
        </p>
      </footer>
    </div>
  );
}
