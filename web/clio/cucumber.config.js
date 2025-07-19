module.exports = {
  require: ["features/step_definitions/**/*.ts"],
  format: ["summary"],
  paths: ["features/**/*.feature"],
  import: ["ts-node/register"], // Untuk bisa membaca file TS
  publishQuiet: true,
  defaultTimeout: 60000, // 60 detik
};
