content_page1 = [
    `<h3><strong>Partie 1 : Marco Klaussmann</strong></h3>
    <p>En l'an 792, Marco venait de rentré de la dernière expédition avec le reste du bataillon. Il avait réussi à éliminer quelques titans avec le nouvel équipement créé par Jonathan Belmont, malheuresement, le bataillon avait perdu pas mal d'effectif notamment des amis pour Trystan comme Azrael. Après l'expédition, il se consacra à former les nouvelles recrues du bataillon notemment avec l'équipement, puisque celui-ci fut démocratiser et au fil du temps donner à tout les soldats. Pendant 3 ans, il continuait de faire son travail de sous-officier jusqu'a passer Adjudant, il avais repris d'ailleurs complétement la section des éclaireurs suite au départ du 2dn Lieutenant Konrad Steinritter. C'est lors d'une expédition qui était de trop pour lui qu'il décida de quitter l'armée pour se concentrer sur sa vie, c'était d'ailleurs pendant cette expédition que le major Baggy Blutbach mourru après avoir sauvé Mustang. Après son départ, il retourna à son district d'origine, le district de Trost, c'est là qu'il rencontra, celle qui allait devenir sa femme jusqu'a la fin de sa vie : Julia Kleiner.</p>`,
    `
    <p>C'était lors du 14ème anniversaire de Clémence que Marco et sa petite famille fît la recontre de la famille qui allait boulversé sa vie. En effet, pendant cette journée, alors qu'ils se promenaient à la lisière de la forêt, un jeune adolescent surgit brusquement de la forêt, entrain d'essayer de poursuivre un lapin, en vain. A vue d'œil, Marco aurait dit qu'il avait à peu près le même âge que Clémence. Quand le garçon se rendit compte qu'il venait d"effrayer trois personnes en déboulant comme ceci, il s'excusa et ajouta quelques mots : </p><br> <div class="dialogue">"Désolé de vous avoir fait peur comme cela, j'étais en pleine chasse et je n'avais même pas remarqué que j'étais à la lisière de la forêt, je me nomme Thomas Vurst, enchanté de faire votre connaissance."</div><br><br><p> "Vurst", se nom rappelait quelque chose à Marco, il en avait déjà entendu parler au village, c'est une famille qui habite en plein milieu de la forêt, elle reste assez distante du reste du village mais n'en est pas moins très sympathique et agréable quand on parle avec ses membres.</p>
    <button onclick="PageSuivante(1)">Page Précedente</button></div>
    `,
    `
    
    <div class="p-special2"><p> Thomas avais effectivement presque la même âge, il avait 15 ans et il a toujours vécu ici, ses parents aussi, en fait, sa famille à vécu ici depuis la nuit des temps. Une fois que la lune commençait à montrer le bout de son nez, Marco, Julia et Clémence décidèrent de rentrer chez eux. Pendant deux ans, les deux familles se voyait régulièrement, du notamment à la relation qu'entretenaient Clémence et Thomas. Pendant un soir, alors qu'ils fêtaient tous ensemble l'anniversaire de Julia. Klément demanda à Marco de le suivre dehors, il accepta et le suiva. Pendant plusieurs minutes, ils marchaient, jusqu'a arriver à une grotte, Klément se tourna vers Marco et lui annonça quelque chose. Il lui annonça qu'en réalité, la famille Vurst était une famille qui possédait une arme capable de vaincre les titans, le pouvoir de se transformer en titan. Marco pensait au début qu'il rêvait ou alors qu'on se foutait de sa gueule, mais ou bout de plusieurs minutes ou Klément lui expliquait le pourquoi du comment, il avait comme l'impression de le croire, et forcément, il se posait des questions, notamment la plus importante :</p></div>    
        <button onclick="PageSuivante(2)">Page Précedente</button>
    </div>
    `,
    `
    `,
];
content_page2 = [
    `<div class="p-special0"><p>Julia était le rayon de soleil de Marco, elle qui était toujours enthousiaste et qui ne déprimait jamais. Ils se marièrent et eurent une fille : Clémence Klaussmann. Clémence était le portrait craché de sa mère, toujours souriante, cependant, elle avais hérité des traits de son père, ce qui veut dire qu'a chaque fois qu'elle s'énervait ( ce qui était quand même assez rare ), elle faisait assez peur à tout ceux qui croisait son regard énervé. Pour élever convenablement et dans la paix leurs fille, Marco et Julia décida de déménager dans un petit village dans la campagne du mur Rose : le village de Dauper. Il s'agissait d'un petit village habité principalement par des chasseurs puisqu'il était situé tout bonnement juste à côté d'une forêt ainsi que des plaines. L'adaptation des Klaussmann se déroulait plutôt bien, Clémence n'était pas triste à l'idée de quitter les personnes qu'elle connaissait, et elle ne se plaignait pas non plus du changement entre un district et un village dans la campagne, ce qui est assez rare chez un enfant.</p></div><br><div class="flex-box"><button onclick="PageSuivante(2)">Page Suivante</button></div>`,
    `
    <p class="p-special1">Par la suite Marco dira au jeune Thomas que ce n'étais pas grave et qu'il ne fallait pas s'excuser autant de la sorte juste pour cela. Pour se faire pardonner, Thomas décida d'inviter la petit famille à venir prendre le thé chez lui afin qu'ils recontrent ses parents. Ils acceptèrent et suivirent Thomas dans la forêt jusqu'a arriver dans une clairière avec un grand chalet ainsi que quelques autres bâtiments qui servait pour stocker le gibier, les plantes, etc... Ils entreèrent dans la maison et directement, Marco fît la recontre des parents de Thomas, Lydia Vurst et Klément Vurst. Les deux adultes étaient un peu déconcerté de voir que 3 personnes accompagnés leurs fils, Thomas à donc raconter ce qu'il s'était passé et ses parents accèpterent de les laisser entrer pour prendre le thé. Pendant quelques heures ils firent connaissance et discutèrent notamment de ce que faisait Marco au sein du bataillon. Mais ce qui est important, c'était de voir la relation direct entre Clémence et Thomas, pendant toute l'après-midi, ils discutèrent à deux de leurs vies.</p>
    <div class="flex-box">
        <button onclick="PageSuivante(3)">Page Suivante</button>
    </div>
    `,
    `
    <p> Pourquoi ne pas utiliser ce pouvoir contre les Titans et enfin l'emporter sur eux. Il posa cette question à Klément qui lui répondit calmement que ce serait trop dangereux</p>
    `,
];


function PageSuivante(nb) {
    document.getElementById("page1").innerHTML = content_page1[nb - 1];
    document.getElementById("page2").innerHTML = content_page2[nb - 1];
};

setTimeout(function() {
    PageSuivante(1);
}, 10);