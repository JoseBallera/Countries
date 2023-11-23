import styles from "./Form.module.css";
import { useState} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Filter from "../../components/filter/Filter";


const Form = () => {
  
  const [values, setValues] = useState({
    Nombre: "",
    Dificultad: 1,
    Duracion: 1,
    Temporada: "",
    countries: [],
  });
  //const [successMessage, setSuccessMessage] = useState(null);

  const countryNames = useSelector((state) =>
    state.countries.map((country) => country.Nombre)
  );

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelectChange = (event) => {
    setValues({
      ...values,
      countries: Array.from(
        event.target.selectedOptions,
        (option) => option.value
      ),
    });
  };

  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validations
    if (!values.Nombre || /[^a-zA-Z ]/.test(values.Nombre)) {
      alert(
        "El nombre de la actividad es obligatorio y no puede contener números."
      );
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/activity",
        values
      );

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
      navigate('/home');
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
    <div className={styles.container}>
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
            min="0"
            name="Duracion"
            value={values.Duracion}
            onChange={handleChange}
          />
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
        </label>
        
        <button type="submit" className={styles.button}>
          Crear actividad turística
        </button>
      </form>
    </div>
  );
};

export default Form;
