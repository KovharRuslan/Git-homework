

const TRUSTED_EMAIL_RE = /^[A-Za-z0-9]+(?:\.[A-Za-z0-9]+)*@(gmail\.com|yahoo\.com)$/i;


const arr = [
  { userName: "Test",   lastName: "Test",   email: "test.test@gmail.com" },
  { userName: "Dmitro", lastName: "Porohov", email: '<dmitro.porohov@yahoo.com>' },
  { userName: "Andrii", lastName: "",        email: "andrii@mail.ru" }
];
function normalizeEmail(raw) {
  return String(raw).replace(/[<>"']/g, "").trim();
}
const trusted = [];
for (let i = 0; i < arr.length; i++) {
  const e = normalizeEmail(arr[i].email);
  const ok = TRUSTED_EMAIL_RE.test(e);
  console.log(e + " ->", ok ? "✅ trusted" : "❌ not trusted");

  if (ok) {
    trusted.push({ ...arr[i], email: e });
  }
}

console.log("\nTrusted list:", trusted);
