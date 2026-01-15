export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">ABOUT US</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-4 text-justify">
              What started as an inspiration of a group of travel professionals to fill a huge gap in the Indian market for a reliable ground operator for holidays, Captivating India is now one of Kerala's leading Travel Agent. We believe in showing you our country all around the year as there is something or the other that will fascinate you. Our name "Captivating India" reflects our commitment to showcasing the captivating beauty, culture, and experiences that India has to offer throughout all seasons.
            </p>
            <p className="text-lg text-muted-foreground font-light leading-relaxed text-justify">
              A holiday with us will let you experience the real India without having to worry about the details. Our team of experienced travel professionals ensures that every journey is carefully crafted to match your unique preferences and interests.
            </p>
            <a
              href="#"
              className="inline-block mt-6 px-8 py-3 bg-primary text-primary-foreground rounded-full font-light hover:opacity-90 transition-opacity"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
