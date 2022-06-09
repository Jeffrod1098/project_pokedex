import React from "react";
import PokemonImg1 from '../pokemonGamelist/a.png'
import PokemonImg2 from '../pokemonGamelist/b.png'
import PokemonImg3 from '../pokemonGamelist/c.png'
import PokemonImg4 from '../pokemonGamelist/d.png'
import PokemonImg5 from '../pokemonGamelist/e.png'
import PokemonImg6 from '../pokemonGamelist/f.png'
import PokemonImg7 from '../pokemonGamelist/g.png'
import PokemonImg8 from '../pokemonGamelist/h.png'
import PokemonImg9 from '../pokemonGamelist/i.png'
import PokemonImg10 from '../pokemonGamelist/j.png'
import PokemonImg11 from '../pokemonGamelist/k.png'
import PokemonImg12 from '../pokemonGamelist/l.png'
import PokemonImg13 from '../pokemonGamelist/m.png'
import PokemonImg14 from '../pokemonGamelist/n.png'
import PokemonImg15 from '../pokemonGamelist/o.png'
import PokemonImg16 from '../pokemonGamelist/p.png'
import PokemonImg17 from '../pokemonGamelist/q.png'
import PokemonImg18 from '../pokemonGamelist/r.png'



const PkmnGameList = () => {
    return(
        <div>
            <div className="gameListContainer">
                <h2>List of Pokémon Games in Order of Chronological Release (Core Series)</h2>
                <h3> #1 Pokémon Red and Green Japan </h3>              
                <div className="game">
                    <div>
                    <img className="redGreen" src={PokemonImg1}/>
                    </div>

                    <div className="keyFeatures">
                        <h3>Key Features:</h3>
                        <p>The goal of this game is to become the champion of the league and to capture all Pokémon for the completion of the Pokédex.</p>
                    </div>

                    <div className="releaseDate">
                        <h4>Release Date:</h4>
                        <p>February 27, 1996</p>
                    </div>

                    <div className="platform">
                        <h4>Platform:</h4>
                        <p>Game Boy</p>
                    </div>

                </div>

                <h3> #2 Pokémon Red and Blue </h3>              

                <div className="game">
                    <div>
                    <img src={PokemonImg2} className="gameImg"/>
                    </div>

                    <div className="keyFeatures">
                        <h3>Key Features:</h3>
                        <p>It makes use of the Game Link Cable that allows the player to connect two games together.</p>
                    </div>

                    <div className="releaseDate">
                        <h4>Release Date:</h4>
                        <p>September 28, 1998 (NA), October 23, 1998 (AU), October 5, 1999 (EU)</p>
                    </div>

                    <div className="platform">
                        <h4>Platform:  </h4>
                        <p>Game Boy</p>
                    </div>
                    
                </div>

                <h3> #3 Pokémon Yellow </h3>              

                <div className="game">
                    <div>
                    <img src={PokemonImg3} className="gameImg"/>
                    </div>

                    <div className="keyFeatures">
                        <h3>Key Features:</h3>
                        <p>This is the improved version of Pokémon Red and Blue that’s loosely based on the anime series.</p>
                    </div>

                    <div className="releaseDate">
                        <h4>Release Date:</h4>
                        <p>September 12, 1998 (JP), September 3, 1999 (AU), October 19, 1999 (NA), June 16, 2000 (EU)</p>
                    </div>

                    <div className="platform">
                        <h4>Platform:  </h4>
                        <p>Game Boy, Game Boy Color</p>
                    </div>
                    
                </div>



                <h3> #4 Pokemon Gold and Silver </h3>              

                <div className="game">
                    <div>
                    <img src={PokemonImg4} className="gameImg"/>
                    </div>

                    <div className="keyFeatures">
                        <h3>Key Features:</h3>
                        <p>For this game, there are 100 new Pokémon species to capture and the player can choose the name of the character.

</p>
                    </div>

                    <div className="releaseDate">
                        <h4>Release Date:</h4>
                        <p>November 21, 1999 (JP), October 13, 2000 (AU), October 15, 2000 (NA), April 6, 2001 (EU)</p>
                    </div>

                    <div className="platform">
                        <h4>Platform:  </h4>
                        <p>Game Boy Color</p>
                    </div>
                    
                </div>



                <h3> #5 Pokémon Crystal </h3>              

                <div className="game">
                    <div>
                    <img src={PokemonImg5} className="gameImg"/>
                    </div>

                    <div className="keyFeatures">
                        <h3>Key Features:</h3>
                        <p>The player can choose the main character’s gender and it includes new subplots.</p>
                    </div>

                    <div className="releaseDate">
                        <h4>Release Date:</h4>
                        <p> December 14, 2000 (JP), July 29, 2001 (NA), November 2, 2001 (EU), September 30, 2001 (AU)</p>
                    </div>

                    <div className="platform">
                        <h4>Platform:  </h4>
                        <p>Game Boy Color</p>
                    </div>
                    
                </div>



                <h3> #6 Pokémon Ruby and Sapphire </h3>              

                <div className="game">
                    <div>
                    <img src={PokemonImg6} className="gameImg"/>
                    </div>

                    <div className="keyFeatures">
                        <h3>Key Features:</h3>
                        <p>Some key features of these versions include double battles and new Pokémon abilities.</p>
                    </div>

                    <div className="releaseDate">
                        <h4>Release Date:</h4>
                        <p> November 21, 2002 (JP), March 19, 2003 (NA), April 3, 2003 (AU), July 25, 2003 (EU)</p>
                    </div>

                    <div className="platform">
                        <h4>Platform:  </h4>
                        <p>Game Boy Advance</p>
                    </div>
                    
                </div>



                <h3> #7 Pokémon FireRed and LeafGreen </h3>              

                <div className="game">
                    <div>
                    <img src={PokemonImg7} className="gameImg"/>
                    </div>

                    <div className="keyFeatures">
                        <h3>Key Features:</h3>
                        <p>There is a contextual help menu and a new character in the region that the player can access.</p>
                    </div>

                    <div className="releaseDate">
                        <h4>Release Date:</h4>
                        <p>January 29, 2004 (JP), September 7, 2004 (NA), September 23, 2004 (AU), October 1, 2004 (EU)</p>
                    </div>

                    <div className="platform">
                        <h4>Platform:  </h4>
                        <p>Game Boy Advance</p>
                    </div>
                    
                </div>



                <h3> #8 Pokémon Emerald </h3>              

                <div className="game">
                    <div>
                    <img src={PokemonImg8} className="gameImg"/>
                    </div>

                    <div className="keyFeatures">
                        <h3>Key Features:</h3>
                        <p>The goal remains the same but the main subplot here is to beat two criminal organizations.</p>
                    </div>

                    <div className="releaseDate">
                        <h4>Release Date:</h4>
                        <p>September 16, 2004 (JP), May 1, 2005 (NA), June 9, 2005 (AU), October 21, 2005 (EU)</p>
                    </div>

                    <div className="platform">
                        <h4>Platform:  </h4>
                        <p>Game Boy Advance</p>
                    </div>
                    
                </div>



                <h3> #9 Pokémon Diamond and Pearl </h3>              

                <div className="game">
                    <div>
                    <img src={PokemonImg9} className="gameImg"/>
                    </div>

                    <div className="keyFeatures">
                        <h3>Key Features:</h3>
                        <p>One key feature of this game is the Internet play that allows players to go online and play using a Wi-Fi connection. </p>
                    </div>

                    <div className="releaseDate">
                        <h4>Release Date:</h4>
                        <p>September 28, 2006 (JP), April 22, 2007 (NA), June 21, 2007 (AU), July 27, 2007 (EU), February 14, 2008 (KOR)</p>
                    </div>

                    <div className="platform">
                        <h4>Platform:  </h4>
                        <p>Nintendo DS</p>
                    </div>
                    
                </div>



                <h3> #10 Pokémon Platinum </h3>              

                <div className="game">
                    <div>
                    <img src={PokemonImg10} className="gameImg"/>
                    </div>

                    <div className="keyFeatures">
                        <h3>Key Features:</h3>
                        <p>This game is the enhanced, stronger version of Pokémon Diamond and Pearl. </p>
                    </div>

                    <div className="releaseDate">
                        <h4>Release Date:</h4>
                        <p>September 13, 2008 (JP), March 22, 2009 (NA), May 22, 2009 (EU), May 14, 2009 (AU)</p>
                    </div>

                    <div className="platform">
                        <h4>Platform:  </h4>
                        <p>Game Boy</p>
                    </div>
                    
                </div>



                <h3> #11 Pokémon HeartGold and SoulSilver </h3>              

                <div className="game">
                    <div>
                    <img src={PokemonImg11} className="gameImg"/>
                    </div>

                    <div className="keyFeatures">
                        <h3>Key Features:</h3>
                        <p>The setting of these versions is in the Johto region where the main goal is to raise, catalog, and evolve Pokémon while trying to defeat other trainers. </p>
                    </div>

                    <div className="releaseDate">
                        <h4>Release Date:</h4>
                        <p>September 12, 2009 (JP), March 14, 2010 (NA), March 25, 2010 (AU), March 26, 2010 (EU)</p>
                    </div>

                    <div className="platform">
                        <h4>Platform:  </h4>
                        <p>Nintendo DS</p>
                    </div>
                    
                </div>



                <h3> #12 Pokémon Black and White </h3>              

                <div className="game">
                    <div>
                    <img src={PokemonImg12} className="gameImg"/>
                    </div>

                    <div className="keyFeatures">
                        <h3>Key Features:</h3>
                        <p>Some key features of these versions include rotation battles, a seasonal cycle, triple battles, and more.</p>
                    </div>

                    <div className="releaseDate">
                        <h4>Release Date:</h4>
                        <p>September 18, 2010 (JP), March 4, 2011 (EU), March 6, 2011 (NA), March 10, 2011 (AU)</p>
                    </div>

                    <div className="platform">
                        <h4>Platform:  </h4>
                        <p>Nintendo DS</p>
                    </div>
                    
                </div>



                <h3> #13 Pokémon Black 2 and White 2 </h3>              

                <div className="game">
                    <div>
                    <img src={PokemonImg13} className="gameImg"/>
                    </div>

                    <div className="keyFeatures">
                        <h3>Key Features:</h3>
                        <p>Most of the events in these occur in new locations in Unova Region’s western side where the player can also find new Pokémon. </p>
                    </div>

                    <div className="releaseDate">
                        <h4>Release Date:</h4>
                        <p>June 23, 2012 (JP), October 7, 2012 (NA), October 11, 2012 (AU), October 12, 2012 (EU)</p>
                    </div>

                    <div className="platform">
                        <h4>Platform:  </h4>
                        <p>Game Boy</p>
                    </div>
                    
                </div>



                <h3> #14 Pokémon X and Y </h3>              

                <div className="game">
                    <div>
                    <img src={PokemonImg14} className="gameImg"/>
                    </div>

                    <div className="keyFeatures">
                        <h3>Key Features:</h3>
                        <p>The goals are to foil the plans of Team Flare while trying to challenge the champion of the Pokémon League.</p>
                    </div>

                    <div className="releaseDate">
                        <h4>Release Date:</h4>
                        <p>October 12, 2013</p>
                    </div>

                    <div className="platform">
                        <h4>Platform:  </h4>
                        <p>Nintendo 3DS</p>
                    </div>
                    
                </div>



                <h3> #15 Pokémon Omega Ruby and Alpha Sapphire </h3>              

                <div className="game">
                    <div>
                    <img src={PokemonImg15} className="gameImg"/>
                    </div>

                    <div className="keyFeatures">
                        <h3>Key Features:</h3>
                        <p>The player will enjoy exploring a region that’s rich in Pokémon species and incredible people.</p>
                    </div>

                    <div className="releaseDate">
                        <h4>Release Date:</h4>
                        <p>November 21, 2014 (WW), November 28, 2014 (EU)</p>
                    </div>

                    <div className="platform">
                        <h4>Platform:  </h4>
                        <p>Nintendo 3DS</p>
                    </div>
                    
                </div>



                <h3> #16 Pokémon Sun and Moon </h3>              

                <div className="game">
                    <div>
                    <img src={PokemonImg16} className="gameImg"/>
                    </div>

                    <div className="keyFeatures">
                        <h3>Key Features:</h3>
                        <p>For these versions, the developers place more emphasis on Pokémon interactions and there are new features introduced in these versions too.</p>
                    </div>

                    <div className="releaseDate">
                        <h4>Release Date:</h4>
                        <p>November 18, 2016 (WW), November 23, 2016 (EU)</p>
                    </div>

                    <div className="platform">
                        <h4>Platform:  </h4>
                        <p>Nintendo 3DS</p>
                    </div>
                    
                </div>



                <h3> #17 Pokémon Ultra Sun and Ultra Moon </h3>              

                <div className="game">
                    <div>
                    <img src={PokemonImg17} className="gameImg"/>
                    </div>

                    <div className="keyFeatures">
                        <h3>Key Features:</h3>
                        <p>The setting of these versions is the Alola Region too. But they have an alternate storyline along with the introduction of new characters and gameplay features.</p>
                    </div>

                    <div className="releaseDate">
                        <h4>Release Date:</h4>
                        <p>November 17, 2017</p>
                    </div>

                    <div className="platform">
                        <h4>Platform:  </h4>
                        <p>Nintendo 3DS</p>
                    </div>
                    
                </div>



                <h3> #18 Pokémon Red and Green Japan </h3>              

                <div className="game">
                    <div>
                    <img src={PokemonImg18} className="gameImg"/>
                    </div>

                    <div className="keyFeatures">
                        <h3>Key Features:</h3>
                        <p>These versions include cooperative raid encounters. “Gigantamax” allows Pokémon to grow temporarily while “Dynamax” allows the Pokémon to take different forms.</p>
                    </div>

                    <div className="releaseDate">
                        <h4>Release Date:</h4>
                        <p>November 15, 2019</p>
                    </div>

                    <div className="platform">
                        <h4>Platform:  </h4>
                        <p>Nintendo Switch</p>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default PkmnGameList