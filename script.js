const form = document.getElementById("formEndereco");
const cep = document.getElementById("cep");
const logradouro = document.getElementById("logradouro");
const numero = document.getElementById("numero");
const uf = document.getElementById("uf");

cep.addEventListener("input", () => {
  let valor = cep.value.replace(/\D/g, "");
  if (valor.length > 5) valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
  cep.value = valor;
});

uf.addEventListener("input", () => {
  uf.value = uf.value.toUpperCase().replace(/[^A-Z]/g, "");
});

form.addEventListener("submit", e => {
  e.preventDefault();

  if (!/^\d{5}-\d{3}$/.test(cep.value)) return alert("CEP inválido");
  if (logradouro.value.length < 5) return alert("Logradouro inválido");
  if (!/^\d+$/.test(numero.value)) return alert("Número inválido");
  if (!/^[A-Z]{2}$/.test(uf.value)) return alert("UF inválido");

  alert("Endereço cadastrado com sucesso");
});
