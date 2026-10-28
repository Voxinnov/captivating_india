'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

interface SettingsData {
  site_logo?: string | null
  site_name?: string
  site_tagline?: string
  footer_description?: string
  contact_email?: string
  contact_phone?: string
  contact_address?: string
  website_url?: string
  facebook_url?: string
  instagram_url?: string
  youtube_url?: string
  footer_text?: string
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
                <span className="font-semibold text-lg tracking-tight">{settings.site_name || 'Captivating India'}</span>
                <span className="text-xs font-light opacity-80 -mt-1">{settings.site_tagline || 'Travel all Seasons'}</span>
              </div>
            </div>
            <p className="font-light text-sm leading-relaxed opacity-90 max-w-md whitespace-pre-line">
              {settings.footer_description || 'Your trusted travel partner for authentic Kerala and South India experiences. Experience the real India all around the year.'}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">CONTACT INFO</h4>
            <div className="space-y-4 text-sm font-light">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed whitespace-pre-line">{settings.contact_address || 'Honiton Devon UK'}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href={`mailto:${settings.contact_email || 'info@captivatingindia.co.uk'}`} className="hover:opacity-80 transition-opacity">
                  {settings.contact_email || 'info@captivatingindia.co.uk'}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href={`tel:${(settings.contact_phone || '').replace(/\s/g, '')}`} className="hover:opacity-80 transition-opacity">
                  {settings.contact_phone || '+44 7778 403510'}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs opacity-80">Website:</span>
                <a 
                  href={settings.website_url || "https://captivatingindia.co.uk/"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-80 transition-opacity"
                >
                  {settings.website_url || "https://captivatingindia.co.uk/"}
                </a>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              {settings.facebook_url && settings.facebook_url !== '#' ? (
                <a href={settings.facebook_url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-all">
                  <Facebook size={18} />
                </a>
              ) : (
                <a href={settings.facebook_url || '#'} className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-all">
                  <Facebook size={18} />
                </a>
              )}
              {settings.instagram_url && settings.instagram_url !== '#' ? (
                <a href={settings.instagram_url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-all">
                  <Instagram size={18} />
                </a>
              ) : (
                <a href={settings.instagram_url || '#'} className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-all">
                  <Instagram size={18} />
                </a>
              )}
              {settings.youtube_url && settings.youtube_url !== '#' ? (
                <a href={settings.youtube_url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-all">
                  <Youtube size={18} />
                </a>
              ) : (
                <a href={settings.youtube_url || '#'} className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-all">
                  <Youtube size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm font-light">
          <p>{settings.footer_text || '© 2026 Captivating India all Rights Reserved'}</p>
        </div>
      </div>
    </footer>
  )
}
