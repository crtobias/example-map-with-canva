import React, { useRef, useEffect } from 'react';
import map from '../class/map';
import styles from "../styles/Gcanva.module.css"
import Player from '../class/player';

function GameCanvas() {

    let map1 = new map(300,300);
    let player1 = new Player(0,0,map1)

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let lastTime = 0;
        const gameLoop = (timestamp) => {
            const deltaTime = timestamp - lastTime;
            lastTime = timestamp;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            //map draw
            map1.draw(ctx)
            player1.draw(ctx)


            updateGameLogic(deltaTime);
            renderGame(ctx);
            animationFrameId = requestAnimationFrame(gameLoop);
        };
        animationFrameId = requestAnimationFrame(gameLoop);
        return () => {
            
            cancelAnimationFrame(animationFrameId); 
        };
    }, []);

    
    const updateGameLogic = (deltaTime) => {
    };
    // Renderizado del juego
    const renderGame = (ctx) => {
        
    };

    // const handelChange = (action) => {
    //     return () => {
    //         if (action === "mas") {
    //             map1.mas();
    //         } else if (action === "menos") {
    //             map1.menos();
    //         }
    //     };
    // };
    const handelMovePlayer = (action) => {
            return () => {
                player1.move(action)
            };
        };
    


    return(
        <div className={styles.container}>
            <div className={styles.canva}>
                <canvas ref={canvasRef} width="800" height="600" />
            </div>
            


            <div>
              <button onClick={handelMovePlayer('left')}> izq </button>
              <button onClick={handelMovePlayer('right')}> der </button>
              <button onClick={handelMovePlayer('up')}> arr </button>
              <button onClick={handelMovePlayer('down')}> abajo</button>
            </div>

        </div>
    );
}

export default GameCanvas;
