import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {
    const [overlays, setOverlays] = useState([]);
    const [volume, setVolume] = useState(1);

    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        setVolume(newVolume);
        document.getElementById('livestream').volume = newVolume; 
    };

    const handleCreateOverlay = () => {
        const text = document.getElementById('overlay-text').value;
        const x = parseInt(document.getElementById('overlay-x').value, 10);
        const y = parseInt(document.getElementById('overlay-y').value, 10);
        const width = parseInt(document.getElementById('overlay-width').value, 10);
        const height = parseInt(document.getElementById('overlay-height').value, 10);

        if (text && !isNaN(x) && !isNaN(y) && !isNaN(width) && !isNaN(height)) {
            const newOverlay = { text, x, y, width, height };
            setOverlays((prevOverlays) => [...prevOverlays, newOverlay]);
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

    const handleDeleteOverlay = (index) => {
        setOverlays((prevOverlays) => prevOverlays.filter((_, i) => i !== index));
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
                <div id="video-container" style={{ position: 'relative' }}>
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
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '5px',
                                    borderRadius: '4px',
                                }}
                            >
                                {overlay.text}
                                <button 
                                    style={{
                                        marginLeft: '10px',
                                        backgroundColor: 'transparent',
                                        color: 'white',
                                        border: 'none',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => handleDeleteOverlay(index)}>🗑️</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="volume-control">
                    <h3>Volume Control</h3>
                    <input 
                        type="range" 
                        min="0" 
                        max="1" 
                        step="0.01" 
                        value={volume} 
                        onChange={handleVolumeChange} 
                    />
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

root.render(<App />);
