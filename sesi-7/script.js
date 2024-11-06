const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

let init = 0;

const botSay = (data) => {
  return [
    "Halo, Selamat Datang di Bot Fake, Siapa Nama Kamu?",
    `Halo ${data?.nama}, berapa usia kamu?`,
    `ohh ${data?.usia}, apa hobi kamu?`,
    `wawww sama dong ${data?.hobi}, siapa pacar kamu atau ga punya?`,
    `ohhh ${data?.pacar}, Ya udah kalo gitu makasih bruh`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

let userData = [];
function botStart() {
  if (jawaban.value === "") {
    alert("silahkan jawab terlebih dahulu");
    return;
  }
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  loaders.style.display = "block";
  container[0].style.filter = "blur(8px)";
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
    loaders.style.display = "none";
    container[0].style.filter = "none";
  }, 1000);
  userData.push(jawaban.value);
  jawaban.value = "";
}
function finishing() {
  pertanyaan.innerHTML = `Halo, Terimakasih ${userData[0]} Telah Menggunakan Bot Fake`;
  jawaban.value = "siap thanks juga";
}

function botEnd() {
  alert(`terimakasih ${userData[0]} Telah berkunjung dan Menggunakan Bot Fake di tunggu lagi kedatangannya`);
  window.location.reload();
}
