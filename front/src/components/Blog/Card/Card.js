import * as React from "react"
import { Link, withRouter} from 'react-router-dom';
import PropTypes from "prop-types"
import Button from 'react-bootstrap/Button';
import  "../Card/Card.scss"

const Card = ({title, desc, headline,image,id}) => {

    return (
        <div
            className="card"
            style={{backgroundImage:`url(${image}`}}
        >
            <div
                className="card__content">
                <div className="card__headline">
                    <span >{headline}</span>
                </div>
                <h4 className="card__title">{title}</h4>
                <hr className="card__line"></hr>
                <p className="card__desc">{desc}</p>
                <Link to={`/blog-posts/${id}`}>
                <Button variant="warning" size="sm">Learn more</Button>
                </Link>
            </div>
            <div
                className="card__overlay"
            />
        </div>
    )
}

Card.propTypes = {
    title:PropTypes.string,
    headline:PropTypes.string,
    desc:PropTypes.string
}

export default withRouter(Card)