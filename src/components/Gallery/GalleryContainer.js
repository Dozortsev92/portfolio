import React from 'react';
import {connect} from "react-redux";
import {updateGallery} from "../../redux/gallery-redux";
import {NavLink} from "react-router-dom";
import {getAlbums} from "../api/api";


class GalleryContainer extends React.Component {
    componentDidMount() {
        getAlbums()
            .then(response => this.props.updateGallery(response.data));
    }

    render() {
        return (
            this.props.gallery.albums ?
                this.props.gallery.albums.map(album => {
                    return (
                        <div key={album.id}>
                            <NavLink to={'/gallery/' + album.id}>{album.title}</NavLink>
                        </div>
                    );
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