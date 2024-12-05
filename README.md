# Unexpected Null Return in Addition Function

This repository demonstrates a common JavaScript error involving unexpected null returns in functions handling potential null or undefined arguments. The `foo` function is designed to add two numbers but fails when either input is null.

## Bug Description
The `foo` function doesn't handle null or undefined inputs gracefully.  It returns null if either `a` or `b` is null, even though a more sensible approach might be to treat null as 0 or throw an error.

## Solution
The solution involves explicit null checks and handling, ensuring the function always returns a valid numerical result.
