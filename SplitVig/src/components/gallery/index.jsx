import styles from './style.module.scss'
import Image from 'next/image';
import { motion } from 'framer-motion';
export default function index({handle}) {
  
  
  return (
    
    <div className={styles.gallery}>
      
        <div className={styles.imageContainer}>
            <Image 
                src={`/images/${handle}/background.png`}
                alt="image"
                fill
            />
            
        </div>
        <motion.div
        className={styles.vignette}
        >
          <Image 
            src={`/images/${handle}/1.png`}
            alt="image"
            fill
          />
          
          </motion.div>
    </div>
    
  )
}
