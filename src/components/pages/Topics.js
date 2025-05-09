import React from 'react'
import Topic1 from '../images/slider1.jpeg'
import Topic2 from '../images/slider2.jpeg'
import Topic3 from '../images/slider3.jpeg'
import Topic4 from '../images/slider4.jpeg'

const Topics = () => {
    return (
        <div>
            <section className='py-4 bg-info'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 my-auto'>
                            <h4>Topics</h4>
                        </div>
                        <div className='col-md-8 my-auto'>
                            <h6 className='float-end'>Home / Topics</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-12 text-center'>
                            <h3 className='main-heading text-center'>The Rock & Vin Diesel</h3>
                        </div>
                        <div className='col-md-12'>
                            <img src={Topic1} className="img-fluid rounded" />
                            <p>The Rock and Vin Diesel are actors in the Fast & Furious franchise. Their real names are Dwayne Johnson and Mark Sinclair, respectively. Either of these bald actors occasionally form a duo with another bald actor named Jason Statham.</p>
                            <p>Their relationship has been publicly tumultuous. A significant feud erupted in 2016 during the filming of The Fate of the Furious, when Dwayne Johnson called out an unnamed male co-star for unprofessional behavior in a since-deleted Instagram post. It was widely speculated and later confirmed that this post was directed at Vin Diesel.</p>
                            <p>Over the following years, the tension between them remained, with both actors making indirect and sometimes direct comments about each other in interviews. This led to Dwayne Johnson not appearing in the ninth installment of the main Fast & Furious saga and instead focusing on the spin-off movie Hobbs & Shaw.</p>
                            <p>Despite the public falling out, there have been attempts and hints at reconciliation. Vin Diesel publicly appealed for Johnson's return to the franchise for Fast X. While Johnson initially dismissed this as "manipulation", he did make a cameo appearance in Fast X.</p>
                            <p>Most recently, at the 2025 Golden Globes, the two had a brief but notable interaction when Vin Diesel said "Hey, Dwayne" from the stage. This moment sparked renewed speculation about the status of their relationship. While some fans interpreted it as a sign of lingering tension, Vin Diesel later posted a throwback photo of himself and Johnson with the caption "All love Always…", suggesting a possible reconciliation.</p>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section className='section'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-12 text-center'>
                            <h3 className='main-heading text-center'>Jang Wonyoung</h3>
                        </div>
                        <div className='col-md-12'>
                            <img src={Topic2} className="img-fluid rounded" />
                            <p>Jang Wonyoung is a South Korean singer-songwriter, dancer, model, and MC under Starship Entertainment. She is best known as the visual and sub vocalist of the girl group IVE.</p>
                            <p>She was born in 31 August 2004 at Ichon-Dong, Yongsan-Gu, Seoul, South Korea. Wonyoung was only thirteen years old when she joined the popular survival show Produce 48 as the youngest trainee. Her visuals and unique charms captivated the viewers from the start.</p>
                            <p>She earned the most votes and became the center of the project group IZ*ONE, debuting with them on October 29, 2018. After three years of promotions, the group officially disbanded on April 29, 2021. Following this, Wonyoung continued to train while pursuing solo activities.</p>
                            <p>In early November 2021, Starship Entertainment revealed that Wonyoung and her former IZ*ONE groupmate Yujin would join their new girl group. Wonyoung made her debut as an IVE member on December 1, 2021.</p>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section className='section'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-12 text-center'>
                            <h3 className='main-heading text-center'>X-Men</h3>
                        </div>
                        <div className='col-md-12'>
                            <img src={Topic3} className="img-fluid rounded" />
                            <p>The X-Men is a team from Marvel comics that is known for their mutant abilities. All of the members have mutant abilities that make them different from normal humans.</p>
                            <p>This team was founded by Professor Charles Xavier as a response to the emergence of naturally occurring superhumans known as mutants among the baseline human society.</p>
                            <p>Dedicated to promoting a dream of peaceful coexistence between mutants and humans, Xavier trained his X-Men in the use of their mutant powers at the Xavier's School for Gifted Youngsters, forging them into defenders of a world that hates and fears them.</p>
                            <p>Over the years, the heroes of mutantkind found their mission constantly endangered by both reactionary humans and fanatic mutants.</p>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section className='section'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-12 text-center'>
                            <h3 className='main-heading text-center'>The Hulk</h3>
                        </div>
                        <div className='col-md-12'>
                            <img src={Topic4} className="img-fluid rounded" />
                            <p>The Hulk is a character from Marvel comics that is a member of Avengers. His real name is Bruce Banners and he is the strongest member of Avengers. He is an American theoretical physicist famous for his work in the fields of nuclear physics and gamma radiation.</p>
                            <p>He was recruited by General Thaddeus E. "Thunderbolt" Ross and the U.S. Army to develop the first Gamma Bomb. During its first live test, he was bombarded with a massive dose of gamma rays while saving Rick Jones, a teenager who had made his way onto the test site.</p>
                            <p>He was mutated into a green behemoth, the living personification of anger that was fueled by pure physical strength, and would come to be known as the near-mindless "Incredible Hulk". Fearful of the damage that the Hulk could inflict, as well as fleeing from the military, he went on the run.</p>
                            <p>In the years that followed, Banner became a loner, occasionally joining together with other heroes, but more often than not struggling to be left alone. He was a founding member of the group of heroes known as the Avengers, "Earth's Mightiest Heroes", as well as a founding member of the group of outsider heroes known as the Defenders, but would not remain with either group for too long (although, admittedly, his time with the Defenders was much longer than his time with the Avengers was).</p>
                            <p>Over the years, the Hulk's personality changed drastically, owing to Banner's undiagnosed dissociative identity disorder. At times intelligent, at other times savage, the one constant in the Hulk's existence was his quest for solitude and peace in a world that would not leave him alone.</p>
                        </div>
                    </div>
                </div>
            </section>
            <br />
        </div>
    )
}

export default Topics