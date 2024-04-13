import { useState } from "react";

export function useVelocidadDistanciaEntreTiempo() {

    // damos el estado del valor de la distancia
    const [distanceDiv, setDistanceDiv] = useState("");
    // damos el estado del valor de la tiempo
    const [timerDiv, setTimerDiv] = useState("");
    // damos el estado del valor de la velocidad
    const [velocitDiv, setVelocitDiv] = useState("");
    // damos el estado del valor de la error
    const [error, setError] = useState(null);
    // formula
    const formulaDistanciaEntreTiempoDivisión = (ev) => {
        // prevenimos el submit
        ev.preventDefault();
        // almacenamos los numeros para hacer la formula
        const num1 = parseFloat(distanceDiv);
        const num2 = parseFloat(timerDiv);
        // si los valores no son Nan osea no existen
        if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
            // hacemos la division del num1 y num2
            const v = num1 / num2;
            setVelocitDiv(v.toFixed(2)); // Redondeamos a 2 decimales
            setError(null)
        } else {
            //mostramos el error
            setError("Error: Por favor ingresa valores válidos");
        }
    };
    // eliminar todo de golpe
    const clean = () => {
        setDistanceDiv("");
        setTimerDiv("");
        setVelocitDiv("");
        setError("");
    };

    return { distanceDiv, setDistanceDiv, timerDiv, setTimerDiv, velocitDiv, error, formulaDistanciaEntreTiempoDivisión, clean }
}

export function useVelocidadDistanciaPorTiempo() {
    // damos 2 estados que son los que necesitan la formula (velocidad y tiempo)
    const [velocity, setVelocity] = useState("");
    const [timer, setTimer] = useState("");
    // damos el estado del valor del result
    const [result, setResult] = useState("");
    // damos el estado del valor del error
    const [error, setError] = useState("");

    // formula, damos el ev
    const formulaDistanciaEntreTiempoMultiplicación = (ev) => {
        // damos el  ev.preventDefault(); esto es para que cuando haga click en calcular
        // no se renderize la pagina
        ev.preventDefault();
        // recojemos ambos valores y los parseamos
        const num1 = parseFloat(velocity);
        const num2 = parseFloat(timer);

        // si los numeros son diferentes a nan osea que si hay numero
        // y el 2 es diferente a 0
        if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
            // sera multiplicar velocidad por resultado
            const v = num1 * num2;
            // resultado
            setResult(v.toFixed(2)); // Redondeamos a 2 decimales
            setError(null)
        } else {
            //mostramos el error
            setError("Error: Por favor ingresa valores válidos");
        }
    };

    // empezar de 0
    const clean = () => {
        setVelocity("");
        setTimer("");
        setResult("");
        setError("")
    };
    // retornamos los valores que ocupamos
    return { velocity, setVelocity, timer, setTimer, result, error, formulaDistanciaEntreTiempoMultiplicación, clean }
}

export function useLeyDeOhm() {
    // damos 3 estados que necesita la formula (voltage, corriente y resistencia)
    const [voltage, setVoltage] = useState("");
    const [corriente, setCorriente] = useState("");
    const [resistencia, setResistencia] = useState("");
    // damos el estado del valor del resultado
    const [resultado, setResultado] = useState("");
    // damos el estado del valor del error
    const [error, setError] = useState("");

    // formula, damos el ev
    const calcularResultado = (ev) => {
        // damos el  ev.preventDefault(); esto es para que cuando haga click en calcular
        // no se renderize la pagina
        ev.preventDefault();
        // si por ejemplo estan presentes los 3 valores esto fallara y hara un return osea nada
        // esto porque la formula se supone que siempre sabe 2 valores y hay uno que hay que encontrar
        if (voltage !== "" && corriente !== "" && resistencia !== "") {
            setResultado("Solo puedes ingresar dos valores");
            return;
        }
        // si no hay voltaje la forma de hacerlo
        // es multiplicar corriente * resistencia
        if (voltage === "") {
            const resultOperacionVoltage =
                parseFloat(corriente) * parseFloat(resistencia);
            setResultado(resultOperacionVoltage.toFixed(2));
            setError(null)
            // si no hay resistencia la forma de hacerlo
            // es multiplicar voltage * corriente
        } else if (resistencia === "") {
            const resultOperacionResistencia =
                parseFloat(voltage) / parseFloat(corriente);
            setResultado(resultOperacionResistencia.toFixed(2));
            setError(null)
            // si no hay corriente la forma de hacerlo
            // es multiplicar voltage * resistencia
        } else if (corriente === "") {
            const resultOperacionCorriente =
                parseFloat(voltage) / parseFloat(resistencia);
            setResultado(resultOperacionCorriente.toFixed(2));
            setError(null)
            // si falla todo esque no hay dos valores
        } else {
            setError("Debes de dar al menos dos valores");
        }
    };

    const clean = () => {
        setCorriente("")
        setResistencia("")
        setVoltage("")
    }
    // retornamos los valores que ocupamos
    return {
        voltage, setVoltage, corriente, clean, setCorriente, resistencia, setResistencia, resultado, error, calcularResultado
    }
}

export function useLeyDeCoulomb() {
    // damos 3 estados que necesita la formula (carga1, carga2 y distancia)
    const [carga1, setCarga1] = useState("");
    const [carga2, setCarga2] = useState("");
    const [distanceCoulomb, setDistanceCoulomb] = useState("");

    // damos el estado del valor del resultado
    const [resultado, setResultado] = useState("");

    // damos el estado del valor del error
    const [error, setError] = useState("");

    const calcularResultado = (ev) => {
        ev.preventDefault();
        const k = 8.9875 * Math.pow(10, 9); // Constante de Coulomb en N m^2/C^2
        const q1 = parseFloat(carga1);
        const q2 = parseFloat(carga2);
        const r = parseFloat(distanceCoulomb);

        if (!isNaN(q1) && !isNaN(q2) && !isNaN(r) && r !== 0) {
            const resultado = (k * (q1 * q2)) / Math.pow(r, 2);
            setResultado(resultado.toFixed(0)); // Redondear a 2 decimales
        } else {
            setError("Error: Por favor ingresa valores válidos");
        }
    };

    // empezar de 0
    const clean = () => {
        setCarga1("");
        setCarga2("");
        setDistanceCoulomb("")
    };
    // retornamos los valores que ocupamos
    return {
        carga1, setCarga1, carga2, setCarga2,
        resultado, distanceCoulomb, setDistanceCoulomb, calcularResultado, clean, error
    }
}

export function useLeydeKirchhoff() {
    // voltages es un estado donde recibe un array
    // y cada uno tendra un objeto que tendra su valor(numero) y su valor ya sea + o -
    const [voltages, setVoltages] = useState([{ value: "", polarity: "+" }]);

    // damos el estado del valor del error
    const [errorMessage, setErrorMessage] = useState("");

    // damos el estado del valor del resultado
    const [totalVoltage, setTotalVoltage] = useState(null);

    // agregar voltage
    const addVoltage = () => {
        // es dar el 2 valor del state, dar un array, el ... es la copia de los voltages y tendra que poner su valor y si es
        // + o -
        setVoltages([...voltages, { value: "", polarity: "+" }]);
        setErrorMessage(""); // Limpiar mensaje de error al agregar un nuevo voltaje
    };

    // change de la entrada, tiene como argumento, el index, field y value
    const handleChange = (index, field, value) => {
        // copia de voltages en array
        const updatedVoltages = [...voltages];
        // actualizamos el voltage con su index y field y es igual al value
        updatedVoltages[index][field] = value;
        // el segundo estado es esa actualizacion
        setVoltages(updatedVoltages);
    };

    // calcular
    const calculateVoltageSum = (e) => {
        // damos el  ev.preventDefault(); esto es para que cuando haga click en calcular
        // no se renderize la pagina
        e.preventDefault();

        // la suma empieza por 0
        let sum = 0;

        for (const voltage of voltages) {
            // recojemos el valor del usuario
            const value = parseFloat(voltage.value);
            // si es nan del valor esque no ingreso ni un valor
            if (isNaN(value)) {
                setErrorMessage(
                    "Por favor, ingresa un valor numérico para cada voltaje."
                );
                setTotalVoltage(null);
                return;
            }

            // decimos que la suma agregue += el valor de sin es `+ o -`
            // y si eso es igual a + damos el valor positivo y si no valor negativo
            sum += voltage.polarity === "+" ? value : -value;
        }

        // no hay error
        setErrorMessage("");
        // el voltage es la sum
        setTotalVoltage(sum);
    };

    // empezar de 0
    const clean = () => {
        window.location.reload()
        setErrorMessage("")
        setTotalVoltage("")
    }
    // retornamos los valores que ocupamos
    return { voltages, setVoltages, clean, handleChange, addVoltage, errorMessage, setErrorMessage, totalVoltage, calculateVoltageSum }
}