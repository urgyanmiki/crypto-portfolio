const priceMeasures = ['m', 'B', 'T']

export function priceRound(price) {
    const priceLength = price.length;
    const priceLengthKey = priceLength / 3 - 3

    if (priceLengthKey > 0){
        return `${price.substring(0, 2)} ${priceMeasures[priceLength.Math.floor()]}`
    }else {
        return price;
    }
}
