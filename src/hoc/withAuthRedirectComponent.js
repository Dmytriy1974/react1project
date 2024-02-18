import { useEffect } from "react"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"


const mapStateToPropsForAuthRedirectComponent = (state) => ({
  isLoggin: state.auth.isLoggin
})

export const withNavigate = (Component)=> {
    const Redirect = (props) => {
        const nav = useNavigate ()
        useEffect (() => {
          if(!props.isLoggin)
          nav('/login')
        }, [])
        return <Component {...props}/>
    }
    let ConnectedAuthRedirectComponent = connect (mapStateToPropsForAuthRedirectComponent) (Redirect)

    return ConnectedAuthRedirectComponent
  }