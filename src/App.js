import logo from './logo.svg';
import styles from './app.module.scss';

function App() {
  return (
    <>
      <section className={styles.navbarBg}>
        <nav className={styles.navbar}>
          <div className={styles.brand}>
            <a href="/">LOGO</a>
          </div>

          <div className={styles.menu}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#">Home 2</a></li>
              <li><a href="#">Home 3</a></li>
              <li><a href="#">Home 4</a></li>
            </ul>
          </div>

          <div className={styles.buttons}>
            <button>Login</button>
            <button>Signup</button>
          </div>
        </nav>
      </section>
    </>
  );
}

export default App;
