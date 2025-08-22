"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Menu, ChevronLeft, ChevronRight, Users, Star, CreditCard } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const valorantProducts = [
    {
      id: "1",
      title: "⚡Oferta Relampago 3 | Full Acesso⚡",
      price: "R$ 120,00",
      image: "https://i.imgur.com/9gMmIXT.png",
      badge: "LIMITADO",
      skins: 32,
      features: ["Conta Full Acesso", "Possui todos os dados de recuperação"],
      rating: 4.9,
    },
    {
      id: "2",
      title: "🏆 Champions 23 + 24 | Full Acesso 🏆",
      price: "R$ 180,00",
      image: "https://i.imgur.com/XLiCEkR.png",
      badge: "LIMITADO",
      skins: 50,
      features: ["Conta Full Acesso", "Possui todos os dados de recuperação"],
      rating: 4.9,
    },
    {
      id: "3",
      title: "🏆 Champions 21 + 22 | Full Acesso 🏆",
      price: "R$ 350,00",
      image: "https://i.imgur.com/XLiCEkR.png",
      badge: "NOVO",
      skins: 120,
      features: ["Conta Full Acesso", "Possui todos os dados de recuperação"],
      rating: 4.9,
    },
    {
      id: "4",
      title: "🔥 Conta Valorant | Phantom Reaver + Vandal Prime 🔥",
      price: "R$ 85,00",
      image: "https://i.imgur.com/9gMmIXT.png",
      badge: "POPULAR",
      skins: 15,
      features: ["Conta Full Acesso", "Skins Premium Incluídas"],
      rating: 4.8,
    },
    {
      id: "5",
      title: "💎 VIP Account | Dragon Collection 💎",
      price: "R$ 250,00",
      image: "https://i.imgur.com/XLiCEkR.png",
      badge: "VIP",
      skins: 75,
      features: ["Conta Full Acesso", "Coleção Completa Dragon"],
      rating: 5.0,
    },
    {
      id: "6",
      title: "🎯 Conta Competitiva | Rank Imortal 🎯",
      price: "R$ 400,00",
      image: "https://i.imgur.com/9gMmIXT.png",
      badge: "EXCLUSIVO",
      skins: 95,
      features: ["Rank Imortal", "Conta Full Acesso"],
      rating: 4.9,
    },
    {
      id: "7",
      title: "🌟 Starter Pack | Contas Iniciantes 🌟",
      price: "R$ 45,00",
      image: "https://i.imgur.com/XLiCEkR.png",
      badge: "INICIANTE",
      skins: 8,
      features: ["Conta Full Acesso", "Perfeita para Iniciantes"],
      rating: 4.7,
    },
    {
      id: "8",
      title: "🚀 Pro Gamer | Conta Completa 🚀",
      price: "R$ 320,00",
      image: "https://i.imgur.com/9gMmIXT.png",
      badge: "PRO",
      skins: 88,
      features: ["Conta Full Acesso", "Setup Pro Gamer"],
      rating: 4.9,
    },
    {
      id: "9",
      title: "💫 Limited Edition | Coleção Especial 💫",
      price: "R$ 500,00",
      image: "https://i.imgur.com/XLiCEkR.png",
      badge: "LIMITED",
      skins: 150,
      features: ["Conta Full Acesso", "Coleção Limitada"],
      rating: 5.0,
    },
  ]

  const eaFcProducts = [
    {
      id: "1",
      title: "EA Sports FC 26 | PRE VENDA",
      price: "R$ 180,00",
      image: "https://i.imgur.com/zAIt0cj.png",
      badge: "EXCLUSIVO",
      content: 0,
      features: ["Conta Full Acesso", "Conta Só Sua"],
      rating: 4.9,
    },
    {
      id: "2",
      title: "🏆 EA FC 26 Ultimate Edition 🏆",
      price: "R$ 220,00",
      image: "https://i.imgur.com/zAIt0cj.png",
      badge: "ULTIMATE",
      content: 5,
      features: ["Ultimate Edition", "Conta Full Acesso"],
      rating: 4.9,
    },
    {
      id: "3",
      title: "⚽ FC 26 Standard | Acesso Completo ⚽",
      price: "R$ 150,00",
      image: "https://i.imgur.com/zAIt0cj.png",
      badge: "STANDARD",
      content: 2,
      features: ["Edição Standard", "Conta Verificada"],
      rating: 4.8,
    },
  ]

  const cs2Products = [
    {
      id: "1",
      title: "Conta de Cs 2 Com Prime Ativo | Full Acesso | +800 horas de jogo",
      price: "R$ 60,00",
      image: "https://i.imgur.com/EUxgnVu.png",
      badge: "EXCLUSIVO",
      features: ["Conta verificada", "Prime ativo"],
      rating: 4.9,
    },
    {
      id: "2",
      title: "🔫 CS2 Prime | Inventário Premium 🔫",
      price: "R$ 120,00",
      image: "https://i.imgur.com/EUxgnVu.png",
      badge: "PREMIUM",
      features: ["Prime Ativo", "Skins Valiosas"],
      rating: 4.8,
    },
    {
      id: "3",
      title: "💰 CS2 Trader | Conta para Trading 💰",
      price: "R$ 200,00",
      image: "https://i.imgur.com/EUxgnVu.png",
      badge: "TRADER",
      features: ["Conta Verificada", "Ideal para Trading"],
      rating: 4.9,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="group flex items-center">
              <img src="/images/gumball-logo.png" alt="Gumball Store" className="h-12 w-auto object-contain" />
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">
                CONTAS
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">
                DEPOIMENTOS
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">
                PERFIL
              </a>
            </nav>
            <button className="md:hidden text-white hover:text-gray-300 transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-black">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
              MAIOR LOJA DE JOGOS DA
              <br />
              AMÉRICA LATINA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contas premium verificadas com <span className="text-white font-semibold">garantia total</span> e
              <span className="text-white font-semibold"> suporte 24/7</span>
            </p>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">CATEGORIAS</h2>
            <p className="text-gray-400 text-center mb-12">Escolha seu jogo favorito e encontre a conta perfeita</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Valorant */}
              <a
                href="#"
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-800 hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                <img
                  src="https://store-images.s-microsoft.com/image/apps.21507.13663857844271189.4c1de202-3961-4c40-a0aa-7f4f1388775a.20ed7782-0eda-4f9d-b421-4cc47492edc6"
                  alt="Valorant"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl md:text-3xl font-bold text-center text-white">Valorant</h3>
                  <div className="w-full h-1 bg-white rounded-full mt-3 opacity-80"></div>
                </div>
              </a>

              {/* EA Sports FC 26 */}
              <a
                href="#"
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-800 hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-2xl"
              >
                <div className="absolute top-4 right-4 z-30">
                  <div className="bg-red-600 text-white font-black text-xs px-3 py-2 rounded-lg shadow-lg animate-pulse">
                    PRÉ VENDA
                    <br />
                    LIBERADA
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                <img
                  src="https://i.imgur.com/4R5byRa.png"
                  alt="EA Sports FC 26"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl md:text-3xl font-bold text-center text-white">EA Sports FC 26</h3>
                  <div className="w-full h-1 bg-white rounded-full mt-3 opacity-80"></div>
                </div>
              </a>

              {/* CS2 */}
              <a
                href="#"
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-800 hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                <img
                  src="https://cdn.boosteroid.com/media/boostore/022239a9673a747fed6f50be0e0da132.jpg"
                  alt="CS2"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl md:text-3xl font-bold text-center text-white">CS2</h3>
                  <div className="w-full h-1 bg-white rounded-full mt-3 opacity-80"></div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {/* Valorant Products */}
              <div className="mb-16">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl md:text-4xl font-black text-white">Valorant</h2>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={prevSlide}
                        className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <span className="text-gray-400 text-sm">{valorantProducts.length} contas disponíveis</span>
                      <button
                        onClick={nextSlide}
                        className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                    <a
                      href="#"
                      className="px-6 py-2 bg-white text-black font-bold rounded-xl transition-all duration-300 hover:bg-gray-200 hover:scale-105 shadow-lg hover:shadow-2xl"
                    >
                      VER TODAS
                    </a>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {/* Slide 1 - First 3 products */}
                    <div className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {valorantProducts.slice(0, 3).map((product) => (
                          <Card
                            key={product.id}
                            className="group bg-black border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
                          >
                            <div className="relative">
                              <div className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                                {product.badge}
                              </div>
                              <div className="absolute top-4 right-4 z-10">
                                <ExternalLink className="h-5 w-5 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <div className="w-full aspect-[5/3] overflow-hidden">
                                <img
                                  src={product.image || "/placeholder.svg"}
                                  alt={product.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <div className="p-6">
                              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gray-300 transition-colors">
                                {product.title}
                              </h3>
                              <div className="space-y-2 mb-4">
                                {product.features.map((feature, i) => (
                                  <div key={i} className="flex items-center text-sm text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 flex-shrink-0"></div>
                                    {feature}
                                  </div>
                                ))}
                              </div>
                              {product.skins && (
                                <div className="mb-4">
                                  <h4 className="text-white font-semibold text-sm mb-3">Skins ({product.skins})</h4>
                                  <div className="grid grid-cols-4 gap-2">
                                    {[
                                      "https://media.valorant-api.com/weaponskins/fa1c05fd-49fc-ad93-17d8-f0aaf11874cd/displayicon.png",
                                      "https://media.valorant-api.com/weaponskins/2a8a2ff3-44f0-6e8f-8e37-7282113177cf/displayicon.png",
                                      "https://media.valorant-api.com/weaponskinchromas/1bf0d77f-4e94-9dc0-7a7a-fb8430b569d3/fullrender.png",
                                      "https://media.valorant-api.com/weaponskins/fb3f3ffd-46bc-41e3-25c9-2688f2d017ed/displayicon.png",
                                    ].map((src, i) => (
                                      <div
                                        key={i}
                                        className="relative rounded-lg overflow-hidden shadow-md aspect-square bg-gradient-to-br from-yellow-600 to-yellow-400"
                                      >
                                        <div className="w-full h-full bg-black/20 p-1">
                                          <img
                                            src={src || "/placeholder.svg"}
                                            alt="Skin"
                                            className="w-full h-full object-contain rounded"
                                          />
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  <p className="text-gray-400 text-xs mt-2 text-center">
                                    +{product.skins - 4} mais skins
                                  </p>
                                </div>
                              )}
                              <div className="flex items-center justify-between">
                                <div>
                                  <span className="text-2xl font-bold text-white">{product.price}</span>
                                </div>
                                <div className="flex items-center text-white">
                                  <Star className="h-4 w-4 fill-current mr-1" />
                                  <span className="text-sm">{product.rating}</span>
                                </div>
                              </div>
                              <Button className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:bg-green-700 hover:scale-105 mt-4">
                                <ExternalLink className="h-5 w-5 mr-2" />
                                VER DETALHES
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Slide 2 - Next 3 products */}
                    <div className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {valorantProducts.slice(3, 6).map((product) => (
                          <Card
                            key={product.id}
                            className="group bg-black border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
                          >
                            <div className="relative">
                              <div className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                                {product.badge}
                              </div>
                              <div className="absolute top-4 right-4 z-10">
                                <ExternalLink className="h-5 w-5 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <div className="w-full aspect-[5/3] overflow-hidden">
                                <img
                                  src={product.image || "/placeholder.svg"}
                                  alt={product.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <div className="p-6">
                              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gray-300 transition-colors">
                                {product.title}
                              </h3>
                              <div className="space-y-2 mb-4">
                                {product.features.map((feature, i) => (
                                  <div key={i} className="flex items-center text-sm text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 flex-shrink-0"></div>
                                    {feature}
                                  </div>
                                ))}
                              </div>
                              {product.skins && (
                                <div className="mb-4">
                                  <h4 className="text-white font-semibold text-sm mb-3">Skins ({product.skins})</h4>
                                  <div className="grid grid-cols-4 gap-2">
                                    {[
                                      "https://media.valorant-api.com/weaponskins/fa1c05fd-49fc-ad93-17d8-f0aaf11874cd/displayicon.png",
                                      "https://media.valorant-api.com/weaponskins/2a8a2ff3-44f0-6e8f-8e37-7282113177cf/displayicon.png",
                                      "https://media.valorant-api.com/weaponskinchromas/1bf0d77f-4e94-9dc0-7a7a-fb8430b569d3/fullrender.png",
                                      "https://media.valorant-api.com/weaponskins/fb3f3ffd-46bc-41e3-25c9-2688f2d017ed/displayicon.png",
                                    ].map((src, i) => (
                                      <div
                                        key={i}
                                        className="relative rounded-lg overflow-hidden shadow-md aspect-square bg-gradient-to-br from-yellow-600 to-yellow-400"
                                      >
                                        <div className="w-full h-full bg-black/20 p-1">
                                          <img
                                            src={src || "/placeholder.svg"}
                                            alt="Skin"
                                            className="w-full h-full object-contain rounded"
                                          />
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  <p className="text-gray-400 text-xs mt-2 text-center">
                                    +{product.skins - 4} mais skins
                                  </p>
                                </div>
                              )}
                              <div className="flex items-center justify-between">
                                <div>
                                  <span className="text-2xl font-bold text-white">{product.price}</span>
                                </div>
                                <div className="flex items-center text-white">
                                  <Star className="h-4 w-4 fill-current mr-1" />
                                  <span className="text-sm">{product.rating}</span>
                                </div>
                              </div>
                              <Button className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:bg-green-700 hover:scale-105 mt-4">
                                <ExternalLink className="h-5 w-5 mr-2" />
                                VER DETALHES
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Slide 3 - Last 3 products */}
                    <div className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {valorantProducts.slice(6, 9).map((product) => (
                          <Card
                            key={product.id}
                            className="group bg-black border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
                          >
                            <div className="relative">
                              <div className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                                {product.badge}
                              </div>
                              <div className="absolute top-4 right-4 z-10">
                                <ExternalLink className="h-5 w-5 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <div className="w-full aspect-[5/3] overflow-hidden">
                                <img
                                  src={product.image || "/placeholder.svg"}
                                  alt={product.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <div className="p-6">
                              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gray-300 transition-colors">
                                {product.title}
                              </h3>
                              <div className="space-y-2 mb-4">
                                {product.features.map((feature, i) => (
                                  <div key={i} className="flex items-center text-sm text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 flex-shrink-0"></div>
                                    {feature}
                                  </div>
                                ))}
                              </div>
                              {product.skins && (
                                <div className="mb-4">
                                  <h4 className="text-white font-semibold text-sm mb-3">Skins ({product.skins})</h4>
                                  <div className="grid grid-cols-4 gap-2">
                                    {[
                                      "https://media.valorant-api.com/weaponskins/fa1c05fd-49fc-ad93-17d8-f0aaf11874cd/displayicon.png",
                                      "https://media.valorant-api.com/weaponskins/2a8a2ff3-44f0-6e8f-8e37-7282113177cf/displayicon.png",
                                      "https://media.valorant-api.com/weaponskinchromas/1bf0d77f-4e94-9dc0-7a7a-fb8430b569d3/fullrender.png",
                                      "https://media.valorant-api.com/weaponskins/fb3f3ffd-46bc-41e3-25c9-2688f2d017ed/displayicon.png",
                                    ].map((src, i) => (
                                      <div
                                        key={i}
                                        className="relative rounded-lg overflow-hidden shadow-md aspect-square bg-gradient-to-br from-yellow-600 to-yellow-400"
                                      >
                                        <div className="w-full h-full bg-black/20 p-1">
                                          <img
                                            src={src || "/placeholder.svg"}
                                            alt="Skin"
                                            className="w-full h-full object-contain rounded"
                                          />
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  <p className="text-gray-400 text-xs mt-2 text-center">
                                    +{product.skins - 4} mais skins
                                  </p>
                                </div>
                              )}
                              <div className="flex items-center justify-between">
                                <div>
                                  <span className="text-2xl font-bold text-white">{product.price}</span>
                                </div>
                                <div className="flex items-center text-white">
                                  <Star className="h-4 w-4 fill-current mr-1" />
                                  <span className="text-sm">{product.rating}</span>
                                </div>
                              </div>
                              <Button className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:bg-green-700 hover:scale-105 mt-4">
                                <ExternalLink className="h-5 w-5 mr-2" />
                                VER DETALHES
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-6 space-x-2">
                  {[...Array(totalSlides)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentSlide === index ? "bg-white" : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* EA Sports FC 26 Products */}
              <div className="mb-16">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl md:text-4xl font-black text-white">EA Sports FC 26</h2>
                  <div className="flex items-center space-x-4">
                    <a
                      href="#"
                      className="px-6 py-2 bg-white text-black font-bold rounded-xl transition-all duration-300 hover:bg-gray-200 hover:scale-105 shadow-lg hover:shadow-2xl"
                    >
                      VER TODAS
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {eaFcProducts.map((product) => (
                    <Card
                      key={product.id}
                      className="group bg-black border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
                    >
                      <div className="relative">
                        <div className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                          {product.badge}
                        </div>
                        <div className="absolute top-4 right-4 z-10">
                          <ExternalLink className="h-5 w-5 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="w-full aspect-[5/3] overflow-hidden">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gray-300 transition-colors">
                          {product.title}
                        </h3>
                        <div className="space-y-2 mb-4">
                          {product.features.map((feature, i) => (
                            <div key={i} className="flex items-center text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 flex-shrink-0"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                        <div className="mb-4">
                          <h4 className="text-white font-semibold text-sm mb-3">Conteúdo ({product.content})</h4>
                          <div className="grid grid-cols-4 gap-2"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold text-white">{product.price}</span>
                          </div>
                          <div className="flex items-center text-white">
                            <Star className="h-4 w-4 fill-current mr-1" />
                            <span className="text-sm">{product.rating}</span>
                          </div>
                        </div>
                        <Button className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:bg-green-700 hover:scale-105 mt-4">
                          <ExternalLink className="h-5 w-5 mr-2" />
                          VER DETALHES
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Counter-Strike 2 Products */}
              <div className="mb-16">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl md:text-4xl font-black text-white">Counter-Strike 2</h2>
                  <div className="flex items-center space-x-4">
                    <a
                      href="#"
                      className="px-6 py-2 bg-white text-black font-bold rounded-xl transition-all duration-300 hover:bg-gray-200 hover:scale-105 shadow-lg hover:shadow-2xl"
                    >
                      VER TODAS
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cs2Products.map((product) => (
                    <Card
                      key={product.id}
                      className="group bg-black border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
                    >
                      <div className="relative">
                        <div className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                          {product.badge}
                        </div>
                        <div className="absolute top-4 right-4 z-10">
                          <ExternalLink className="h-5 w-5 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="w-full aspect-[5/3] overflow-hidden">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gray-300 transition-colors">
                          {product.title}
                        </h3>
                        <div className="space-y-2 mb-4">
                          {product.features.map((feature, i) => (
                            <div key={i} className="flex items-center text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 flex-shrink-0"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold text-white">{product.price}</span>
                          </div>
                          <div className="flex items-center text-white">
                            <Star className="h-4 w-4 fill-current mr-1" />
                            <span className="text-sm">{product.rating}</span>
                          </div>
                        </div>
                        <Button className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:bg-green-700 hover:scale-105 mt-4">
                          <ExternalLink className="h-5 w-5 mr-2" />
                          VER DETALHES
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="bg-black border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <Users className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">+3 MIL</div>
                  <div className="text-gray-400 font-medium">De clientes</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-black border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <Star className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">4.9</div>
                  <div className="text-gray-400 font-medium">De avaliação</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-black border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <CreditCard className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">+4.119</div>
                  <div className="text-gray-400 font-medium">Contas vendidas</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discord Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <svg className="h-16 w-16 text-white mx-auto mb-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.077.077 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.30zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
                CONHEÇA NOSSO DISCORD COM
                <br />
                PROMOÇÕES IMPERDÍVEIS
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Junte-se à nossa comunidade e tenha acesso a ofertas exclusivas, sorteios e suporte prioritário
              </p>
              <a
                href="#"
                className="inline-flex items-center px-12 py-4 bg-white text-black font-bold text-lg rounded-2xl transition-all duration-300 hover:bg-gray-200 hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                <svg className="mr-3 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.30zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                VER NOSSO DISCORD
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
