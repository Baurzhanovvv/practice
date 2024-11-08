import React, { useState } from 'react';
import './Map.css';
import Profile from '../profile/profile';

type Position = {
    x: number;
    y: number;
};

type FrogCharacterProps = {
    position: { x: number; y: number };
    mapWidth: number;
    mapHeight: number;
};

const FrogCharacter: React.FC<FrogCharacterProps> = ({ position, mapWidth, mapHeight }) => {
    // Scale position based on map dimensions
    const style = {
        left: `${(position.x / 100) * mapWidth}px`,
        top: `${(position.y / 100) * mapHeight}px`,
    };

    return <div className="frog-character" style={style}></div>;
};

type LessonPadProps = {
    x: number;
    y: number;
    text: string;
    description: string;
    mapWidth: number;
    mapHeight: number;
    onClick: () => void;
};

const LessonPad: React.FC<LessonPadProps> = ({ x, y, text, description, mapWidth, mapHeight, onClick }) => {
    // Scale position based on map dimensions
    const style = {
        left: `${(x / 100) * mapWidth}px`,
        top: `${(y / 100) * mapHeight}px`,
    };

    return (
        <div className="lesson-pad" style={style} onClick={onClick}>
            <div>{text}</div>
            <small className="lesson-description">{description}</small>
        </div>
    );
};

type MapProps = {
    width: number;
    height: number;
    profile?: boolean;
};

const Map: React.FC<MapProps> = ({ width, height, profile = true }) => {
    const [frogPosition, setFrogPosition] = useState<Position>({ x: 20, y: 10 }); // Positions are percentages of the map size

    const handlePadClick = (position: Position) => {
        setFrogPosition(position);
    };

    return (
        <>
            {profile ? <Profile /> : null}
            <div className="container">
                <div className="map" style={{ width: `${width}px`, height: `${height}px` }}>
                    <FrogCharacter position={frogPosition} mapWidth={width} mapHeight={height} />

                    <LessonPad
                        x={15}
                        y={10}
                        text="Lesson 1"
                        description="Introduction to basics"
                        mapWidth={width}
                        mapHeight={height}
                        onClick={() => handlePadClick({ x: 15, y: 10 })}
                    />
                    <LessonPad
                        x={55}
                        y={50}
                        text="Lesson 2"
                        description="Intermediate concepts"
                        mapWidth={width}
                        mapHeight={height}
                        onClick={() => handlePadClick({ x: 65, y: 55 })}
                    />
                </div>
            </div>
        </>
    );
};

export default Map;
