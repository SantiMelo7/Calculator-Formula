import { GenericInput } from "../layout/GenericInput";
import { ButtonsSubmit } from "../layout/ButtonsSubmit";
import { useLeyDeCoulomb } from "../../hooks/useFormulas";

// Componente donde manejamos la division de la formula de LeyDeCoulomb
export function LeyDeCoulomb() {
  // damos todo lo que retornamos en el hook
  const {
    carga1,
    setCarga1,
    carga2,
    setCarga2,
    error,
    resultado,
    distanceCoulomb,
    setDistanceCoulomb,
    calcularResultado,
    clean,
  } = useLeyDeCoulomb();

  return (
    <>
      <div className="sm">
        <img className="img-count" src="/v-d-t-division.webp" />
      </div>
      {/*Damos el form que se entiende como forumlario y el onSubmit es el que se entiende como el que hara todo el calculo
      y damos su valor que es el que hace la formula */}
      <form onSubmit={calcularResultado}>
        {/*Damos el genericInput que se explica que es en el componente mismo
          y recibe su valor (impacto que tendra)
          // label (Es una forma de decirle al usuario que va en esa entrada)
          // placeholder, una prev de lo que lleva la entrada
          // id y name es para que el valor sea lo mismo
          // onChange, hacemos que el segundo estado nos de su valor del target
          // esto es para que el usuario pueda escribir en la entrada
        */}
        <GenericInput
          value={carga1}
          label="Carga 1"
          placeholder="Ingresa la carga número 1"
          id="carga1"
          name="carga1"
          onChange={(ev) => setCarga1(ev.target.value)}
        />
        <GenericInput
          value={carga2}
          label="Carga 2"
          placeholder="Ingresa la carga número 2"
          id="carga2"
          onChange={(ev) => setCarga2(ev.target.value)}
          name="carga2"
        />

        <GenericInput
          value={distanceCoulomb}
          label="Distancia"
          placeholder="Ingresa la distancia"
          id="distanceCoulomb"
          onChange={(ev) => setDistanceCoulomb(ev.target.value)}
          name="distanceCoulomb"
        />

        {/*De esta manera mostramos el error, si existe ese valor damos esto */}
        {error && <p className="error">{error}</p>}

        {/*Componente que se explica en su archivo, pero le damos el clean que es empezar de 0 */}
        <ButtonsSubmit result={resultado} cleanUp={clean} />
      </form>
      {/* damos su imagen */}
      <div className="md">
        <img className="img-count" src="/v-d-t-division.webp" />
      </div>
    </>
  );
}
