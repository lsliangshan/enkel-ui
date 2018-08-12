function getRGBA (hex) {
    let rgba = [];
    if (/^\#[0-9A-F]{3}$/i.test(hex)) {
        rgba.push(parseInt('0x' + hex.slice(1, 2)));
        rgba.push(parseInt('0x' + hex.slice(2, 3)));
        rgba.push(parseInt('0x' + hex.slice(3, 4)));
        rgba.push(1);
    } else if (/^\#[0-9A-F]{6}$/i.test(hex)) {
        rgba.push(parseInt('0x' + hex.slice(1, 3)));
        rgba.push(parseInt('0x' + hex.slice(3, 5)));
        rgba.push(parseInt('0x' + hex.slice(5, 7)));
        rgba.push(1);
    } else if (/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0?\.?\d?)\)$/i.test(hex.replace(/\s/g, ''))) {
        let _hex = hex.replace(/\s/g, '');
        _hex.replace(/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0?\.?\d?)\)$/, (i1, i2, i3, i4, i5) => {
            rgba.push(Number(i2));
            rgba.push(Number(i3));
            rgba.push(Number(i4));
            rgba.push(Number(i5));
        });
    }
    return rgba;
}

function getBrightness (color) {
    let rgba = getRGBA(color);
    return (0.299 * rgba[0]) + (0.587 * rgba[1]) + (0.114 * rgba[2]);
}

export default function isDark (color) {
    return getBrightness(color) < 150;
}
