class Baby {
    _x;
    _y;
    _width;
    _hight;
    _speed;
    _src;

    constructor(x, y, width, hight, speed, src) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._hight = hight;
        this._speed = speed;
        this._src = src;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get hight() {
        return this._hight;
    }

    set hight(value) {
        this._hight = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }

    get src() {
        return this._src;
    }

    set src(value) {
        this._src = value;
    }

    moveUp() {
        this._y = this._y - this._speed;
    }

    moveDown() {
        this._y = this._y + this._speed
    }

    moveLeft() {
        this._x = this._x - this._speed;
    }

    moveRight() {
        this._x = this.x + this._speed
    }

    upSpeed() {
        this.speed *= 2;
    }

    downSpeed() {
        this.speed *= 2;
    }

    drawBaby(ctx) {
        let image = new Image()
        image.src = this._src;
        image.onload = () => {
            ctx.drawImage(image, this._x, this._y, this._width, this._hight);
        }
    }

}