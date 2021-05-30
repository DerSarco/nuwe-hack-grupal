import React, {useState , createContext} from 'react'
import githubFetch from '../functions/fetchGithub'

export const GithubUserContext = createContext()

export const GithubUserProvider = (props) => {
  const GITHUB_USER_KEY = 'githubUser'
  const [ userData, setUserData] = useState({ })

  const localStorage = {
    getGithubUser: () => {
      try {
        return JSON.parse(window.localStorage.getItem(GITHUB_USER_KEY))
      } catch (e) {
        return false
      }
    },
      setGithubUser: userData => {
        try{
          window.localStorage.setItem(GITHUB_USER_KEY,JSON.stringify(userData))
        }catch(e){
          return false
        }
    },
  }
  const controller = {
    fetchUser: async user => {
      const data = await githubFetch.github.readUser(user) 
      const repos = await githubFetch.github.getRepos(user)
      const userData = {
        avatar_url : data.avatar_url,
        login: data.login,
        repos: repos,
      }
      setUserData(userData)
      localStorage.setGithubUser(userData)
    },
  }
  return (
    <GithubUserContext.Provider value={[ userData, controller ]}>
      {props.children}
    </GithubUserContext.Provider>
  )
}
