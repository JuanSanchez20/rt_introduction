import PropTypes from 'prop-types'

export const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
    
    const handleClick = () => {
        updateBoard(index)
    }

    return(
        <div className={className} onClick={handleClick}>
            {children}
        </div>
    )
}

Square.propTypes = {
    children: PropTypes.node, // Para que 'children' pueda ser cualquier tipo de contenido (texto, componentes, etc.)
    isSelected: PropTypes.bool.isRequired, // 'isSelected' debe ser un booleano
    updateBoard: PropTypes.func.isRequired, // 'updateBoard' debe ser una función
    index: PropTypes.number.isRequired, // 'index' debe ser un número
}