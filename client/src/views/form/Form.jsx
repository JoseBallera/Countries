import { useState } from "react";
import axios from "axios";
const FormPage = () => {
  const [values, setValues] = useState({
    ID: "",
    Nombre: "",
    Descripcion: "",
    Plataformas: "",
    Imagen: "",
    Fecha_de_lanzamiento: "",
    Rating: "",
    Generos: [],
  });
  const [errors, setErrors] = useState({
    ID: "",
    Nombre: "",
    Descripcion: "",
    Plataformas: "",
    Imagen: "",
    Fecha_de_lanzamiento: "",
    Rating: "",
    Generos: [],
  });

  const handleChange = (event) => {

    validate({
      ...values,
      [event.target.name]: event.target.value,
    })
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSelectChange = (event) => {
    setValues({
      ...values,
      Generos: Array.from(event.target.selectedOptions, option => option.value)
    });
  };
  
  const validate = (values) => {

   if (/[^a-zA-Z0-9 ]/.test(values.Nombre)) {
      setErrors({...errors, nombre:''})
    }

    if (values.Rating < 0 || values.Rating > 5) {
      alert('El rating debe estar entre 0 y 5');
      return;
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values);
    try {
      const response = await axios.post('http://localhost:3001/videogames', values);
      console.log(response.data); // el nuevo videojuego creado
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="Nombre"
          value={values.Nombre}
          onChange={handleChange}
        />
      </label>
      <label>
        Imagen:
        <input
          type="text"
          name="Imagen"
          value={values.Imagen}
          onChange={handleChange}
        />
      </label>
      <label>
        Descripción:
        <textarea
          name="Descripcion"
          value={values.Descripcion}
          onChange={handleChange}
        />
      </label>
      <label>
        Plataformas:
        <input
          type="text"
          name="Plataformas"
          value={values.Plataformas}
          onChange={handleChange}
        />
      </label>
      <label>
        Fecha de lanzamiento:
        <input
          type="date"
          name="Fecha_de_lanzamiento"
          value={values.Fecha_de_lanzamiento}
          onChange={handleChange}
        />
      </label>
      <label>
        Rating:
        <input
          type="number"
          name="Rating"
          value={values.Rating}
          onChange={handleChange}
        />
      </label>
      <label>
        Géneros:
        <select
          name="Generos"
          multiple
          value={values.Generos}
          onChange={handleSelectChange}
        >
          <option value="Action">Accion</option>
          <option value="Indie">Indie</option>
          <option value="Adventure">Aventura</option>
          <option value="RPG">RPG</option>
          <option value="Strategy">Estrategia</option>
          <option value="Shooter">Shooter</option>
          <option value="Casual">Casual</option>
          <option value="Simulation">Simulacion</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Arcade">Arcade</option>
          <option value="Platformer">Plataformer</option>
          <option value="Massively Multiplayer">MMO</option>
          <option value="Racing">Carrera</option>
          <option value="Sports">Deportes</option>
          <option value="Fighting">Lucha</option>
          <option value="Family">Familia</option>
          <option value="Board Games">Juegos de mesa</option>
          <option value="Educational">Educacion</option>
          <option value="Card">Cartas</option>
        </select>
      </label>
      <button type="submit">Crear videojuego</button>
    </form>
  );
};

export default FormPage;
