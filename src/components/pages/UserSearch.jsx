import React from 'react'
import BarraSuperior from '../objects/UserSearch/BarraSuperior'
import GithubUserForm from '../objects/UserSearch/GithubUserForm'
import UsuarioSeleccionado from '../objects/UserSearch/UsuarioSeleccionado'
import ReposUsuario from '../objects/UserSearch/ReposUsuario'


const userSearch = props => {
    return (
        <>
          <BarraSuperior>
            <GithubUserForm/>
          </BarraSuperior>
          <UsuarioSeleccionado/>
          <ReposUsuario/>
        </>

    )
};

export default userSearch;
