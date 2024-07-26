import { useState } from "react"

const EventPopup = ({ onClose, onSave, onClick }) => {
    const [title, setTitle] = useState('');
    const [position, setPosition] = useState({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setstartPos] = useState({ x:0, y:0});

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setstartPos({ x:e.clientX - position.x, y:e.clientY-position.y});
    }

    const handleMouseMove = (e) => {
        if(isDragging){
            setPosition({
                x:e.clientX - startPos.x,
                y:e.clientY-startPos.y
            })
        }
    }

    const handleMouseUp = () => {
        setIsDragging(false);
    }

    const handleSave = () => {
        if (title) {
            onSave(title);
            onClose();
        }
        else {
            alert('Please enter training details');
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            handleSave();
        }
    }

    return (
        <div>
            <div className="popup-overlay" onClick={onClick}>
            </div>
            <div className="popup-content"
                onClick={(e) => e.stopPropagation}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                style={{ 
                    transform: `translate(-50%, -50%)`,
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    position: 'absolute',
                  }}
            >
                <h3>Add Training Details</h3>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} onKeyDown={handleKeyDown}
                    placeholder="Enter training details" />
                <button onClick={handleSave}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    )
}

export default EventPopup;