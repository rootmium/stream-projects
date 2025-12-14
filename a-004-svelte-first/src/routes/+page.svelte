<script>
  import Test from "../components/Test.svelte"
  import Counter from "../components/Counter.svelte"
  import { counter } from "../components/shared.svelte.js"
  import Nested from "../components/Nested.svelte"

  let name = "Elements Universe"
  let test = {
    question: "What is life?",
    answer: "Something you live to die"
  }
  // let count = $state(0)
  // let numbers = $state([1, 2, 3, 4])
  // let adder = $derived(numbers.length + 1)
  // let total = $derived(numbers.reduce((acc, cur) => acc += cur, 0))
  // let interval = $state(1000)
  //
  // let increment = () => {
  //   numbers.push(adder)
  // }
  //
  // // $inspect(numbers).with(console.log)
  // $effect(() => {
  //   let id = setInterval(() => {
  //     count++
  //   }, interval)
  //
  //   console.log(`interval ID: ${id}`)
  //   return () => {
  //     clearInterval(id)
  //   }
  // })
  // $inspect(interval).with(console.log)
</script>

<h1>Welcome to {name}</h1>
<!-- <Test /> -->
<!---->
<!-- <p>{numbers.join("+")} = {total}</p> -->
<!-- <button onclick={increment}>Add {adder}</button> -->
<!---->
<!-- <p>{count}</p> -->
<!-- <button onclick={() => interval /= 2}>Speed up</button> -->
<!-- <button onclick={() => interval *= 2}>Speed down</button> -->
<!---->
<!-- <Counter /> -->
<!-- <Counter /> -->
<!-- <Counter /> -->
<!-- <button onclick={() => counter.count++}>Increase</button> -->

<Nested {...test} />
