import { Link } from 'react-router'
import styles from './home.module.css'

export default function Home() {
  return (
    <>
      <header className={styles.main_header}>
        <div>
          <Link className={styles.main_header__brand} to="/">
            uHost
          </Link>
        </div>
        <nav className={styles.main_nav}>
          <ul className={styles.main_nav__items}>
            <li className={styles.main_nav__item}>
              <Link to="/packages">Packages</Link>
            </li>
            <li className={styles.main_nav__item}>
              <Link to="/customers">Customers</Link>
            </li>
            <li
              className={`${styles.main_nav__item} ${styles.main_nav__item__cta}`}
            >
              <Link to="/start-hosting">Start Hosting</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className={styles.product_overview}>
        <h1>Get the freedom you deserve.</h1>
      </section>
      <section>
        <h1 className={styles.section_title}>Choose your plan</h1>
        <div>
          <article className={styles.plan}>
            <h1 className={styles.plan__title}>FREE</h1>
            <h2 className={styles.plan__price}>£0/month</h2>
            <h3>For hobby projects or small teams.</h3>
            <ul className={styles.plan__features}>
              <li>1 Workspace</li>
              <li>Unlimited Traffic</li>
              <li>10GB Storage</li>
              <li>Basic Support</li>
            </ul>
            <div>
              <button className={styles.button}>CHOOSE PLAN</button>
            </div>
          </article>
          <article className={`${styles.plan} ${styles.plan__highlight}`}>
            <h1 className={styles.plan__annotation}>RECOMMENDED</h1>
            <h1 className={styles.plan__title}>PLUS</h1>
            <h2 className={styles.plan__price}>£29/month</h2>
            <h3>For ambitious projects.</h3>
            <ul className={styles.plan__features}>
              <li>5 Workspaces</li>
              <li>Unlimited Traffic</li>
              <li>100GB Storage</li>
              <li>Plus Support</li>
            </ul>
            <div>
              <button className={styles.button}>CHOOSE PLAN</button>
            </div>
          </article>
          <article className={styles.plan}>
            <h1 className={styles.plan__title}>PREMIUM</h1>
            <h2 className={styles.plan__price}>£99/month</h2>
            <h3>Your enterprise solution.</h3>
            <ul className={styles.plan__features}>
              <li>10 Workspaces</li>
              <li>Unlimited Traffic</li>
              <li>Unlimited Storage</li>
              <li>Priority Support</li>
            </ul>
            <div>
              <button className={styles.button}>CHOOSE PLAN</button>
            </div>
          </article>
        </div>
      </section>
      <section className={styles.key_features}>
        <h1 className={styles.section_title}>
          Many Good Reasons to Stick Around
        </h1>
        <ul className={styles.key_features__list}>
          <li className={styles.key_feature}>
            <div className={styles.key_feature__image}></div>
            <p className={styles.key_feature__description}>
              3,857,000 Trusting Customers
            </p>
          </li>
          <li className={styles.key_feature}>
            <div className={styles.key_feature__image}></div>
            <p className={styles.key_feature__description}>
              99.999% Uptime Guarantee
            </p>
          </li>
          <li className={styles.key_feature}>
            <div className={styles.key_feature__image}></div>
            <p className={styles.key_feature__description}>
              Lightning Fast CDN
            </p>
          </li>
        </ul>
      </section>
    </>
  )
}
