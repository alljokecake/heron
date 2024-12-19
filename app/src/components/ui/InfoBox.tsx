import React, { useState, useRef } from 'react';
import './infoBox.css';

// TODO: Make it work
type InfoBoxProps = {
    children: React.ReactNode; // The content wrapped by InfoBox
    infoText: string;          // The text displayed in the info box
    position?: 'top' | 'bottom' | 'left' | 'right'; // Optional position
};

const InfoBox: React.FC<InfoBoxProps> = ({ children, infoText, position = 'top' }) => {
    const [isHovered, setIsHovered] = useState(false);
    const hoverTimeout = useRef<number | null>(null);

    const handleMouseEnter = () => {
        hoverTimeout.current = window.setTimeout(() => setIsHovered(true), 2000); // 2 seconds delay
    };

    const handleMouseLeave = () => {
        if (hoverTimeout.current !== null) {
            clearTimeout(hoverTimeout.current);
            hoverTimeout.current = null;
        }
        setIsHovered(false);
    };

    return (
        <div
            className="info_box_wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative', display: 'inline-block' }}
        >
            {children}
            {isHovered && (
                <div className={`info_box visible`} data-position={position}>
                    {infoText}
                </div>
            )}
        </div>
    );
};

export default InfoBox;
