content_page1 = [
    `<h3><strong>Chapitre 0 : Introduction</strong></h3><p>Alors que la grande guerre des titans faisait rage, le roi Karl Fritz, après avoir hérité du Titan Originel, décida d'abandonner le conflit et de relocaliser son peuple vers l'île de Paradis. Et alors que les mahrs décidait de comment transférer les Titans primordiaux, une famille décida de fuir anonymement avec le reste du peuple Eldien. Les Strauss, la famille détenant le titan Assailant. Cette famille avait déjà fait en sorte d'éviter un maximum le conflit afin d'éviter de perdre ce Titan si important à leurs yeux. Ayant pris soin de prendre le necessaire, soit du liquide cérébrospinale, assez pour des dizaines et des dizaines d'années, ils brûlèrent toutes les connaissances sur le Titan Assaillant inscrit dans des manuscrits. Puis ils partirent en faisant attention à ce que personne ne les suivent. une fois arrivés sur Paradis avec tout les autres Eldiens. ils décidèrent de se donner un nouveau nom de famille afin que les Fritz ne les reconnaissent pas : Les Vurst.</p>`,
    `
    <p>Elle avait cependant fini par mettre en pause ses activités pour s'occuper de son fils.</p>
    <h3><strong>Chapitre 2 : Enfance</strong></h3>
    <p>Pendant son enfance, Trystan fut éduqué convenablement, il appris rapidement à lire, à chasser et à trouver des plantes. En terme de physique, il n'avais qu'un seul talent, son agilité, ce qu'il compensait avec sa rapidité et sa force médiocre. Ses parents avaient décidé de ne pas l'instruire sur l'histoire du Titan Assaillant, souhaitant qu'il conserve son innocence jusqu'au moment ou il devrait en hériter. En parlant d'innocence, Trystan, avait une façon de pensé qui différais un peu de sa famille, Tout ce qu'il rêvait, c'était de pouvoir vivre comme il le voulait, sans avoir de contraintes ou autres. C'est un enfant qui rêve énormément, il souhaite devenir comme son Grand Père, Marco Klaussmann qui pour lui était un peu comme un symbole de cette liberté, il révait déjà de rentrer dans le bataillon d'exploration et de partir en expédition comme lui.</p>
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
    `<h3><strong>Chapitre 1 : Trystan Vurst</strong></h3><br><p>Trystan était né le 26 septembre de l'an 830 dans le village de Dauper, un petit village de chasseur dans l'enceinte du Mur Rose. En parlant de chasseur, il est issue lui aussi d'une famille de chasseur, mise à part son Grand père, Marco Klaussmann qui avais servi dans l'armée au sein du bataillon d'Exploration jusqu'au grade d'Adjudant et qui avais fait partie des premiers soldats à porter un équipement tridimensionnel et à éliminer un Titan. Son père, Thomas Vurst, se rendait régulièrement à Trost afin de vendre les produits de la chasse tel que les peaux de bêtes, ou encore la viande ou tout autres produit pouvant être vendu. Sa mère était médecin, elle avait comme réputation de toujours soigner parfaitement bien avec une excellente connaissance des plantes médecinale.</p><br><div class="flex-box"><button onclick="PageSuivante(2)">Page Suivante</button></div>`,
    `
    <p>Plus le temps passait, plus Trystan grandissait à vue d'oeil, ses cheveux abordés une teinte bien plus noire, et il était possible de remarquer nettement que la couleur de ses yeux était verte avec un petite lueur de bleu. Trystan n'avais pas énormément d'amis, mise à part son meilleur ami actuellement, Heinz Schnitzer, Heinz venait du village de Ragako, ils se connaissaient car Marco Klaussmann et Werner Schnitzer, le grand père de Heinz étaient amis et camarade dans le bataillon d'exploration. Heinz venait donc de temps en temps au village de Dauper pour voir Trystan et Trystan de temps en temps se rendait au village de Ragako, ce qui lui permettait de voyager un minimum et de ne plus se sentir enfermer dans sa forêt comme il en avais l'habitude. Les deux amis n'avais qu'un seul point en commun, ils voulaient touts les deux rejoindre le Bataillon d'exploration, le reste, ils diffèrent complétement puisqu'Heinz avait un physique bien plus solide que celui de Trystan.</p>
    <div class="flex-box">
        <button onclick="PageSuivante(3)">Page Suivante</button>
    </div>
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