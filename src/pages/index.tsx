import { AnimatePresence } from 'framer-motion';
import { AppLayout } from '../layout/AppLayout';

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual';
}

export default function Home() {
    return (
        <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={() => {
                if (typeof window !== 'undefined') {
                    window.scrollTo({ top: 0 });
                }
            }}>
            <AppLayout>
                <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, cupiditate possimus! Animi,
                    saepe. Assumenda recusandae aspernatur qui nemo possimus voluptatem veniam incidunt illo nostrum
                    placeat facilis ex at blanditiis eius distinctio soluta repellat, corrupti consectetur, iure amet?
                    Possimus aperiam porro adipisci! Esse architecto cumque possimus dolorem ea fugit veniam nemo et,
                    blanditiis inventore quam repellendus quo dicta iure eos quia eum commodi asperiores ratione omnis.
                    Aliquam, aliquid provident, explicabo blanditiis excepturi similique iusto nisi et rem dolores,
                    placeat nobis ipsum molestias enim. Voluptatem inventore accusamus sunt eius expedita deleniti,
                    atque explicabo saepe quaerat ullam ducimus nam vel, obcaecati corporis recusandae soluta quia
                    praesentium ipsam eveniet cum! Voluptate quisquam, error fugiat reprehenderit architecto illo omnis
                    magni. Error architecto laborum itaque cum dignissimos provident dolores ducimus officiis soluta,
                    distinctio magnam. Atque beatae architecto ad ut, repudiandae, dicta id quam nesciunt officiis earum
                    sapiente ex at tenetur rem libero saepe nostrum odio. Explicabo beatae sapiente voluptatum est. Quam
                    nam fugit reiciendis a delectus quia vel architecto cumque? Error sunt perferendis dolor fugit,
                    vitae repudiandae maxime suscipit soluta harum numquam accusantium quidem reprehenderit inventore
                    vel facere odit praesentium cum a placeat. Consequuntur harum dolores obcaecati beatae qui itaque
                    reiciendis! Natus, ipsam eius. Quia voluptates porro nostrum architecto quis, corporis, consequuntur
                    voluptatum, consequatur odio assumenda perferendis. Ea nihil magni ullam aspernatur nesciunt
                    perspiciatis vel numquam neque fugiat et dolor deleniti, eos laudantium sit eligendi recusandae nisi
                    maxime nam porro eius delectus sapiente quam! Autem impedit, beatae natus laborum, aliquam at ex
                    culpa aspernatur atque, qui obcaecati vero doloremque ea maxime unde mollitia voluptas? Doloremque
                    assumenda iusto excepturi enim architecto. Consequatur dolore perferendis atque commodi labore
                    corporis dolorem. Doloribus, nostrum. Recusandae hic blanditiis facere possimus deleniti nam itaque
                    fuga nihil. Rem dicta fuga totam architecto ullam eum vero, deleniti dignissimos odit consequuntur
                    ipsam sapiente, ipsa reprehenderit ea. Vitae doloribus dolorum, eius sunt recusandae rem vero, vel
                    at animi rerum commodi quo architecto similique quas veniam cum! Animi itaque similique odio laborum
                    nesciunt exercitationem facere autem voluptatibus corporis. Beatae, totam commodi nulla nihil, nobis
                    aspernatur possimus similique, dolor aliquid magni reprehenderit et tempore! Laboriosam repellat
                    ipsum ducimus accusantium libero porro. Dolor expedita, ut quod quibusdam iure eum. Repellat ipsa
                    cupiditate ad earum eaque consequatur dicta molestias, nobis velit impedit facilis dignissimos neque
                    illum nulla dolor voluptas atque soluta facere, sit error debitis. Necessitatibus culpa eaque
                    quaerat velit nam, tempore quo maiores dicta voluptates cum numquam ex, repudiandae excepturi
                    mollitia! Necessitatibus quo dolores nesciunt, eum quas eius placeat provident tempore facilis
                    debitis reiciendis recusandae ex omnis ipsa modi libero quae pariatur dolore voluptatem explicabo
                    beatae dolorem. Animi facere libero, suscipit veniam quam ipsa labore unde ipsam, officia at
                    asperiores quaerat ratione. Eos cumque ut, eius corrupti possimus voluptatem molestias suscipit!
                    Totam rerum ipsa quisquam quasi vero dolore exercitationem voluptatibus quos quis, minima unde
                    molestiae. Quae doloribus quia nostrum quos voluptatum perspiciatis delectus tenetur consectetur!
                    Exercitationem quasi, dicta vero incidunt molestiae architecto blanditiis aliquam voluptatem veniam
                    cupiditate quaerat quae. Ipsam possimus vitae aperiam sit maxime a dignissimos quo, tempore quidem
                    quos itaque odit in laborum nobis laboriosam debitis, quia optio. Enim tempore, recusandae
                    perferendis, facilis accusamus quasi sunt earum dignissimos vel provident ipsa voluptas ipsum.
                    Pariatur adipisci, laborum dolorem omnis deserunt praesentium amet dolores labore? Eveniet
                    voluptatum possimus tenetur voluptates quos beatae vel. Molestiae, explicabo corrupti laborum
                    perferendis cupiditate itaque sequi quidem voluptatem quam reprehenderit hic magni, necessitatibus
                    quasi soluta corporis molestias tempore atque deleniti debitis eveniet illo? Voluptate ut sint
                    fugit. Id accusamus soluta tempora rerum eaque ipsum corporis provident officiis, nam ut nihil est,
                    aliquid laborum? Aspernatur omnis voluptatibus voluptate excepturi ab! Magnam deleniti minus alias
                    doloremque, explicabo rem, quaerat, magni adipisci recusandae in modi. Placeat laboriosam sunt,
                    dolore cumque, illo nisi aliquam ducimus dolores minus ullam voluptatem illum eaque quia eius! Ipsum
                    eum voluptatem doloremque velit inventore nostrum consequuntur magnam iure commodi qui provident
                    dolorem nemo, vero vel harum voluptas vitae quaerat repudiandae nulla quis modi asperiores nihil
                    officiis hic. Fugit magnam deserunt suscipit quidem magni. Consequatur natus est velit accusamus
                    architecto? Est optio aspernatur tenetur odit impedit eos, possimus odio! A eos debitis suscipit
                    quis distinctio. Hic incidunt facere corporis provident maxime possimus laudantium qui officia
                    architecto vitae eligendi neque nam atque nesciunt voluptatibus libero sunt nostrum accusamus autem
                    dolor ut enim, et omnis repellendus! Tempore amet doloremque similique enim accusantium? Totam saepe
                    hic porro quas quaerat. Sit, alias consequatur! Nemo dignissimos similique amet, voluptatibus minus
                    ducimus laborum doloremque! Architecto a consequuntur numquam cum autem dolorum deserunt libero
                    cumque, voluptatibus dolorem illum nam culpa sapiente omnis, quaerat error at doloremque iure aut
                    cupiditate dignissimos? Consequuntur, cupiditate iste facere rerum obcaecati eaque similique velit
                    nihil optio distinctio omnis odit saepe modi excepturi suscipit! Beatae saepe eveniet deserunt vel
                    totam aperiam explicabo repellendus officia. Officia, minus perferendis laboriosam quis eum
                    dignissimos nesciunt velit.
                </div>
            </AppLayout>
        </AnimatePresence>
    );
}
