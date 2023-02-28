// animation machine à écrire

const txtAnim = document.getElementById('txtType');

new Typewriter(txtAnim, {
  loop: true,
})
.pauseFor(1000)
.typeString('<span style="font-size:1.5rem;color:#FECB00;font-weight:600;">Graphic Designer</span>')
.pauseFor(1000)
.deleteChars(17)
.typeString('<span style="font-size:1.5rem;color:#FECB00;font-weight:600;">Web Designer</span>')
.pauseFor(1000)
.start()
