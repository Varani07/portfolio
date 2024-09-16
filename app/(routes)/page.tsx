import LevelProgress from "@/components/level-progress";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="my-16 px-4 sm:px-8 mx-auto max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-4">
      <section className="space-y-4 col-span-1">
        <div className="text-2xl font-ttsupermolot-bold">
          Olá, meu nome é
        </div>
        <div className="text-5xl font-bold">
          Matheus Cirne Varani
        </div>
        <div className="text-2xl font-ttsupermolot-normal">
          Sou Assistente de TI na RandonCorp
        </div>
      </section>
      <section className="flex col-span-1">
        <Image src={'/eu-portfoil.jpeg'} height={100} width={400} alt="Imagem de Matheus Varani" className="max-w-full h-auto" />
      </section>
      <section className="pr-0 md:pr-10 space-y-4 col-span-1 ">
        <h1 className="text-2xl font-ttsupermolot-bold">
          Sobre mim
        </h1>
        <p className="text-md leading-tight">
          Meu contato com ferramentas para o desenvolvimento aconteceram por incentivo de meus parentes, não imaginava que iria sentir tamanho interesse e quando me dei conta, já tinha feito da tecnologia meu objetivo. <br/><br/>Atuando como Assistente em TI na RandonCorp no momento, pretendo me desenvolver ao máximo para ter segurança total em minhas habilidades e cada vez mais desenvolver e pensar de forma inovadora.
        </p>
      </section>
      <section className="space-y-4 col-span-1 ">
        <h1 className="text-2xl font-ttsupermolot-bold">
          Habilidades
        </h1>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <LevelProgress label={"Python"} level={4} />
          </li>
          <li>
            <LevelProgress label={"UiPath"} level={4} />
          </li>
          <li>
            <LevelProgress label={"Java"} level={3} />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default HomePage;
