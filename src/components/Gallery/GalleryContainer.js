import React from 'react';
import {connect} from "react-redux";
import {updateGallery} from "../../redux/gallery-redux";
import * as axios from "axios";
import {NavLink} from "react-router-dom";


class GalleryContainer extends React.Component {
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(response => this.props.updateGallery(response.data));
    }

    render() {
        return (
            this.props.gallery.albums ?
                this.props.gallery.albums.map(album => {
                    return <div key={album.id}><NavLink to={'/gallery/' + album.id}>{album.title}</NavLink></div>
                })
                : 'no albums'
        )
    }
};

let mapStateToProps = (state) => {
    return {
        gallery: state.gallery
    };
};

export default connect(mapStateToProps, {updateGallery})(GalleryContainer);