function rectangle(width, height, color) {
    return {
        width,
        height,
        color: color.toLowerCase().replace(color[0], color[0].toUpperCase()),
        calcArea: function () { return this.width * this.height }
    }
}