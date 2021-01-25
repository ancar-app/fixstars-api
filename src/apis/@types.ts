export type OptiganRequest = {
  /**
   * QUBO matrix to input.
   */
  matrix?: number[][]

  /**
   * QUBO polynomial to input.
   */
  polynomial?: number[][]

  /**
   * Constant term to input.
   * @defaultValue `0`
   */
  constant: number

  /**
   * Number of unit steps for annealing.
   * @defaultValue `10`
   */
  num_unit_steps?: number

  /**
   * Timeout of annealing [msec].
   * @defaultValue `10000`
   */
  timeout?: number

  /**
   * Parameters for output items.
   */
  outputs?: OutputsParameters
}

export type OptiganResponse = {
  /**
   * Energy values.
   */
  energies: number[]

  /**
   * Spin array.
   */
  spins: number[][]

  /**
   * Execution time.
   */
  execution_time: ExecutionTime

  /**
   * Parameters at the execution.
   */
  execution_parameters: ExecutionParameters
}

export type OutputsParameters = {
  /**
   * Whether to output the spin array.
   * @defaultValue `true`
   */
  spins: boolean

  /**
   * Whether to output the energy value.
   * @defaultValue `true`
   */
  energies: boolean

  /**
   * Whether to sort the spin array in ascending order by energy value.
   * @defaultValue `true`
   */
  sort: boolean

  /**
   * Whether to output solutions with duplicate energy values.
   * @defaultValue `false`
   */
  duplicate: boolean

  /**
   * Number of spin arrays and energy values to output (`0`: all).
   * @defaultValue `1`
   */
  num_outputs: number
}

export type ExecutionParameters = {
  /**
   * Number of unit steps for annealing.
   */
  num_unit_steps: number
}

export type ExecutionTime = {
  /**
   * Annealing execution time.
   */
  annealing_time: number

  /**
   * Waiting time in a queue.
   */
  queue_time: number

  /**
   * CPU processing time.
   */
  cpu_time: number

  /**
   * Timestamps when the solution was obtained (UTC).
   */
  time_stamps: number[]
}

export type ErrorResponse = {
  /**
   * Erroe message.
   */
  error: string
}

export type ApiToken = {
  /**
   * API token with Bearer schema (Bearer {TOKEN}).
   */
  Authorization: string
}
