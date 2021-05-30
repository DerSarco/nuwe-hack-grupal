import React from 'react'
import BarraSuperior from '../objects/UserSearch/BarraSuperior'
import SearchForm from '../objects/UserSearch/SearchForm'

const userSearch = props => {
    return (
        <div style={{ heigth: '1000vh'}}>
          <BarraSuperior/>
          <SearchForm/>
        </div>
    )
}

export default userSearch
