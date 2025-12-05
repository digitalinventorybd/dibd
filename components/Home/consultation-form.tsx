"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ConsultationForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    designation: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handlePrev = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <section id="consultation" className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 animate-fade-in-up text-balance">
          Book a Free Consultancy
        </h2>

        {/* Progress indicator */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2 flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                step === 1
                  ? "bg-primary text-white"
                  : step > 1
                    ? "bg-green-500 text-white"
                    : "bg-zinc-800 text-gray-400"
              }`}
            >
              1
            </div>
            <div className="flex-1 h-1 bg-zinc-800">
              <div className={`h-full bg-primary transition-all duration-300 ${step > 1 ? "w-full" : "w-0"}`} />
            </div>
          </div>
          <div className="flex items-center gap-2 flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                step === 2
                  ? "bg-primary text-white"
                  : step > 2
                    ? "bg-green-500 text-white"
                    : "bg-zinc-800 text-gray-400"
              }`}
            >
              2
            </div>
            <div className="flex-1 h-1 bg-zinc-800">
              <div className={`h-full bg-primary transition-all duration-300 ${step > 2 ? "w-full" : "w-0"}`} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                step === 3 ? "bg-primary text-white" : "bg-zinc-800 text-gray-400"
              }`}
            >
              3
            </div>
          </div>
        </div>

        {/* Step labels */}
        <div className="flex justify-between mb-8 text-sm">
          <span className={step === 1 ? "text-white" : "text-gray-400"}>Personal Info</span>
          <span className={step === 2 ? "text-white" : "text-gray-400"}>Contact Info</span>
          <span className={step === 3 ? "text-white" : "text-gray-400"}>Message</span>
        </div>

        {/* Form */}
        <div className="space-y-6 animate-fade-in-up">
          {step === 1 && (
            <>
              <Input
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-transparent border-gray-700 text-white placeholder:text-gray-500 h-14"
              />
              <Input
                placeholder="Company Name"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="bg-transparent border-gray-700 text-white placeholder:text-gray-500 h-14"
              />
              <Input
                placeholder="Designation"
                value={formData.designation}
                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                className="bg-transparent border-gray-700 text-white placeholder:text-gray-500 h-14"
              />
            </>
          )}

          {step === 2 && (
            <>
              <Input
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-transparent border-gray-700 text-white placeholder:text-gray-500 h-14"
              />
              <Input
                placeholder="Phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-transparent border-gray-700 text-white placeholder:text-gray-500 h-14"
              />
            </>
          )}

          {step === 3 && (
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full min-h-[200px] bg-transparent border border-gray-700 rounded-md p-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          )}

          <div className="flex gap-4">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={handlePrev}
                className="flex-1 h-14 border-primary text-white hover:bg-primary/10 bg-transparent"
              >
                Previous
              </Button>
            )}
            <Button onClick={handleNext} className="flex-1 h-14 bg-primary hover:bg-red-600 text-white">
              {step === 3 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
