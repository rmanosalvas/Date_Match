import React, { Component } from 'react';
import API from '../../utils/API';

export default class FilesUploadComponent extends Component {
    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: ''
        }
    }

    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('avatar', this.state.profileImg)
        
        console.log("Updating the users profile");
        API.changeUserAvatar(formData )
          .then((result) => {
            console.log(result);
            window.location.reload();
          })
          .catch((err) => {});
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <form class="updateAvatar" action="/profile" method="post" enctype="multipart/form-data" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" id="avatar" type="file" name="avatar" accept="image/*" required onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}