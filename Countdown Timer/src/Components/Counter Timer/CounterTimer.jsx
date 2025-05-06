import React from 'react'
import './CounterTimer.css'

function CounterTimer() {

    const [time, setTime] = React.useState(0); // State to track the time in seconds
    const [isActive, setIsActive] = React.useState(false); // State to track if the timer is active
    const [isPaused, setIsPaused] = React.useState(false); // State to track if the timer is paused
    const intervalRef = React.useRef(null); // Ref to store the interval ID
    const useEffect = React.useEffect; // Destructure useEffect from React
    
    const handleInput = (e) => {
        setTime(parseInt(e.target.value) * 60); // Convert minutes to seconds
    }

    const formatTime = () => {
        const minutes = String(Math.floor(time / 60)).padStart(2, '0'); // Calculate minutes
        const seconds = String(time % 60).padStart(2, '0');

        return `${minutes}:${seconds}`;
    }
    
    const handleStart = () => {
        if (time > 0) {
            if (!isActive) {
                setIsActive(true); // Set the timer to active
                setIsPaused(false); // Set the timer to not paused
            }
        }
        else {
            alert("Please enter a valid time"); // Alert the user if time is not valid
        }
    }

    useEffect(() => {
        if (isActive && !isPaused && time > 0) {
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime - 1); // Decrease the time by 1 second
            }, 1000);
        }
        else if (isPaused) {
            clearInterval(intervalRef.current); // Clear the interval when time is up
            setIsActive(false); // Set the timer to not active
            alert("Time's up!"); // Alert the user
        }
        return () => clearInterval(intervalRef.current); // Cleanup the interval on unmount
    }, [isActive, isPaused, time]); // Run the effect when isActive, isPaused or time changes

    const handlePause = () => {
        if (isActive) {
            setIsPaused(!isPaused); // Toggle the paused state
        }
    }

    const handleReset = () => {
        clearInterval(intervalRef.current); // Clear the interval
        setIsActive(false); // Set the timer to not active
        setIsPaused(false); // Set the timer to not paused
        setTime(0); // Reset the time to 0
        document.querySelector('input[type="number"]').value = ''; // Clear the input box
        alert("Timer reset"); // Alert the user
    }

    return (
        <div className='countdown-timer'>
            <h1>Coundown Timer</h1>
            <div className='timer-display'>
                <input type="number" placeholder='Enter time in minutes' required onChange={handleInput} />
                <div>{formatTime()}</div>
            </div>
            <div className='timer-controls'>
                <button onClick={handleStart} disabled={isActive && !isPaused}>Start</button>
                <button onClick={handlePause} disabled={!isActive}>{isPaused ? 'Resume' : 'Pause'}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default CounterTimer
