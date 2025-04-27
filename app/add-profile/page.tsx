"use client";

import { useState } from "react";

export default function AddProfilePage() {
  const [form, setForm] = useState({
    name: "",
    profession: "",
    description: "",
    service: "",
    price: "",
    city: "",
    language: "",
    email: "",
    phone: "",
    social: "",
    promo: "",
    profileType: "free",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Profile submitted!");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Specialist Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="First and Last Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="profession"
          placeholder="Profession"
          value={form.profession}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows={4}
          maxLength={500}
        />
<div className="flex space-x-2">
          <input
            type="text"
            name="service"
            placeholder="Service"
            value={form.service}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="text"
            name="price"
            placeholder="Price (€)"
            value={form.price}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded"
          />
        </div>
        <input
          type="text"
          name="city"
          placeholder="City/Country"
          value={form.city}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="language"
          placeholder="Languages"
          value={form.language}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone / Telegram / WhatsApp"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="social"
          placeholder="Website / Instagram (optional)"
          value={form.social}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
