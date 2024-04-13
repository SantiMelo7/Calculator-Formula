import { Container } from "../../components/layout/Container";
import { CalculadoraContent } from "../../components/fisica/CalculadoraContent";
import { FormMultiplicacion } from "../../components/fisica/FormMultiplicacion";
import { FormDivision } from "../../components/fisica/FormDivision";

export function FisicaPageHome() {
  return (
    <Container>
      <div className="container-content">
        <h1 className="title-count">Horas A Minutos</h1>
        {/*Damos el componte de la calculadora que es para evitar repetir un codigo */}
        <div className="content-center">
          {/*damos la imagen que esta en la carpeta public */}
          <CalculadoraContent srcImage="/hours-and-minutes.webp" />
        </div>
        <h1 className="title-count">Días A Segundos</h1>
        <div className="content-center">
          <CalculadoraContent srcImage="/days-and-seconds.webp" />
        </div>
        <h1 className="title-count">Velocidad Distancia Entre Tiempo</h1>
        <div className="content-center">
          <FormDivision />
        </div>
        <h1 className="title-count">Distancia Velocidad Por Tiempo</h1>
        <div className="content-center">
          <FormMultiplicacion />
        </div>
      </div>
    </Container>
  );
}
