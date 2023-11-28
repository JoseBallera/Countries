// Validación para el campo "Nombre"
export const validateNombre = (value) => {
    if (value.trim() === "") {
      return "El nombre de la actividad es obligatorio.";
    }
  
    if (/[^a-zA-Z ]/.test(value)) {
      return "El nombre de la actividad no puede contener números ni símbolos.";
    }
  
    return "";
  };
  
  // Validación para el campo "Temporada"
export const validateTemporada = (value) => {
    if (value === "") {
      return "Debes seleccionar una temporada.";
    }
  
    return "";
  };
  
  // Validación para el campo "Duración"
export const validateDuracion = (value) => {
    if (value > 24) {
      return "La duración no puede ser mayor a 24 horas.";
    }
  
    return "";
  };
  
  export const validatePaises = (value) => {
    if (value.length === 0) {
      return "Debes seleccionar al menos un país.";
    }
  
    return "";
  }