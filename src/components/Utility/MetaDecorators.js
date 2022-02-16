
import React from 'react';
import { PropTypes } from "prop-types";
import { Helmet } from 'react-helmet';

const MetaDecorator = ({title, description, tags, image}) => {
    return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={tags}></meta>
        <meta property="og:image" content={image} />
    </Helmet>
    )
};

MetaDecorator.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default MetaDecorator;

