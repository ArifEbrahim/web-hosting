import { Link } from "react-router";
import styles from './home.module.css'

export default function Home() {
  return (
    <>
      <header className={styles.main_header}>
        <div>
          <Link className={styles.main_header__brand} to="/">uHost</Link>
        </div>
        <nav className={styles.main_nav}>
          <ul className={styles.main_nav__items}>
            <li className={styles.main_nav__item}>
              <Link to="/packages">Packages</Link>
            </li>
            <li className={styles.main_nav__item}>
              <Link to="/customers">Customers</Link>
            </li>
            <li className={`${styles.main_nav__item} ${styles.main_nav__item__cta}`}>
              <Link to="/start-hosting">Start Hosting</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className={styles.product_overview}>
        <h1>Get the freedom you deserve.</h1>
      </section>
      <section>
        <h1 className={styles.section_title}>Chose your plan</h1>
        <p>Make sure you get the most for your money!</p>
      </section>
    </>
  )
}
