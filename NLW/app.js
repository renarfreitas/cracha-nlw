const networkNames = {
  github: 'renarfreitas',
  youtube: 'renarfreitas',
  instagram: 'renarfreitas',
  facebook: 'renarfreitas',
  twitter: 'renar_freitas'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
   const social = li.getAttribute('class')

   li.children[0].href = `https://${social}.com/${networkNames[social]}`
  }
}

changeSocialMediaLinks()

function getInfoUserGitHub () {
  const url = `https://api.github.com/users/${networkNames.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent += data.bio
    urlUser.href = data.html_url
    userFoto.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getInfoUserGitHub()