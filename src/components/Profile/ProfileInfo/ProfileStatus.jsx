import Preloader from "../../common/Preloader/Preloader"
import s from "./ProfileInfo.module.css"
import userImg from '../../../assets/images/userImg.png'
import React from "react"

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: 'title'
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })

        // this.state.editMode = true
        // this.forceUpdate() // do not to use!!
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })

    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode} >{this.props.status} </span>
                    </div >
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
                    </div >
                }

            </div>

        )
    }

}

export default ProfileStatus