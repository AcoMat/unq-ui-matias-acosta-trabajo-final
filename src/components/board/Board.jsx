function Board({ height, width }) {
    return (
        <div className="board">
            {
                Array.from({ length:(height * width) }, (_, index) => (
                    <h1 key={index}>{index}</h1>
                  ))
            }
        </div>
    );
}

export default Board;