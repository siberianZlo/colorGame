const inner = document.querySelector('.inner'),
    blocks = 660,
    squareColors = ['#E6E6FA', '#FFE4E1', '#000080', '#6495ED', '#0000CD', '#00BFFF', '#40E0D0', '#2E8B57', '#00FF00',
'#32CD32', '#FFFF00', '#CD5C5C', '#B22222', '#FFA500'];
    
    for (let i = 0; i < blocks; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => setColor(square));
        square.addEventListener('mouseout', () => removeColor(square));
        inner.appendChild(square);
    }

    function setColor(elem) {
        const color = () => squareColors[Math.floor(Math.random() * squareColors.length)];
        elem.style.background = color();
    }

    function removeColor(elem) {
        elem.style.background = '#2d2d2d';
    }