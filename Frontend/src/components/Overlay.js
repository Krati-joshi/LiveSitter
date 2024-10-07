import React, { useState } from 'react';

const Overlay = () => {
    const [overlays, setOverlays] = useState([]);

    const addOverlay = () => {
        const newOverlay = { id: Date.now(), content: 'New Overlay' }; 
        setOverlays([...overlays, newOverlay]);
    };

    const removeOverlay = (id) => {
        setOverlays(overlays.filter(overlay => overlay.id !== id));
    };

    return (
        <div>
            <h2>Manage Overlays</h2>
            <button onClick={addOverlay}>Add Overlay</button>
            <div style={{ position: 'relative' }}>
                {overlays.map(overlay => (
                    <div key={overlay.id} style={{ position: 'absolute', top: '10px', left: '10px' }}>
                        {overlay.content}
                        <button onClick={() => removeOverlay(overlay.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Overlay;
