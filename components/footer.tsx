'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

interface SettingsData {
  site_logo?: string | null
  site_name?: string
  footer_text?: string
  contact_email?: string
  contact_phone?: string
  contact_address?: string
  facebook_url?: string
  instagram_url?: string
  youtube_url?: string
}

export default function Footer() {
  const [settings, setSettings] = useState<SettingsData>({})

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://captivationgindia.bvox.in'}/api/v1/settings`)
        if (res.ok) {
          const json = await res.json()
          setSettings(json.data || {})
        }
      } catch (error) {
        console.error('Failed to fetch settings:', error)
      }
    }
    fetchSettings()
  }, [])

  return (
    <footer className="bg-foreground text-background" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={settings.site_logo || "/logo.png"} 
                alt={`${settings.site_name || 'Captivating India'} Logo`} 
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-lg tracking-tight">{settings.site_name || 'CAPTIVATING INDIA'}</span>
                <span className="text-xs font-light opacity-80 -mt-1">Travel all Seasons</span>
              </div>
            </div>
            <p className="font-light text-sm leading-relaxed opacity-90 max-w-md">
              Your trusted travel partner for authentic Kerala and South India experiences. Experience the real India all around the year.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">CONTACT INFO</h4>
            <div className="space-y-4 text-sm font-light">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{settings.contact_address || '20/3 B, P.A Ulahan Road, Maradu P.O, Cochin - 682304'}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href={`mailto:${settings.contact_email || 'info@captivatingindia.co.uk'}`} className="hover:opacity-80 transition-opacity">{settings.contact_email || 'info@captivatingindia.co.uk'}</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href={`tel:${(settings.contact_phone || '').replace(/\s/g, '')}`} className="hover:opacity-80 transition-opacity">{settings.contact_phone || '+91 484 2664107'}</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs opacity-80">Website:</span>
                <a href="https://captivatingindia.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">https://captivatingindia.co.uk/</a>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href={settings.facebook_url || '#'} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-all">
                <Facebook size={18} />
              </a>
              <a href={settings.instagram_url || '#'} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-all">
                <Instagram size={18} />
              </a>
              <a href={settings.youtube_url || '#'} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm font-light">
          <p>{settings.footer_text || '© 2025 Captivating India all Rights Reserved || Developed by VOXINNOV'}</p>
        </div>
      </div>
    </footer>
  )
}
