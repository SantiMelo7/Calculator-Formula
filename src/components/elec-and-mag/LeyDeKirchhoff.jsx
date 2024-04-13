import { useLeydeKirchhoff } from "../../hooks/useFormulas";
import { LeyDeKirchValue } from "../layout/LeyDeKirchValue";

// Componente donde manejamos la division de la formula de LeyDeKirchhoff
export function LeyDeKirchhoff() {
  // damos todo lo que retornamos en el hook
  const { errorMessage, calculateVoltageSum } = useLeydeKirchhoff();

  return (
    <div className="content-center">
      <div className="sm">
        <img className="img-count" src="/v-d-t-division.webp" />
      </div>
      {/*Damos el form que se entiende como forumlario y el onSubmit es el que se entiende como el que hara todo el calculo
      y damos su valor que es el que hace la formula */}
      <form onSubmit={calculateVoltageSum}>
        <LeyDeKirchValue />
        {/*Si hay error lo mostramos */}
        {errorMessage && <p className="error">{errorMessage}</p>}
        {/*Si el error es diferente a null mostramos el result */}
      </form>
      {/*imagen */}
      <div className="md">
        <img className="img-count" src="/v-d-t-division.webp" />
      </div>
    </div>
  );
}
