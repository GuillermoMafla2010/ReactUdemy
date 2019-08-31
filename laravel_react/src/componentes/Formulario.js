import React, { Component } from "react";
import axios from "axios";
import Autosuggest from "react-autosuggest";

const getSuggestionValue = suggestion => suggestion.nombre;
const renderSuggestion = suggestion => <span>{suggestion.nombre}</span>;

const theme = {
    container: {
      position: 'relative'
    },
    input: {
      width: 240,
      height: 30,
      padding: '10px 20px',
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: 300,
      fontSize: 16,
      border: '1px solid #aaa',
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
    },
    inputFocused: {
      outline: 'none'
    },
    inputOpen: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },
    suggestionsContainer: {
      display: 'none'
    },
    suggestionsContainerOpen: {
      display: 'block',
      position: 'absolute',
      top: 30,
      left:649,
      width: 240,
      border: '1px solid #aaa',
      backgroundColor: '#fff',
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: 300,
      fontSize: 16,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      zIndex: 2
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
    },
    suggestion: {
      cursor: 'pointer',
      padding: '10px 20px'
    },
    suggestionHighlighted: {
      backgroundColor: '#ddd'
    }
  };
  

  
class Formulario extends Component {
  nombre = React.createRef();
  apellido = React.createRef();
  edad = React.createRef();
  correo = React.createRef();
  fecha = React.createRef();
  foto = React.createRef();
  state = {
    paises: [],
    file: [],
    pais: [],
    value: "",
    suggestions: [],
    valueid: ""
  };

  componentDidMount() {}

  onChange = (event, { newValue }) => {
    this.setState({ value: newValue });
  };
  onSuggestionSelected = (event, { suggestion }) => {
    console.log(suggestion.id);
    this.setState({
      valueid: suggestion.id
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    axios
      .get(
        `http://192.168.100.54:81/apirest_php/apirestfull/public/api/paises/${value}`
      )
      .then(paises => {
        this.setState({
          suggestions: paises.data
        });
      });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  formulario = e => {
    e.preventDefault();

    const datos = {
      nombre: this.nombre.current.value,
      apellido: this.apellido.current.value,
      edad: this.edad.current.value,
      email: this.correo.current.value,
      fecha_nacimiento: this.fecha.current.value,
      foto: this.state.file,
      paises_id:this.state.valueid
    };

    console.log(datos)

    this.props.leerFormulario(datos);

    document.getElementById("formulario").reset();
  };
  nombres = key => {
    const { nombre, id } = this.props.paises.paises[key];
    return <option value={id}>{nombre}</option>;
  };

  provincia = key => {
    const { nombre, id } = this.props.paises.paises[0].provincias[0];
    return <option value={id}> {nombre}</option>;
  };

  fotos = e => {
    let fotoseleccionada = e.target.files[0];
    if (!fotoseleccionada) return null;

    //console.log(fotoseleccionada)

    if (fotoseleccionada.type.indexOf("image") < 0) {
      console.log("No Es foto");
      document.getElementById("valor").value = "";
      fotoseleccionada = null;
      alert("Debe seleccionar una foto");
    } else {
      console.log("es una foto");
      //console.log(fotoseleccionada)
      this.leerfile(fotoseleccionada);
    }
  };

  leerfile(e) {
    let imagen = e;
    this.setState({
      file: imagen
    });
    console.log(this.state.imagen);
  }

  vercombo = e => {
    let id = +e.target.value;
    console.log(id);

    //const posts = this.state.estudiantes;
    // let filtro;
    //            filtro = posts.filter(post =>   (

    //                 post.id === Number(idPost)

    //              )

    //             )

    let nombre = this.state.paises[id - 1].provincias.map(prov => prov.nombre);
    this.verProvincia(nombre);
  };

  verProvincia = nombre => {};

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Escoge pais",
      value,
      onChange: this.onChange.bind(this)
    };

    if (!this.props.paises) return null;
    //const pais=Object.keys(this.props.paises.paises)
    //const provincia=Object.keys(this.props.paises.paises[0].provincias[0])
    //console.log(pais)
    return (
      <div>
        <form onSubmit={this.formulario} id="formulario">
          Nombre:
          <input type="text" ref={this.nombre} />
          <br /><br />
          Apellido:
          <input type="text" ref={this.apellido} />
          <br /><br />
          Edad:
          <input type="text" ref={this.edad} />
          <br /><br />
          Fecha:
          <input type="text" ref={this.fecha} />
          <br /><br />
          Correo:
          <input type="text" ref={this.correo} />
          <br /><br />
          Foto:
          <input type="file" onChange={this.fotos} id="valor" ref={this.foto} />
          <br />
          
          <br />
          
         
          Pais:  <Autosuggest
            theme={theme}
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            onSuggestionSelected={this.onSuggestionSelected}
          />

          <br/>

          <input type="submit" value="Enivar" onClick={this.subirFoto} /> <br />    
        </form>
        
      </div>
    );
  }
}

export default Formulario;
