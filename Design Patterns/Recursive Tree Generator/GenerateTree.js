var canvas = document.querySelector('canvas');
var generateButton = document.querySelector('.generate--tree-button');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

function drawTree(startX, startY, len, angle, branchWidth, color1, color2) {
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = color1;
    ctx.fillStyle = color2;
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, startY);
    ctx.rotate(angle * (Math.PI / 180));
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();
    if (len < 9) {
        ctx.beginPath();
        ctx.strokeStyle = color2;
        ctx.fillStyle = color2;
        ctx.lineWidth = branchWidth;
        ctx.translate(startX, startY);
        ctx.rotate(angle * (Math.PI / 180));
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -len);
        ctx.stroke();
        ctx.restore();
        return;
    }
    let abitofrandom = Math.random();
    drawTree(0, -len, len * 0.75, angle + 20 * abitofrandom, branchWidth * 0.75, color1, color2);
    drawTree(0, -len, len * 0.75, angle * abitofrandom, branchWidth * 0.75, color1, color2);
    drawTree(0, -len, len * 0.75, angle - 20 * abitofrandom, branchWidth * 0.75, color1, color2);

    ctx.restore();
}
drawTree(canvas.width / 2, canvas.height - 70, 120, 0, 20, 'brown', 'green');