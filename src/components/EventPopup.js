import { useState } from "react"

const EventPopup = ({ onClose, onSave, onClick }) => {
    const [title, setTitle] = useState('');

    const handleSave = () => {
        if (title) {
            onSave(title);
            onClose();
        }
        else {
            alert('Please enter training details');
        }
    }
    return (
        <div>
            <div className="popup-overlay" onClick={onClick}>
            </div>
            <div className="popup-content">
                <h3>Add Training Details</h3>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter training details" />
                <button onClick={handleSave}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    )
}

export default EventPopup;