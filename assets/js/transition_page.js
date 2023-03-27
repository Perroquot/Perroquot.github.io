content_page1 = [
    `<h3><strong>Chapitre 0 : Introduction</strong></h3><p>Alors que la grande guerre des titans faisait rage, le roi Karl Fritz, après avoir hérité du Titan Originel, décida d'abandonner le conflit et de relocaliser son peuple vers l'île de Paradis. Et alors que les mahrs décidait de comment transférer les Titans primordiaux, une famille décida de fuir anonymement avec le reste du peuple Eldien. Les Strauss, la famille détenant le titan Assailant. Cette famille avait déjà fait en sorte d'éviter un maximum le conflit afin d'éviter de perdre ce Titan si important à leurs yeux. Ayant pris soin de prendre le necessaire, soit du liquide cérébrospinale, ils brûlèrent toutes les connaissances sur le Titan Assaillant inscrit dans des manuscrits. Puis ils partirent en faisant attention à ce que personne ne les suivent. une fois arrivés sur Paradis avec tout les autres Eldiens. ils décidèrent de se donner un nouveau nom de famille afin que les Fritz ne les reconnaissent pas : Les Vurst.</p>`,
    `
    <p>Elle avait cependant fini par mettre en pause ses activités pour s'occuper de son fils.</p>
    <h3><strong>Chapitre 2 : Enfance</strong></h3>
    <p>Test</p>
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
    `<h3><strong>Chapitre 1 : Trystan Vurst</strong></h3><br><p>Trystan était né le 26 septembre de l'an 830 dans le village de Dauper, un petit village de chasseur dans l'enceinte du Mur Rose. En parlant de chasseur, il est issue lui aussi d'une famille de chasseur, mise à part son Grand père, Marco Klaussmann qui avais servi dans l'armée au sein du bataillon d'Exploration jusqu'au grade d'Adjudant et qui avais fait partie des premiers soldats à porter un équipement tridimensionnel et à éliminer un Titan. Son père, Thomas Vurst, se rendait régulièrement à Trost afin de vendre les produits de la chasse tel que les peaux de bêtes, ou encore la viande ou tout autres produit pouvant être vendu. Sa mère était médecin, elle avait comme réputation de toujours soigner parfaitement bien avec une excellente connaissance des plantes médecinale,</p><br><div class="flex-box"><button onclick="PageSuivante(2)">Page Suivante</button></div>`,
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