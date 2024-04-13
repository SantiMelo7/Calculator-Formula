export function HomePage() {
  return (
    <>
      {/*En esta parte damos codigo html y css convecional */}
      <div className="section-page">
        <div className="container-img-logo">
          <img src="/logo-fisica.webp" className="logo-materies" />
          <img src="/logo-elec-and-mag.webp" className="logo-materies" />
        </div>
        <section className="container">
          <h1 className="title-home animate-rubber-band">
            Calculadora de formulas
          </h1>
          <h2 className="subTitle-home animate-slide-out-bottom">
            Elige tu materia
          </h2>
        </section>
        <div className="section-images">
          <a className="link-materia animate-slide-in-top" href="/fisica">
            <span className="title-home-box">Física</span>
            <img className="img-home" src="/fisica.webp" />
          </a>
          <a
            className="link-materia animate-slide-in-bottom"
            href="/electricidad/magnetismo"
          >
            <span className="title-home-box">Electricidad Y Magnetismo</span>
            <img className="img-home" src="/elecandmag.webp" />
          </a>
        </div>
      </div>
    </>
  );
}
