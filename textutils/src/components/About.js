import React from 'react';
export default function About(props) {
  return (
    <>
      
      <div className="accordion my-5" id="accordionExample" >
      <h1  className="history" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>HISTORY OF ENGLISH</h1>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className={"accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} >
              Old English (450-1100 AD)
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} >
              The invading Germanic tribes spoke similar languages, which in Britain developed into what we now call Old English. Old English did not sound or look like English today. Native English speakers now would have great difficulty understanding Old English. Nevertheless, about half of the most commonly used words in Modern English have Old English roots. The words be, strong and water, for example, derive from Old English. Old English was spoken until around 1100.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}  >
              Middle English (1100-1500)
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}   >
              In 1066 William the Conqueror, the Duke of Normandy (part of modern France), invaded and conquered England. The new conquerors (called the Normans) brought with them a kind of French, which became the language of the Royal Court, and the ruling and business classes. For a period there was a kind of linguistic class division, where the lower classes spoke English and the upper classes spoke French. In the 14th century English became dominant in Britain again, but with many French words added. This language is called Middle English. It was the language of the great poet Chaucer (c1340-1400), but it would still be difficult for native English speakers to understand today.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}  >
              Early Modern English (1500-1800)
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}  >
              Towards the end of Middle English, a sudden and distinct change in pronunciation (the Great Vowel Shift) started, with vowels being pronounced shorter and shorter. From the 16th century the British had contact with many peoples from around the world.

              This, and the Renaissance of Classical learning, meant that many new words and phrases entered the language. The invention of printing also meant that there was now a common language in print. Books became cheaper and more people learned to read. Printing also brought standardization to English. Spelling and grammar became fixed, and the dialect of London, where most publishing houses were, became the standard. In 1604 the first English dictionary was published.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
