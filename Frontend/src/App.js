import React, { useState } from 'react';

const App = () => {
    const [overlays, setOverlays] = useState([]);

    const handleCreateOverlay = () => {
        const text = document.getElementById('overlay-text').value;
        const x = parseInt(document.getElementById('overlay-x').value, 10);
        const y = parseInt(document.getElementById('overlay-y').value, 10);
        const width = parseInt(document.getElementById('overlay-width').value, 10);
        const height = parseInt(document.getElementById('overlay-height').value, 10);

        if (text && !isNaN(x) && !isNaN(y) && !isNaN(width) && !isNaN(height)) {
            const newOverlay = { text, x, y, width, height };
            setOverlays([...overlays, newOverlay]);
            clearOverlayInputs();
        } else {
            alert('Please fill in all fields');
        }
    };

    const clearOverlayInputs = () => {
        document.getElementById('overlay-text').value = '';
        document.getElementById('overlay-x').value = '';
        document.getElementById('overlay-y').value = '';
        document.getElementById('overlay-width').value = '';
        document.getElementById('overlay-height').value = '';
    };

    const handlePlay = () => {
        document.getElementById('livestream').play();
    };

    const handlePause = () => {
        document.getElementById('livestream').pause();
    };

    return (
        <div className="dashboard">
            <aside className="sidebar">
                <h2>Dashboard</h2>
                <ul>
                    <li><button onClick={handlePlay}>Play Video</button></li>
                    <li><button onClick={handlePause}>Pause Video</button></li>
                    <li><button onClick={handleCreateOverlay}>Add Overlay</button></li>
                </ul>
            </aside>

            <main>
                <h1>Demo Video with Overlays</h1>
                <div id="video-container">
                    <video id="livestream" controls>
                        <source src="demo_video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div id="overlays">
                        {overlays.map((overlay, index) => (
                            <div
                                key={index}
                                style={{
                                    position: 'absolute',
                                    left: `${overlay.x}px`,
                                    top: `${overlay.y}px`,
                                    width: `${overlay.width}px`,
                                    height: `${overlay.height}px`,
                                    border: '1px solid red',
                                    color: 'white',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                }}
                            >
                                {overlay.text}
                            </div>
                        ))}
                    </div>
                </div>

                <div id="overlay-inputs" className="overlay-inputs">
                    <h3>Create Overlay</h3>
                    <input type="text" id="overlay-text" placeholder="Overlay Text" required />
                    <input type="number" id="overlay-x" placeholder="X Position" min="0" required />
                    <input type="number" id="overlay-y" placeholder="Y Position" min="0" required />
                    <input type="number" id="overlay-width" placeholder="Width" min="1" required />
                    <input type="number" id="overlay-height" placeholder="Height" min="1" required />
                    <button onClick={handleCreateOverlay}>Create Overlay</button>
                </div>
            </main>
        </div>
    );
};

export default App;
