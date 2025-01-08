import PropTypes from 'prop-types';

export const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`;
    
    const handleClick = () => {
        if (updateBoard) {
            updateBoard(index);  // Verificamos que updateBoard sea una función antes de llamarla
        }
    };

    return (
        <div className={className} onClick={handleClick}>
            {children}
        </div>
    );
};

Square.propTypes = {
    children: PropTypes.node,  // 'children' puede ser cualquier tipo de contenido (texto, componentes, etc.)
    isSelected: PropTypes.bool, // 'isSelected' debe ser un booleano
    updateBoard: PropTypes.func, // 'updateBoard' debe ser una función (y es obligatoria)
    index: PropTypes.number.isRequired, // 'index' debe ser un número (y es obligatorio)
};

Square.defaultProps = {
    children: null,  // Si no se pasa 'children', por defecto será null
    isSelected: false,
    index: 0 // Si no se pasa 'isSelected', por defecto será false
};
