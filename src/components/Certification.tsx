import{PageHeader}from'./PageHeader'
import makeAdvanced from'../assets/make-advance.png'
import makeIntermediate from'../assets/make-intermediate.png'

const certifications=[
  {title:'Make Advanced',issuer:'Make',image:makeAdvanced,url:'https://www.credly.com/badges/afc822b3-bb5d-4aee-98fe-9d1bf5217a09/public_url'},
  {title:'Make Intermediate',issuer:'Make',image:makeIntermediate,url:'https://www.credly.com/badges/e69ad2ec-0f9c-43a2-b1a3-e97a2c20272f/public_url'},
]

const recognition=[
  'Programmer of the Year',
  'Best in Research',
  'Service Awardee',
  'Top 4 in Caraga — Hack4Gov by DICT',
  'Associate Trainer using Python — PyBalangay',
]

export function Certification(){return <section className="screen"><PageHeader title="certifications" description="Certifications, training, credentials, and professional recognition."/><div className="certificate-grid">{certifications.map(certificate=><article key={certificate.url}><div className="certificate-icon"><img src={certificate.image} alt={`${certificate.title} badge`}/></div><div><span>CERTIFICATION / CREDLY</span><h2>{certificate.title}</h2><p>{certificate.issuer}</p><a href={certificate.url} target="_blank" rel="noreferrer">view credential ↗</a></div></article>)}</div><section className="awards-block"><h2>Recognition</h2>{recognition.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,'0')}</span><strong>{item}</strong></div>)}</section></section>}
