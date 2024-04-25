---
layout: default
title: Simple JavaScript Test
---

# Simple JavaScript Test

<textarea cols="50" rows="10" id="input" placeholder="Enter your JavaScript code here">
    function sum(a, b)
      { return a + b;} 
    window.alert("The sum is sum(5,3): ",sum(5,3));
    console.log(sum(5,3));
    sum(5, 3);
</textarea>
<button onclick="runCode()">Eval</button>
<textarea cols="50" rows="10" id="output" readonly placeholder="The output (after pressing Eval) to be displayed here"> </textarea>

<script>
    function runCode() {
        try {
            var input = document.getElementById("input").value;
            var result = eval(input);
            document.getElementById("output").value = result;
        } catch (error) {
            document.getElementById("output").value = "Error: " + error.message;
        }
    }
</script>
