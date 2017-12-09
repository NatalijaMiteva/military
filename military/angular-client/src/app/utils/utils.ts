const TWO_DECIMAL_PLACES: number = 2;

export class Utils {
  static discountValue(value: number, percentage: number) {
    return parseFloat((value * (1 - (percentage / 100))).toFixed(TWO_DECIMAL_PLACES));
  }

  static percentageDifferenceBetweenValues(currentValue, updatedValue): number {
    return (1 - (updatedValue / currentValue)) * 100;
  }
}
