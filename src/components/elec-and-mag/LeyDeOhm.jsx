import { GenericInput } from "../layout/GenericInput";
import { ButtonsSubmit } from "../layout/ButtonsSubmit";
import { useLeyDeOhm } from "../../hooks/useFormulas";

// Componente donde manejamos la division de la formula de LeyDeOhm
export function LeyDeOhm() {
  // damos todo lo que retornamos en el hook
  const {
    voltage,
    setVoltage,
    corriente,
    setCorriente,
    resistencia,
    setResistencia,
    resultado,
    error,
    clean,
    calcularResultado,
  } = useLeyDeOhm();
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
          value={voltage}
          label="Voltage"
          placeholder="Ingresa los voltages"
          id="voltage"
          name="voltage"
          onChange={(ev) => setVoltage(ev.target.value)}
        />
        <GenericInput
          value={corriente}
          label="Corriente"
          placeholder="Ingresa la corriente en amperios"
          id="corriente"
          name="corriente"
          onChange={(ev) => setCorriente(ev.target.value)}
        />
        <GenericInput
          value={resistencia}
          label="resisntencia"
          placeholder="Ingresa la resistencia en ohmos"
          id="resistencia"
          onChange={(ev) => setResistencia(ev.target.value)}
          name="resistencia"
        />

        {/*De esta manera mostramos el error, si existe ese valor damos esto */}
        {error && <p className="error">Vuelve a intentarlo</p>}

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
