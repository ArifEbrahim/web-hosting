import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer>
      <nav className={styles.main_footer}>
        <ul className={styles.main_footer__links}>
          <li className={styles.main_footer__link}>
            <a href="#">Support</a>
          </li>
          <li className={styles.main_footer__link}>
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
