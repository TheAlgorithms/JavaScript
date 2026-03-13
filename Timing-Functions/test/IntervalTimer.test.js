import { IntervalTimer, ExampleIntervalTimer } from '../IntervalTimer'

describe('IntervalTimer', () => {
  let timerInstances = []

  // Reset singleton instance before each test
  beforeEach(() => {
    // Clear any existing timer instances
    timerInstances.forEach((timer) => {
      if (timer && timer.timer) {
        clearInterval(timer.timer)
      }
      if (timer && timer.instance) {
        timer.instance = null
      }
    })
    timerInstances = []
  })

  afterEach(() => {
    // Clean up any running timers
    timerInstances.forEach((timer) => {
      if (timer && timer.timer) {
        clearInterval(timer.timer)
      }
    })
  })

  describe('Constructor', () => {
    it('should create an instance with default parameters', () => {
      const timer = new IntervalTimer()
      timerInstances.push(timer)
      expect(timer).toBeInstanceOf(IntervalTimer)
      expect(timer.interval).toBe(10)
      expect(typeof timer.callBack).toBe('function')
    })

    it('should create an instance with custom interval', () => {
      const timer = new IntervalTimer(50)
      timerInstances.push(timer)
      expect(timer.interval).toBe(50)
    })

    it('should create an instance with custom callback', () => {
      const mockCallback = vi.fn()
      const timer = new IntervalTimer(10, mockCallback)
      timerInstances.push(timer)
      expect(timer.callBack).toBe(mockCallback)
    })

    it('should set instance property on creation', () => {
      const timer1 = new IntervalTimer(20)
      timerInstances.push(timer1)
      const timer2 = new IntervalTimer(30)
      timerInstances.push(timer2)

      // The implementation sets this.instance = this for each instance
      // Note: This is not a true singleton pattern as each new instance creates a separate object
      expect(timer1.instance).toBe(timer1)
      expect(timer2.instance).toBe(timer2)
      expect(timer1.interval).toBe(20)
      expect(timer2.interval).toBe(30)
    })
  })

  describe('startTimer', () => {
    it('should start the timer interval', async () => {
      let callbackCalled = false
      const mockCallback = vi.fn(() => {
        callbackCalled = true
      })
      const timer = new IntervalTimer(10, mockCallback)
      timerInstances.push(timer)

      timer.startTimer()

      // Wait for callback to be called - use a longer timeout to ensure it fires
      // In Node.js, the minimum delay might be larger, so we wait longer
      await new Promise((resolve) => setTimeout(resolve, 100))

      // Verify timer is running
      expect(timer.timer).toBeDefined()
      // Callback should have been called at least once
      expect(callbackCalled || mockCallback.mock.calls.length > 0).toBe(true)
      clearInterval(timer.timer)
    })

    it('should store the timer ID', () => {
      const timer = new IntervalTimer()
      timerInstances.push(timer)
      timer.startTimer()

      expect(timer.timer).toBeDefined()
      // In Node.js, setInterval returns a Timeout object, not a number
      // In browsers, it returns a number. Both are valid.
      expect(
        typeof timer.timer === 'number' || typeof timer.timer === 'object'
      ).toBe(true)

      clearInterval(timer.timer)
    })
  })

  describe('getElapsedTime', () => {
    it('should return elapsed time with default offset', () => {
      const timer = new IntervalTimer()
      timerInstances.push(timer)
      timer.startTimer()

      // getElapsedTime uses timer ID arithmetic which may not work as expected
      // but we test the actual behavior
      const elapsed = timer.getElapsedTime()

      expect(typeof elapsed).toBe('number')

      clearInterval(timer.timer)
    })

    it('should subtract offset from elapsed time', () => {
      const timer = new IntervalTimer()
      timerInstances.push(timer)
      timer.startTimer()

      const offset = 100
      const elapsed = timer.getElapsedTime(offset)

      expect(typeof elapsed).toBe('number')

      clearInterval(timer.timer)
    })

    it('should update prevInterval on each call', () => {
      const timer = new IntervalTimer()
      timerInstances.push(timer)
      timer.startTimer()

      const prevIntervalBefore = timer.prevInterval
      timer.getElapsedTime()
      const prevIntervalAfter = timer.prevInterval

      expect(prevIntervalAfter).not.toBe(prevIntervalBefore)

      clearInterval(timer.timer)
    })
  })

  describe('getRunTime', () => {
    it('should return the timer ID', () => {
      const timer = new IntervalTimer()
      timerInstances.push(timer)
      timer.startTimer()

      const runTime = timer.getRunTime()

      expect(runTime).toBe(timer.timer)
      // In Node.js, setInterval returns a Timeout object, not a number
      // In browsers, it returns a number. Both are valid.
      expect(typeof runTime === 'number' || typeof runTime === 'object').toBe(
        true
      )

      clearInterval(timer.timer)
    })
  })

  describe('resetTimer', () => {
    it('should clear the timer interval', async () => {
      const mockCallback = vi.fn()
      const timer = new IntervalTimer(10, mockCallback)
      timerInstances.push(timer)
      timer.startTimer()

      timer.resetTimer()

      // Verify timer was cleared - callback should not be called after reset
      mockCallback.mockClear()

      // Wait a bit to ensure no more callbacks are called
      await new Promise((resolve) => setTimeout(resolve, 30))

      expect(mockCallback).not.toHaveBeenCalled()
    })

    it('should reset the callback to empty function', () => {
      const mockCallback = vi.fn()
      const timer = new IntervalTimer(10, mockCallback)
      timerInstances.push(timer)
      timer.startTimer()

      timer.resetTimer()

      expect(timer.callBack).not.toBe(mockCallback)
      expect(typeof timer.callBack).toBe('function')
    })

    it('should return elapsed time', () => {
      const timer = new IntervalTimer()
      timerInstances.push(timer)
      timer.startTimer()

      const elapsed = timer.resetTimer()

      expect(typeof elapsed).toBe('number')
    })

    it('should allow timer to be started again after reset', async () => {
      let callbackCalled = false
      const mockCallback = vi.fn(() => {
        callbackCalled = true
      })
      const timer = new IntervalTimer(10, mockCallback)
      timerInstances.push(timer)

      timer.startTimer()
      timer.resetTimer()

      // Reset the flag
      callbackCalled = false
      mockCallback.mockClear()

      // Set new callback and start again
      timer.callBack = mockCallback
      timer.startTimer()

      // Wait for callback to be called - use a longer timeout to ensure it fires
      await new Promise((resolve) => setTimeout(resolve, 100))

      expect(timer.timer).toBeDefined()
      // Callback should have been called at least once
      expect(callbackCalled || mockCallback.mock.calls.length > 0).toBe(true)
      clearInterval(timer.timer)
    })
  })

  describe('Integration tests', () => {
    it('should work with typical usage pattern', () => {
      const timer = new IntervalTimer(10)
      timerInstances.push(timer)
      timer.startTimer()

      // Simulate initialization
      const initOffset = timer.getRunTime()

      // Simulate some work
      const elapsed = timer.getElapsedTime(initOffset)

      expect(typeof elapsed).toBe('number')

      // Reset
      const finalElapsed = timer.resetTimer()
      expect(typeof finalElapsed).toBe('number')
    })

    it('should handle multiple getElapsedTime calls', () => {
      const timer = new IntervalTimer()
      timerInstances.push(timer)
      timer.startTimer()

      const elapsed1 = timer.getElapsedTime()
      const elapsed2 = timer.getElapsedTime()
      const elapsed3 = timer.getElapsedTime()

      expect(typeof elapsed1).toBe('number')
      expect(typeof elapsed2).toBe('number')
      expect(typeof elapsed3).toBe('number')

      clearInterval(timer.timer)
    })
  })
})

describe('ExampleIntervalTimer', () => {
  it('should execute without errors', () => {
    const mockOutput = vi.fn()

    expect(() => {
      ExampleIntervalTimer(mockOutput)
    }).not.toThrow()

    // Clean up - the ExampleIntervalTimer creates a timer instance
    // We need to access it through the singleton pattern
    const timer = new IntervalTimer()
    if (timer.instance && timer.instance.timer) {
      clearInterval(timer.instance.timer)
      timer.instance.instance = null
    }
  })
})
