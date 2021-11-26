import React from "react";
import './Game.css';

class Square extends React.Component{
    render(){
        return(
            <div>
                <button className="square">{this.props.value}</button>
            </div>
        )
    }
}

class Board extends React.Component{
    renderSquare(i){
        return <Square value={i} />;
    }

    render(){
        const hint="Next player:X";

        return(
            <div>
                <div>{hint}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component{
    render(){
        return(
            <div className="game">
                <div classname="game-board">
                    <Board />
                </div>

                <div className="game-infor">
                    游戏即将开始，敬请期待！The game is coming!

                </div>

            </div>

        );
    }
}

export default Game;