import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h3 className={styles.h3}>Escreva sobre o que você tem interesse</h3>
        <p>MiniBlog &copy; 2022</p>
    </footer>
  )
}

export default Footer