import React from 'react';
import { Link } from 'react-router-dom';

const ComicCard = ({ id, title, thumbnail }) => {
    return (
        <div className="card mb-3 shadow" style={{ maxWidth: 540 }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={thumbnail.path+"."+thumbnail.extension} className="img-fluid rounded-start portada" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                        <Link className="btn btn-primary btn-sm" to={`/${id}/detail`}>Detail</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComicCard;