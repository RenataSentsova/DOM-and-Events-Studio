document.addEventListener('DOMContentLoaded', () => {
    const takeoffBtn = document.getElementById('takeoff');
    const landingBtn = document.getElementById('landing');
    const missionAbortBtn = document.getElementById('missionAbort');
    const upBtn = document.getElementById('up');
    const downBtn = document.getElementById('down');
    const rightBtn = document.getElementById('right');
    const leftBtn = document.getElementById('left');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const rocket = document.getElementById('rocket');

    let y = 0;
    let x = 0;
    let height = parseInt(spaceShuttleHeight.innerHTML);
    
    const takeoff = () => {
        let result = confirm("Confirm that the shuttle is ready for takeoff."); 
        if (result === true) { 
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "lightblue";
            height += 10000;
            spaceShuttleHeight.innerHTML = height;
            // takeoffBtn.disabled = true;
        }
    };
    
    const landing = () => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
        x = 0;
        y = 0;
        rocket.style.transform=`translate(${x}px, ${y}px)`;
    };

    const missionAbort = () => {
        let result = confirm("Confirm that you want to abort the mission."); 
        if (result === true) { 
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
            x = 0;
            y = 0;
            rocket.style.transform=`translate(${x}px, ${y}px)`;
        }
    };

    const up = () => {
        if (flightStatus.innerHTML != "Shuttle in flight.") {
            window.alert("The shuttle is not in flight!");
        }
        if (height <= 50000 && flightStatus.innerHTML == "Shuttle in flight."){
            y -= 10;
            rocket.style.transform=`translate(${x}px, ${y}px)`;
            height += 10000;
            spaceShuttleHeight.innerHTML = height;
        }
    };

    const down = () => {
        if (flightStatus.innerHTML != "Shuttle in flight.") {
            window.alert("The shuttle is not in flight!");
        }
        if (height >= 10000 && flightStatus.innerHTML == "Shuttle in flight."){
            y += 10;
            rocket.style.transform=`translate(${x}px, ${y}px)`;
            height -= 10000;
            spaceShuttleHeight.innerHTML = height;
        }
    };

    const right = () => {
        if (flightStatus.innerHTML != "Shuttle in flight.") {
            window.alert("The shuttle is not in flight!");
        }
        if (x < 290 && flightStatus.innerHTML == "Shuttle in flight.") {
            x += 10;
            rocket.style.transform=`translate(${x}px, ${y}px)`;
        }
    };

    const left = () => {
        if (flightStatus.innerHTML != "Shuttle in flight.") {
            window.alert("The shuttle is not in flight!");
        }
        if (x > -290 && flightStatus.innerHTML == "Shuttle in flight.") {
            x -= 10;
            rocket.style.transform=`translate(${x}px, ${y}px)`;
        }
    };

    takeoffBtn.addEventListener('click', takeoff);
    landingBtn.addEventListener('click', landing);
    missionAbortBtn.addEventListener('click', missionAbort);
    upBtn.addEventListener('click', up);
    downBtn.addEventListener('click', down);
    rightBtn.addEventListener('click', right);
    leftBtn.addEventListener('click', left);
});