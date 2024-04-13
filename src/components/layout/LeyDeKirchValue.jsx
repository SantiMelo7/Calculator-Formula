import { useLeydeKirchhoff } from "../../hooks/useFormulas";
import { GenericInput } from "./GenericInput";

export function LeyDeKirchValue() {
  const { voltages, handleChange, addVoltage, clean } = useLeydeKirchhoff();
  return (
    <>
      {/*mapeamos los voltages, osea que se muestre si hay uno nuevo y da como argumento
          el voltage y el index
        */}
      {voltages.map((voltage, index) => (
        // recibe un index como key, que esto es como especificar que aqui
        // se va a renderizar todo
        <div key={index}>
          {/*Damos el genericInput que se explica que es en el componente mismo
              y recibe su valor (impacto que tendra)
              // label (Es una forma de decirle al usuario que va en esa entrada)
              // placeholder, una prev de lo que lleva la entrada
              // id y name es para que el valor sea lo mismo
              // onChange, hacemos que el segundo estado nos de su valor del target
              // esto es para que el usuario pueda escribir en la entrada
            */}
          <GenericInput
            name="value"
            id="value"
            value={voltage.value}
            placeholder="Ingresa un valor y su loockeand ->"
            onChange={(ev) => handleChange(index, "value", ev.target.value)}
          />
          <div className="select-value">
            {/*damos el valor de + o - que es una etiqueta de select osea que podra seleccionar una u otra */}
            <select
              value={voltage.polarity}
              onChange={(e) => handleChange(index, "polarity", e.target.value)}
            >
              <option value="+">+</option>
              <option value="-">-</option>
            </select>
          </div>
        </div>
      ))}
      <div className="container-buttons">
        <div className="delete-0-ley-de-kirchhoff">
          {/*Bootn de agregar */}
          <button type="button" onClick={addVoltage} className="submit">
            Agregar Voltaje
          </button>
        </div>
        <div className="delete-0-ley-de-kirchhoff">
          {/*Boton de calcular */}
          <button className="submit" type="submit">
            Calcular Suma
          </button>
        </div>
      </div>
      <div className="delete-0-ley-de-kirchhoff">
        {/*Boton de empezar de 0 */}
        <button className="clean" onClick={clean} type="submit">
          Empezar de 0
        </button>
      </div>
    </>
  );
}
