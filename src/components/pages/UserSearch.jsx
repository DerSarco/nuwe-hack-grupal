import React from 'react'
import BarraSuperior from '../objects/UserSearch/BarraSuperior'
import GithubUserForm from '../objects/UserSearch/GithubUserForm'
import SearchForm from '../objects/UserSearch/SearchForm'
import UsuarioSeleccionado from '../objects/UserSearch/UsuarioSeleccionado'


const userSearch = props => {
    return (
        <>
          <BarraSuperior>
            <GithubUserForm/>
          </BarraSuperior>
          <UsuarioSeleccionado/>
          <SearchForm/>
        </>

    )
};

export default userSearch;
