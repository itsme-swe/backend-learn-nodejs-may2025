# Node.js Notes

## Under the hood: How require( ) functions work

    (function (exports, require, module, __filename, __dirname) {

            // Your module code here
    });

When we use require() in Node.js, the module's code is internally wrapped and executed in a function similar to an IIFE. This wrapper function provides scope isolation and injects special variables like **module**, **exports**, **require**, **\_\_dirname**, and **\_\_filename**.

## Event Loop Phases

The event loop is a loop that waits for tasks, executes them, and then sleeps until more tasks arrive. It’s the orchestrator of all async operations in Node.js.

The event loop proceeds through six distinct phases, in order, in every tick (iteration). At the end of each phase, Node runs microtasks (Promises, process.nextTick()).

**1️⃣ timer phase**

**1️⃣ pending callback phase**

**1️⃣ Idle / Prepare phase**

**1️⃣ poll phase**

**1️⃣ check phase**

**1️⃣ close phase**

**💥 Note ⇨** If no timers are sceduled and no I/O callbacks are pending, event loop wait at **poll phase .**
