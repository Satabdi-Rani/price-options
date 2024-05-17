import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {path,name} = route;
    return (
        <li className="mr-10 hover:bg-yellow-300 mx-6"><a href={path}>{name}</a></li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;