const textarea = document.querySelector(".recording__text-area");
const microfono = document.querySelector(".header--figure__img");
const publicaciones = document.querySelector(".main-content__publication--text");



const LEVENSHTEIN_DISTANCE = 1

const removeKeywords = (keys, text) => {
  Object.keys(keys).forEach(key => {
    text.replaceAll(key, "")
  })
}

const fontActions = {
  //Acciones para cambiar el color de la fuente en el textarea
  "rojo": () => {
    textarea.style.color = "red";
    textarea.value = textarea.value.replace("rojo", "");
  },

  "azul": () => {
    textarea.style.color = "blue";
    textarea.value = textarea.value.replace("azul", "");
  },

  "negro": () => {
    textarea.style.color = "black";
    textarea.value = textarea.value.replace("negro","")
  },
  //Acciones con el icono del microfono
  rebota: () => {
    microfono.classList.add("animate__animated","animate", "animate__bounce","animate__infinite");
  },
  salta: () => {
    microfono.classList.add("animate__animated","animate__zoomIn", "animate__infinite");
  },
  sorpresa: () => {
    microfono.classList.add("animate__animated","animate__tada", "animate__infinite");
  },
  sigilo: () => {
    microfono.classList.add("animate__animated","animate__flipOutY");
  },
  limpia: () => {
    if (microfono.classList.contains("animate__bounce")) {//Limpiar animacion rebota
      microfono.classList.remove("animate__animated","animate", "animate__bounce","animate__infinite")
    }else if (microfono.classList.contains("animate__zoomIn",)) {//Limpiar animacion salta
      microfono.classList.remove("animate__animated","animate__zoomIn", "animate__infinite")
    }else if (microfono.classList.contains("animate__tada")) {// limpiar animacion sorpresa
      microfono.classList.remove("animate__animated","animate__tada", "animate__infinite")
    }else if (microfono.classList.contains("animate__flipOutY")) { // limpiar animacion sigilo
      microfono.classList.remove("animate__animated","animate__flipOutY")
    }
  },
  Fuente: () => {
    publicaciones.style.fontFamily = "arial";
    textarea.value = textarea.value.replace("arial", "");
  },
  aumentar: () => {
    publicaciones.style.fontSize = "30px";
    textarea.value = textarea.value.replace("aumentar", "");
  },
  //Acciones para cambiar el color de fondo de las publicaciones
};

const fontHandler = {
  set(obj, prop, value) {
    const stringValue = value.split(" ");
    const keys = Object.keys(obj);

    stringValue.forEach((element) => {
      if (keys.includes(element)) {
        obj[element](value);
      }

      let suggestion = keys.find((key) => {
        return Levenshtein.get(key, value) <= LEVENSHTEIN_DISTANCE;
      });

      if (suggestion) {
        obj[suggestion](value);
      }
    });

    return true;
  },
};

export const fontProxy = () => {
  return new Proxy(fontActions, fontHandler);
};
