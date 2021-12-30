class Iroha{
    _x;
    _y;
    _width;
    _hight;
    _src;

    constructor(x, y, width, hight, src) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._hight = hight;
        this._src = src;
    }
    drawIroha(ctx) {
        let image = new Image()
        image.src = this._src;
        image.onload = () => {
            ctx.drawImage(image, this._x, this._y, this._width, this._hight);
        }
    }
    vaCham(){
        if(myBaby._x + myBaby._width >= this._x && myBaby._x <= this._x + this._hight &&
            myBaby._y + myBaby._hight >= this._y && myBaby._y <= this._y + this._hight) {
                    return true;
        }

    }

}

