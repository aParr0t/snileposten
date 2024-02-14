export default function Footer() {
  return (
    <footer className="bg-primary p-8 flex flex-row justify-center">
      <div className="flex flex-col">
        <h2 className="text-2xl text-secondary">Kontakt oss</h2>
        <div className="flex flex-col md:flex-row text-white gap-8">
          <div>
            <h3 className="text-secondary">Lillestorting Ansvarlig</h3>
            <p>Dagfinn Tvedt</p>
            <a href="tel:99544975" className="block">
              Tlf: 99 54 49 75
            </a>
            <a href="mailto:dagfinnt@afk.no">E-post: dagfinnt@afk.no</a>
          </div>
          <div>
            <h3 className="text-secondary">Skolens kontaktinformasjon</h3>
            <h3 className="text-secondary">Telefon</h3>
            <a href="tel:63890600" className="block">
              (+47): 63 89 06 00
            </a>
            <h3 className="text-secondary">E-post</h3>
            <a href="mailto:lillestromvgs@afk.no" className="block">
              lillestromvgs@afk.no
            </a>
          </div>
          <div>
            <h3 className="text-secondary">Besøksadresse</h3>
            <p>Henrik Wergelands gate 1, 2003 Lillestrøm</p>
            <h3 className="text-secondary">Åpningstider</h3>
            <p>Mandag-fredag kl. 08:00- 15:30</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
