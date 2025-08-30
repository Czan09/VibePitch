const ffmpeg = require("fluent-ffmpeg");

ffmpeg.getAvailableFormats((err, formats) => {
  if (err) {
    console.error("FFmpeg not installed or not found in PATH");
  } else {
    console.log("FFmpeg is installed ✅");
  }
});
