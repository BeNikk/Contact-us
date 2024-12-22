"use client";

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Rocket, MessageCircle, Youtube, Instagram, Twitter, Star, Heart } from 'lucide-react'

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStep, setFormStep] = useState(1);
  const { toast } = useToast();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setFormStep(2)
    toast({
      title: "Message sent successfully! 🎉",
      description: "We'll get back to you within 24 hours.",
    })
  }

  const floatingIcons = [
    { icon: <MessageCircle className="text-purple-400" />, delay: 0 },
    { icon: <Youtube className="text-red-400" />, delay: 0.2 },
    { icon: <Instagram className="text-pink-400" />, delay: 0.4 },
    { icon: <Twitter className="text-blue-400" />, delay: 0.6 },
    { icon: <Star className="text-yellow-400" />, delay: 0.8 },
    { icon: <Heart className="text-red-400" />, delay: 1 },
  ]

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="min-h-screen bg-[#1F2937] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0.4, 1, 0.4], 
              y: [0, -20, 0],
              x: Math.sin(index) * 20
            }}
            transition={{
              duration: 3,
              delay: item.delay,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              left: `${(index * 20) + 10}%`,
              top: `${(index*10)+5 * 100}%`
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-left mb-12">
              <div className="mb-8 flex justify-center">
                <Image
                  src="/logo.png"
                  alt="MarkitUp Logo"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </div>
              <motion.h1 
                className="text-4xl font-bold mb-4"
                {...fadeIn}
              >
                Let&apos;s Create Something
                <span className="text-indigo-400"> Amazing</span>
              </motion.h1>
              <motion.p 
                className="text-gray-400 text-lg"
                {...fadeIn}
                transition={{ delay: 0.2 }}
              >
                Join our 30+ happy clients and let&apos;s grow together
              </motion.p>
            </div>

            {formStep === 1 ? (
              <motion.div 
                className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        required
                        className="bg-gray-700/50 border-gray-600 focus:ring-indigo-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        className="bg-gray-700/50 border-gray-600 focus:ring-indigo-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="bg-gray-700/50 border-gray-600 focus:ring-indigo-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Company Inc."
                        required
                        className="bg-gray-700/50 border-gray-600 focus:ring-indigo-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Company Website</Label>
                      <Input
                        id="website"
                        type="url"
                        placeholder="https://company.com"
                        className="bg-gray-700/50 border-gray-600 focus:ring-indigo-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Monthly Revenue</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-700/50 border-gray-600">
                          <SelectValue placeholder="Select revenue range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-2k">USD 0-2K</SelectItem>
                          <SelectItem value="2k-10k">USD 2K-10K</SelectItem>
                          <SelectItem value="10k-20k">USD 10K-20K</SelectItem>
                          <SelectItem value="20k-50k">USD 20K-50K</SelectItem>
                          <SelectItem value="50k+">Over USD 50K</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-lg font-semibold text-blue-300 mb-2 block">Is your company funded?</Label>
                    <RadioGroup defaultValue="no" className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <RadioGroupItem 
                            value="yes" 
                            id="funded-yes" 
                            className="border-2 border-indigo-400 text-indigo-400 focus:border-indigo-500 focus:ring-indigo-500"
                          />
                        </motion.div>
                        <Label htmlFor="funded-yes" className="text-white hover:text-indigo-400 transition-colors duration-200">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <RadioGroupItem 
                            value="no" 
                            id="funded-no" 
                            className="border-2 border-indigo-400 text-indigo-400 focus:border-indigo-500 focus:ring-indigo-500"
                          />
                        </motion.div>
                        <Label htmlFor="funded-no" className="text-white hover:text-indigo-400 transition-colors duration-200">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-lg font-semibold text-blue-300 mb-2 block">Services Interested In</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "Content Strategy",
                        "Social Media Management",
                        "Video Production",
                        "Branding",
                        "SEO Optimization",
                        "Email Marketing"
                      ].map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Checkbox 
                              id={service.toLowerCase().replace(/\s+/g, '-')}
                              className="border-2 border-indigo-400 text-indigo-400 focus:border-indigo-500 focus:ring-indigo-500"
                            />
                          </motion.div>
                          <Label htmlFor={service.toLowerCase().replace(/\s+/g, '-')} className="hover:text-indigo-400 transition-colors duration-200">{service}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Rocket className="mr-2 h-5 w-5" />
                        </motion.div>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                className="bg-gray-800/50 rounded-2xl p-12 backdrop-blur-sm border border-gray-700/50 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <Rocket className="w-16 h-16 mx-auto text-indigo-400 mb-6" />
                </motion.div>
                <h2 className="text-2xl font-bold mb-4">Message Sent Successfully! 🎉</h2>
                <p className="text-gray-400 mb-6">We&apos;ll get back to you within 24 hours.</p>
                <Button 
                  onClick={() => setFormStep(1)}
                  variant="outline"
                  className="text-black"
                >
                  Send Another Message
                </Button>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <Image
                src="/undraw_contract_upwc.svg"
                alt="Contact Illustration"
                width={400}
                height={400}
                className="rounded-2xl"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div
                className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-3xl font-bold text-indigo-400">30+</h3>
                <p className="text-gray-400">Happy Clients</p>
              </motion.div>
              <motion.div
                className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-3xl font-bold text-purple-400">999+</h3>
                <p className="text-gray-400">Videos Published</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute top-0 right-0 -z-10">
        <div className="w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 -z-10">
        <div className="w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  )
}

