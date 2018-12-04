// let buttonText = 'Show details';

// const changeText = () => {
//     if (buttonText == 'Show details') {
//         buttonText = 'Hide details';
//     } else {
//         buttonText = 'Show details';
//     }
    
//     render();
// }; 

// const appRoot = document.getElementById('app');

// const render = () => {
//     const VISIBLE = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={changeText}>{buttonText}</button>
//             <p hidden={buttonText == 'Show details'}>Hey. These are some details you can see!</p>
//         </div>
//     );

//     ReactDOM.render(VISIBLE, appRoot);
// }

// render();

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();