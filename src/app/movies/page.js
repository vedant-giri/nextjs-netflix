import Link from 'next/link'
import React from 'react'
import styles from "@/app/styles/common.module.css"
import MovieCard from '../components/MovieCard';

export default async function page() {
  await new Promise(resolve => setTimeout(resolve,2000))
  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7b66b957a6msh70912b6373a19efp119e27jsn5ee20d68b106',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
  const res=await fetch(url,options);
  const data=await res.json();
  const main_data=data.titles;
  return (
    <>
     <section className={styles.movieSection}>
      <div className={styles.container}>
        <h1>Series And Movies</h1>
        <div className={styles.card_section}>

        
        {
          main_data.map((curElem)=>{
            
            return <MovieCard key={curElem.id} {...curElem}/>
            
          })
        }
        </div>
      </div>
     </section> 
    </>
  )
}
