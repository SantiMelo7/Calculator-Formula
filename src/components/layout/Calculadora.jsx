import { useCalculadora } from "../../hooks/useCalculadora";
import { Button } from "./Button";

export function Calculadora() {
  // recojemos los valores que retornamos en el useCalculadora
  const {
    formula,
    buildNumber,
    deleteOperation,
    toggleSign,
    clean,
    prevNumber,
    sumaOperación,
    restaOperación,
    multiplicaciónOperación,
    divisionOperación,
    calcularResultado,
  } = useCalculadora();
  return (
    <div className="container-calculator">
      {/*mostamos el valor de la formula */}
      <h2 className="formula">{formula}</h2>
      {/* decimos si la formula es igual a el prev ? paso, mostramos cadena vacis pero si : (fallo) mostramos el prev */}
      <h4 className="prevNumber">{formula === prevNumber ? "" : prevNumber}</h4>
      <div className="content-container-calculator ">
        <div className="content-calculator">
          {/*damos los botones de la calculadora cada uno con sus respectivos valores representados en el archivo del button */}
          <Button
            onClick={clean}
            text="C"
            style={{
              background: "#2D2D2D",
            }}
          />
          <Button
            onClick={toggleSign}
            text="+/c"
            style={{
              background: "#2D2D2D",
            }}
          />
          <Button
            onClick={deleteOperation}
            text="del"
            style={{
              background: "#2D2D2D",
            }}
          />
          <Button
            onClick={divisionOperación}
            text="÷"
            style={{
              background: "#FF9427",
            }}
          />
          <Button
            style={{
              background: "#2D2D2D",
            }}
            onClick={() => buildNumber("7")}
            text="7"
          />
          <Button
            onClick={() => buildNumber("8")}
            text="8"
            style={{
              background: "#2D2D2D",
            }}
          />
          <Button
            onClick={() => buildNumber("9")}
            text="9"
            style={{
              background: "#2D2D2D",
            }}
          />
          <Button
            onClick={multiplicaciónOperación}
            text="X"
            style={{
              background: "#FF9427",
            }}
          />
          <Button
            onClick={() => buildNumber("4")}
            text="4"
            style={{
              background: "#2D2D2D",
            }}
          />
          <Button
            onClick={() => buildNumber("5")}
            text="5"
            style={{
              background: "#2D2D2D",
            }}
          />
          <Button
            onClick={() => buildNumber("6")}
            text="6"
            style={{
              background: "#2D2D2D",
            }}
          />
          <Button
            onClick={restaOperación}
            text="-"
            style={{
              background: "#FF9427",
            }}
          />
          <Button
            onClick={() => buildNumber("1")}
            text="1"
            style={{
              background: "#2D2D2D",
            }}
          />
          <Button
            onClick={() => buildNumber("2")}
            text="2"
            style={{
              background: "#2D2D2D",
            }}
          />
          <Button
            onClick={() => buildNumber("3")}
            text="3"
            style={{
              background: "#2D2D2D",
            }}
          />
          <Button
            onClick={sumaOperación}
            text="+"
            style={{
              background: "#FF9427",
            }}
          />
          <div>
            <button
              className="calculadora-button-cero"
              text="0"
              style={{
                background: "#2D2D2D",
              }}
              onClick={() => buildNumber("0")}
            >
              0
            </button>
          </div>
          <Button
            onClick={() => buildNumber(".")}
            text="."
            style={{
              background: "#FF9427",
              position: "relative",
              left: "96px",
            }}
          />
          <Button
            onClick={calcularResultado}
            text="="
            style={{
              background: "#FF9427",
              position: "relative",
              left: "96px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
