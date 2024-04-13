// Damos un component de estilos
// y recibe el children que se entiende como podra renderizar todo lo que uno quiera a partir del padre
export function Container({ children }) {
  return (
    <section className="container">
      <h2 className="search-title">Busca la formula que sea de tu interés</h2>
      <a className="redirect-home" href="/">
        Regresar al inicio
      </a>
      {children}
    </section>
  );
}
