export default function Home() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <Image src="/logo.png" alt="Logo sOmedia" width={50} height={50} />
        </div>
        <nav className="social-links">
          <a href="#"><Image src="/facebook.png" alt="Facebook" width={25} height={25} /></a>
          <a href="#"><Image src="/instagram.png" alt="Instagram" width={25} height={25} /></a>
        </nav>
      </header>

      <main className="main">
        <section className="mascotte">
          <Image src="/mascotte.png" alt="Mascotte sOmedia" width={250} height={250} />
        </section>

        <section className="presentation">
          <h1>Chaque projet est une signature,<br /> voici la nôtre.</h1>
          <div className="cartes">
            <div className="carte">Texte 1</div>
            <div className="carte">Texte 2</div>
            <div className="carte">Texte 3</div>
            <div className="carte">Texte 4</div>
            <div className="carte">Texte 5</div>
          </div>
          <p>L'agence de communication qui booste votre notoriété</p>
          <div className="boutons">
            <button>Contact</button>
            <button>Explore</button>
          </div>
        </section>
      </main>
    </>
  );
}