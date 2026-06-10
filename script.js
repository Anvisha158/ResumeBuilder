function generateResume() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const github = document.getElementById('github').value;
  const LinkDin = document.getElementById('LinkDin').value;
  const College = document.getElementById('College').value;
  const Course = document.getElementById('Course').value;
  const Cgpa = document.getElementById('Cgpa').value;
  const Skills = document.getElementById('Skills').value;
  const Project = document.getElementById('Project').value;
  const ProjectName = document.getElementById('ProjectName').value;

  if (!name || !email || !phone || !College || !Course || !Skills || !Project) {
    alert("Please fill all required fields!");
    return;
  }

  const skillTags = Skills.split(',').map(s => 
    `<span class="skill-tag">${s.trim()}</span>`
  ).join('');

  document.getElementById('resume').innerHTML = `
    <h1>${name}</h1>
    <p class="contact">${email} | ${phone} | ${github} | ${LinkDin}</p>
    <hr>

    <h3>Education</h3>
    <p><strong>${College}</strong></p>
    <p>${Course} | CGPA: ${Cgpa}</p>
    <hr>

    <h3>Projects</h3>
    <p><strong>${ProjectName}</strong></p>
    <p>${Project}</p>
    <hr>

    <h3>Skills</h3>
    <div class="skills-wrap">${skillTags}</div>
  `;
  document.getElementById('downloadBtn').style.display = 'block';
}

function DownloadResume() {
  const element = document.getElementById('resume');
  const options = {
    margin: 10,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(options).from(element).save();
}