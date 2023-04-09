function getAge() {
    const name = 'Michael';
    const url = `https://api.agify.io?name=${name}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const ageDiv = document.getElementById('age');
        ageDiv.innerHTML = `La edad estimada de ${data.name} es ${data.age}`;
      })
      .catch(error => console.error(error));
  }  