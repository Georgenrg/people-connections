"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Phone } from "lucide-react";

export default function Home() {
  const [filter, setFilter] = useState("Все");

  const profiles = [
    {
      name: "Георгий Руднев",
      profession: "Парикмахер",
      city: "Лимассол, Кипр",
      category: "Парикмахер",
      instagram: "https://instagram.com/rudnev.georgiy.stylist",
      whatsapp: "https://wa.me/35796504254",
    },
    {
      name: "Анна Калашникова",
      profession: "Йога для беременных",
      city: "Лимассол, Кипр",
      category: "Йога",
      instagram: "https://instagram.com/annakalashnikova.yoga",
    },
    {
      name: "Сергей Яровенко",
      profession: "Мастер по ремонтам квартир",
      city: "Лимассол, Кипр",
      category: "Строитель",
      whatsapp: "https://wa.me/37128835095",
    },
  ];

  const filteredProfiles = filter === "Все" ? profiles : profiles.filter((p) => p.category === filter);

  return (
    <main className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
      <section className="text-center my-10">
        <h1 className="text-4xl font-bold mb-4">Люди. Связи. Доверие.</h1>
        <p className="text-lg text-gray-600">Добро пожаловать на People Connections — место для профессионалов и знакомств.</p>
      </section>

      <section className="flex flex-wrap gap-2 justify-center mb-6">
        {["Все", "Парикмахер", "Йога", "Психолог", "Строитель"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full ${filter === cat ? "bg-blue-600 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
          >
            {cat}
          </button>
        ))}
        <Link href="#add-profile">
          <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">Добавить профиль</button>
        </Link>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {filteredProfiles.map((profile, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4 text-center">
            <h2 className="text-xl font-semibold">{profile.name}</h2>
            <p className="text-gray-600">{profile.profession}</p>
            <p className="text-gray-500 mb-3">{profile.city}</p>
            <div className="flex justify-center gap-4">
              {profile.instagram && (
                <a href={profile.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-600" />
                </a>
              )}
              {profile.whatsapp && (
                <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-6 h-6 text-green-500 hover:text-green-600" />
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      <section id="add-profile" className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Добавить новый профиль</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Имя" className="border rounded p-2" />
          <input type="text" placeholder="Профессия" className="border rounded p-2" />
          <input type="text" placeholder="Город" className="border rounded p-2" />
          <input type="text" placeholder="Instagram (ссылка)" className="border rounded p-2" />
          <input type="text" placeholder="WhatsApp (номер)" className="border rounded p-2" />
          <button type="submit" className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700">Отправить заявку</button>
        </form>
      </section>
    </main>
  );
}
