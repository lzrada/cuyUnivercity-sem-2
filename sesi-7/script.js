const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

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
  console.log({ userData: userData });

  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, 1250);
  userData.push(jawaban.value);
  jawaban.value = "";
}
function finishing() {
  pertanyaan.innerHTML = `Halo, Terimakasih ${userData[0]} Telah Menggunakan Bot Fake`;
  jawaban.value = "siap thanks juga";
}

function botEnd() {
  window.location.reload();
}
