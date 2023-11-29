import styles from "./Form.module.css";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Filter from "../../components/filter/Filter";
import { validateNombre, validateTemporada, validateDuracion, validatePaises } from "./Validations"


const Form = () => {
  const [values, setValues] = useState({
    Nombre: "",
    Dificultad: 1,
    Duracion: 1,
    Temporada: "",
    countries: [],
  });

  const countryNames = useSelector((state) =>
    state.countries.map((country) => country.Nombre)
  );
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    setValues({...values, [name]: value, });
  
    let newErrors = {
      ...errors,
      Nombre: validateNombre(values.Nombre),
      Temporada: validateTemporada(values.Temporada),
      Duracion: validateDuracion(values.Duracion),
      countries: validatePaises(values.countries),
    };
  
    setErrors(newErrors);
  };
  
  const handleSelectChange = (event) => {
    const selectedCountries = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
  
    setValues({...values, countries: selectedCountries,});
  
    let newErrors = {
      ...errors,
      Nombre: validateNombre(values.Nombre),
      Temporada: validateTemporada(values.Temporada),
      Duracion: validateDuracion(values.Duracion),
      countries: validatePaises(selectedCountries),
    };
  
    setErrors(newErrors);
  };
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Verificar si hay errores antes de enviar el formulario
    if (Object.values(errors).some((error) => error !== '')) {
      alert("Por favor, corrige los errores antes de enviar el formulario.");
      return;
    }

    try {
     await axios.post("http://localhost:3001/activity",values);

      // Crear un mensaje de éxito con las características de la nueva actividad
      const successMessage = `Se ha creado una nueva actividad turística con las siguientes características:
        - Nombre: ${values.Nombre}
        - Dificultad: ${values.Dificultad}
        - Duración: ${values.Duracion}
        - Temporada: ${values.Temporada}
        - Países: ${values.countries.join(", ")}
      `;
      alert(successMessage);

      setValues({
        Nombre: "",
        Dificultad: "",
        Duracion: "",
        Temporada: "",
        countries: [],
      });
      navigate("/home");
    } catch (error) {
      // There was an error with the request
      if (error.response && error.response.data) {
        // The server returned an error response
        alert("Ya existe una actividad con este nombre.");
      } else {
        // Other errors (network error, etc.)
        console.error(error);
      }
    }
  };

  return (
    <div className={styles.formulario}>
      <div className={styles.container}>
        <h1>Crear Actividad Turística</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Nombre:
            <input
              type="text"
              name="Nombre"
              value={values.Nombre}
              onChange={handleChange}
              required
            />
            {errors.Nombre && <p className={styles.error}>{errors.Nombre}</p>}
          </label>
          <label>
            Dificultad:
            <input
              type="number"
              min="1"
              max="5"
              name="Dificultad"
              value={values.Dificultad}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Duración (Hrs):
            <input
              type="number"
              min="1"
              max="24"
              name="Duracion"
              value={values.Duracion}
              onChange={handleChange}
            />
            {errors.Duracion && (
              <p className={styles.error}>{errors.Duracion}</p>
            )}
          </label>
          <label>
            Temporada:
            <select
              name="Temporada"
              value={values.Temporada}
              onChange={handleChange}
              required
            >
              <option value="">--Selecciona una temporada--</option>
              <option value="Verano">Verano</option>
              <option value="Otoño">Otoño</option>
              <option value="Invierno">Invierno</option>
              <option value="Primavera">Primavera</option>
            </select>
            {errors.Temporada && (
              <p className={styles.error}>{errors.Temporada}</p>
            )}
          </label>
          Continente:
          <Filter />
          <label>
            Países:
            <select
              name="countries"
              multiple
              value={values.countries}
              onChange={handleSelectChange}
            >
              {countryNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
            {errors.countries && (
              <p className={styles.error}>{errors.countries}</p>
            )}
          </label>
          <button
            type="submit"
            className={styles.button}
            disabled={Object.values(errors).some((error) => error !== '')}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
