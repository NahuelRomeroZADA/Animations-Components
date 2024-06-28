'use client';
import styles from './page.module.scss'
import Gallery from '../components/gallery';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const projects = [
  
  {
    name: "Oni",
    handle: "oni"
  },
  {
    name: 'Katana',
    handle: "katana"
  },
  {name: "Bo",
    handle: "bo"
  },
  {name: "Oni2",
    handle:"oni2"
  }
]

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])

  return (
     <main className={styles.main}>
      {
        projects.map( ({handle}, i) => {
          return <Gallery handle={handle} key={i}/>
        })
      }
      {/* <Description projects={projects}/> */}
    </main>
  )
}