'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { Menu, X, Globe, Atom, Wifi, ChevronDown } from 'lucide-react'
import { FilePenLineIcon, Rotate3DIcon } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion, useAnimation, AnimatePresence } from 'framer-motion'

import GlyphButton from '@/components/GlyphButton';

import Play from '@/components/play.core';
import * as dyna from "@/assets/play.core/doom_flame.js";
import EchoText from './EchoText'

const SohneInnovativeStudio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredCreation, setHoveredCreation] = useState<number | null>(null)
  const [hoveredTool, setHoveredTool] = useState<number | null>(null)
  const controls = useAnimation()

  // Memoize constant arrays to prevent re-creation on every render
  const creations = useMemo(() => [
    {
      id: 1,
      title: "KWARTZ",
      description: "Dive into a mind-bending cyberpunk adventure where reality and digital consciousness intertwine",
      image: "https://m.gjcdn.net/game-thumbnail/400/451321-crop458_41_1480_615-tt5yrbpn-v4.webp",
      techStack: ["WebGL", "TensorFlow.js", "Web Audio API"],
      color: "from-purple-500 to-blue-500"
    },
    {
      id: 2,
      title: "FREE BREEZE",
      description: "Navigate the multiverse in this reality-warping puzzle platformer that challenges your perception",
      image: "https://m.gjcdn.net/game-thumbnail/400/551443-crop1_0_1684_947-tduvceca-v4.webp",
      techStack: ["Three.js", "Matter.js", "Web Workers API"],
      color: "from-green-500 to-yellow-500"
    },
    {
      id: 3,
      title: "THE ASHES OF JORGE",
      description: "Embark on an emotional journey through time, space, and human connection in this narrative-driven experience",
      image: "https://m.gjcdn.net/game-thumbnail/400/506349-crop45_0_1728_947-vcekirbs-v4.webp",
      techStack: ["PixiJS", "Howler.js", "IndexedDB"],
      color: "from-red-500 to-pink-500"
    }
  ], [])

  const tools = useMemo(() => [
    {
      id: 1,
      name: "DURA2D",
      description: "A quantum-inspired 4D physics engine that bends reality to your will. Create worlds beyond imagination.",
      icon: Atom,
      color: "text-purple-500"
    },
    {
      id: 2,
      name: "LEVEGL",
      description: "An AI-powered rendering library that turns brainwaves into visual poetry. Push the boundaries of digital art.",
      icon: Rotate3DIcon,
      color: "text-blue-500"
    },
    {
      id: 3,
      name: "RUN, COLIRU!",
      description: "Evolving game logic framework that adapts and learns from player interactions, creating unique experiences.",
      icon: FilePenLineIcon,
      color: "text-green-500"
    }
  ], [])

  // Callback to avoid re-rendering
  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const handleHoverCreation = useCallback((id: number | null) => {
    setHoveredCreation(id)
  }, [])

  const handleHoverTool = useCallback((id: number | null) => {
    setHoveredTool(id)
  }, [])

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  }, [controls])

  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden">
      {<Play name="Dyna" program={dyna} />}

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black bg-opacity-70 transition-all duration-300 border-b-2 border-gray-900">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">

          <EchoText href="#" className="ml-4">
            <pre className="text-sm font-mono leading-none whitespace-pre mr-1 text-white">
              ┏╋{'\n'}┣┓{'\n'}┗┛
            </pre>
            <span className="text-2xl text-white">SOHNE</span>
          </EchoText>

          <div className="hidden md:flex space-x-6">
            {['Nexus', 'Creations', 'Forge', 'Manifesto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gray-500 transition-colors">
                #{item}
              </a>
            ))}
          </div>
          <button onClick={handleMenuToggle} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black py-2"
            >
              <div className="container mx-auto px-4 flex flex-col space-y-2">
                {['Nexus', 'Creations', 'Forge', 'Manifesto'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="block py-2 hover:text-gray-500 transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="nexus" className="relative min-h-screen flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="relative z-10 text-center">
          <motion.h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            SOHNE
          </motion.h1>
          <motion.p className="text-xl md:text-2xl mb-8 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            DIGITAL REALITY ARCHITECTS
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            <GlyphButton
              text={"ENTER THE VOID"}
              className="bg-white hover:bg-gray-400 font-bold py-3 px-6 pointer-events-auto transition-all duration-300"
            />
          </motion.div>
        </div>
        <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" animate={controls}>
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Creations Section */}
      <section id="creations" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">OUR CREATIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creations.map((creation) => (
              <motion.div
                key={creation.id}
                className="group relative overflow-hidden border border-white rounded-lg select-none"
                onMouseEnter={() => handleHoverCreation(creation.id)}
                onMouseLeave={() => handleHoverCreation(null)}
                style={{
                  willChange: hoveredCreation === creation.id ? 'transform, scale, opacity, filter' : 'auto',
                  transform: hoveredCreation === creation.id ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.3s ease-out, opacity 0.3s ease-out, filter 0.3s ease-out'
                }}>
                <img src={creation.image} alt={creation.title} className="w-full h-64 object-cover transition-all duration-300 grayscale-0 group-hover:scale-125 group-hover:grayscale" loading="lazy" />
                <motion.div className={`absolute inset-0 bg-gradient-to-br ${creation.color} flex items-center justify-center`}
                  exit={{ opacity: 0, filter: "blur(0.2rem)", transition: { ease: "easeInOut", duration: 0.3 } }}
                  initial={{ opacity: 0, scale: 1.25, filter: "blur(0.2rem)" }}
                  animate={{ opacity: hoveredCreation === creation.id ? 0.9 : 0, scale: hoveredCreation === creation.id ? 1.0 : 1.25, filter: hoveredCreation === creation.id ? "blur(0px)" : "blur(0.2rem)" }}
                  transition={{ ease: "easeInOut", duration: 0.3 }}>
                  <div className="text-center p-4">
                    <h3 className="text-xl font-bold mb-2">{creation.title}</h3>
                    <p className="mb-4 text-sm">{creation.description}</p>
                    <Button className="bg-white text-black hover:bg-gray-300 font-bold py-2 px-4 rounded-full transition-all duration-300">
                      EXPERIENCE
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Forge Section */}
      <section id="forge" className="py-20 bg-white text-black relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">THE FORGE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <motion.div
                key={tool.id}
                className="border-2 border-black p-6 rounded-lg hover:bg-black hover:text-white transition-all duration-300 group"
                onMouseEnter={() => setHoveredTool(tool.id)}
                onMouseLeave={() => setHoveredTool(null)}
                style={{
                  willChange: hoveredTool === tool.id ? 'transform, scale, background-color, color' : 'auto',
                  transform: hoveredTool === tool.id ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.3s ease-out, background-color 0.3s ease-out, color 0.3s ease-out'
                }}
              >
                <tool.icon className={`w-12 h-12 mb-4 ${tool.color}`} />
                <h3 className="text-2xl font-bold mb-2">{tool.name}</h3>
                <p className="mb-4">{tool.description}</p>
                <Button className="bg-black text-white group-hover:bg-white group-hover:text-black font-bold py-2 px-4 rounded-full transition-all duration-300">
                  FORGE REALITY
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-20 relative z-10">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold mb-8 text-center">OUR MANIFESTO</h2>
          <div className="space-y-4 text-center">
            {[
              "We are the architects of digital realms, the weavers of code and creativity.",
              "In the void between reality and imagination, we forge new worlds.",
              "Our games are not mere entertainment, but gateways to unexplored dimensions of the mind.",
              "We challenge the boundaries of interactive experiences, pushing the limits of what's possible.",
              "Join us in our quest to redefine reality and reshape the future of digital interaction.",
              "Welcome to SOHNE - where dreams become playable, and imagination knows no bounds."

            ].map((text, index) => (
              <motion.p
                key={index}
                className="text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">SOHNE</h2>
              <p className="text-sm">Digital Reality Architects</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-500 transition-colors"><GithubIcon className="w-6 h-6" /></a>
              <a href="#" className="hover:text-gray-500 transition-colors"><LinkedinIcon className="w-6 h-6" /></a>
            </div>
          </div>
          <hr className="border-black my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2024 SOHNE. All realities reserved.</p>
            <div className="flex mt-4 md:mt-0">
              <a href="#" className="mr-4 hover:text-gray-500 transition-colors">Quantum Privacy</a>
              <a href="#" className="hover:text-gray-500 transition-colors">Multiversal Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SohneInnovativeStudio

