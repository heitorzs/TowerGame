const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1280
canvas.height = 768
console.log(c)
console.log(canvas)
c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)
console.log(canvas)

const placementTiles = [];
const enemies = []
const building = [];
let = activeTile = undefined;
const mouse = {
	x: undefined,
	y: undefined
}

window.addEventListener('mousemove', (event) => {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
	activeTile = null;

	for(let i = 0; i < placementTiles.length; i++){
		const tile = placementTiles[i]
		if(mouse.x > tile.position.x && 
			mouse.x < tile.position.x + tile.size &&
			mouse.y > tile.position.y && 
			mouse.y < tile.position.y + tile.size) {
				activeTile = tile;
				break;
			}
	}
})
console.log(activeTile)

const placementTilesData2D = []

for (let i = 0; i < placementTilesData.length; i += 20) {
	placementTilesData2D.push(placementTilesData.slice(i, i + 20))
}


placementTilesData2D.forEach((row, y) => {
	row.forEach((symbol, x) => {
		if (symbol === 14) {
			placementTiles.push(new PlacementTile({
				position: {
					x: x * 64,
					y: y * 64
				}
			}))
		}
	})
})
console.log(placementTilesData2D)
const image = new Image()
image.onload = () => {
	c.drawImage(image, 0, 0)
}

image.src = './Defence_tower_Map1.png'

for (let i = 0; i < 10; i++) {
	const xOffeset = i * 150
	enemies.push(new Enemy({ position: { x: wayPoints[0].x - xOffeset, y: wayPoints[0].y } }))
}

function animate() {
	requestAnimationFrame(animate)
	c.drawImage(image, 0, 0)
	enemies.forEach(enemy => {
		enemy.update()
	});
	placementTiles.forEach((tile) => {
		tile.update(mouse);
	})

}
animate()




