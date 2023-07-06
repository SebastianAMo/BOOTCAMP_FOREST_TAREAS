//Node

const { exec, spawn } = require("node:child_process");
let correo = process.argv[2];
let i = 0;

  exec(`bash cmd.sh ${correo}`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });



