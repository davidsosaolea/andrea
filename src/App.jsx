import { useState } from "react";
import JSConfetti from 'js-confetti'
function App() {


  const jsConfetti = new JSConfetti()
  const [randomValor, setRandomValor] = useState({})

  const [imagenCargada, setImagenCargada] = useState(false);
  const [agrandar, setAgrandar] = useState(45)


  const [valueSi, setValueSi] = useState(false)

  let random = [{
    id: 1,
    description: "Di si por favor",
    img: "https://i.gifer.com/F5eI.gif"
  },
  {
    id: 1,
    description: "Piénsalo de nuevo.",
    img: "https://www.gifcen.com/wp-content/uploads/2024/01/pokemon-gif-9.gif"
  }
    ,
  {
    id: 2,
    description: "Vamos, atrévete a decir que sí.",
    img: "https://i.pinimg.com/originals/7d/8e/ce/7d8ece07bdf7e7aeba520ee0a5adcaa8.gif"
  },
  {
    id: 3,
    description: "No tengas miedo, será genial.",
    img: "https://media.tenor.com/rzopOMim9YEAAAAM/charmander-pokemon.gif"
  },
  {
    id: 4,
    description: "Confía en mí, será divertido.",
    img: "https://media.tenor.com/Bn88VELdNI8AAAAi/peach-goma.gif"
  },
  {
    id: 5,
    description: "No tengas dudas, te hará sonreír.",
    img: "https://i.pinimg.com/originals/c6/b3/0d/c6b30d1a2dc178aeb92de63295d4ae64.gif"
  },
  {
    id: 6,
    description: "Te prometo que será inolvidable.",
    img: "https://media.tenor.com/N2oqtqaB_G0AAAAi/peach-goma.gif"
  },
  {
    id: 7,
    description: "No dejes que el miedo te detenga.",
    img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif"
  },
  {
    id: 8,
    description: "Confía en el destino, nos está dando una señal.",
    img: "https://media.tenor.com/cbEccaK9QxMAAAAi/peach-goma.gif"
  },
  {
    id: 9,
    description: "Confía en mí.",
    img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif"
  },
  {
    id: 10,
    description: "No te arrepentirás.",
    img: "https://media.tenor.com/I7KdFaMzUq4AAAAi/peach-goma.gif"
  }]

  const randomResponse = () => {
    let index = Math.floor(Math.random() * 11);
    console.log(random[index])
    if (agrandar <= 500) {
      setAgrandar(agrandar + 10)
    }
    setRandomValor(random[index]);
  }


  const handleImageLoad = () => {
    setImagenCargada(true);
  }


  return (
    <main id="canvas" className="fondo w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center ">
      {
        !valueSi ? (
          <div className="p-5">
            <h1 className="text-green-500 font-bold text-5xl text-center">Andrea amor de mi vida <br /> ¿Quieres ser mi San Valentín? </h1>

            <img src={Object.keys(randomValor).length === 0 ?
              "https://media.tenor.com/d532ir4rUe0AAAAj/charmander.gif" : randomValor.img} alt="San Valentin" className="mx-auto" width={400} height={400} />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
              <button onClick={() => {
                setValueSi(true)

                jsConfetti.addConfetti({
                  emojis: ['😍', '🥰', '❤️', '😘'],
                  emojiSize: 70,
                  confettiNumber: 80,
                })

              }} className={`bg-green-500 text-white font-bold p-2 rounded-md text-xl h-${agrandar}`} style={{ height: agrandar }}>
                Si
              </button>
              <button
                className="bg-red-500 text-white font-bold p-2 rounded-md text-xl"
                onClick={randomResponse}
                disabled={imagenCargada} // Deshabilita el botón si la imagen no se ha cargado
              >
                {Object.keys(randomValor).length === 0 ? "No" : randomValor.description}
                <span hidden>{document.title = Object.keys(randomValor).length === 0 ? "¿Quieres ser mi San Valentin?" : randomValor.description}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col space-y-10">
            <h1 className="text-4xl text-white font-bold">Estaba seguro de que dirías que sí ❤️!</h1>
            <img src="https://media.tenor.com/9adRcJv4JE4AAAAj/pikachu.gif" alt="" className="mx-auto" />
            <span hidden>{document.title = 'Sabia que dirias que si ❤️!'}</span>
          </div>
        )
      }
    </main>
  )
}

export default App
