/** Success: only `success` and `data` (no `error` key). */
class Success<T> {
  readonly success = true as const;
  constructor(readonly data: T) {}
}

/** Failure: only `success` and `error` (no `data` key). */
class Failure<E> {
  readonly success = false as const;
  constructor(readonly error: E) {}
}

/** Discriminated union of {@link Success} and {@link Failure}. */
type Result<T, E> = Success<T> | Failure<E>;

class ResultGen {
  private constructor() {}

  static succeed<T>(data: T): Success<T> {
    return new Success(data);
  }

  static failed<E>(error: E): Failure<E> {
    return new Failure(error);
  }
}

export { type Result, ResultGen };
