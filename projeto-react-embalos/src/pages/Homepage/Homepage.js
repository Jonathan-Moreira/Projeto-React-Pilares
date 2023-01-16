import Card from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { HomePageContainer } from "./style";

export function Homepage (props) {
        
const {results} = props

const renderList = results.map(char =>{
        return(
                <Card 
        img={char.image}
        name={char.name}
        tipo={char.tipo}
        card={char.card}
        
        />
        )
})

    return (
        <HomePageContainer>

            <form>

            <label htmlFor="personagem">Personagem</label>
            <input type="text" id="name"/>

            <label htmlFor="tipo de card">Tipo de Card</label>
            <input type="text" id="tipo de card"/>

            

            </form>

        <Header/>
        <main>
        <Card 
        img={"https://support-leagueoflegends.riotgames.com/hc/article_attachments/1500006115502/image__45_.png"}
        name={"Lux"}
        tipo={"Guardiã estelar"}
        card={"Card Premium"}
        
        />

        {/* <Card 
        img={"https://support-leagueoflegends.riotgames.com/hc/article_attachments/1500006115562/SpaceGroove_Samira_Final.jpg"}
        name={"Samira"}
        tipo={"Devoradora espacial"}
        card={"Card Premium"}
        /> */}
       
       <Card 
        img={"https://support-leagueoflegends.riotgames.com/hc/article_attachments/1500006231481/SpaceGroovePRESTIGE_Lulu_Final.jpg"}
        name={"Lulu"}
        tipo={"Fofura das galaxias"}
        card={"Card Edição de Prestígio"}
        />

        <Card 
        img={"https://noticias.maisesports.com.br/wp-content/uploads/2022/11/nami-prestigio-embalos-do-espaco-skin-lol-2048x1152.jpg"}
        name={"Nami"}
        tipo={"Profundezas do espaço"}
        card={"Card Card Edição de Prestígio"}
        />

<Card 
        img={"https://static1-br.millenium.gg/articles/0/10/79/0/@/128116-splash-art-de-syndra-guardia-estelar-de-prestigio-no-lol-imagem-riot-gamesdivulgacao-full-1.png"}
        name={"Syndra"}
        tipo={"Guardiã magestosa"}
        card={"Card Edição de Prestígio"}
        />


{/* <Card 
        img={"https://noticias.maisesports.com.br/wp-content/uploads/2022/11/lissandra-embalos-do-espaco-skin-lol.jpg"}
        name={"Lissandra"}
        tipo={"A gélida estelar"}
        card={"Card Premium"}
        /> */}

<Card 
        img={"https://noticias.maisesports.com.br/wp-content/uploads/2022/11/taric-embalos-do-espaco-skin-lol.jpg"}
        name={"Taric"}
        tipo={"Ritmo no espaço"}
        card={"Card Premium"}
        
        />

{/* <Card 
        img={"https://noticias.maisesports.com.br/wp-content/uploads/2022/11/twisted-fate-embalos-do-espaco-skin-lol.jpg"}
        name={"Twisted Fate"}
        tipo={"Festa de cartas"}
        card={"Card Premium"}
        /> */}

<Card 
        img={"https://noticias.maisesports.com.br/wp-content/uploads/2022/11/teemo-embalos-do-espaco-skin-lol.jpg"}
        name={"Teemo"}
        tipo={"O Explorador veloz"}
        card={"Card Premium"}
        />

        {/* <Card 
                img={"https://noticias.maisesports.com.br/wp-content/uploads/2022/06/LoL-Guardia-Estelar-Sona.jpg"}
                name={"Sona"}
                tipo={"Harmonia das estrelas"}
                card={"Card Premium"}
                /> */}



<Card 
        img={"https://static1-br.millenium.gg/articles/0/10/79/0/@/128115-splash-art-de-morgana-guardia-estelar-no-lol-imagem-riot-gamesdivulgacao-full-1.png"}
        name={"Morgana"}
        tipo={"A Bruxa "}
        card={"Card Nêmeses Espacial"}
        />


{/* <Card 
        img={"https://noticias.maisesports.com.br/wp-content/uploads/2022/06/LoL-Guardia-Estelar-Fiddlesticks.jpg"}
        name={"Fiddlesticks "}
        tipo={"O terror"}
        card={"Card Nêmesis Espacial"}
        /> */}


         <results></results>
        </main>
        </HomePageContainer>
    )




    
    }