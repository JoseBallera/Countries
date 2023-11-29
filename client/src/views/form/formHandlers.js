import { validateDuracion, validateNombre, validatePaises, validateTemporada } from "./Validations";

export const handleChange = (event, values, errors, setValues, setErrors) => {
    const { name, value } = event.target;
  
    setValues({
      ...values,
      [name]: value,
    });
  
    let newErrors = {
      ...errors,
      Nombre: validateNombre(values.Nombre),
      Temporada: validateTemporada(values.Temporada),
      Duracion: validateDuracion(values.Duracion),
      countries: validatePaises(values.countries),
    };
  
    setErrors(newErrors);
  };
  
  export const handleSelectChange = (event, values, errors, setValues, setErrors) => {

    const selectedCountries = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
  
    setValues({
      ...values,
      countries: selectedCountries,
    });
  
    let newErrors = {
      ...errors,
      Nombre: validateNombre(values.Nombre),
      Temporada: validateTemporada(values.Temporada),
      Duracion: validateDuracion(values.Duracion),
      countries: validatePaises(selectedCountries),
    };
  
    setErrors(newErrors);
  };
  