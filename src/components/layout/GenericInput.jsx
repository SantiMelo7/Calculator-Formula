// componente para mostrar los inputs
// esto se hace para evitar repetir code
export function GenericInput({
  // damos las props que el input necesita
  // y damos por defecto el type como tel (recibe solo numeros)
  label,
  type = "tel",
  value,
  onChange,
  id,
  name,
  disabled,
  placeholder,
  units,
}) {
  return (
    <>
      {/*damos el label asociado al input */}
      <label>
        {label}
        {/*Damos el input y sus valores */}
        <div className="unist-form">
          <input
            placeholder={placeholder}
            autoComplete="on"
            type={type}
            value={value}
            onChange={onChange}
            id={id}
            name={name}
            disabled={disabled}
          />
          <div className="unist-form-responsive">
            <span>{units}</span>
          </div>
        </div>
      </label>
    </>
  );
}
