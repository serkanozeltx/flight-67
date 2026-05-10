const fs = require('fs');
const { execSync } = require('child_process');

try {
  execSync('git show HEAD:passengers.js > old_temp.js');

  let oldFile = fs.readFileSync('old_temp.js', 'utf-8') + '\nmodule.exports = { passengerData, config };';
  fs.writeFileSync('old_temp.js', oldFile);
  const oldData = require('./old_temp').passengerData;

  let newFile = fs.readFileSync('passengers.js', 'utf-8') + '\nmodule.exports = { passengerData, config };';
  fs.writeFileSync('new_temp.js', newFile);
  const newData = require('./new_temp').passengerData;
  const config = require('./new_temp').config;

  let table = '| Koltuk | Orijinal İsim (İngilizce) | Yeni İsim (Türkçe / Kurgusal) | Rolü |\n';
  table += '| :--- | :--- | :--- | :--- |\n';

  Object.keys(oldData).forEach(seat => {
    const oldName = oldData[seat].name;
    const newName = newData[seat].name;
    let role = 'Yolcu';
    if (seat === '1D') role = 'Asıl Şüpheli';
    else if (seat === config.alexSeat) role = 'Senin Arkadaşın';
    table += `| ${seat} | ${oldName} | ${newName} | ${role} |\n`;
  });

  console.log(table);
} catch (e) {
  console.error(e);
} finally {
  if (fs.existsSync('old_temp.js')) fs.unlinkSync('old_temp.js');
  if (fs.existsSync('new_temp.js')) fs.unlinkSync('new_temp.js');
}
