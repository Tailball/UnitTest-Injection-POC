import React from 'react';

class CanvasPage extends React.Component {
    constructor(){ 
        super();
        this.canvas = undefined;
        this.context = undefined;

        this.state = {
            clickedOn: null
        };
    }

    componentDidMount() {
        this.canvas = document.querySelector('#myCanvas');
        this.context = this.canvas.getContext('2d');

        this.initCanvas();
    }

    initCanvas = () => {
        this.context.fillRect(0, 0, 800, 600);

        this.context.fillStyle = '#FF0000';
        this.context.fillRect(20, 20, 210, 80);

        this.context.fillStyle = '#0000FF';
        this.context.fillRect(250, 20, 210, 80);

        this.canvas.addEventListener('click', this.clickCanvas);
    }

    clickCanvas = (e) => {
        const mPos = this.getCursorPosition(this.canvas, e);

        if (mPos.x >= 20 && mPos.x <= 230 && 
           mPos.y >= 20 && mPos.y <= 100) {
            this.setState({ clickedOn: 'red' });
        } else if (mPos.x >= 250 && mPos.x <= 460 &&
           mPos.y >= 20 && mPos.y <= 100) {
            this.setState({ clickedOn: 'blue' });
        } else {
            this.setState({ clickedOn: '' });
        }
    }

    getCursorPosition(canvas, event) {
        const clientX = event.clientX;
        const clientY = event.clientY;

        var rect = canvas.getBoundingClientRect();
        const canvasX = rect.x;
        const canvasY = rect.y;

        return {
            x: clientX - canvasX,
            y: clientY - canvasY
        };
    }

    render () {
        return (
            <section className="page canvas">
                <h1>Canvas page</h1>

                <canvas id="myCanvas"
                        width="800"
                        height="600">
                </canvas>
                { this.state.clickedOn &&
                    <h2>You clicked on the {this.state.clickedOn} rectangle!</h2>
                }
            </section>
        );
    }
}

export default CanvasPage;