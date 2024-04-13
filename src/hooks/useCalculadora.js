import { useEffect, useRef, useState } from 'react';

// damos un arreglo donde vamos a manejar las operaciones de la calculadora
const OPERACIONES = {
    suma: '+',
    resta: '-',
    multiplicación: 'x',
    division: '/',
}

export const useCalculadora = () => {

    // el state se entiendo como todo lo que interfaz de usuario mostrara
    // Damos un estado llamado formula
    const [formula, setFormula] = useState('');
    // Damos un estado llamado number

    const [number, setNumber] = useState('0');
    // Damos un estado llamado prevNumber (previsualizacion de el numero seleccionado)

    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef();

    // damos un efecto
    useEffect(() => {
        if (lastOperation.current) {
            // damos que el primer estado de formula osea el que se reflega en la interfaz
            // damos el metodo de split que se entiendo como por ejemplo
            // 1 (espacio) 2 y el at que se refiere a devuelve el valor del numero
            // en una misma posicion que es 0
            const firstFormulaPart = formula.split(' ').at(0);
            // y el resultado como son 3 valores, hacemos la
            // concatenacion de el valor de la primer formula o numero
            // la operacion y el numero que sigue
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);

            // si falla la validacion, damos el numero como tal
        } else {
            setFormula(number);
        }
        // damos como dependecia el number
        // que lo que hara esque cada que se agregue un numero, hara esa validacion
    }, [number]);

    // otro efecto
    useEffect(() => {
        // el sub result que es algo muy comun en las calculadoras
        // damos como prev la funcion de calcular todo el sub de las operaciones
        const subResult = calcularResultadoSub();
        // el segundo estado de la intefaz es ese resultado
        setPrevNumber(`${subResult}`);
    }, [formula])

    // boton de eliminar todo lo añadido en la calculadora
    // es simplemente que todos los segundo estados de la interfaz
    // sean una cadena vacia ("") y la operacion undefined (no existe valor)
    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        lastOperation.current = undefined;
        setFormula('');
    };


    // eliminar operacion uno a uno
    const deleteOperation = () => {
        // damos un let del current
        let currentSign = '';
        // let de el numero de opcion que es igual al number que pone el usuario
        let temporalNumber = number;

        // si el numero incluye  "-"
        if (number.includes('-')) {
            // el valor de current es -
            currentSign = '-';
            // y el numero opacional hara el substring en 1, osea
            temporalNumber = number.substring(1); // 88
        }

        // si el numero opcional en su totalidad es mayor a 1
        if (temporalNumber.length > 1) {
            // retornamos el segundo estado de la interfaz y damos el current mas el numero
            // opcional y damos el slice, que es un metodo que por ejemplo
            // tienes 1,2,3,4,5,6,7 si le dices al slice
            // quiero solo 2 posiciones, solo mostrara el 1,2
            // en este caso damos 0 posicion, -1 que empezara desde el final
            // mismo ejemplo
            // 1,2,3,4,5,6,7
            // ahora con el 0,-1 es 7,6
            return setNumber(currentSign + temporalNumber.slice(0, -1));
        }
        // el valor del number ("0")
        setNumber('0');
    };


    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''));
        }

        setNumber('-' + number);
    };


    const buildNumber = (numberString) => {

        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {

            // Punto decimal
            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            // Evaluar si es otro cero y no hay punto
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            // Evaluar si es diferente de cero, no hay punto, y es el primer numero
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            // Evitar 000000.00
            if (numberString === '0' && !number.includes('.')) {
                return;
            }

            return setNumber(number + numberString);
        }

        setNumber(number + numberString);
    };

    const setLastNumber = () => {
        calcularResultado();

        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        } else {
            setPrevNumber(number);
        }

        setNumber('0');
    };

    // Aqui damos constantes de las operacions de cada una basandonos en el setLastNumber
    const divisionOperación = () => {
        setLastNumber();
        lastOperation.current = OPERACIONES.division;
    };

    const multiplicaciónOperación = () => {
        setLastNumber();
        lastOperation.current = OPERACIONES.multiplicación;
    };

    const restaOperación = () => {
        setLastNumber();
        lastOperation.current = OPERACIONES.resta;
    };

    const sumaOperación = () => {
        setLastNumber();
        lastOperation.current = OPERACIONES.suma;
    };
    /****************************************************** */


    // calcular el resultado
    const calcularResultado = () => {
        // el resultado es igual a la funcion del calcularResultadoSub
        const result = calcularResultadoSub();
        // la formula es el result
        setFormula(`${result}`);
        // lo demas no existe
        lastOperation.current = undefined;
        setPrevNumber('0');
    };

    const calcularResultadoSub = () => {
        // array de el num 1, operacion y el num 2, esto sera la formula
        // y por valor hara tipo 1 (split) + (split) 2
        const [firstValue, operation, secondValue] = formula.split(' ');
        // almacenamos los dos numeros y lo parseamos
        const num1 = Number(firstValue);
        const num2 = Number(secondValue); //NaN
        // si es nan no retorna nada
        if (isNaN(num2)) return num1;
        // casos de dependiendo la operacion, hara el {+,-,*,/}
        switch (operation) {
            case OPERACIONES.suma:
                return num1 + num2;

            case OPERACIONES.resta:
                return num1 - num2;

            case OPERACIONES.multiplicación:
                return num1 * num2;

            case OPERACIONES.division:
                return num1 / num2;

            default:
                throw new Error('Operation not implemented');
        }

    };



    // retornamos los valores para poder utilizarlos
    return {
        number, formula, prevNumber, clean, buildNumber, toggleSign,
        deleteOperation, sumaOperación, restaOperación, multiplicaciónOperación, divisionOperación, calcularResultado
    }
}