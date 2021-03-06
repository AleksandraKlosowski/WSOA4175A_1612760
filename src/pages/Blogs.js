import { useState } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import BlogImage from '../assets/img3.jpg';
import BlogImageTwo from '../assets/img4.jpg';
import "../styles/Blogs.css";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const blogimage = [

    {
      imageSrc:
        'https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      title: 'Net & Web Art',
      description: <p><h6>This critical analysis will be focused on a digital web art piece entitled: Indirect Flight by Joe
      Hamilton. I will be looking at literary readings such as Walter Benjamin’s, “The Work of Art
      in the Age of Mechanical Reproduction” (1936) whereby he states that a reproduction of an
      image is publically more valuable than the original.</h6> 
      <h6>This website explores art through a multi-layered topography in reference to digital map
        navigation apps such as Waze and Google Maps. The layers incorporate various natural
        textures and a ‘scroll animation’ that enables the layers to move at different speeds from
        the base layer (the satellite images). This prevents the artwork from being a simple collage
        with three-dimensional images and provides viewers with a genuine 3D experience.
        Interestingly, it is through this scroll animated movement and layering that equally provides
        a certain two-dimensional feel as the cut-out of the layer is emphasized. Users are able to
        scroll and move in any direction on the site, whereby the art loops and creates the
        impression that the website is limitless. This is perhaps alluding to navigating around the
        globe. The globes is round and therefore, despite only having a certain amount of surface
        area, one will never reach an edge/end as one would eventually reach the same location;
        demonstrated by the websites choice to loop the artwork. </h6>
      <h6>Referring back to Benjamin’s article, the social importance of a duplicated artwork is far
        more effective. This is arguably because far more individuals have access to the artwork.
        Despite his views that replications somewhat devalue the artworks exclusiveness/originality,
        it has been revolutionary in its influence as of the late 20th Century Movements and opens
        the artistic world into a new era of artistic expression (Benjamin in David Carrier 2020).
        Hamilton’s web art is a unique and valuable despite this. This is done through the use of
        copied images, accessible to anyone whereby various individuals can use the images at their
        disposal. Hamilton has found new and innovative ways in creating a unique sense of artistic
        expression and overall a unique artwork despite having used materials that everyone has
        seen before.</h6>
      <h6>Net art is effectively a combination of conventional digital design and collaborative user
        experience (Park 2007 pg 1). This provides artists with a unique sense of empowerment due
        to the art forms limitlessness. Park argues that in summation, Net/Web art is simply based
        around user interaction (Park 2007 pg 8). This creates an engaged and responsive user
        experience, whereby the user can actively take part in the artistic experience. In Hamilton’s
        artwork; without the user, the artwork is incomplete. It is through the users scrolling and
        exploring of the website that reveals the artwork; without the user it would simply be an
        image collage on a screen. “Art and lift the user up on majority position, and allow user to</h6>
      <h6>In conclusion, despite Hamilton being the sole creature of this digital artwork; it is through a
        unique collaborative experience between the artist and the viewer that results in a
        stimulating, modern approach to art. This results in a unique form of engagement that has
        not been experienced in more traditional forms of art whether digital or analog.</h6>
      
      <h2>References:</h2>
      <h5>                 
        <li>Benjamin, W. (1999). "The Work of Art in the Age of Mechanical Reproduction."
            Illuminations. Ed. H. Arendt. London, Pimlico. 211–235.</li>
        <li>Carrier, D. (2020). The Work of Art in the Age of the Internet. Hyperallergic [online],
            Available at: https://hyperallergic.com/563938/the-work-of-art-in-the-age-of-the-internet/
            (Accessed: 13/03/2022).</li>
        <li>Hamilton, J. (2015) Indirect Flights. Available at: http://indirect.flights/. (Accessed:
            13/03/2022).</li>
        <li>Park, J,Y. (2007). Design principles for interactive user experience through net art. 7(3), pp.
            1-10.</li></h5></p>,
      
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1493100935637-0308094a5bef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80',
      title: 'Core Principles of Design & Aesthetics in the Web',
      description: <p>
        <h6>This blogpost will be looking at the core principles of design and aesthetic in terms of the web and the way an artist chooses to introduce these components. It will also be exploring why and how these components determine the overall sensation experienced by its viewers. It is through the works by Lisbeth Thorlacius, Nielson and Yong Park that we will explore these elements and ultimately how the success of a website relies on a websites design and aesthetic elements.</h6>
        <h6>There is a large difference between Web Design and Web Aesthetics. Web Aesthetic refers to the visual elements of a website or other forms of digital representation. This often includes the way in which a designer implements layout components such as menus, images, fonts etc. “The only thing we cannot avoid is that there is always visual communication on a website, whether the use of visual effects is deliberate or not.” (Thorlacius, 2007) Although one cannot avoid the use of visual elements, we have control as to how we choose to use and introduce these elements.</h6>
        <h6>Alternatively, Web Design holds a greater focus on user experience properties. This determines how user friendly the website is; ultimately this is the communication between the viewer and the website/app itself (Jakob Nielsen 2012). As explained by Ji Yong Park, Net art allows developers to “bridge the gap between traditional graphic design and interactive user experience in that it has empowered the users to be an interactive artist” (2007 pg1). This suggests that without a spectator there is no art.</h6>
        <h6>One can argue that these two components are equally the most important when designing a website and web art; essentially this determines whether or not the viewers engage with the work as intended (Thorlacius, 2007).</h6>
        <h6>According to Yong Park, Net Art is typically a creation that uses easily accessible materials to others online (2007 pg3), making it somewhat difficult to create a truly ‘unique’ work. It is the artist’s job to use these materials and implement them in new, innovative ways that introduce viewers to something interesting and original despite the use of ‘borrowed’ materials. It is the hidden elements of the website that places everything together and creates the end result that is displayed to  the viewer; this being the code. Without the code, the artwork would not be displayed as this determines how the site is run, how the elements are displayed and how the functionality is implemented, “invisible and hidden elements behind the screen can be considered as important as a visual outcome in art.” (Heemskerk & Paesmans in Yong Park 2007 pg3).</h6>
        <h6>In conclusion, the successfulness of web art is determined by the overall interactivity between the viewer and the website, as without a viewer, web art cannot be considered art. Therefore Web Aesthetics and Web Design hold great importance in creating a unique experience for the viewer. Together they create and determine a viewer’s engagement and its success for its respective target audience.</h6>
        <h2>References:</h2>
        <h5>            <li>Nielsen, J. 2012. Usability 101: Introduction to Usability. Nielsen Norman Group. Available At: https://www.nngroup.com/articles/usability-101-introduction-to-usability/</li>
            <li>Park, J,Y. (2007). Design principles for interactive user experience through net art. 7(3), pp.1-10.</li>
            <li>Thorlacius, L. 2007. The Role of Aesthetics in Web Design. Nord. Rev. 28, 63–76. https://doi.org/10.1515/nor-2017-0201</li></h5>
      </p>,

    },
    {
        imageSrc:
          'https://images.unsplash.com/photo-1644837695722-9ac02a09b3d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        title: 'Internet, Society & Design Justice',
        description: <p>
            <h6>This weeks’ blogpost will be elaborating on the core issues around the Internet, Society and Design Justice for the web.</h6>
            <h6>According to Constanza-Chock (2020, pg23): as designers, we have an moral responsibility in creating an all-inclusive design/digital community, specifically by targeting historically marginalized groups with their involvement in the community. Constanza-Chock also looks at and elaborates on ‘Design Justice’; this being the dismantling of organized inequality whether by race, gender or sexual association.</h6>
            <h6>Not only is this important for creating an ethical and cohesive community, but being an artistic field, it is important to have a wide spread of creative expression and expanding on the limitations of one community. The integration of various individuals allows for new and intuitive expressions that expand the digital world of art through “diasporic design traditions, knowledge, and practices” (Constanca-Chock 2022, pg18).</h6>
            <h6>Nanjira Sambuli strives for equality in the digital age; her aims are to shorten the inequality gap in the digital world. This can include things as simple as facial recognition technology. Such technology is equipped ideally for the Caucasian male whereby it is not as responsive to women and even less so with other races. Equally cell phone designs are constructed around the size of an average males’ hand. These are of the smaller issues around inequality in the digital world as opposed to a pay gap and overall lack of representation.</h6>
            <h6>Nanjira states that only half of the world has access to the internet (2019) with less focus on access to these individuals. Most affected populations and communities include the poorer populations and women depending on cultural standards and expectations.</h6>
            <h6>Arguably, accessibility to the digital world is incredibly important. It allows people to connect and progress with the rest of the world without being left behind. Society is entering a large digital era whereby dependability is starting to largely rely on the digital world; without cohesive connectivity and basic technological understandings, there is the expansion of an economical gap.</h6>
            <h6>Not only is work starting to largely depend on digital capabilities, the spreading of news and vital information is instantaneous.</h6>
            <h6>Nanjira believes that it is therefore our societal duty to provide and work towards expanding on technological access to all communities. An example of such a framework would include the design justice network and their strife for sharing resources and by dismantling a suppressive system. This includes the involvement of various community based design and the active involvement and participation of various groups.</h6>
            <h2>References:</h2>
            <h5>            <li>Barnett, V & Simone, T. (2021) Design Justice Network: About Us. Available at: https://designjustice.org/about-us (Links to an external site.) (Accessed: 18/03/2022)</li>
            <li>Costanza-Chock, S. (2020) Design Justice: Community-Led Practices to Build the Worlds We Need. Cambridge, MA, USA: MIT Press (Information Policy)</li>
            <li>Magnoni, S & Sambuli, N. (2019) What is digital equality? An interview with Nanjira Sambuli. Available at: https://www.weforum.org/agenda/2019/04/digital-equality-interview-nanjira-sambuli/ (Links to an external site.) (Accessed: 18/03/2022)</li></h5>
        </p>,
  
      },
  ]

  return (
    <div className='contentone'>
      <div className='controls'>
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      </div>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {blogimage.map((card, index) => (
          <div key={index} className='card'>
            <img src={card.imageSrc} alt={card.title} className='card-image' />
            <div className='text-info'>
              <div className='card-header'>
                <h2>{card.title}</h2>
              </div>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>

      <div className="blog">

      <div className="blogTop" style={{backgroundImage: `url(${BlogImage})` }}>
              <h1>EXAM REFLECTIONS</h1>
        </div>
        <div className='body2'> 
        <div className='content2'> 
            <h2>Internet Artwork Rationale & Critical Reflection</h2>
            <p>My internet artwork is a representation of how ironic the concept of technological ‘connectivity’ really is. Despite the fact that we literally have the world at our fingertips and we have numerous connections to friends/family and strangers virtually, we are losing the social abilities to connect on a real, non-virtual level.  
            </p>
            <p>
            Everyone has their very own internet persona, however reality often varies drastically. Similarly to how substances are used recreationally to ease communication (often in cases of anxiety and difficulty socializing), the internet is used in a similar way. It is used as a clutch whereby people can be who they want to be, whether it is more confident, more vulnerable etc. This is not to say that the internet is a bad thing, but it is a clutch that many people depend on more than the world outside of their cell phones and social media. The influence of the internet creates the idea that we need to look and be a certain way in order to be content and happy despite the fact that many of these influences/influencers to not live the glamorous lives that they portray. 
            </p>
            <p>
            My artwork does permeate the entire site; specifically in the sense that on a PC, my site appears well constructed and sleek; however should you try use it via mobile, there are certain instances whereby the text does not adapt and translate well. My artwork also permeates the site in the sense that it is a gallery and store for digital prints, a medium no longer connected to the traditional means of physically holding and seeing a painting, the artwork in some senses is not considered unique as there can be numerous copies made over and over again, similarly to how individuals create masks and personas off of their favourite influencers; attempting to be copies of their favourite influencers. 
            </p>
            <p>
            My website was inspired by Walter Benjamin’s “The Work of Art in the Age of Mechanical Reproduction” (1936). He creates an artwork by layering various digital images that create a 3D effect in the way that each image moves at a different speed. His artwork also reflects on how nothing is truly original on the internet as once it is on their, many other people have access to the same materials and images. I have used his inspiration of layering and creating a whole artwork through the use of layers of various images. 
            </p>
            <p>
            My artwork is a reflection of how ‘disconnected’ from reality we are in the digital age despite having access to everyone and everything. 
            </p>
            <p>
            This is expressed with how the text ‘DISCONNECTED’ is sometimes broken up with either missing vowels or consonants. As one scrolls, different versions of the word is displayed to digitally represent this conundrum that we face in the digital world. Occasionally one can see the word ‘CONNECTED’ amongst the broken up words. This could be interpreted as the loading of the internet and its unreliability, especially in South Africa whereby access is not always so easy with our consistent load shedding. It can also be interpreted as how rare it is to create a truly real and meaningful connection with somebody over the internet.
            </p>
            <p><h5>
            <li>Benjamin, W. (1999). "The Work of Art in the Age of Mechanical Reproduction."
            Illuminations. Ed. H. Arendt. London, Pimlico. 211–235.</li></h5>
            </p>
        </div>  
        </div>
      
      <div className='body2'> 
        <div className='content2'> 
            <h2>Design Reflection</h2>
            <p>Throughout the entire process of creating the website, I have chosen to stick to a very simple and effective aesthetic. 
            </p>
            <p>
            I have chosen to use black and white overall aside from the header in order to make the website feel less ‘clinical’ and cold. As reflected on before, it is important for my website to have a simple and clean aesthetic as it may display more vibrant artworks in the future (as they are updated monthly) and therefore should not clash with the website. The purpose of the website is to showcase art and this cannot be done effectively if the website becomes too vibrant and starts re-focusing the viewers’ attention. 
            </p>
            <p>
            My websites design started off very simple and I have gradually implemented elements that feel more modern and stimulating, such as through the implementation of react-slick. This has been used where the reader can select different blogs displayed on screen without having to leave the screen whilst not overwhelming the viewer. If I had not implemented this blog ‘slider’, I would have been forced to either display every blogpost on one page or create hyperlinks to various other pages with every new blogpost. This becomes tedious and can be either overwhelming, time consuming or unappealing to the viewer. Therefore the implementation of react-slick only strengthened the ‘sleekness’ of my website. 
            </p>
            <p>
            The trickiest element is implementing exactly what you visualize and sometimes it may take hours of css in order to create exactly what you had hoped for. Personally I had to simplify my wireframes in order to compensate for the time I had to spend on the website as well as for my capabilities at this point in time. I was not able to achieve exactly what I had hoped, however I feel confident with the end result. The only area that I am not fully content with is the cross-platform implementations but I am confident that with time and dedication I will eventually understand it with ease. 
            </p>
        </div>  
        </div>

      <div className='body2'> 
        <div className='content2'> 
            <h2>Technical Reflection</h2>
            <p>Out of all criteria that I need to meet for my website, the technical has proven most tricky. Overall I am impressed with my implementation of code and its legibility to other coders; however I struggle with implementing code that is appropriate for various platforms and screen sizes. I have managed to appropriately implement coding that allows in cross platform interactivity with a few shortcomings such as with my incorporation of ‘react-slick’. This is displayed on the blog page whereby viewers can press the arrow in order to display the next blog; however this does not translate well when used on a cell phone etc. 
            </p>
            <p>I have made appropriate use of semantics and have created various folders in order to make it easy to navigate through my code; this includes asset folders, component folders, style folders and more. The use of helpers prevents a messy navigation through the written code and makes it easier to navigate through. 
            </p>
            <p>I have made use of various languages such as css and JavaScript that has enabled me to create this website. There are circumstances whereby one can implement the styling directly onto the JavaScript page but this soon becomes messy and does not allow as much freedom for creating a polished result which is why I have chosen to write the code separately. 
            </p>
            <p>Overall, my technical implementations are good but could definitely use a bit more polishing such as on the blog page. In this instance I could have called the written text from another JavaScript file as opposed to coding it all within one page, making it harder to navigate through. A good implementation of this could be the gallery page, whereby the prices, titles and images are called from a separate JavaScript file in the ‘helpers’ folder. 
            </p>
        </div>  
        </div>
        </div>

          <div className="blogTop" style={{backgroundImage: `url(${BlogImageTwo})` }}>
              <h1>MARKED REFLECTIONS</h1>
        </div>
      
      <div className='body2'> 
        <div className='content2'> 
            <h2>Reflection 1</h2>
            <p>
            This quarter I have engaged in various theoretical frameworks including Internet Art and its history. This involves the understandings of Social and Design Justice in this respective field as well as an overall understanding as to what makes web and net art successful. 
            </p>
            <p>
            I feel that I have engaged appropriately with the topic in a way that prepares me for entering our field in an open state of mind and a new approach to future projects. I now have a new understanding of the digital community and the tremendous lengths that we still face in order to have an ideal industry in terms of multi-faceted involvement. Social factors aside, it is through their enforcement that we effectively create more meaningful and engaging art, as the involvement of new perspectives allows for innovative and interesting approaches to the digital world.
            </p>
            <p>
                I have chosen to use foundation colours such as black and white. Specifically being that this site will display works of art that rotate monthly; therefore it looks far sleeker to use monochromatic css as to not clash with any artworks.
                Using Black and White in itself often reads as professional to viewers. I have used a peach colour for the navigation bar however to introduce an element of visual stimulation that grabs the viewers attention.
                The wireframes that I have designed have not yet been implemented in full; this is due to the fact that my website is somewhat in the earlier stages of development 
                and will be gradually introduced through development. My designs are sleek, structured and simple as to not overwhelm the viewer, appear to a variety of audiences (as older audiences may become confused with a more
                creative layout) and to maintain the idea that this is a professional environment much like a gallery, where the gallery is simple but the work speaks for itself.
            </p>
        </div>  
        </div>

      <div className='body2'> 
        <div className='content2'> 
            <h2>Reflection 2</h2>
            <p>I have been successful in my attempts of creating my internet artwork 
                whereby I use layered images in order to express how disconnected we 
                are from reality. I have used a relatively fast parallax that causes 
                the words to scroll in and out of the blacked out boxes. I have chosen 
                such a high speed as this not only demonstrates the instantaneous and 
                speedy digital age, but also makes it harder to read the text unless 
                one slows down when scrolling. This alone demonstrates how we need to 
                slow down in order to truly connect with one another, without the 
                convenience of the internet. Some of the text overlaps, some of the 
                text is fragmented and some of the text does not fit comfortably into 
                the black boxes to make the words legible. 
            </p>
            <p>
            On top of the moving artwork I have included a heading that reads “Feeling 
            a Little Disconnected”. This heading is repeated three times however each 
            repeat demonstrates a fragment of what it was before. The second heading is 
            shown without the inclusion of vowels and the third one whereby both the 
            vowels and every word other that “D-SC-NN-CT-D”. This is the word ‘disconnected’ 
            without any vowels. I have chosen to strategically fragment this heading in 
            such a way as one is still capable of reading and interpreting a sentence 
            with our brain automatically filling in the blanks. Again demonstrated how we 
            become more disconnected with the progression of the digital age.
            </p>
            <p>
            In terms of my website, I feel that I have successfully demonstrated 
            professionalism with the use of black and white and a restrain from excessive 
            colour. My website is easy to navigate despite my viewers age and the intent 
            of my website is to sell and promote someone else’s work (art), not my own. 
            This is why the website is not the main focus. My job is to effectively display
             someone else’s work to the public without pulling focus from it. Should I 
             choose to demonstrate bright and vibrant artworks, the website is simple 
             enough as to not overwhelm the viewer; however I may choose to then change 
             the colour of the footer, should it not fit with the artists appeal. In 
             this case I may opt for having a black and white website entirely but because 
             I have chosen a relatively neutral header I feel that this can easily be 
             avoided. I have chosen to have a coloured heading rather than a black one as 
             I felt it would grab the viewer’s attention more and strain the eyes less. 
             This is particularly helpful for older viewers as it makes the navigation bar 
             clearer to differentiate.
            </p>
        </div>  
        </div>
        </div>
        

  )
}