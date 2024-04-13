// Componente de boton que recibe props de darle click, texto y estilo
// Cada boton tendra sus propios valores
export function Button({ onClick, text, style }) {
  return (
    <button style={style} onClick={onClick} className="style-calculator">
      {text}
    </button>
  );
}
