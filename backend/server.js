import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const generators = {
  javascript: {
    reverse: `function reverseString(str) {
  return str.split("").reverse().join("");
}`,
    sum: `function sum(a, b) {
  return a + b;
}`,
    sort: `function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}`,
    factorial: `function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}`,
    prime: `function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}`,
    default: `function hello() {
  console.log("Hello from Mini Code Copilot!");
}`
  },

  python: {
    reverse: `def reverse_string(s: str) -> str:
    return s[::-1]`,
    sum: `def add(a: int, b: int) -> int:
    return a + b`,
    sort: `def sort_numbers(nums: list[int]) -> list[int]:
    return sorted(nums)`,
    factorial: `def factorial(n: int) -> int:
    if n <= 1:
        return 1
    return n * factorial(n - 1)`,
    prime: `def is_prime(n: int) -> bool:
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True`,
    default: `def hello():
    print("Hello from Mini Code Copilot!")`
  },

  cpp: {
    reverse: `#include <algorithm>
#include <string>
std::string reverseString(std::string s) {
    std::reverse(s.begin(), s.end());
    return s;
}`,
    sum: `int sum(int a, int b) {
    return a + b;
}`,
    sort: `#include <vector>
#include <algorithm>
void sortNumbers(std::vector<int>& v) {
    std::sort(v.begin(), v.end());
}`,
    factorial: `int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}`,
    prime: `bool isPrime(int n) {
    if (n < 2) return false;
    for(int i = 2; i * i <= n; i++) {
        if(n % i == 0) return false;
    }
    return true;
}`,
    default: `#include <iostream>
void hello() {
    std::cout << "Hello from Mini Code Copilot!" << std::endl;
}`
  }
};

function pickIntent(prompt = "") {
  const p = prompt.toLowerCase();
  if (p.includes("reverse")) return "reverse";
  if (p.includes("sum") || p.includes("add")) return "sum";
  if (p.includes("sort")) return "sort";
  if (p.includes("factorial")) return "factorial";
  if (p.includes("prime")) return "prime";
  return "default";
}

app.post("/generate", (req, res) => {
  const { prompt, type } = req.body;
  const lang = type || "javascript";
  const intent = pickIntent(prompt);
  const code = generators[lang][intent] || generators[lang].default;
  res.json({ code });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));

