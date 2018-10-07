var SOUNDS_FILE_NAMES = ['bubbles', 'clay', 'confetti', 'corona', 'dotted-spiral', 'flash-1', 'flash-2', 'flash-3', 'glimmer', 'moon', 'pinwheel', 'piston-1', 'piston-2', 'piston-3', 'prism-1', 'prism-2', 'prism-3', 'splits', 'squiggle', 'strike', 'suspension', 'timer', 'ufo', 'veil', 'wipe', 'zig-zag'];
var COLORS            = ['blue', 'grey', 'purple', 'brown', 'green', 'yellow', 'red', 'orange', 'maroon', 'olive', 'teal', 'aqua', 'lime', 'white', 'silver', 'navy', 'pink', 'coral', 'gold', 'violet', 'steelblue', 'slateblue', 'cyan', 'skyblue', 'snow', 'tan'];
var sounds = SOUNDS_FILE_NAMES.map(function(name) {
    return new Howl({ src: ['assets/' + name + '.mp3'] });
});

function onKeyDown(event) {
    var keyCode = event.key.charCodeAt(0);

    if (event.key.length === 1 && event.key >= 'a' && event.key <= 'z') {
        var radius = getRandomIntInclusive(10, 350);
        var maxPoint = new Point(project.view.size.width, project.view.size.height);
        var circle = new Path.Circle(maxPoint * Point.random(), radius);
        
        circle.fillColor = COLORS[keyCode - 97];
        circle.applyMatrix = false;

        sounds[keyCode - 97].play();
    }
}

function onFrame() {
    project.activeLayer.children.forEach(function(item) {
        item.scale(0.925);
        item.fillColor.hue += 3;

        if (item.scaling.length < 0.001) {
            item.remove();
        }
    });
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}