import React from 'react'
import BarraSuperior from '../objects/UserSearch/BarraSuperior'
import SearchForm from '../objects/UserSearch/SearchForm'
import { GithubUserProvider } from '../context/githubUserContext'

const userSearch = props => {
    return (
        <GithubUserProvider>
          <BarraSuperior/>
          <SearchForm/>
        </GithubUserProvider>
    )
};

export default userSearch;
