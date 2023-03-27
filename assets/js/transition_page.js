content_page1 = [
    `<h3><strong>Bumringhton Azrael</strong></h3><img src="public/img/Apparence.jpg" style="width: auto;height: 75%;" alt="">`,
    `
    <h3><strong>10 Mars XXX</strong></h3>
        <p>Aujourd'hui mère m'as offert ce carnet, je suis très heureux, depuis que j'ai appris à écrire j'ai toujours souhaité obtenir de quoi m'exprimer, et de cette façon je pense pouvoir m'exprimer</p> 
    <h3><strong>11 Mars XXX</strong></h3>
    <p>Apres etre devenue le major de ma promo je suis rentrer dans le BDE et le CPT ma offert de la viande!Vous vous rendez compte de la VIANDE, ça doit faire au moins 100 siècle que je n'en es pas manger, je suis vraiment heureux, je ne dis pas que la soupe et le pain ne me satisfait pas, c'est juste que manger de la nourriture plus cher c'est souvent meilleurs.</p>
    <h3><strong>12 Mars XXX</strong></h3>
    <p>Aujourd'hui nous sommes partit en entrainement,et j'ai battut Werner vous vous rendez WERNER ! Le meilleur a l'épée, moi le petit Azrael battre le meilleur."</p>
    <button onclick="PageSuivante(1)">Page Précedente</button></div>
    `,
    `
    <h3><strong>15 Mars XXX</strong></h3>
    <p>Le capitaine m'a tester c'est bien ce que je pensais j'ai une seconde personalité elle se developpe a chaque fois que je suis en danger ou alors que mes amis le sont!il compte sur moi je ne vais pas le decevoir.
    <h3><strong>16 Mars XXX</strong></h3>
    <p> Aujourd'hui c'etait mon jours de repos j'en est donc profiter pour aller dans les cartier chaud rendre visite a mon pere...il est un peu comme moi mais il est beaucoup plus courageux,je lui est posé des question sur ma double personalité,il m'a dit qu'il ne voulait pas m'en parler et que je devais trouver tous seul.</p>
    <img src="public/img/photo.jpg" style="width: auto;height: 30%;" alt="">
    <button onclick="PageSuivante(2)">Page Précedente</button></div>
    `,
    `
    `,
];
content_page2 = [
    `<h3><strong>Identité</strong></h3><br><p>Nom: Burminghton</p><p>Prenom: Azrael</p><br><p>Lieux de Naissance: Shiganshina</p><p>Date de Naissance: 29 Decembre XXX</p><p>Age: 21 ans</p><br><p>Numéro D'identité: 4929 1049 6131 4085</p><p>Nombre de frère et soeurs: Fils Unique</p><br><p>Lieux de Résidence: Shiganshina</p><p>Evenement Notable:</p><dd> - N/A</dd><img style="width: auto; height: 30%;" src="public/img/Tampon-BS.jpg" alt=""><br><div class="flex-box"><button onclick="PageSuivante(2)">Page Suivante</button></div>`,
    `
    <h3><strong>13 Mars XXX</strong></h3>
    <p> Aujourd'hui,je suis partit en entrainement avec le BDE,nous somme monter dans les hauteur du camps d'entrainement et nous nous somme entrainer a l'épée,mais ne vous inquitez pas le petit Azrael n'est plus le meme je suis devenue bien plus fort qu'avant j'ai d'ailleur battut Werner en combat.</p>
    <h3><strong>14 Mars XXX</strong></h3>
    <p>Un homme a ouvert la porte! j'ecris cela maitenant car si un titan rentre c'est la mort assuré pour moi...Papi si je meurt je t'aime...Je suis encore en vie!!!! nous avons fait sortir le titant et avons fait des patrouille,mais malheuresement Traffi c'est fait attaqué part un traitre du battaillon je ne sais pas comment mais j'ai tout oublier je me souvien juste avoir defendu traffi...</p>
    <button onclick="PageSuivante(3)">Page Suivante</button></div>
    `,
    `
    <p> Mon but est maitenant de rejoindre l'escouade commando pour prouver ma force a tout le monde et devenir le 2eme a tuer un titans !</p>
    `,
];

function PageSuivante(nb) {
    document.getElementById("page1").innerHTML = content_page1[nb - 1];
    document.getElementById("page2").innerHTML = content_page2[nb - 1];
};

setTimeout(function() {
    PageSuivante(1);
}, 10);