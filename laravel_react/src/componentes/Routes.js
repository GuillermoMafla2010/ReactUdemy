import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Estudiantes from "./Estudiantes";
import Vista from "./Vista";
import axios from "axios";
import Formulario from "./Formulario";
import Editar from "./Editar";
import Pagination from "react-js-pagination";
import MostrarTodo from "./MostrarTodo";
import Footer from "./Footer";
import Factura from './Factura';
import Login from './Login';
import Auth from './Auth';


const valor=JSON.parse(localStorage.getItem('key'));


class Routes extends Component {
    state = {
        estudiantes: [],
        paises: [],
         activePage: 1,
         itemsCountPerPage: 1,
        totalItemsCount: 1,
     pageRangeDisplayed: 3
    };

    handlePageChange = this.handlePageChange.bind(this);
    componentWillMount() {
        
    }
    datosstorage=()=>{
        const valor=JSON.parse(localStorage.getItem('key'));
        if(!valor) return null;
        let config={
          headers:{
            'Authorization': 'Bearer ' + valor.auth_token
          }
        }
        return (valor ,config);
      }
    obtenerEstudiantes = datos => {
        axios
            .get("http://localhost:81/apirest_php/apirestfull/public/api/estudiantes")
            .then(respuesta =>
                //console.log(respuesta.data)
                this.setState({
                    estudiantes: respuesta.data.data,
                    // itemsCountPerPage: respuesta.data.per_page,
                    // totalItemsCount: respuesta.data.total,
                    // activePage: respuesta.data.current_page
                })
            );

        console.log(this.state.estudiantes);
    };

     handlePageChange(pageNumber) {
         console.log(`active page is ${pageNumber}`);
         axios
             .get(
                 `http://localhost:81/apirest_php/apirestfull/public/api/estudiantes?page=${pageNumber}`
             )
             .then(respuesta => {
                 console.log(respuesta);
                 this.setState({
                    estudiantes: respuesta.data.data,
                     itemsCountPerPage: respuesta.data.per_page,
                     totalItemsCount: respuesta.data.total,
                     activePage: respuesta.data.current_page
                 });
             });
     }

    editarEstudiante = datos => {
        console.log(datos);
        axios
            .put(
                `http://192.168.100.54:81/apirest_php/apirestfull/public/api/estudiantes/${
                datos.id
                }`,
                datos
            )
            .then(respuesta => {
                if (respuesta.status === 200) {
                    this.obtenerEstudiantes();
                    this.setState({
                        itemsCountPerPage: respuesta.data.per_page,
                     totalItemsCount: respuesta.data.total,
                     activePage: respuesta.data.current_page
                    })
                }
            });
    };

    eliminar = id => {
        axios
            .delete(
                `http://192.168.100.54:81/apirest_php/apirestfull/public/api/estudiantes/${id}`
            )
            .then(respuesta => {
                if (respuesta.status === 200) {
                    const estudiantes_antiguos = [...this.state.estudiantes];
                    let resultado = estudiantes_antiguos.filter(
                        eliminar => eliminar.id !== id
                    );
                    this.setState({
                        estudiantes: resultado
                    });
                }
            });
    };

    leerFormulario = datos => {
        
        let formData = new FormData();
        formData.append("nombre", datos.nombre); //en comillas el nombre del registro en la base de datos y datos.nombre el valor del formulario
        formData.append("foto", datos.foto);
        formData.append("apellido", datos.apellido);
        formData.append("edad", datos.edad);
        formData.append("fecha_nacimiento", datos.fecha_nacimiento);
        formData.append("email", datos.email);
        formData.append("paises_id",datos.paises_id);
        
        const headers = {
              "Content-Type": "multipart/form-data",
              "Authorization":`Bearer ${valor.auth_token}` 
        };
        axios
            .post(
                "http://192.168.100.54:81/apirest_php/apirestfull/public/api/estudiantes",
                formData,
               {headers:headers}
                
            )
            .then(respuesta => {
                if (respuesta.status === 201) {
                    let id = { id: respuesta.data.id };
                    const objeto = Object.assign({}, id, respuesta.data.datos);

                    this.setState(prevState => ({
                        estudiantes: [...prevState.estudiantes, objeto]
                    }));
                }
                this.obtenerEstudiantes();
            })

            .catch(function (error) {
                console.log(error);
            });
    };


    datosfactura=(e)=>{
        axios.post(`http://192.168.100.54:81/apirest_php/apirestfull/public/api/facturas`,e).then(
            respuesta=> this.obtenerEstudiantes()
        )

    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <BrowserRouter>
                    <Header />
                    <Auth/>
                        <Switch>
                            {/* <Route
                                exact
                                path="/"
                                render={() => (
                                    <Estudiantes
                                        lista={this.state.estudiantes}
                                        eliminar={this.eliminar}
                                        paises={this.state.paises}
                                    />
                                )}
                            /> */}

                            
                            <Route
                                exact
                                path="/ver/:id"
                                render={props => {
                                    let idPost = props.location.pathname.replace("/ver/", "");
                                    const posts = this.state.estudiantes;
                                    let filtro;
                                    filtro = posts.filter(post => post.id === Number(idPost));

                                    return <Vista estudiante_id={filtro[0]} />;
                                }}
                            />

                            <Route
                                exact
                                path="/formulario"
                                render={() => (
                                    <Formulario
                                        leerFormulario={this.leerFormulario}
                                        paises={this.state.paises}
                                    />
                                )}
                            />

                            <Route exact path="/login" component={Login}/>
                            <Route
                                exact
                                path="/editar/:id"
                                render={props => {
                                    let idPost = props.location.pathname.replace("/editar/", "");
                                    const posts = this.state.estudiantes;
                                    let filtro;
                                    filtro = posts.filter(post => post.id === Number(idPost));

                                    return (
                                        <Editar
                                            estudiante_id={filtro[0]}
                                            editarFormulario={this.editarEstudiante}
                                        />
                                    );
                                }}
                            />


<Route
                                exact
                                path="/facturas/:id"
                                render={props => {
                                    let idPost = props.location.pathname.replace("/facturas/", "");
                                    const posts = this.state.estudiantes;
                                    let filtro;
                                    filtro = posts.filter(post => post.id === Number(idPost));

                                    return (
                                        <Factura
                                            estudiante_id={filtro[0]}
                                            datosfactura={this.datosfactura}
                                        />
                                    );
                                }}
                            />

                            

                        
                            <Route exact path="/" component={MostrarTodo} />
                        </Switch>
                    </BrowserRouter>

                    {/* <div class="d-flex justify-content-center mt-2">
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.itemsCountPerPage}
                            totalItemsCount={this.state.totalItemsCount}
                            pageRangeDisplayed={this.state.pageRangeDisplayed}
                            onChange={this.handlePageChange}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    </div> */}
                </div>

                
            </React.Fragment>
        );
    }
}

export default Routes;
