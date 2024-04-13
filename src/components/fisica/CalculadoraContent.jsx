import { Calculadora } from "../layout/Calculadora";

// damos unas props llamada srcImage qu esto hara que cada ves que este componente se utilize
// necesitara dar esta prop que en este caso es la imagen
export function CalculadoraContent({ srcImage }) {
  return (
    <>
      {/* Damos una imagen de demostracion y el valor de src, es en donde esta la imagen*/}
      <img className="img-count" style={{ left: "0px" }} src={srcImage} />
      {/*Damos el componente de la calculadora que en el archivo se explica como funciona */}
      <Calculadora />
    </>
  );
}
