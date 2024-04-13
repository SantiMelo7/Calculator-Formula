import { Container } from "../../components/layout/Container";
import { LeyDeCoulomb } from "../../components/elec-and-mag/LeyDeCoulomb";
import { LeyDeKirchhoff } from "../../components/elec-and-mag/LeyDeKirchhoff";
import { LeyDeOhm } from "../../components/elec-and-mag/LeyDeOhm";

export function ElecAndMagPage() {
  return (
    <Container>
      <div className="container-content">
        <h1 className="title-home">Ley De Coulomb</h1>
        <div className="content-center">
          <LeyDeCoulomb />
        </div>
        <h1 className="title-home">Ley de Ohm</h1>
        <div className="content-center">
          <LeyDeOhm />
        </div>
        <h1 className="title-home">Ley De Kirchhoff</h1>
        <LeyDeKirchhoff />
      </div>
    </Container>
  );
}
