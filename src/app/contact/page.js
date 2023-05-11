import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from './contact.module.css'
import ContactForm from '../components/ContactForm'

export default function page() {
  return (
    <>
    <div className={styles.container}>
      <h2>Contact Us</h2>
      <ContactCard/>
      <section className={styles.contact_section}>
        <h2>We would love to hear <span>from you</span></h2>
        <ContactForm/>
      </section>
    </div>
    
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13175.119291840756!2d76.85371626355087!3d23.07715560147935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9ceaaaaaaab%3A0xa224b6b82b421f83!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Bhopal!5e0!3m2!1sen!2sin!4v1683649958337!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>
    
    
    </>
  )
}
