<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BooksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('books')->insert([ //1
            'title' => 'EL HOMBRE EN BUSCA DE SENTIDO',
            'author' => 'VIKTOR E. FRANKL',
            'rating' => '4.7',
            'photo_url' => 'https://firebasestorage.googleapis.com/v0/b/enerfull-c3272.appspot.com/o/pruebafs%2Fbok1.webp?alt=media&token=eac4e137-3662-4080-b850-b82bb4bc3578',
            'description' => 'Nueva traducción de "El hombre en busca de sentido". El doctor Frankl, psiquiatra y escritor, suele preguntar a sus pacientes aquejados de múltiples padecimientos: «¿Por qué no se suicida usted? Y muchas veces, de las respuestas extrae una orientación para la psicoterapia a aplicar: a éste, lo que le ata a la vida son los hijos; al otro, un talento, una habilidad sin explotar; a un tercero, quizás, sólo unos cuantos recuerdos que merece la pena rescatar del olvido. Tejer estas tenues hebras de vidas rotas en una urdimbre firme, coherente, significativa y responsable es el objeto con que se enfrenta la logoterapia.',
            'stock' => 3, 
            'category_id' => 2,
        ]);
        DB::table('books')->insert([ //2
            'id' => 2,
            'title' => 'WALKAWAY',
            'author' => 'CORY DOCTOROW',
            'rating' => '5',
            'photo_url' => 'https://firebasestorage.googleapis.com/v0/b/enerfull-c3272.appspot.com/o/pruebafs%2Fbook2.webp?alt=media&token=c06a2753-78e8-4ce5-9886-e0dc57f13545',
            'description' => 'Hubert Vernon Rudolph Clayton Irving Wilson Alva Anton Jeff Harley Timothy Curtis Cleveland Cecil Ollie Edmund Eli Wiley Marvin Ellis Espinoza (conocido por sus amigos como Hubert, Etc) era demasiado viejo para estar en esa fiesta comunista.  Pero después de ver el desmoronamiento de la sociedad moderna, no le queda otro sitio donde estar, excepto entre la escoria de jóvenes descontentos que se pasan la noche de fiesta y desprecian a las ovejas que ven por la mañana. Después de conocer a Natalie, una heredera muy rica que intenta escapar de las garras de su represivo padre, los dos deciden renunciar por completo a la sociedad formal y marcharse.',
            'stock' => 3, 
            'category_id' => 1, //Ficción
        ]);
        DB::table('books')->insert([ //3
            'id' => 3,
            'title' => 'INFLUENCIA LA PSICOLOGIA DE PERSUASION',
            'author' => 'ROBERT CIALDINI',
            'rating' => '4.8',
            'photo_url' => 'https://firebasestorage.googleapis.com/v0/b/enerfull-c3272.appspot.com/o/pruebafs%2Fbok3.webp?alt=media&token=48d20652-e313-4fc3-8f42-3fd22c45dbc1',
            'description' => 'El libro más importante sobre la ciencia de la persuasión que puede cambiar tu vida.  Tienes en tus manos la obra maestra de la persuasión. Un libro extraordinario que te ayudará a ser más eficaz en el trabajo y en la vida diaria, a maximizar tu carisma, a mejorar tus relaciones y estrategias para convencer y llegar a acuerdos ventajosos, en definitiva, alcanzar el exito a todos los niveles.  En este manual definitivo, Cialdini explica, con rigor científico y de forma sencilla, cómo provocar en las personas la respuesta deseada y cómo protegerse ante intentos poco eticos de persuasión.  Un compendio de sabiduría para convertirte en un hábil influyente.',
            'stock' => 2, 
            'category_id' => 2, //Psicología
        ]);
        DB::table('books')->insert([ //4
            'id' => 4,
            'title' => 'DONDE NO PUEDAS ENCONTRARME',
            'author' => 'TAMARA MOLINA',
            'rating' => '4.9',
            'photo_url' => 'https://firebasestorage.googleapis.com/v0/b/enerfull-c3272.appspot.com/o/pruebafs%2Fbok4.webp?alt=media&token=4f02f261-63a1-4278-bc86-4a47e88b7aa6',
            'description' => 'NO CONCIBE UNA VIDA SIN ÉL  Es por ello que decide dejarlo todo atrás y alejarse completamente de él, con la esperanza de poder sanar su corazón y evitar la tentación de volver a caer en esa destructiva relación.  Huir donde no pueda hacerle daño.  DONDE NO PUEDA ENCONTRARLA  Una nueva vida en la que refugiarse y con la que enfrentarse a sus inseguridades, sus heridas, sus miedos y su inoportuna atracción hacia Gael, un chico que forma parte de su nueva rutina.  CON QUIEN PODRÍA REDESCUBRIR EL AMOR  Pero Gala tiene claro que volver a abrir su corazón no entra en sus planes.  Ella sabe que lo que necesita es centrarse en sí misma.',
            'stock' => 1, 
            'category_id' => 3, //novelas
        ]);
        DB::table('books')->insert([ //5
            'id' => 5,
            'title' => 'AQUELLO QUE NOS DA CALOR',
            'author' => 'NEIL GAIMAN',
            'rating' => '5',
            'photo_url' => 'https://firebasestorage.googleapis.com/v0/b/enerfull-c3272.appspot.com/o/pruebafs%2Fbok5.webp?alt=media&token=74ec2e7b-bc1e-477c-b5ab-321c6d5c78d9',
            'description' => 'Un nuevo libro poderoso y necesario de Neil Gaiman, publicado en colaboración con ACNUR, para hablar de conflictos, desplazamientos forzados y la importancia de acoger.  A veces solo hace necesitamos que alguien reafirme que tenemos derecho a estar aquí.  En 2019, Neil Gaiman preguntó a sus seguidores de Twitter: ¿que os recuerda a la calidez? Su pregunta reveló nuestro deseo compartido de sentirnos seguros, bienvenidos y cálidos en un mundo que a menudo puede ser hostil. Más de 1.000 respuestas despues, Neil comenzó a entretejer respuestas de todo el mundo en un poema en apoyo al llamamiento por el frío extremo de ACNUR.  Aquello que nos da calor es una exploración del desplazamiento y la huida del conflicto a traves de los objetos y recuerdos que representan la calidez.',
            'stock' => 4, 
            'category_id' => 4, //Infantiles
        ]);
        DB::table('books')->insert([ //6
            'id' => 6,
            'title' => 'LOS NIÑOS DEL AGUA',
            'author' => 'HIRAM RUVALCABA',
            'rating' => '5',
            'photo_url' => 'https://firebasestorage.googleapis.com/v0/b/enerfull-c3272.appspot.com/o/pruebafs%2Fbok6.webp?alt=media&token=51378618-9113-4921-8783-413d5d9c0fd1',
            'description' => 'Los niños del agua, Premio Nacional de Crónica Joven Ricardo Garibay 2020, cuenta con siete crónicas: El teléfono del viento, Paraíso en el mar del dolor, Jizo san, La bella durmiente, Los niños del agua, , La carpa de mis sueños y Butsudan. En ellas Hiram Ruvalcaba explora dos temas centrales: las relaciones culturales, religiosas y literarias entre México y Japón y el destino espiritual de los niños, los bebés y los fetos muertos. Es el segundo libro de Ruvalcaba en Tierra Adentro.',
            'stock' => 1, 
            'category_id' => 5, //Literatura
        ]);
        DB::table('books')->insert([ //7
            'id' => 7,
            'title' => 'NEUROEDUCACION Y LECTURA',
            'author' => 'FRANCISCO MORA',
            'rating' => '4.5',
            'photo_url' => 'https://firebasestorage.googleapis.com/v0/b/enerfull-c3272.appspot.com/o/pruebafs%2Fb7.webp?alt=media&token=fa81625d-649b-4053-86e5-cf8adae3e430',
            'description' => 'Este libro trata de esos vericuetos del cerebro por donde corretean las letras, y de cómo con ellas se enciende una nueva luz para uno mismo y el universo que contempla. Y del largo camino que entrelaza lenguaje y lectura. Y también, sobre todo, de cómo se aprende a leer. Pues la lectura transforma el cerebro en su química y en su física, a través de procesos de «recableado neuronal» en los que el cerebro «reinventa» caminos que logran, por ejemplo, que las personas ciegas o los niños que tienen dificultades con la lectura puedan leer bien y alcancen una fluidez de lectura tan alta como la de cualquier otra persona. La neuroeducación nos señala la importancia de esos mecanismos que son la emoción y el chispazo de la curiosidad, y con ellos la apertura de esa ventana que es la atención, y los mecanismos conscientes que nos conducen al aprendizaje y la memoria.',
            'stock' => 6, 
            'category_id' => 6, //Educación
        ]);
        DB::table('books')->insert([ //8
            'id' => 8,
            'title' => '¿Y AHORA QUE?: ESCRITOS DE UN INCONFORMISTA PEDAGÓGICO',
            'author' => 'GINO FERRI',
            'rating' => '4.3',
            'photo_url' => 'https://firebasestorage.googleapis.com/v0/b/enerfull-c3272.appspot.com/o/pruebafs%2Fbok8.webp?alt=media&token=7ff1f5ce-a5b8-4aca-8f37-1935423da507',
            'description' => 'HE AQUI UNA OBRA QUE SE PLANTEA COMO MEJORAR LA EDUCACION. ASUMIENDO ESTE COMPROMISO, HACE YA UNOS CUANTOS AÑOS QUE GINO FERRI COMENZO SU TAREA COMO FORMADOR. EL AUTOR HUYE DE UN DISCURSO QUE SEA DEL GUSTO DE  TODOS Y SE DIRIGE A LOS LECTORES CON UN PERSON.',
            'stock' => 2, 
            'category_id' => 6, //Educación
        ]);
        DB::table('books')->insert([ //9
            'id' => 9,
            'title' => 'HÁBITOS ATÓMICOS (EDICIÓN ESPECIAL TAPA DURA)',
            'author' => 'JAMES CLEAR',
            'rating' => '5',
            'photo_url' => 'https://firebasestorage.googleapis.com/v0/b/enerfull-c3272.appspot.com/o/pruebafs%2Fbok8.webp?alt=media&token=7ff1f5ce-a5b8-4aca-8f37-1935423da507',
            'description' => 'La edición especial que tienes en tus manos incluye un poderoso curso en 11 lecciones para poner en práctica el cambio y mejorar tus hábitos en solo 30 días, una guía simple y paso a paso para crear y construir hábitos duraderos. Con el contenido adicional de esta nueva edición del libro conseguirás pasar a la acción, eliminar la incertidumbre en la construcción de tus hábitos y sabrás exactamente qué hacer a cada momento. Incluye un cuaderno de trabajo con plantillas y hojas de trucos, además de nuevos ejemplos y aplicaciones inéditas creadas por el autor. Aprenderás un marco de trabajo que funciona para cualquier hábito.',
            'stock' => 5, 
            'category_id' => 7, //Auto ayuda
        ]);
        DB::table('books')->insert([ //10
            'id' => 10,
            'title' => 'DESPERTANDO AL GIGANTE INTERIOR',
            'author' => 'ANTHONY ROBBINS',
            'rating' => '5',
            'photo_url' => 'https://firebasestorage.googleapis.com/v0/b/enerfull-c3272.appspot.com/o/pruebafs%2Fbok10.webp?alt=media&token=5baae823-975a-4590-9c26-a4947e4861a6',
            'description' => '"Despertando al Gigante Interior" es una obra clásica del autor y orador motivacional Anthony Robbins. En este libro, Robbins explora el potencial humano y cómo liberar nuestras capacidades internas para alcanzar el éxito y la plenitud en la vida. A través de técnicas de programación neurolingüística (PNL), visualización, y cambio de patrones mentales, Robbins ofrece herramientas prácticas para superar obstáculos, establecer metas claras y crear cambios positivos en todas las áreas de la vida, desde la salud y las relaciones hasta la carrera y las finanzas. Es una guía inspiradora para aquellos que buscan alcanzar su máximo potencial y vivir una vida extraordinaria.',
            'stock' => 2, 
            'category_id' => 7, //Auto ayuda
        ]);
        DB::table('books')->insert([ //11
            'id' => 11,
            'title' => 'EL MAPA ES EL MENSAJE',
            'author' => 'SERGIO DE REGULES',
            'rating' => '4',
            'photo_url' => 'https://firebasestorage.googleapis.com/v0/b/enerfull-c3272.appspot.com/o/pruebafs%2Fbook11.webp?alt=media&token=7946a386-3810-4045-9018-f048f5264b08',
            'description' => 'A través de una serie de relatos que surgen de la historia de la cartografía, Sergio de Régules expone la problemática principal de esta disciplina: ¿cómo puede representarse a la Tierra en un plano bidimensional y cuáles han sido los resultados de los intentos de tener una imagen fiel del mundo en un papel? A partir de esta pregunta, la obra narra historias que abordan los problemas relacionados con la concepción de un mapa por medio de la geometría, la historia, la sociología, la tecnología y las artes.',
            'stock' => 2, 
            'category_id' => 8, //Geografía
        ]);
        DB::table('books')->insert([ //12
            'id' => 12,
            'title' => 'DE NEURONAS, EMOCIONES Y MOTIVACIONES',
            'author' => 'HERMINIA PASANTE',
            'rating' => '4.89',
            'photo_url' => 'https://firebasestorage.googleapis.com/v0/b/enerfull-c3272.appspot.com/o/pruebafs%2Fbook12.webp?alt=media&token=a014e337-5896-45aa-96e3-ca0f69955c32',
            'description' => 'Esta obra busca explicar los fundamentos neuronales de la personalidad, así como los de algunas afecciones y fenómenos que influyen en nuestra conducta. En primer lugar, la autora explica los procesos básicos del cerebro, la comunicación neuronal y la naturaleza de los neurotransmisores. En el siguiente capítulo habla del origen cerebral de problemas emocionales como la depresión y la ansiedad, seguido de otras condiciones como la esquizofrenia y el autismo. Más adelante describe el efecto que tienen distintas drogas a nivel neuronal, y concluye hablando sobre los fundamentos cerebrales de conceptos como sexualidad y género.',
            'stock' => 8, 
            'category_id' => 9, //Ciencia
        ]);
    }
}
