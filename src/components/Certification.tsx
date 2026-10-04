import { useRef } from 'react'
import { PageHeader } from './PageHeader'
import hackCertificate from '../assets/hck0.jpeg'
import hackParticipation from '../assets/hck1.jpeg'
import hackRecognition from '../assets/hck2.jpeg'
import programmerCertificate from '../assets/prog-cert.jpeg'
import facilitatorCertificate from '../assets/prog-faci1.jpeg'
import facilitatorRecognition from '../assets/prog-faci2.jpeg'
import trainerCommendation from '../assets/prog-trainer1.jpeg'
import trainerCertificate from '../assets/prog-trainer2.jpeg'
import trainerRecognition from '../assets/prog-trainer3.jpeg'

const certifications = [
  { title: 'Make Advanced', issuer: 'Make', url: 'https://www.credly.com/badges/afc822b3-bb5d-4aee-98fe-9d1bf5217a09/public_url', type: 'Credly certification' },
  { title: 'Make Intermediate', issuer: 'Make', url: 'https://www.credly.com/badges/e69ad2ec-0f9c-43a2-b1a3-e97a2c20272f/public_url', type: 'Credly certification' },
  { title: 'Programmer of the Year', issuer: 'ACL College of Butuan', url: programmerCertificate, type: 'Certificate of recognition' },
  { title: 'Hack4Gov Cybersecurity Hackathon', issuer: 'DICT Caraga', url: hackCertificate, type: 'Certificate of appreciation' },
  { title: 'Hack4Gov Participation', issuer: 'DICT Caraga', url: hackParticipation, type: 'Certificate of participation' },
  { title: 'Hack4Gov Recognition', issuer: 'DICT Caraga', url: hackRecognition, type: 'Certificate of participation' },
  { title: 'Python Workshop Facilitator', issuer: 'ACL College of Butuan', url: facilitatorCertificate, type: 'Certificate of appreciation' },
  { title: 'Python Workshop Facilitator', issuer: 'ACL College of Butuan', url: facilitatorRecognition, type: 'Certificate of appreciation' },
  { title: 'Python Trainer Commendation', issuer: 'ACL College of Butuan', url: trainerCommendation, type: 'Certificate of commendation' },
  { title: 'Python Trainer Recognition', issuer: 'ACL College of Butuan', url: trainerCertificate, type: 'Certificate of commendation' },
  { title: 'Python Trainer Commendation', issuer: 'ACL College of Butuan', url: trainerRecognition, type: 'Certificate of commendation' },
]

const recognition = ['Programmer of the Year', 'Best in Research', 'Service Awardee', 'Top 4 in Caraga — Hack4Gov by DICT', 'Python Workshop Facilitator', 'Associate Trainer using Python — PyBalangay']

export function Certification() {
  const carousel = useRef<HTMLDivElement>(null)
  const moveCarousel = (direction: number) => carousel.current?.scrollBy({ left: carousel.current.clientWidth * direction, behavior: 'smooth' })

  return <section className="screen">
    <PageHeader title="certifications" description="Certifications, training, credentials, and professional recognition." />
    <div className="certificate-carousel-header"><span>{certifications.length} certifications</span><div><button onClick={() => moveCarousel(-1)} aria-label="Previous certifications">←</button><button onClick={() => moveCarousel(1)} aria-label="Next certifications">→</button></div></div>
    <div className="certificate-carousel" ref={carousel}>{certifications.map((certificate, index) => <article key={`${certificate.url}-${index}`}>
      <span>{certificate.type}</span><h2>{certificate.title}</h2><p>{certificate.issuer}</p><a href={certificate.url} target="_blank" rel="noreferrer">view certification ↗</a>
    </article>)}</div>
    <section className="awards-block"><h2>Recognition</h2>{recognition.map((item, index) => <div className="recognition-heading" key={item}>
      <span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong>
    </div>)}</section>
  </section>
}
