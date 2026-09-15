'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    const formData = new FormData(e.currentTarget)
    
    // Construct the structured message from all the fields
    const title = formData.get('title')
    const firstName = formData.get('first_name')
    const surname = formData.get('surname')
    const name = `${title} ${firstName} ${surname}`.trim()
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    
    const interests = formData.getAll('interests').join(', ')
    
    const messageDetails = [
      `Trip Date: ${formData.get('trip_date')}`,
      `Duration (nights): ${formData.get('duration')}`,
      `Number of People: ${formData.get('num_people')}`,
      `Number of Rooms: ${formData.get('num_rooms')}`,
      `Accommodation Type: ${formData.get('accommodation')}`,
      `Interests: ${interests || 'None'}`,
      `Budget per Day (INR): ${formData.get('budget')}`,
      `Contact Address: ${formData.get('address')}`,
      `\nOther Requests:\n${formData.get('requests') || 'None'}`
    ].join('\n')

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://captivationgindia.bvox.in'}/api/v1/contact-messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name || 'Unknown',
          email: email,
          phone: phone,
          subject: 'Booking Enquiry',
          message: messageDetails
        })
      })

      if (!res.ok) {
        throw new Error('Failed to send message')
      }

      setSuccess(true)
      e.currentTarget.reset()
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-card rounded-2xl border border-border/70 shadow-sm p-5 md:p-7">
      <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">Booking enquiry</h3>
      
      {success && (
        <div className="p-3 bg-green-50 text-green-700 rounded-md text-sm">
          Your enquiry has been sent successfully. We will get back to you soon!
        </div>
      )}
      
      {error && (
        <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs md:text-sm font-medium text-foreground">
            Title <span className="text-destructive">*</span>
          </label>
          <select name="title" required className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">Select here</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs md:text-sm font-medium text-foreground">
            First name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            name="first_name"
            required
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs md:text-sm font-medium text-foreground">
            Surname <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            name="surname"
            required
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs md:text-sm font-medium text-foreground">
            Trip date <span className="text-destructive">*</span>
          </label>
          <input
            type="date"
            name="trip_date"
            required
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs md:text-sm font-medium text-foreground">
            Duration of holiday (nights) <span className="text-destructive">*</span>
          </label>
          <input
            type="number"
            name="duration"
            min={1}
            required
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs md:text-sm font-medium text-foreground">
            Number of people <span className="text-destructive">*</span>
          </label>
          <input
            type="number"
            name="num_people"
            min={1}
            required
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs md:text-sm font-medium text-foreground">
            Number of rooms <span className="text-destructive">*</span>
          </label>
          <input
            type="number"
            name="num_rooms"
            min={1}
            required
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs md:text-sm font-medium text-foreground">
            Type of accommodation <span className="text-destructive">*</span>
          </label>
          <select name="accommodation" required className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">Select here</option>
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="First class">First class</option>
            <option value="Homestay">Homestay</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs md:text-sm font-medium text-foreground">
          Your interests
        </label>
        <div className="grid md:grid-cols-3 gap-2 text-xs md:text-sm">
          {[
            'Culture',
            'Wildlife',
            'Photography',
            'Markets',
            'Treks and Walks',
            'Cruises',
            'Ayurveda & Yoga',
            'Volunteer projects',
            'Diving & Snorkelling',
            'Adventure trips',
            'Safaris',
            'Cycle tours',
          ].map((interest) => (
            <label key={interest} className="inline-flex items-center gap-2">
              <input type="checkbox" name="interests" value={interest} className="rounded border-border text-primary" />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs md:text-sm font-medium text-foreground">
            Approximate budget per day (INR) <span className="text-destructive">*</span>
          </label>
          <input
            type="number"
            name="budget"
            min={0}
            required
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs md:text-sm font-medium text-foreground">
            Email <span className="text-destructive">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs md:text-sm font-medium text-foreground">
            Contact number <span className="text-destructive">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs md:text-sm font-medium text-foreground">Contact address</label>
          <textarea
            name="address"
            rows={3}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs md:text-sm font-medium text-foreground">Any other requests</label>
        <textarea
          name="requests"
          rows={4}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-2.5 text-sm md:text-base font-medium text-primary-foreground shadow-md hover:shadow-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}
