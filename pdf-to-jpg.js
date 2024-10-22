const { exec } = require('child_process');

exec('/opt/homebrew/bin/pdftocairo -jpeg -scale-to 1024 public/green-bay-ppt.pdf public/pdfs/green-bay-ppt', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Success: ${stdout}`);
});
