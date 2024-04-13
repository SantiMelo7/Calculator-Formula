import { ButtonsSubmit } from "../layout/ButtonsSubmit";
import { GenericInput } from "../layout/GenericInput";
import { useVelocidadDistanciaPorTiempo } from "../../hooks/useFormulas";

// Componente donde manejamos la multiplicacion de la formula
export function FormMultiplicacion() {
  // damos todo lo que retornamos en el hook
  const {
    velocity,
    setVelocity,
    timer,
    setTimer,
    result,
    error,
    formulaDistanciaEntreTiempoMultiplicación,
    clean,
  } = useVelocidadDistanciaPorTiempo();
  return (
    <>
      <div className="sm">
        <img
          className="img-count img-x-form"
          src="/v-d-t-multiplicacion.webp"
        />
      </div>
      {/*Damos el form que se entiende como forumlario y el onSubmit es el que se entiende como el que hara todo el calculo
      y damos su valor que es el que hace la formula */}
      <form onSubmit={formulaDistanciaEntreTiempoMultiplicación}>
        {/*Damos el genericInput que se explica que es en el componente mismo
          y recibe su valor (impacto que tendra)
          // label (Es una forma de decirle al usuario que va en esa entrada)
          // placeholder, una prev de lo que lleva la entrada
          // id y name es para que el valor sea lo mismo
          // onChange, hacemos que el segundo estado nos de su valor del target
          // esto es para que el usuario pueda escribir en la entrada
        */}
        <GenericInput
          units="Km"
          value={velocity}
          label="Velocidad"
          placeholder="Ingresa la velocidad"
          id="velocity"
          name="velocity"
          onChange={(ev) => setVelocity(ev.target.value)}
        />
        <GenericInput
          units="Hrs"
          value={timer}
          label="Tiempo"
          placeholder="Ingresa el tiempo"
          id="timer"
          onChange={(ev) => setTimer(ev.target.value)}
          name="timer"
        />

        {/*De esta manera mostramos el error, si existe ese valor damos esto */}
        {error && <p className="error">Vuelve a intentarlo</p>}

        {/*Componente que se explica en su archivo, pero le damos el clean que es empezar de 0 */}
        <ButtonsSubmit result={result} cleanUp={clean} unit="D" />
      </form>
      {/* damos su imagen */}
      <div className="md">
        <img
          className="img-count img-x-form"
          src="/v-d-t-multiplicacion.webp"
        />
      </div>
    </>
  );
}
