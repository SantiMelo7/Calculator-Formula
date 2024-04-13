import { ButtonsSubmit } from "../layout/ButtonsSubmit";
import { GenericInput } from "../layout/GenericInput";
import { useVelocidadDistanciaEntreTiempo } from "../../hooks/useFormulas";

// Componente donde manejamos la division de la formula
export function FormDivision() {
  // damos todo lo que retornamos en el hook
  const {
    distanceDiv,
    setDistanceDiv,
    timerDiv,
    setTimerDiv,
    velocitDiv,
    error,
    formulaDistanciaEntreTiempoDivisión,
    clean,
  } = useVelocidadDistanciaEntreTiempo();
  return (
    <>
      <div className="sm">
        <img className="img-count" src="/v-d-t-division.webp" />
      </div>
      {/*Damos el form que se entiende como forumlario y el onSubmit es el que se entiende como el que hara todo el calculo
      y damos su valor que es el que hace la formula */}
      <form onSubmit={formulaDistanciaEntreTiempoDivisión}>
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
          value={distanceDiv}
          label="Distancia"
          placeholder="Ingresa la distancia"
          id="distanceDiv"
          name="distanceDiv"
          onChange={(ev) => setDistanceDiv(ev.target.value)}
        />
        <GenericInput
          units="Hrs"
          value={timerDiv}
          label="Tiempo"
          placeholder="Ingresa el tiempo"
          id="timerDiv"
          onChange={(ev) => setTimerDiv(ev.target.value)}
          name="timerDiv"
        />
        {/*De esta manera mostramos el error, si existe ese valor damos esto */}
        {error && <p className="error">Vuelve a intentarlo</p>}
        {/*Componente que se explica en su archivo, pero le damos el clean que es empezar de 0 */}
        <ButtonsSubmit result={velocitDiv} cleanUp={clean} unit="V" />
      </form>
      {/* damos su imagen */}
      <div className="md">
        <img className="img-count" src="/v-d-t-division.webp" />
      </div>
    </>
  );
}
