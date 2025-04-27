"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
      whatsapp: "",
    },
    {
      name: "Сергей Яровенко",
      profession: "Мастер по ремонту квартир",
      city: "Лимассол, Кипр",
      category: "Строительство",
      instagram: "",
      whatsapp: "https://wa.me/35796504254",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Люди. Связи. Доверие.
      </h1>
      <p className="text-center mb-8">
        Добро пожаловать на People Connections — место для профессионалов и знакомств.
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {["Все", "Парикмахер", "Йога", "Психолог", "Массажист", "Строительство", "Яхты"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full border ${
              filter === category ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
        <Link href="/add-profile">
          <button className="px-4 py-2 rounded-full bg-green-500 text-white">+ Добавить профиль</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {profiles
          .filter((profile) => filter === "Все" || profile.category === filter)
          .map((profile, index) => (
            <motion.div
              key={index}
              className="p-4 border rounded-lg shadow"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl font-semibold mb-2">{profile.name}</h2>
              <p>{profile.profession}</p>
              <p className="text-gray-500">{profile.city}</p>
              <div className="flex space-x-4 mt-4">
                {profile.instagram && (
                  <Link href={profile.instagram} target="_blank">
                    <Instagram />
                  </Link>
                )}
                {profile.whatsapp && (
                  <Link href={profile.whatsapp} target="_blank">
                    <Phone />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
      </div>
    </main>
  );
}
