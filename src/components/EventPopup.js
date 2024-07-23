import { useState } from "react"

const EventPopup = ({onClose, onSave}) => {
    const [title, setTitle] = useState('');

    const handleSave = () => {
        if(title){
            onSave(title);
            onClose();
        }
        else{
            alert('Please enter training details');
        }
    }
    return (
        <div className="popup">
            <div className="popup-content">
                <h3>Add Training Details</h3>
                <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}
                placeholder="Enter training details"/>
                <button onClick={handleSave}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    )
}

export default EventPopup;