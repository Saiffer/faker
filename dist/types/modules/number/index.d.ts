import { SimpleModuleBase } from '../../internal/module-base';
/**
 * Module to generate numbers of any kind.
 *
 * ### Overview
 *
 * For simple integers, use [`int()`](https://fakerjs.dev/api/number.html#int). For decimal/floating-point numbers, use [`float()`](https://fakerjs.dev/api/number.html#float).
 *
 * For numbers not in base-10, you can use [`hex()`](https://fakerjs.dev/api/number.html#hex), [`octal()`](https://fakerjs.dev/api/number.html#octal) and [`binary()`](https://fakerjs.dev/api/number.html#binary)`.
 *
 * ### Related modules
 *
 * - For numeric strings of a given length, use [`faker.string.numeric()`](https://fakerjs.dev/api/string.html#numeric).
 * - For credit card numbers, use [`faker.finance.creditCardNumber()`](https://fakerjs.dev/api/finance.html#creditcardnumber).
 */
export declare class NumberModule extends SimpleModuleBase {
    /**
     * Returns a single random integer between zero and the given max value or the given range.
     * The bounds are inclusive.
     *
     * @param options Maximum value or options object.
     * @param options.min Lower bound for generated number. Defaults to `0`.
     * @param options.max Upper bound for generated number. Defaults to `Number.MAX_SAFE_INTEGER`.
     *
     * @throws When `min` is greater than `max`.
     * @throws When there are no integers between `min` and `max`.
     *
     * @see faker.string.numeric(): For generating a `string` of digits with a given length (range).
     *
     * @example
     * faker.number.int() // 2900970162509863
     * faker.number.int(100) // 52
     * faker.number.int({ min: 1000000 }) // 2900970162509863
     * faker.number.int({ max: 100 }) // 42
     * faker.number.int({ min: 10, max: 100 }) // 57
     *
     * @since 8.0.0
     */
    int(options?: number | {
        /**
         * Lower bound for generated number.
         *
         * @default 0
         */
        min?: number;
        /**
         * Upper bound for generated number.
         *
         * @default Number.MAX_SAFE_INTEGER
         */
        max?: number;
    }): number;
    /**
     * Returns a single random floating-point number.
     * The lower bound is inclusive, the upper bound is exclusive, unless `multipleOf` is passed.
     *
     * @param options Upper bound or options object.
     * @param options.min Lower bound for generated number. Defaults to `0.0`.
     * @param options.max Upper bound for generated number. Defaults to `1.0`.
     * @param options.precision Precision of the generated number, for example `0.01` will round to 2 decimal points.
     * If precision is passed, the upper bound is inclusive.
     * @param options.multipleOf The generated number will be a multiple of this property.
     * This property can be used to limit the result to a specific number of decimal digits.
     * For example `0.01` will round to 2 decimal points.
     * If multipleOf is passed, the upper bound is inclusive.
     *
     * @throws When `min` is greater than `max`.
     * @throws When `precision` is negative.
     *
     * @example
     * faker.number.float() // 0.5688541042618454
     * faker.number.float(3) // 2.367973240558058
     * faker.number.float({ min: -1000000 }) //-780678.849672846
     * faker.number.float({ max: 100 }) // 17.3687307164073
     * faker.number.float({ multipleOf: 0.25 }) // 3.75
     * faker.number.float({ min: 10, max: 100, multipleOf: 0.001 }) // 35.415
     *
     * @since 8.0.0
     */
    float(options?: number | {
        /**
         * Lower bound for generated number.
         *
         * @default 0.0
         */
        min?: number;
        /**
         * Upper bound for generated number.
         *
         * @default 1.0
         */
        max?: number;
        /**
         * Precision of the generated number.
         *
         * @deprecated Use `multipleOf` instead.
         */
        precision?: number;
        /**
         * The generated number will be a multiple of this property.
         * If multipleOf is passed, the upper bound is inclusive.
         */
        multipleOf?: number;
    }): number;
    /**
     * Returns a [binary](https://en.wikipedia.org/wiki/Binary_number) number.
     * The bounds are inclusive.
     *
     * @param options Maximum value or options object.
     * @param options.min Lower bound for generated number. Defaults to `0`.
     * @param options.max Upper bound for generated number. Defaults to `1`.
     *
     * @throws When `min` is greater than `max`.
     * @throws When there are no integers between `min` and `max`.
     *
     * @see faker.string.binary(): For generating a `binary string` with a given length (range).
     *
     * @example
     * faker.number.binary() // '1'
     * faker.number.binary(255) // '110101'
     * faker.number.binary({ min: 0, max: 65535 }) // '10110101'
     *
     * @since 8.0.0
     */
    binary(options?: number | {
        /**
         * Lower bound for generated number.
         *
         * @default 0
         */
        min?: number;
        /**
         * Upper bound for generated number.
         *
         * @default 1
         */
        max?: number;
    }): string;
    /**
     * Returns an [octal](https://en.wikipedia.org/wiki/Octal) number.
     * The bounds are inclusive.
     *
     * @param options Maximum value or options object.
     * @param options.min Lower bound for generated number. Defaults to `0`.
     * @param options.max Upper bound for generated number. Defaults to `7`.
     *
     * @throws When `min` is greater than `max`.
     * @throws When there are no integers between `min` and `max`.
     *
     * @see faker.string.octal(): For generating an `octal string` with a given length (range).
     *
     * @example
     * faker.number.octal() // '5'
     * faker.number.octal(255) // '377'
     * faker.number.octal({ min: 0, max: 65535 }) // '4766'
     *
     * @since 8.0.0
     */
    octal(options?: number | {
        /**
         * Lower bound for generated number.
         *
         * @default 0
         */
        min?: number;
        /**
         * Upper bound for generated number.
         *
         * @default 7
         */
        max?: number;
    }): string;
    /**
     * Returns a lowercase [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) number.
     * The bounds are inclusive.
     *
     * @param options Maximum value or options object.
     * @param options.min Lower bound for generated number. Defaults to `0`.
     * @param options.max Upper bound for generated number. Defaults to `15`.
     *
     * @throws When `min` is greater than `max`.
     * @throws When there are no integers between `min` and `max`.
     *
     * @example
     * faker.number.hex() // 'b'
     * faker.number.hex(255) // '9d'
     * faker.number.hex({ min: 0, max: 65535 }) // 'af17'
     *
     * @since 8.0.0
     */
    hex(options?: number | {
        /**
         * Lower bound for generated number.
         *
         * @default 0
         */
        min?: number;
        /**
         * Upper bound for generated number.
         *
         * @default 15
         */
        max?: number;
    }): string;
    /**
     * Returns a [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type) number.
     * The bounds are inclusive.
     *
     * @param options Maximum value or options object.
     * @param options.min Lower bound for generated bigint. Defaults to `0n`.
     * @param options.max Upper bound for generated bigint. Defaults to `min + 999999999999999n`.
     *
     * @throws When `min` is greater than `max`.
     *
     * @example
     * faker.number.bigInt() // 55422n
     * faker.number.bigInt(100n) // 52n
     * faker.number.bigInt({ min: 1000000n }) // 431433n
     * faker.number.bigInt({ max: 100n }) // 42n
     * faker.number.bigInt({ min: 10n, max: 100n }) // 36n
     *
     * @since 8.0.0
     */
    bigInt(options?: bigint | number | string | boolean | {
        /**
         * Lower bound for generated bigint.
         *
         * @default 0n
         */
        min?: bigint | number | string | boolean;
        /**
         * Upper bound for generated bigint.
         *
         * @default min + 999999999999999n
         */
        max?: bigint | number | string | boolean;
    }): bigint;
}
