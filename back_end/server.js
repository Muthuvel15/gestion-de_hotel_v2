const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors'); 

const app = express();

app.use(bodyParser.json());
app.use(cors());
// Variable pour le compteur d'ID
let hotelIdCounter = 1;


app.post('/hotels', (req, res) => {
  const hotelData = req.body;
  // Lecture du fichier JSON existant
  const hotels = JSON.parse(fs.readFileSync('data.json', 'utf8'));
// rechercher dans data.json l'id le + éléver
  let maxId = 0;
for (const hotel of hotels) {
  if (hotel.id > maxId) {
    maxId = hotel.id;
  }
}
  // Ajout de l'ID automatique à l'hôtel
  const newHotel = {
    id: maxId + 1, // on ajoute +1 à l'id
    ...hotelData
  };

  // Incrément du compteur d'ID
  hotelIdCounter++;

  // Ajout du nouvel hôtel aux données existantes
  hotels.push(newHotel);

  // Écriture des données mises à jour dans le fichier JSON
  fs.writeFileSync('data.json', JSON.stringify(hotels, null, 2));

  // Réponse avec les données de l'hôtel créé
  res.json(newHotel)
});


app.get('/hotels', (req, res) => {
    // Lecture du fichier JSON contenant les hôtels
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Erreur lors de la lecture du fichier JSON :', err);
        res.status(500).json({ error: 'Erreur serveur' });
        return;
      }
  
      try {
        const hotels = JSON.parse(data);
        res.json(hotels);
      } catch (error) {
        console.error('Erreur lors de l\'analyse du fichier JSON :', error);
        res.status(500).json({ error: 'Erreur serveur' });
      }
    });
  });
  

let userIdCounter = 1;

app.post('/users', async (req, res) => {
  const userData = req.body;

  // Lecture du fichier JSON des utilisateurs existants
  const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

  // Recherche de l'ID le plus élevé parmi les utilisateurs existants
  let maxId = 0;
  for (const user of users) {
    if (user.id > maxId) {
      maxId = user.id;
    }
  }

  // Hashage du mot de passe
  const hashedPassword = await bcrypt.hash(userData.pswd, 10);

  // Vérification et définition du rôle par défaut
  const role = userData.role || 'client';

  // Création de l'utilisateur avec les données modifiées
  const newUser = {
    id: maxId + 1,
    name: userData.name,
    lname: userData.lname,
    mail: userData.mail,
    pswd: hashedPassword,
    role: role
  };

  // Ajout du nouvel utilisateur aux données existantes
  users.push(newUser);

  // Écriture des données mises à jour dans le fichier JSON
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));

  // Réponse avec les données de l'utilisateur créé
  res.json(newUser);
});


app.listen(3000, () => {
  console.log('Le serveur est en cours d\'exécution sur le port 3000.');
});
