import styles from './Form.module.css';
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Filter from '../../components/filter/Filter'

const Form = () => {
  const [values, setValues] = useState({
    Nombre: "",
    Dificultad: "",
    Duracion: "",
    Temporada: "",
    countries: [],
  });
  const [successMessage, setSuccessMessage] = useState(null);

  const countryNames = useSelector(state => state.countries.map(country => country.Nombre))
  
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelectChange = (event) => {
    setValues({
      ...values,
      countries: Array.from(event.target.selectedOptions, option => option.value)
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validaciones
    if (!values.Nombre || /[^a-zA-Z ]/.test(values.Nombre)) {
      alert('El nombre de la actividad es obligatorio y no puede contener números.');
      return;
    }

    if (!values.Dificultad || values.Dificultad < 1 || values.Dificultad > 5) {
      alert('La dificultad es obligatoria y debe ser un número del 1 al 5.');
      return;
    }

    if (values.Duracion && values.Duracion < 0) {
      alert('La duración no puede ser negativa.');
      return;
    }

    if (!values.Temporada || !['Verano', 'Otoño', 'Invierno', 'Primavera'].includes(values.Temporada)) {
      alert('La temporada es obligatoria y debe ser Verano, Otoño, Invierno o Primavera.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/activity', values);
      console.log(response.data); // la nueva actividad turística creada

      // Crear un mensaje de éxito con las características de la nueva actividad
      const successMessage = `Se ha creado una nueva actividad turística con las siguientes características:
        - ID: ${response.data.ID}
        - Nombre: ${response.data.Nombre}
        - Dificultad: ${response.data.Dificultad}
        - Duración: ${response.data.Duracion}
        - Temporada: ${response.data.Temporada}
        - Países: ${values.countries.join(', ')}
      `;
      setSuccessMessage(successMessage);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
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
        Duración:
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
          <option value="">--Por favor selecciona una temporada--</option>
          <option value="Verano">Verano</option>
          <option value="Otoño">Otoño</option>
          <option value="Invierno">Invierno</option>
          <option value="Primavera">Primavera</option>
        </select>
      </label>
      Continente:
      <Filter/>
      <label>
        Países:
        <select
          name="countries"
          multiple
          value={values.countries}
          onChange={handleSelectChange}
        >
            {countryNames.map(name => (
    <option key={name} value={name}>{name}</option>
  ))}
   
        </select>
      </label>
        <button type="submit" className={styles.button}>Crear actividad turística</button>
      </form>
      {successMessage && <div>{successMessage}</div>}
    </div>
  );
};

export default Form;



