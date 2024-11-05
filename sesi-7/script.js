const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = () => {
  return ["Halo, Selamat Datang di Bot Fake, Siapa Nama Kamu?"];
};

pertanyaan.innerHTML = botSay()[0];
function botStart() {
  init++;
  if (init === 1) {
    console.log("Halo broder");
  }
}
