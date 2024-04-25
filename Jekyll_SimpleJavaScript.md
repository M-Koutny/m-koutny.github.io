---
layout: default
title: Simple JavaScript Test
---

# Simple JavaScript Test

<textarea id="input" placeholder="Enter your JavaScript code here"></textarea>
<button onclick="runCode()">Eval</button>
<textarea id="output" readonly placeholder="Output will appear here"></textarea>

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
