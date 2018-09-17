
module.exports.checkHayEstado = (contexto) => {

    if (!contexto.props.location.state) {
        contexto.props.history.push('/');
        return false;
    }
    else {
        contexto.setState({...contexto.props.location.state});
        return true;
    }
}